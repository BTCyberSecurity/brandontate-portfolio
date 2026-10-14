import Link from "next/link";
import { localizedPath, navigationCopy, type Locale } from "@/lib/locales";
export default function Footer({ locale = "en" }: { locale?: Locale }) {
 const copy = navigationCopy[locale];
 return <footer className="border-t border-white/20 bg-[#0F3046] px-6 py-10 text-white/80">
  <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row">
   <p className="font-bold">© {new Date().getFullYear()} Brandon Tate</p>
   <nav className="flex flex-wrap gap-x-6 gap-y-4">
    {[[copy.about,"/about"],[copy.outside,"/about/outside-of-work"],[copy.certifications,"/certifications"],[copy.contact,"/contact"]].map(([label,path]) => <Link key={path} href={localizedPath(locale,path)} className="text-sm hover:text-white hover:underline">{label}</Link>)}
   </nav>
  </div>
 </footer>;
}
