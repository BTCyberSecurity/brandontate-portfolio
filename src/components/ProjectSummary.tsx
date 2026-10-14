import { projects } from "@/data/projects";
import { projectEvidence, type EvidenceProject } from "@/data/project-evidence";
export default function ProjectSummary({ slug }: { slug: string }) {
 const project = projects.find(item => item.href === "/projects/" + slug)!;
 const evidence = projectEvidence[slug as EvidenceProject];
 const next = slug === "network-segmentation" ? "Validate isolation, administrative access, adapter reliability, and recovery before publishing results." : "Record patch success, pending reboots, and rollback steps during a controlled pilot.";
 return <section aria-labelledby="project-summary" className="border-b border-[#CCD6DA] bg-white px-6 py-10 lg:px-8">
  <div className="mx-auto max-w-7xl">
   <div className="flex flex-wrap items-center justify-between gap-4"><h2 id="project-summary" className="text-2xl font-black">Project at a Glance</h2><span className="rounded-full bg-[#EEF1EF] px-4 py-2 text-sm font-bold text-[#456174]">{project.status}</span></div>
   <dl className="mt-6 grid gap-6 md:grid-cols-2">
    {[{label:"Purpose", text:project.description},{label:"My Role",text:"Independent lab research, design, and documentation."},{label:"Implementation Status",text:evidence?.summary ?? project.evidence},{label:"Next Milestone",text:evidence?.next ?? next}].map(item=><div key={item.label}><dt className="text-sm font-bold text-[#28638F]">{item.label}</dt><dd className="mt-2 text-sm leading-7 text-[#456174]">{item.text}</dd></div>)}
   </dl>
   <a className="mt-6 inline-block text-sm font-bold text-[#28638F] underline underline-offset-4" href={"https://github.com/BTCyberSecurity/brandontate-portfolio/blob/main/src/app/(english)/projects/"+slug+"/page.tsx"} target="_blank" rel="noopener noreferrer">Case Study Source (Portfolio) ↗</a>
   <p className="mt-2 text-xs leading-6 text-[#456174]">Implementation repository: not yet published.</p>
  </div>
 </section>;
}
