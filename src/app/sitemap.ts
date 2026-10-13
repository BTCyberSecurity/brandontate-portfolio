import type { MetadataRoute } from "next";
import { pagePaths, siteUrl } from "@/lib/metadata";
import { locales, localizedPath } from "@/lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.flatMap(path => locales.map(locale => ({
    url: new URL(localizedPath(locale, path), siteUrl).href,
    alternates: { languages: Object.fromEntries(locales.map(language => [language, new URL(localizedPath(language, path), siteUrl).href])) },
  })));
}
