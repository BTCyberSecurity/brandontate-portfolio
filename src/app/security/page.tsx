import Header from "@/components/Header";

const operatingModel = [
  {
    number: "01",
    title: "Identity",
    text: "Access control, MFA, role design, account lifecycle, least privilege, privileged workflows, and identity governance.",
  },
  {
    number: "02",
    title: "Protect",
    text: "Secure configuration, endpoint hygiene, hardening, segmentation, controlled exposure, and reduction of unnecessary privilege.",
  },
  {
    number: "03",
    title: "Detect",
    text: "Logging, monitoring, authentication review, alert triage, service visibility, and recognition of abnormal behavior.",
  },
  {
    number: "04",
    title: "Respond",
    text: "Containment, investigation, recovery, communication, documentation, and repeatable incident-response workflows.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Use incidents, audits, troubleshooting, and operational friction to strengthen controls, documentation, and system design.",
  },
];

const focusAreas = [
  "Identity & Access Management",
  "Microsoft Entra ID",
  "Conditional Access",
  "MFA",
  "Least Privilege",
  "Cloud Security",
  "Security Operations",
  "Governance & Risk",
  "Endpoint Security",
  "Network Segmentation",
  "Logging & Monitoring",
  "Automation",
];

const operationalExamples = [
  {
    number: "01",
    title: "MFA Fatigue",
    scenario:
      "A user receives repeated MFA prompts they did not initiate.",
    approach:
      "Treat the behavior as a potential account compromise, contain the identity, review authentication activity, validate user actions, and document the response.",
  },
  {
    number: "02",
    title: "Account Lifecycle",
    scenario:
      "A user changes roles, departments, or leaves the organization.",
    approach:
      "Review existing permissions, remove access that is no longer required, update role-based access, and confirm that privileged access does not persist.",
  },
  {
    number: "03",
    title: "Endpoint Risk",
    scenario:
      "A device needs to be provisioned, replaced, or reassigned.",
    approach:
      "Treat provisioning, encryption, access, ownership, and account state as part of the security lifecycle rather than only a hardware task.",
  },
  {
    number: "04",
    title: "Network Exposure",
    scenario:
      "A service needs to be reachable remotely or across network boundaries.",
    approach:
      "Prefer controlled private access, segmentation, limited exposure, and clear management paths instead of broad public availability.",
  },
  {
    number: "05",
    title: "Service Failure",
    scenario:
      "An infrastructure or application service becomes unavailable.",
    approach:
      "Separate availability from security, preserve useful logs, understand dependencies, and recover the service without bypassing controls unnecessarily.",
  },
  {
    number: "06",
    title: "Privileged Administration",
    scenario:
      "Administrative work requires elevated permissions.",
    approach:
      "Separate standard work from privileged activity and reduce standing administrative access wherever practical.",
  },
];

const securityProjects = [
  {
    category: "Identity & Access",
    title: "Identity & Zero Trust Lab",
    description:
      "Hands-on work around MFA, Conditional Access, RBAC, least privilege, lifecycle management, privileged access, and Zero Trust design.",
    href: "/projects/identity-zero-trust",
  },
  {
    category: "Private AI",
    title: "Private AI Infrastructure",
    description:
      "A locally controlled AI environment built around Linux, NVIDIA acceleration, Docker, private remote access, controlled service exposure, and local data processing.",
    href: "/projects/private-ai-infrastructure",
  },
  {
    category: "Infrastructure",
    title: "Infrastructure & Systems Lab",
    description:
      "TrueNAS, ZFS, Linux, containers, storage, permissions, remote administration, segmentation planning, and recovery-oriented infrastructure work.",
    href: "/projects/infrastructure-systems",
  },
  {
    category: "Security Operations Research",
    title: "SentinelForge",
    description:
      "Research into local AI-assisted event classification, log summarization, incident-response support, and controlled security automation.",
    href: "/projects/sentinelforge",
  },
];

const principles = [
  {
    title: "Protect the Operation",
    text: "Security controls should reduce risk without creating unnecessary operational failure or making legitimate work impossible.",
  },
  {
    title: "Preserve Visibility",
    text: "Logs, authentication history, service state, and system behavior matter because response is difficult without evidence.",
  },
  {
    title: "Reduce Standing Trust",
    text: "Access should be intentional, limited, reviewable, and removed when it is no longer required.",
  },
  {
    title: "Design for Recovery",
    text: "Secure environments still fail. Documentation, ownership, backups, rebuild procedures, and communication determine how well they recover.",
  },
];

export const metadata = {
  title: "Security",
  description:
    "Brandon Tate's practical cybersecurity approach covering identity, MFA, access control, incident response, infrastructure security, segmentation, logging, and security operations.",
};

export default function SecurityPage() {
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
            Security
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Security as Part of the System
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            My focus is practical security: identity, access control,
            hardening, visibility, segmentation, governance, response, and
            controls that support the business instead of fighting it.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Approach
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Security Without Losing the Operation
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              Security works best when it understands the environment it is
              protecting. Controls have to account for users, workflows,
              business systems, support requirements, recovery, and operational
              pressure.
            </p>

            <p>
              My background in IT operations gives me a practical lens for
              security. I am interested in controls that reduce risk while
              still allowing systems and people to function effectively.
            </p>

            <p>
              That is why identity, least privilege, logging, segmentation,
              hardening, documentation, automation, and recovery are recurring
              themes throughout my labs and technical work.
            </p>
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Operating Model
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            From Fundamentals to Real-World Application
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            I use a simple operating model to connect security theory to the
            systems and users that need to be protected.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {operatingModel.map((item) => (
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

      {/* Operational scenarios */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Operational Security
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Security Decisions in Context
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-white/65">
            Security becomes more useful when controls are applied to real
            operational situations instead of being treated as isolated
            technical features.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {operationalExamples.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <div className="mt-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#79B8AE]">
                    Scenario
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {item.scenario}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D6A85F]">
                    Approach
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    {item.approach}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Current Focus
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Building Deeper Security Capability
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              I am combining structured certification study with hands-on
              identity, infrastructure, automation, and security lab work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <p className="font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security projects */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Security Projects
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Learning Through Building
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {securityProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#102F46]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {project.description}
                </p>

                <p className="mt-6 text-sm font-bold text-[#936D27]">
                  Explore Project →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Security Principles
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            What I Want Security to Accomplish
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
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
              “Resilient systems aren&apos;t built by accident.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}