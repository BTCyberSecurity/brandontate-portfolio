import ProjectSummary from "@/components/ProjectSummary";
import Header from "@/components/Header";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/projects/network-segmentation", "Network Segmentation Lab", "An OPNsense home lab with a verified 2.5 GbE uplink, tested VLAN isolation, and a staged device migration.");

const checks = [
  { title: "Internet access", text: "A test client receives a lab address, resolves DNS, and reaches an external HTTPS site. Record its address, gateway, and observed result." },
  { title: "Household isolation", text: "Lab clients cannot reach household devices unless an explicit exception permits access. Test both permitted and denied paths." },
  { title: "Cross-VLAN controls", text: "Only documented traffic crosses between lab VLANs. Record source, destination, protocol, expected result, and matching firewall log." },
  { title: "Administrative access", text: "Firewall and switch management are reachable from the designated management network and denied from test networks." },
  { title: "Reboot recovery", text: "After a firewall restart, both interfaces return and the test client regains expected connectivity. Record recovery time." },
  { title: "USB adapter reliability", text: "The WAN adapter remains available during sustained traffic and returns after reconnecting. Record duration, errors, and interruptions." },
  { title: "Configuration recovery", text: "Export a configuration backup and validate restoration during a controlled exercise. Record the recovery procedure and outcome." },
];

export default function NetworkSegmentationPage() {
  return <main id="main-content" tabIndex={-1} className="portfolio-layout min-h-screen bg-[#F4F1EA] text-[#102F46]">
    <Header />
    <section className="page-hero bg-[#0F3046] px-6 pb-16 pt-24 text-white sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/projects" className="text-sm font-bold text-[#D6A85F]">← Back to Projects</Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[#79B8AE]">Network Security</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Network Segmentation Lab</h1>
        <p className="mt-6 max-w-3xl leading-8 text-white/80">Segmenting a home network with OPNsense and UniFi while keeping household Wi-Fi on eero.</p>
        <span className="mt-6 inline-block rounded-full border border-white/30 px-4 py-2 text-sm font-bold">In Development</span>
      </div>
    </section>
    <ProjectSummary slug="network-segmentation" />
    <section className="px-6 py-16 lg:px-8" aria-labelledby="progress-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="progress-heading" className="text-3xl font-black">Implementation Status</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#456174]">I replaced the original gigabit switch with a UniFi Flex 2.5G 8. UniFi reported a 2.5 GbE link to OPNsense, and an internet speed test measured 1.6 Gbps in both directions.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#CCD6DA] bg-white p-6">
            <h3 className="text-xl font-black">Completed</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#456174]">
              <li>Selected a Lenovo M90n-1 with an 8th-generation Intel i5, 8 GB RAM, and 256 GB storage.</li>
              <li>Verified that Guest and IoT test clients could reach the internet while access to the Proxmox management port was blocked.</li>
              <li>Verified the Work VLAN on a test port and confirmed SSH access after moving LainAI to the Servers VLAN.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-[#CCD6DA] bg-white p-6">
            <h3 className="text-xl font-black">Planned</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#456174]">
              <li>Move TrueNAS to the Storage VLAN and check file shares and Plex after the address change.</li>
              <li>Test living room coverage with a wired UniFi U7 Pro and a 2.5 GbE PoE+ injector before moving Wi-Fi clients off eero.</li>
              <li>Retest management access and document the remaining firewall and recovery checks.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    <section className="bg-[#E9ECE8] px-6 py-16 lg:px-8" aria-labelledby="architecture-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="architecture-heading" className="text-3xl font-black">Current Architecture</h2>
        <figure className="mt-8 rounded-2xl border border-[#CCD6DA] bg-white p-6">
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Upstream: Fiber internet", text: "The fiber connection terminates at the OPNsense WAN adapter." },
              { title: "Firewall: Lenovo M90n-1", text: "OPNsense provides DHCP, routes between VLANs, and enforces firewall policy." },
              { title: "Switch: UniFi Flex 2.5G 8", text: "The Flex carries tagged VLANs over its 2.5 GbE uplink and assigns wired devices to their networks." },
            ].map((step, index) => <li key={step.title} className="rounded-xl border border-[#D7DEDF] bg-[#F7F8F6] p-5">
              <span aria-hidden="true" className="text-sm font-black text-[#805B1F]">{index + 1} →</span>
              <h3 className="mt-3 text-lg font-black">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#456174]">{step.text}</p>
            </li>)}
          </ol>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Management — testing pending", "Servers — LainAI migrated", "Storage — migration planned", "Guest and IoT — isolation tested"].map(zone => <li key={zone} className="rounded-lg border border-dashed border-[#506879] p-4 text-sm font-bold">{zone}</li>)}
          </ul>
          <figcaption className="mt-6 text-sm leading-6 text-[#456174]">Deployed topology shown at the network level. Internal addresses and device identifiers are omitted.</figcaption>
        </figure>
        <p className="mt-6 max-w-4xl leading-7 text-[#456174]">eero serves household Wi-Fi downstream of the Flex. Dedicated UniFi wireless networks for Guest and IoT are planned.</p>
      </div>
    </section>
    <section className="px-6 py-16 lg:px-8" aria-labelledby="validation-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="validation-heading" className="text-3xl font-black">Validation Checklist</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#456174]">The checks below guide further validation across the lab. The results above cover the paths tested during the switch cutover.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {checks.map(check => <article key={check.title} className="rounded-xl border border-[#CCD6DA] bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#805B1F]">Test procedure</p>
            <h3 className="mt-3 text-xl font-black">{check.title}</h3><p className="mt-3 leading-7 text-[#456174]">{check.text}</p>
          </article>)}
        </div>
        <div className="mt-10 rounded-2xl bg-[#102F46] p-6 text-white sm:p-8">
          <h3 className="text-2xl font-black">Evidence to Publish</h3>
          <p className="mt-4 max-w-3xl leading-7 text-white/80">Publish a sanitized traffic matrix and recovery runbook with the observed result for each tested path.</p>
          <div className="mt-6 flex flex-wrap gap-5">
            <Link href="/writing/segmented-home-lab" className="font-bold text-[#D6A85F]">Read Related Notes →</Link>
          </div>
        </div>
      </div>
    </section>
  </main>;
}
