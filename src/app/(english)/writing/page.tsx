import Link from "next/link";
import Header from "@/components/Header";
import { notebookEntries } from "@/data/notebook";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/writing", { title: "Engineering Notebook", description: "Build logs, security incident exercises, and network design notes from Brandon Tate's infrastructure and cybersecurity work." });

export default function WritingIndex() {
  return <main id="main-content" tabIndex={-1} className="portfolio-layout min-h-screen bg-[#F4F1EA] text-[#102F46]">
    <Header />
    <section className="page-hero bg-[#0F3046] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6A85F]">Engineering Notebook</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Learn. Build. Document.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">Technical analysis, trade-offs, and lessons from the lab: why I chose an approach, what failed, and what I would change.</p>
      </div>
    </section>
    <section aria-label="Notebook articles" className="content-shell mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-3 lg:px-8">
      {notebookEntries.map(entry => <article key={entry.href} className="flex flex-col rounded-2xl border border-[#C9D3D8] bg-white p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#28638F]">{entry.category} · {entry.meta}</p>
        <h2 className="mt-4 text-2xl font-black leading-tight"><Link href={entry.href}>{entry.title}</Link></h2>
        <p className="mt-5 leading-7 text-[#456174]">{entry.description}</p>
        <Link href={entry.href} className="mt-auto pt-8 text-sm font-bold text-[#28638F]">Read Entry →</Link>
      </article>)}
    </section>
  </main>;
}
