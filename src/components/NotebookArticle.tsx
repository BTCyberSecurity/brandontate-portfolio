import Link from "next/link";
import Header from "@/components/Header";
import ArticleStructuredData from "@/components/ArticleStructuredData";
import { articles, type ArticleSlug } from "@/data/articles";

export default function NotebookArticle({ slug }: { slug: ArticleSlug }) {
  const article = articles[slug];
  return <main id="main-content" tabIndex={-1} className="portfolio-layout min-h-screen bg-[#F4F1EA] text-[#102F46]">
    <Header />
    <ArticleStructuredData path={`/writing/${slug}`} title={article.title} description={article.description} />
    <section className="page-hero bg-[#0F3046] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/writing" className="text-sm font-bold text-[#D6A85F]">← Back to Engineering Notebook</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[#79B8AE]">{article.category} · {article.kind}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{article.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{article.intro}</p>
      </div>
    </section>
    <div className="content-shell mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_16rem] lg:px-8">
      <article className="min-w-0 space-y-12">
        {article.sections.map((section, index) => <section id={`note-${index + 1}`} key={section.title} className="scroll-mt-24">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{section.title}</h2>
          <p className="mt-5 leading-8 text-[#456174]">{section.text}</p>
        </section>)}
        <section className="rounded-2xl border border-[#C9D3D8] bg-white p-6">
          <h2 className="text-2xl font-black">Takeaway</h2>
          <p className="mt-4 leading-8 text-[#456174]">{article.takeaway}</p>
          <Link href={article.project} className="mt-5 inline-block text-sm font-bold text-[#28638F]">Explore Related Project →</Link>
        </section>
      </article>
      <aside>
        <nav aria-label="Article contents" className="rounded-2xl border border-[#C9D3D8] bg-white p-6">
          <h2 className="font-black">In This Note</h2>
          <ol className="mt-4 space-y-3">{article.sections.map((section,index) => <li key={section.title}><a href={`#note-${index + 1}`} className="text-sm leading-6 text-[#28638F]">{section.title}</a></li>)}</ol>
        </nav>
        <div className="mt-6 rounded-2xl border border-[#C9D3D8] p-6">
          <h2 className="font-black">Reference Documentation</h2>
          <ul className="mt-4 space-y-3">{article.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-[#28638F]">{source.label} ↗</a></li>)}</ul>
        </div>
      </aside>
    </div>
  </main>;
}
