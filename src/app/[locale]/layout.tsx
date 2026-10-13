import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { isTranslatedLocale } from "@/lib/locales";

export { metadata } from "@/components/SiteLayout";

export default async function LocalizedLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return <SiteLayout locale={locale}>{children}</SiteLayout>;
}
