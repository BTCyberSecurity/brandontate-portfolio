import type { Metadata } from "next";
import { locales, localizedPath, isTranslatedLocale } from "./locales";

export const siteUrl = "https://www.brandontate.info";
export const pagePaths = ["/", "/about", "/security", "/projects", "/experience", "/writing", "/certifications", "/contact", "/projects/identity-zero-trust", "/projects/private-ai-infrastructure", "/projects/infrastructure-systems", "/projects/sentinelforge"];

export function pageMetadata(path: string, details: { title: string; description: string } | string, description?: string): Metadata {
  const content = typeof details === "string" ? { title: details, description: description ?? "" } : details;
  const segment = path.split("/")[1];
  const locale = isTranslatedLocale(segment) ? segment : "en";
  const originalPath = locale === "en" ? path : path.slice(locale.length + 1) || "/";
  const languages = Object.fromEntries(locales.map(language => [language, localizedPath(language, originalPath)]));
  const ogLocales = { en: "en_US", es: "es_ES", ja: "ja_JP", ru: "ru_RU" };
  return {
    metadataBase: new URL(siteUrl),
    ...content,
    alternates: { canonical: path, languages: { ...languages, "x-default": originalPath } },
    openGraph: { ...content, locale: ogLocales[locale], alternateLocale: locales.filter(language => language !== locale).map(language => ogLocales[language]), type: "website", siteName: "Brandon Tate", url: new URL(path, siteUrl).href, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Brandon Tate" }] },
    twitter: { ...content, card: "summary_large_image", images: ["/opengraph-image"] },
  };
}
