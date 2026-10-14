import { notFound } from "next/navigation";
import NetworkSegmentation, { metadata as networkMetadata } from "@/app/(english)/projects/network-segmentation/page";
import AIBuild, { metadata as aiBuildMetadata } from "@/app/(english)/writing/building-private-ai/page";
import MFAArticle, { metadata as mfaMetadata } from "@/app/(english)/writing/mfa-fatigue/page";
import SegmentationArticle, { metadata as segmentationMetadata } from "@/app/(english)/writing/segmented-home-lab/page";
import Home, { metadata as homeMetadata } from "@/app/(english)/page";
import About, { metadata as aboutMetadata } from "@/app/(english)/about/page";
import Security, { metadata as securityMetadata } from "@/app/(english)/security/page";
import Projects, { metadata as projectsMetadata } from "@/app/(english)/projects/page";
import Experience, { metadata as experienceMetadata } from "@/app/(english)/experience/page";
import Writing, { metadata as writingMetadata } from "@/app/(english)/writing/page";
import Certifications, { metadata as certificationsMetadata } from "@/app/(english)/certifications/page";
import Contact, { metadata as contactMetadata } from "@/app/(english)/contact/page";
import Identity, { metadata as identityMetadata } from "@/app/(english)/projects/identity-zero-trust/page";
import PrivateAI, { metadata as aiMetadata } from "@/app/(english)/projects/private-ai-infrastructure/page";
import Infrastructure, { metadata as infrastructureMetadata } from "@/app/(english)/projects/infrastructure-systems/page";
import SentinelForge, { metadata as sentinelMetadata } from "@/app/(english)/projects/sentinelforge/page";
import { isTranslatedLocale, localizedPath, translatedLocales } from "@/lib/locales";
import { localizePage } from "@/lib/localize-page";
import { translate } from "@/lib/translate";
import { pageMetadata, pagePaths } from "@/lib/metadata";

const pages = {
  "/projects/network-segmentation": [NetworkSegmentation, networkMetadata],
  "/writing/building-private-ai": [AIBuild, aiBuildMetadata], "/writing/mfa-fatigue": [MFAArticle, mfaMetadata], "/writing/segmented-home-lab": [SegmentationArticle, segmentationMetadata],
  "/": [Home, homeMetadata], "/about": [About, aboutMetadata], "/security": [Security, securityMetadata],
  "/projects": [Projects, projectsMetadata], "/experience": [Experience, experienceMetadata], "/writing": [Writing, writingMetadata],
  "/certifications": [Certifications, certificationsMetadata], "/contact": [Contact, contactMetadata],
  "/projects/identity-zero-trust": [Identity, identityMetadata], "/projects/private-ai-infrastructure": [PrivateAI, aiMetadata],
  "/projects/infrastructure-systems": [Infrastructure, infrastructureMetadata], "/projects/sentinelforge": [SentinelForge, sentinelMetadata],
} as const;
type PageParams = { locale: string; slug?: string[] };
function resolve(params: PageParams) {
  const path = `/${params.slug?.join("/") ?? ""}`;
  if (!isTranslatedLocale(params.locale) || !(path in pages)) notFound();
  return { locale: params.locale, path, page: pages[path as keyof typeof pages] };
}
// Unknown paths render the localized 404; known pages remain prerendered.
export const dynamicParams = true;
export function generateStaticParams() {
  return translatedLocales.flatMap(locale => pagePaths.map(path => ({ locale, slug: path === "/" ? [] : path.slice(1).split("/") })));
}
export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { locale, path, page } = resolve(await params);
  return pageMetadata(localizedPath(locale, path), { title: translate(locale, String(page[1].title)), description: translate(locale, page[1].description ?? "") });
}
export default async function LocalizedPage({ params }: { params: Promise<PageParams> }) {
  const { locale, page } = resolve(await params);
  return localizePage(page[0](), locale);
}
