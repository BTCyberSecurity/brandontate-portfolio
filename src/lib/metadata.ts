import type { Metadata } from "next";

export const siteUrl = "https://www.brandontate.info";
export const pagePaths = ["/", "/about", "/security", "/projects", "/experience", "/writing", "/certifications", "/contact", "/projects/identity-zero-trust", "/projects/private-ai-infrastructure", "/projects/infrastructure-systems", "/projects/sentinelforge"];

export function pageMetadata(path: string, details: { title: string; description: string } | string, description?: string): Metadata {
  const content = typeof details === "string" ? { title: details, description: description ?? "" } : details;
  return {
    ...content,
    alternates: { canonical: path },
    openGraph: { ...content, type: "website", siteName: "Brandon Tate", url: new URL(path, siteUrl).href, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Brandon Tate — IT Leadership, Infrastructure & Security" }] },
    twitter: { ...content, card: "summary_large_image", images: ["/opengraph-image"] },
  };
}
