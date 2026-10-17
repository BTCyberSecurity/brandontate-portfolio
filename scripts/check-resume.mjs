import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
const password = randomBytes(32).toString('hex');
assert(!existsSync('public/resume.pdf'));
const trace = JSON.parse(readFileSync('.next/server/app/api/resume/route.js.nft.json'));
assert(trace.files.some(p => p.replaceAll('\\', '/').endsWith('/private/resume.pdf')), 'PDF included in server bundle');
async function check(secret, port) {
 const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(port)], { env: { ...process.env, RESUME_ACCESS_PASSWORD: secret }, stdio: 'ignore', windowsHide: true });
 const base = 'http://localhost:' + port;
 try {
  let ready = false;
  for(let i=0;i<60;i++) { try { if((await fetch(base + '/resume')).ok) { ready=true; break; } } catch {} await new Promise(r=>setTimeout(r,500)); }
  assert(ready, 'Server starts');
  const post = (body, extra = {}) => fetch(base + '/api/resume', { method: 'POST', headers: { 'content-type': 'application/json', ...extra }, body });
  if (!secret) { assert.equal((await post(JSON.stringify({password}))).status,503); return; }
  for (const p of ['/resume.pdf', '/private/resume.pdf']) assert.equal((await fetch(base+p)).status,404, p);
  assert.equal((await fetch(base+'/api/resume')).status,405);
  assert.equal((await post(JSON.stringify({password:'wrong'}))).status,401);
  assert.equal((await post('{}')).status,400);
  assert.equal((await post('broken')).status,400);
  assert.equal((await post('x'.repeat(3000))).status,413);
  assert.equal((await post(JSON.stringify({password}), {'sec-fetch-site':'cross-site'})).status,403);
  const result = await post(JSON.stringify({password}));
  assert.equal(result.status,200); assert.match(result.headers.get('cache-control'), /no-store/);
  assert.match(result.headers.get('content-disposition'),/attachment/);
  assert.deepEqual(Buffer.from(await result.arrayBuffer()), readFileSync('private/resume.pdf'));
  for(const locale of ['en','es','ja','ru','zh','hi']) {
   const result=await fetch(base+(locale==='en'?'':'/'+locale)+'/resume'); const html=await result.text();
   assert.equal(result.status,200); assert.match(html,/noindex/); assert.match(html,/type="password"/); assert(!html.includes(password));
  }
  if (process.env.PUPPETEER_MODULE && process.env.CHROME_PATH) {
  const puppeteer = createRequire(import.meta.url)(process.env.PUPPETEER_MODULE);
  const browser=await puppeteer.launch({executablePath:process.env.CHROME_PATH,headless:true});
  try {
   const page=await browser.newPage();
   for(const width of [390,1920]) {
    await page.setViewport({width,height:1080});
    for(const locale of ['en','es','ja','ru','zh','hi']) {
     await page.goto(base+(locale==='en'?'':'/'+locale)+'/resume');
     assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'No overflow');
    }
   }
   await page.goto(base+'/resume'); await page.type('#resume-password','wrong'); await page.click('form button');
   await page.waitForFunction(()=>document.querySelector('[role="status"]').textContent.includes('not accepted'));
   if (process.env.RESUME_SCREENSHOT) await page.screenshot({path:process.env.RESUME_SCREENSHOT});
  } finally { await browser.close(); }
  }
  const chunks=readFileSync('.next/server/app/resume.html','utf8'); assert(!chunks.includes(password));
 } finally { server.kill(); }
}
await check(password, 3023); await check('',3024);
console.log('PASS: six access pages; correct/incorrect/missing passwords; malformed and oversized requests; cross-site rejection; protected PDF paths; exact download bytes; no-cache headers; server bundle; missing configuration fails closed.');
