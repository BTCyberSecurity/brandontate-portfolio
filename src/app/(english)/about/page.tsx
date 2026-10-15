import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
﻿import Header from "@/components/Header";

const capabilities = [
  {
    number: "01",
    title: "IT Operations",
    text: "Supporting technology in environments where reliability directly affects employees, guests, and day-to-day business operations.",
  },
  {
    number: "02",
    title: "Infrastructure",
    text: "Building and maintaining networks, systems, servers, endpoints, and technical environments designed for stability and recovery.",
  },
  {
    number: "03",
    title: "Security",
    text: "Applying identity, access control, system hardening, monitoring, segmentation, and practical security principles to real infrastructure.",
  },
  {
    number: "04",
    title: "Leadership",
    text: "Coordinating teams, vendors, technical priorities, projects, and operational needs across multiple properties and stakeholders.",
  },
  {
    number: "05",
    title: "Automation",
    text: "Looking for opportunities to reduce repetitive work, improve consistency, and make technical environments easier to operate.",
  },
  {
    number: "06",
    title: "Private AI",
    text: "Exploring local AI infrastructure, model deployment, GPU workloads, automation, and practical uses of AI within controlled environments.",
  },
];

const principles = [
  {
    title: "Understand the System",
    text: "I prefer knowing how the pieces interact instead of treating technology as a collection of disconnected tools.",
  },
  {
    title: "Design for Operations",
    text: "Technology has to work for the people depending on it. Reliability, usability, supportability, and recovery all matter.",
  },
  {
    title: "Keep Learning",
    text: "My labs, certifications, documentation, and experiments are extensions of the same habit: learn something, build it, test it, and understand it.",
  },
];

export const metadata = pageMetadata("/about", {
  title: "About",
  description:
    "Learn more about Brandon Tate, an IT leader focused on infrastructure, cybersecurity, identity, automation, operations, and private AI.",
});

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-5 pb-20 pt-24 text-white sm:px-6 sm:pt-32 lg:px-8">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 75% 35%, #147BC1 0%, transparent 42%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              About Me
            </p>

            <h1 className="mt-4 max-w-5xl text-[2.35rem] font-black leading-[0.98] tracking-tight min-[420px]:text-[2.6rem] sm:text-5xl lg:text-6xl">
  Technology Should Make the Operation Stronger
</h1>

            <p className="mt-6 max-w-4xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
              My foundation is hands-on support and multi-site IT leadership. I am building on that experience to develop practical architecture skills.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-wrap gap-6 px-6 py-6 text-sm font-bold text-[#28638F]">
        <Link href="/security">Security</Link><Link href="/certifications">Certifications</Link><Link href="/about/outside-of-work">Outside of Work</Link>
      </div>
      {/* Story */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#28638F]">
                Background
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Built Through Operations
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#506879]">
            <p>
              My background is rooted in hands-on IT support and operations.
              Over time, that expanded into responsibility for infrastructure,
              networks, business systems, vendors, projects, and technology
              across multiple hospitality environments.
            </p>

            <p>
              That experience changed how I think about technology. A system
              can be technically impressive and still fail the business if it
              is difficult to support, unreliable under pressure, poorly
              documented, or disconnected from the people using it.
            </p>

            <p>
              My labs give me room to examine design choices beyond an immediate support issue: network boundaries, identity controls, system dependencies, and recovery paths.
            </p>

            <p>
              My long-term direction is senior architecture and strategic technology leadership. I am developing toward that through study, documented lab work, and operational experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black tracking-tight">Education</h2>
          <p className="mt-5 max-w-3xl leading-7 text-[#506879]">My WGU degree is in progress. Earlier studies at DeVry, Tenri, and LIU did not result in a degree or certificate.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[#CBD5D8] bg-white p-6">
              <h3 className="text-xl font-black">Western Governors University</h3>
              <p className="mt-3 leading-7 text-[#506879]">Bachelor of Science in Cybersecurity and Information Assurance — In progress</p>
            </article>
            <article className="rounded-2xl border border-[#CBD5D8] bg-white p-6">
              <h3 className="text-xl font-black">DeVry University</h3>
              <p className="mt-3 leading-7 text-[#506879]">Long Island City, NY · 2007–2010</p>
              <p className="mt-3 leading-7 text-[#506879]">Studies in Computer Engineering Technology</p>
            </article>
            <article className="rounded-2xl border border-[#CBD5D8] bg-white p-6">
              <h3 className="text-xl font-black">Tenri Cultural Institute</h3>
              <p className="mt-3 leading-7 text-[#506879]">New York, NY · 2008–2010</p>
              <p className="mt-3 leading-7 text-[#506879]">Japanese Studies</p>
            </article>
            <article className="rounded-2xl border border-[#CBD5D8] bg-white p-6">
              <h3 className="text-xl font-black">Long Island University, Brooklyn Campus</h3>
              <p className="mt-3 leading-7 text-[#506879]">Brooklyn, NY · 2002–2004</p>
              <p className="mt-3 leading-7 text-[#506879]">Studies in Computer Science and Foreign Language</p>
            </article>
          </div>
          <h3 className="mt-10 text-2xl font-black">Professional Development</h3>
          <p className="mt-3 leading-7 text-[#506879]">Technology Practitioner — Armanino LLP</p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#28638F]">
              Capabilities
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            How I Approach Technology
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#506879]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Current direction */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#28638F]">
                Direction
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Where I&apos;m Going
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#506879]">
              Infrastructure Architecture, Network & Security Architecture, and Identity & Cloud Security are my core technical development areas. These labs connect that direction to practical work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Infrastructure & Systems Lab", href: "/projects/infrastructure-systems" },
              { title: "Network Segmentation Lab", href: "/projects/network-segmentation" },
              { title: "Identity & Zero Trust Lab", href: "/projects/identity-zero-trust" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl border border-[#D7DEDF] bg-white p-4 hover:border-[#28638F] sm:p-5">
                <p className="font-bold text-[#102F46]">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Working Principles
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight">
            Learn It. Build It. Operate It. Improve It.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-l-2 border-[#D6A85F] pl-5">
            <p className="max-w-3xl font-serif text-xl italic leading-8 text-white/70">
              “The best technology decisions connect architecture, security,
operations, and people.”
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#28638F]">
              Continue
            </p>

            <h2 className="mt-2 text-2xl font-black">
              See how that translates into real work.
            </h2>
          </div>

          <Link
            href="/projects"
            className="w-fit rounded-md bg-[#102F46] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A4562]"
          >
            Explore Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}
