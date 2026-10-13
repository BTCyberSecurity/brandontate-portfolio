import "server-only";
import es from "@/i18n/es.json";
import ja from "@/i18n/ja.json";
import ru from "@/i18n/ru.json";
import zh from "@/i18n/zh.json";
import hi from "@/i18n/hi.json";
import { additionalReviewedCopy, reviewedCopy } from "@/i18n/reviewed";
import type { Locale } from "./locales";

const dictionaries: Record<Exclude<Locale, "en">, Record<string, string>> = { es, ja, ru, zh, hi };
export function translate(locale: Locale, text: string): string {
  if (locale === "en") return text;
  const normalized = text.replace(/\s+/g, " ").trim();
  const result = additionalReviewedCopy[normalized]?.[locale] ?? reviewedCopy[normalized]?.[locale] ?? dictionaries[locale][normalized];
  if (!result) return text;
  return `${text.match(/^\s*/)?.[0] ?? ""}${result}${text.match(/\s*$/)?.[0] ?? ""}`;
}
