import type { Metadata } from "next";
import { locales, languageTags, localizedPath, isTranslatedLocale } from "./locales";

export const siteUrl = "https://www.brandontate.info";
export const pagePaths = ["/", "/about", "/about/outside-of-work", "/security", "/projects", "/experience", "/writing", "/certifications", "/contact", "/projects/identity-zero-trust", "/projects/private-ai-infrastructure", "/projects/infrastructure-systems", "/projects/sentinelforge", "/projects/network-segmentation", "/projects/household-system-health", "/writing/building-private-ai", "/writing/mfa-fatigue", "/writing/segmented-home-lab"];

export function pageMetadata(path: string, details: { title: string; description: string } | string, description?: string): Metadata {
  const content = typeof details === "string" ? { title: details, description: description ?? "" } : details;
  const segment = path.split("/")[1];
  const locale = isTranslatedLocale(segment) ? segment : "en";
  const originalPath = locale === "en" ? path : path.slice(locale.length + 1) || "/";
  const languages = Object.fromEntries(locales.map(language => [languageTags[language], localizedPath(language, originalPath)]));
  const ogLocales = { en: "en_US", es: "es_ES", ja: "ja_JP", ru: "ru_RU", zh: "zh_CN", hi: "hi_IN" };
  return {
    metadataBase: new URL(siteUrl),
    ...content,
    alternates: { canonical: path, languages: { ...languages, "x-default": originalPath } },
    openGraph: { ...content, locale: ogLocales[locale], alternateLocale: locales.filter(language => language !== locale).map(language => ogLocales[language]), type: originalPath.startsWith("/writing/") ? "article" : "website", siteName: "Brandon Tate", url: new URL(path, siteUrl).href, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Brandon Tate" }] },
    twitter: { ...content, card: "summary_large_image", images: ["/opengraph-image"] },
  };
}
