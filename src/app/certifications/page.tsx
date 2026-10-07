import Header from "@/components/Header";

const completed = [
  {
    name: "CompTIA A+",
    description: "Hardware, Software & Troubleshooting",
    detail:
      "Foundational troubleshooting, endpoint support, hardware, software, networking, and support methodology.",
  },
  {
    name: "AZ-900",
    description: "Microsoft Azure Fundamentals",
    detail:
      "Cloud concepts, Azure services, governance, pricing, identity fundamentals, and Microsoft cloud terminology.",
  },
];

const current = [
  {
    name: "SC-900",
    description: "Security, Compliance, and Identity Fundamentals",
    status: "Current",
    focus:
      "Microsoft security, identity, compliance, Entra ID, Zero Trust, governance, and foundational security concepts.",
  },
  {
    name: "Security+",
    description: "CompTIA Security+",
    status: "Planned",
    focus:
      "Security operations, threats, architecture, incident response, access control, governance, and foundational defensive security.",
  },
  {
    name: "CISSP",
    description: "Certified Information Systems Security Professional",
    status: "4–6 Month Goal",
    focus:
      "Security leadership, architecture, risk, IAM, network security, operations, software security, and governance.",
  },
];

const tracks = [
  {
    title: "Identity & Access",
    text: "MFA, Conditional Access, RBAC, least privilege, lifecycle management, privileged access, and Zero Trust.",
    project: "Identity & Zero Trust Lab",
    href: "/projects/identity-zero-trust",
  },
  {
    title: "Cloud Security",
    text: "Microsoft cloud security, identity, governance, access, service architecture, and secure cloud administration.",
    project: "Security",
    href: "/security",
  },
  {
    title: "Security Operations",
    text: "Detection, logging, incident response, event analysis, operational security, and analyst workflows.",
    project: "SentinelForge",
    href: "/projects/sentinelforge",
  },
  {
    title: "Governance & Risk",
    text: "Policies, controls, access ownership, risk-aware operations, documentation, continuity, and security decision-making.",
    project: "Experience",
    href: "/experience",
  },
  {
    title: "Automation",
    text: "Python, PowerShell, AI-assisted workflows, repeatable administration, and reducing repetitive operational work.",
    project: "Private AI Infrastructure",
    href: "/projects/private-ai-infrastructure",
  },
  {
    title: "Infrastructure Security",
    text: "Linux, storage, permissions, remote administration, segmentation, service exposure, hardening, and recovery.",
    project: "Infrastructure & Systems Lab",
    href: "/projects/infrastructure-systems",
  },
];

const studyModel = [
  {
    number: "01",
    title: "Learn",
    text: "Use structured study to understand concepts, terminology, frameworks, architecture, and exam objectives.",
  },
  {
    number: "02",
    title: "Build",
    text: "Apply those concepts in labs where configuration decisions, dependencies, and failures become visible.",
  },
  {
    number: "03",
    title: "Operate",
    text: "Connect certification knowledge to real systems, users, identity, infrastructure, security, and business requirements.",
  },
  {
    number: "04",
    title: "Document",
    text: "Write down what worked, what failed, and what changed so the learning becomes reusable instead of temporary.",
  },
];

const roadmap = [
  {
    phase: "Now",
    title: "SC-900",
    text: "Build a stronger Microsoft security, compliance, and identity foundation while expanding hands-on IAM work.",
  },
  {
    phase: "Next",
    title: "Security+",
    text: "Strengthen broad defensive security knowledge across threats, architecture, operations, access control, and incident response.",
  },
  {
    phase: "Major Goal",
    title: "CISSP",
    text: "Develop security leadership depth across architecture, risk, IAM, operations, governance, and business-aligned security strategy.",
  },
];

export const metadata = {
  title: "Certifications",
  description:
    "Cybersecurity, cloud, identity, infrastructure, and professional certification development for Brandon Tate.",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Certifications & Learning
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Study the Map.
            <br className="hidden sm:block" />
            Build the Terrain.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            Certifications give structure to my learning. Labs, infrastructure,
            security exercises, and operational work turn that knowledge into
            experience.
          </p>
        </div>
      </section>

      {/* Completed */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Completed
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Foundation
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {completed.map((cert) => (
              <article
                key={cert.name}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-2xl font-black">{cert.name}</h3>

                    <p className="mt-1 text-sm font-semibold text-[#936D27]">
                      {cert.description}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-[#E5EBDD] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#55733F]">
                    Completed
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-[#5E7685]">
                  {cert.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Current Roadmap */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Roadmap
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Current Certification Focus
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            The objective is not to collect disconnected credentials. Each
            certification should reinforce a technical capability I am also
            building through labs, projects, and operational experience.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {current.map((cert) => (
              <article
                key={cert.name}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-6"
              >
                <span
                  className={`w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                    cert.status === "Current"
                      ? "bg-[#DDEAF3] text-[#2F6F9F]"
                      : cert.status === "Planned"
                        ? "bg-[#F3E7CF] text-[#936D27]"
                        : "bg-[#E6E2ED] text-[#665781]"
                  }`}
                >
                  {cert.status}
                </span>

                <h3 className="mt-5 text-2xl font-black">{cert.name}</h3>

                <p className="mt-2 text-sm font-semibold text-[#936D27]">
                  {cert.description}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#5E7685]">
                  {cert.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap progression */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Progression
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Building From Fundamentals to Leadership
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roadmap.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#D7DEDF] bg-white p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                    0{index + 1}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2F6F9F]">
                    {item.phase}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Learning Tracks
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Certifications Connected to Real Work
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-white/65">
            Each learning track connects to a project or operational area where
            I can apply the concepts instead of leaving them at the exam level.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => (
              <a
                key={track.title}
                href={track.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-black">{track.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {track.text}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#79B8AE]">
                    Connected Project
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#D6A85F]">
                    {track.project} →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Study Model */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Study Model
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            How I Turn Study Into Capability
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {studyModel.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Learning Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Credentials Are Milestones, Not the Finish Line
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/65">
              I want each certification to leave behind something useful:
              stronger technical judgment, a better lab, clearer documentation,
              a more complete project, or a security concept I can explain and
              apply.
            </p>

            <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
              <p className="max-w-3xl font-serif text-xl italic leading-8 text-white/70">
                “Study gives me the map. Building gives me the terrain.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}