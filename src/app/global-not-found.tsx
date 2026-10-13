import { SiteLayout, metadata as siteMetadata } from "@/components/SiteLayout";
import NotFound from "@/app/(english)/not-found";

export const metadata = {
  ...siteMetadata,
  title: "Page not found | Brandon Tate",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return <SiteLayout><NotFound /></SiteLayout>;
}
