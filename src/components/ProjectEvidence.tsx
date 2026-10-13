import Link from "next/link";
import { projectEvidence, type EvidenceProject } from "@/data/project-evidence";

export default function ProjectEvidence({ project }: { project: EvidenceProject }) {
  const evidence = projectEvidence[project];
  const source = `https://github.com/BTCyberSecurity/brandontate-portfolio/blob/main/src/app/(english)/projects/${project}/page.tsx`;
  return <section aria-labelledby="project-evidence-heading" className="border-b border-[#D7DEDF] bg-[#E9ECE8] px-6 py-16 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#28638F]">Evidence & Outcomes</p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <h2 id="project-evidence-heading" className="text-3xl font-black tracking-tight text-[#102F46]">What the Work Demonstrates</h2>
        <span className="rounded-full border border-[#C9D3D8] bg-white px-4 py-2 text-xs font-bold text-[#456174]">{evidence.status}</span>
      </div>
      <p className="mt-4 max-w-4xl leading-7 text-[#456174]">{evidence.summary}</p>
      <figure className="mt-8 rounded-2xl border border-[#C9D3D8] bg-white p-5 sm:p-7">
        <ol className="grid gap-4 md:grid-cols-4">
          {evidence.steps.map((step, index) => <li key={step} className="relative rounded-xl border border-[#D7DEDF] bg-[#F7F8F6] p-5">
            <span aria-hidden="true" className="text-xs font-black text-[#805B1F]">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-3 text-sm font-bold leading-6 text-[#102F46]">{step}</p>
            {index < evidence.steps.length - 1 && <span aria-hidden="true" className="mt-3 block text-[#28638F]">→</span>}
          </li>)}
        </ol>
        <figcaption className="mt-5 text-sm leading-6 text-[#456174]">{evidence.caption}</figcaption>
      </figure>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-black text-[#102F46]">Documented Outcomes</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#456174]">{evidence.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-xl font-black text-[#102F46]">Next Evidence to Publish</h3>
          <p className="mt-4 leading-7 text-[#456174]">{evidence.next}</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href={source} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#28638F]">View Case Study Source ↗</a>
            <Link href={evidence.article} className="text-sm font-bold text-[#28638F]">Read Related Notes →</Link>
          </div>
          <p className="mt-3 text-xs leading-6 text-[#456174]">The source link contains this published case study, not a separate implementation repository.</p>
        </div>
      </div>
    </div>
  </section>;
}
