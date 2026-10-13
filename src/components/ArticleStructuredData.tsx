import { languageTags, localizedPath, type Locale } from "@/lib/locales";
import { siteUrl } from "@/lib/metadata";
import { translate } from "@/lib/translate";

export default function ArticleStructuredData({ path, title, description, locale = "en" }: { path: string; title: string; description: string; locale?: Locale }) {
  const url = new URL(localizedPath(locale, path), siteUrl).href;
  const data = {
    "@context": "https://schema.org", "@type": "Article",
    headline: translate(locale, title), description: translate(locale, description),
    inLanguage: languageTags[locale], url, mainEntityOfPage: url,
    author: { "@type": "Person", name: "Brandon Tate", url: siteUrl },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
