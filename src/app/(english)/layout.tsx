import { SiteLayout } from "@/components/SiteLayout";

export { metadata } from "@/components/SiteLayout";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
