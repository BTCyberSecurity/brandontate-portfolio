import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

// Read the same locale registry as the application without requiring Node's TS loader.
const registry = ts.createSourceFile('locales.ts', fs.readFileSync('src/lib/locales.ts', 'utf8'), ts.ScriptTarget.Latest, true);
let locales, languageTags;
function readRegistry(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(registry) === 'locales') locales = node.initializer.expression.elements.map(item => item.text);
  if (ts.isVariableDeclaration(node) && node.name.getText(registry) === 'languageTags') languageTags = Object.fromEntries(node.initializer.properties.map(item => [item.name.getText(registry), item.initializer.text]));
  ts.forEachChild(node, readRegistry);
}
readRegistry(registry);
assert(locales?.length && languageTags, 'Locale registry');
const source = JSON.parse(fs.readFileSync('src/i18n/source.json', 'utf8'));
const reviewed = {};
const editorial = ts.createSourceFile('reviewed.ts', fs.readFileSync('src/i18n/reviewed.ts', 'utf8'), ts.ScriptTarget.Latest, true);
function visit(node) {
  if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.name) && ts.isObjectLiteralExpression(node.initializer)) {
    reviewed[node.name.text] = { ...reviewed[node.name.text], ...Object.fromEntries(node.initializer.properties.map(property => [property.name.getText(editorial), property.initializer.text])) };
  }
  ts.forEachChild(node, visit);
}
visit(editorial);
const currentCopy = new Set(source);
const filesIn = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? filesIn(`${directory}/${entry.name}`) : [`${directory}/${entry.name}`]);
const copyFiles = [...filesIn('src/app/(english)').filter(file => file.endsWith('page.tsx') || file.endsWith('not-found.tsx')), ...filesIn('src/components').filter(file => file.endsWith('.tsx') && !/Header|SiteLayout|RecoveryTerminal/.test(file)), ...filesIn('src/data').filter(file => file.endsWith('.ts'))];
for (const file of copyFiles) {
  const tree = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const add = text => {
    text = text.replace(/\s+/g,' ').trim().replaceAll('&apos;', "'").replaceAll('&quot;', '"').replaceAll('&amp;', '&');
    if (/[A-Za-z]{2}/.test(text) && !text.startsWith('/') && !text.startsWith('#')) currentCopy.add(text);
  };
  const collect = node => {
    if (ts.isJsxText(node)) add(node.getText(tree));
    if (ts.isStringLiteral(node)) {
      const parent = node.parent;
      if (ts.isArrayLiteralExpression(parent) || (ts.isJsxExpression(parent) && ts.isJsxElement(parent.parent)) || (ts.isCallExpression(parent) && parent.expression.getText(tree) === 'pageMetadata') || (ts.isJsxAttribute(parent) && ['aria-label','alt','title'].includes(parent.name.getText(tree))) || (ts.isPropertyAssignment(parent) && ['title','text','description','evidence','shortTitle','category','meta','name','detail','phase','focus','label','status','value','summary','caption','next','intro','kind','takeaway'].includes(parent.name.getText(tree)))) add(node.text);
    }
    ts.forEachChild(node, collect);
  };
  collect(tree);
}
const routes = ['/', '/about', '/about/outside-of-work', '/security', '/projects', '/experience', '/writing', '/certifications', '/contact', '/projects/identity-zero-trust', '/projects/private-ai-infrastructure', '/projects/infrastructure-systems', '/projects/sentinelforge', '/projects/network-segmentation', '/projects/household-system-health', '/writing/building-private-ai', '/writing/mfa-fatigue', '/writing/segmented-home-lab'];
const pathFor = (locale, path) => locale === 'en' ? path : `/${locale}${path === '/' ? '' : path}`;
const baseUrl = process.argv[2];
const decode = text => text.replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&apos;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
let count = 0;
for (const locale of locales) {
  const dictionary = locale === 'en' ? {} : JSON.parse(fs.readFileSync(`src/i18n/${locale}.json`, 'utf8'));
  if (locale !== 'en') for (const key of currentCopy) {
    assert((typeof dictionary[key] === 'string' && dictionary[key].trim()) || reviewed[key]?.[locale], `${locale}: missing translation for ${key}`);
  }
  if (locale !== 'en') for (const key of source) {
    assert(!dictionary[key].includes('\uFFFD'), `${locale}: broken Unicode`);
    assert(!/\n\s*\d+\s*[:：]/.test(dictionary[key]), `${locale}: unexpected translation delimiter`);
  }
  for (const route of routes) {
    const path = pathFor(locale, route);
    const html = fs.readFileSync(`.next/server/app/${path === '/' ? 'index' : path.slice(1)}.html`, 'utf8');
    if (baseUrl) {
      const response = await fetch(new URL(path, baseUrl));
      assert.equal(response.status, 200, `${path}: HTTP response`);
      assert((await response.text()).includes(`lang="${languageTags[locale]}"`), `${path}: served language`);
    }
    assert(html.includes(`lang="${languageTags[locale]}"`), `${path}: document language`);
    assert(html.includes(`rel="canonical" href="https://www.brandontate.info${path === '/' ? '' : path}"`), `${path}: canonical`);
    if (route === '/about/outside-of-work') assert(html.includes('content="noindex, follow"'), `${path}: placeholder noindex`);
    assert(html.includes('id="main-content"'), `${path}: skip-link target`);
    if (route.startsWith('/writing/')) {
      const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      assert(schema, `${path}: article structured data`);
      const article = JSON.parse(schema[1]);
      assert.equal(article['@type'],'Article',`${path}: schema type`);
      assert.equal(article.inLanguage,languageTags[locale],`${path}: schema language`);
      assert.equal(article.url,`https://www.brandontate.info${path}`,`${path}: schema URL`);
    }
    assert(route === '/about/outside-of-work' || !html.includes('coming soon'), `${path}: unavailable language`);
    const hrefs = [...html.matchAll(/href="([^"#]+)"/g)].map(match => decode(match[1]));
    for (const alternate of locales) {
      assert(hrefs.includes(pathFor(alternate,route)), `${path}: switch to equivalent ${alternate} page`);
      assert(html.includes(`hrefLang="${languageTags[alternate]}"`) || html.includes(`hreflang="${languageTags[alternate]}"`), `${path}: language alternate`);
    }
    if (locale !== 'en') {
      const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? '';
      const text = main.replace(/<script\b[\s\S]*?<\/script>/g,'').replace(/<style\b[\s\S]*?<\/style>/g,'');
      for (const match of text.matchAll(/>([^<>]+)</g)) {
        const original = decode(match[1]).replace(/\s+/g,' ').trim();
        const translated = reviewed[original]?.[locale] ?? dictionary[original];
        assert(!translated || translated === original, `${path}: untranslated visible text: ${original}`);
      }
      for (const href of hrefs.filter(href => href.startsWith('/') && !href.startsWith('/_next/') && !href.includes('.') && !['/opengraph-image'].includes(href))) {
        assert(href.startsWith(`/${locale}`) || locales.some(alternate=>href===pathFor(alternate,route)), `${path}: link loses locale ${href}`);
      }
    }
    count++;
  }
}
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,(routes.length - 1) * locales.length);
assert(!sitemap.includes('/about/outside-of-work'), 'Placeholder excluded from sitemap');
assert(fs.existsSync('.next/server/app/opengraph-image.body'), 'Stable social-preview route');
if (baseUrl) {
  assert.equal((await fetch(new URL('/resume.pdf',baseUrl))).status,404,'Removed résumé unavailable');
  for (const path of [...locales.filter(locale => locale !== 'en').map(locale => `/${locale}/not-a-page`), '/fr']) {
    const response = await fetch(new URL(path,baseUrl));
    assert.equal(response.status,404,`${path}: unknown route`);
  }
  for (const path of ['/opengraph-image','/icon.png','/apple-icon.png','/robots.txt','/sitemap.xml']) {
    assert.equal((await fetch(new URL(path,baseUrl))).status,200,`${path}: shared asset`);
  }
}
console.log(`PASS: ${count} page artifacts; ${locales.length - 1} × ${source.length} catalog entries; document languages, canonicals, hreflang, equivalent-page switching, translated text, locale-preserving links, and sitemap.`);
