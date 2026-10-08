import Header from "@/components/Header";

const projects = [
  {
    category: "Identity & Access",
    title: "Identity & Zero Trust Lab",
    status: "In Development",
    description:
      "A hands-on lab focused on Microsoft Entra ID, MFA, Conditional Access, RBAC, least privilege, account lifecycle, privileged access, and Zero Trust design.",
    href: "/projects/identity-zero-trust",
    stack: [
      "Microsoft Entra ID",
      "MFA",
      "Conditional Access",
      "RBAC",
      "Zero Trust",
    ],
  },
  {
    category: "Private AI",
    title: "Private AI Infrastructure",
    status: "Active Lab",
    description:
      "A locally controlled AI environment built around Linux, NVIDIA acceleration, Docker, Ollama, Open WebUI, private remote access, and iterative troubleshooting.",
    href: "/projects/private-ai-infrastructure",
    stack: [
      "Ubuntu Server",
      "NVIDIA",
      "Docker",
      "Ollama",
      "Open WebUI",
      "Tailscale",
    ],
  },
  {
    category: "Infrastructure",
    title: "Infrastructure & Systems Lab",
    status: "Active Lab",
    description:
      "Hands-on systems work across TrueNAS, ZFS, Linux, storage, containers, media services, permissions, networking, troubleshooting, and recovery.",
    href: "/projects/infrastructure-systems",
    stack: [
      "TrueNAS",
      "ZFS",
      "Linux",
      "Docker",
      "Networking",
      "Storage",
    ],
  },
  {
    category: "Security Operations Research",
    title: "SentinelForge",
    status: "Research",
    description:
      "Exploring how locally controlled AI can assist security operations through event classification, log summarization, incident-response support, and controlled automation.",
    href: "/projects/sentinelforge",
    stack: [
      "Security Operations",
      "Local AI",
      "Log Analysis",
      "Python",
      "PowerShell",
      "Automation",
    ],
  },
];

const themes = [
  {
    number: "01",
    title: "Identity",
    text: "Authentication, authorization, lifecycle, MFA, least privilege, and controlled access.",
  },
  {
    number: "02",
    title: "Infrastructure",
    text: "Linux, storage, networking, services, recovery, and resilient system design.",
  },
  {
    number: "03",
    title: "Security",
    text: "Operational security, logging, incident response, access control, and risk reduction.",
  },
  {
    number: "04",
    title: "Automation",
    text: "Using scripting, local AI, and repeatable workflows to reduce manual work and improve consistency.",
  },
];

export const metadata = {
  title: "Projects",
  description:
    "Technical projects and hands-on labs from Brandon Tate covering identity, infrastructure, cybersecurity, private AI, and security operations.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-5 pb-20 pt-16 text-white sm:px-6 sm:pt-20 lg:px-8">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 75% 35%, #147BC1 0%, transparent 42%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Projects & Labs
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Building the Systems Behind the Skills
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            Hands-on work across identity, infrastructure, cybersecurity,
            private AI, automation, troubleshooting, and operational systems.
          </p>
        </div>
      </section>

      {/* Project Index */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Project Index
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Current Labs & Case Studies
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            These projects document what I am actively building, testing,
troubleshooting, and learning. Some are established labs, while
others are still in active development or research.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group flex h-full flex-col rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                    {project.category}
                  </p>

                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                      project.status === "Active Lab"
                        ? "bg-[#E5EBDD] text-[#55733F]"
                        : project.status === "In Development"
                          ? "bg-[#DDEAF3] text-[#2F6F9F]"
                          : "bg-[#F3E7CF] text-[#936D27]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-[#102F46]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#5E7685]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[#F1F3F2] px-3 py-1.5 text-xs font-semibold text-[#456174]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <p className="text-sm font-bold text-[#936D27] transition group-hover:text-[#102F46]">
                    Explore Project →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Project Themes
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            What Connects the Work
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {themes.map((item) => (
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
              Purpose
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Proof of Work, Not Just a Skills List
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/65">
              These projects are where infrastructure, security, troubleshooting,
              operations, and learning come together. The goal is to show the
              systems behind the résumé and the thinking behind the technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/writing"
                className="rounded-md bg-[#D6A85F] px-6 py-3 text-sm font-bold text-[#102F46] transition hover:bg-white"
              >
                Engineering Notebook
              </a>

              <a
                href="/security"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#102F46]"
              >
                Security Approach
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}