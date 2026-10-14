import ProjectSummary from "@/components/ProjectSummary";
import Header from "@/components/Header";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/projects/household-system-health", "Household System Health Lab", "Planning household system health tracking through asset inventory, patch management, vulnerability assessment, and verified remediation.");

export default function HouseholdSystemHealthPage() {
  return <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
    <Header />
    <section className="bg-[#0F3046] px-6 pb-16 pt-24 text-white sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/projects" className="text-sm font-bold text-[#D6A85F]">← Back to Projects</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[#79B8AE]">Operations</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Household System Health Lab</h1>
        <p className="mt-6 max-w-3xl leading-8 text-white/80">Planning household system health tracking through asset inventory, patch management, vulnerability assessment, and verified remediation.</p>
        <span className="mt-6 inline-block rounded-full border border-white/30 px-4 py-2 text-sm font-bold">Research</span>
      </div>
    </section>
    <ProjectSummary slug="household-system-health" />
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-black">Implementation Status</h2>
        <p className="mt-4 max-w-4xl leading-7 text-[#456174]">This project is planned. Endpoint enrollment, scans, and measured results are not documented yet.</p>
        <h2 className="mt-10 text-3xl font-black">Proposed Architecture</h2>
        <p className="mt-4 max-w-4xl leading-7 text-[#456174]">OCS Inventory NG is a proposed self-hosted inventory layer for hardware and installed software. Compare its records with Action1 to identify missing devices and stale data; it does not replace vulnerability scanning or uptime monitoring.</p>
        <p className="mt-4 max-w-4xl leading-7 text-[#456174]">Action1 is the proposed starting point for inventory and patch management on supported computers. Greenbone Community Edition (OpenVAS) is the proposed free, self-hosted vulnerability scanner. Storage health and service availability require separate monitoring checks.</p>
        <p className="mt-4 max-w-4xl leading-7 text-[#456174]">Qualys Community Edition is an optional free cloud alternative; confirm current account eligibility and asset limits before choosing it. No paid scanner is required for the planned lab.</p>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { title: "Inventory and Baseline", text: "Record household computers, operating systems, software versions, and ownership. Check platform support before selecting agents or scan methods." },
            { title: "Health and Exposure", text: "Track endpoint check-in, patch status, available disk space, and vulnerability findings. Review TrueNAS storage alerts and service availability separately." },
            { title: "Remediate and Verify", text: "Pilot updates on a test system, schedule maintenance, record failures, and verify remediation with a follow-up check or scan." },
          ].map((step,index)=><li key={step.title} className="rounded-2xl border border-[#CCD6DA] bg-white p-6">
            <span aria-hidden="true" className="text-sm font-black text-[#805B1F]">{String(index+1).padStart(2,"0")}</span>
            <h3 className="mt-3 text-xl font-black">{step.title}</h3><p className="mt-4 leading-7 text-[#456174]">{step.text}</p>
          </li>)}
        </ol>
      </div>
    </section>
    <section className="bg-[#E9ECE8] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-black">Validation Checklist</h2>
        <ul className="mt-6 max-w-4xl list-disc space-y-4 pl-5 leading-7 text-[#456174]">
          <li>Confirm inventory coverage and identify unsupported or offline devices.</li>
          <li>Record patch success, pending reboots, and rollback steps during a controlled pilot.</li>
          <li>Compare vulnerability findings before and after remediation, including exceptions and false positives.</li>
          <li>Test a health alert and record detection, investigation, and recovery times.</li>
        </ul>
        <h2 className="mt-10 text-3xl font-black">Evidence to Publish</h2>
        <p className="mt-4 max-w-4xl leading-7 text-[#456174]">Publish sanitized dashboards, a patch runbook, a remediation timeline, and observed test results. Keep device identifiers and household data private. No coverage, uptime, or risk-reduction claims are made before measurement.</p>
        <div className="mt-6 flex flex-wrap gap-5">
          <a href="https://www.action1.com/documentation/system-requirements/" className="font-bold text-[#28638F]" target="_blank" rel="noopener noreferrer">Action1</a>
          <a href="https://wiki.ocsinventory-ng.org/03.Basic-documentation/Setting-up-a-OCS-Inventory-Server/" className="font-bold text-[#28638F]" target="_blank" rel="noopener noreferrer">OCS Inventory NG</a>
          <a href="https://greenbone.github.io/docs/latest/22.4/container/" className="font-bold text-[#28638F]" target="_blank" rel="noopener noreferrer">Greenbone Community Edition (OpenVAS)</a>
          <a href="https://www.qualys.com/community-edition" className="font-bold text-[#28638F]" target="_blank" rel="noopener noreferrer">Qualys Community Edition</a>
          <Link href="/projects/network-segmentation" className="font-bold text-[#28638F]">Network Segmentation Lab</Link>
        </div>
      </div>
    </section>
  </main>;
}
