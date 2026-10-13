import type { MetadataRoute } from "next";
import { pagePaths, siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.map(path => ({ url: new URL(path, siteUrl).href }));
}
