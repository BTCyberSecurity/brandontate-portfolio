import Header from "@/components/Header";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = { ...pageMetadata("/about/outside-of-work", "Outside of Work", "Family, hobbies, and life beyond technology. Coming soon."), robots: { index: false, follow: true } };
export default function OutsideOfWork() {
 return <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
  <Header />
  <section className="mx-auto max-w-4xl px-6 py-24 text-center">
   <p className="text-8xl font-black text-[#28638F]" aria-hidden="true">404</p>
   <p className="mt-6 text-sm font-bold uppercase tracking-widest text-[#805B1F]">Under construction</p>
   <h1 className="mt-4 text-4xl font-black sm:text-6xl">Outside of Work</h1>
   <h2 className="mt-6 text-2xl font-bold">Coming soon</h2>
   <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#456174]">Family, hobbies, and life beyond technology. Coming soon.</p>
   <Link href="/about" className="mt-10 inline-block rounded-md bg-[#102F46] px-6 py-3 font-bold text-white">About Me</Link>
  </section>
 </main>;
}
