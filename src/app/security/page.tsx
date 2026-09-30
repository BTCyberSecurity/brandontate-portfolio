import Header from "@/components/Header";

const operatingModel = [
  {
    number: "01",
    title: "Identity",
    text: "Access control, MFA, role design, account lifecycle, least privilege, and privileged workflows.",
  },
  {
    number: "02",
    title: "Protect",
    text: "Secure configuration, endpoint hygiene, network segmentation, hardening, and reduction of unnecessary exposure.",
  },
  {
    number: "03",
    title: "Detect",
    text: "Logging, monitoring, alert triage, abnormal behavior, and building better visibility into systems.",
  },
  {
    number: "04",
    title: "Respond",
    text: "Containment, investigation, recovery, communication, documentation, and repeatable incident workflows.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Turn incidents, audits, troubleshooting, and operational friction into stronger systems and better controls.",
  },
];

const focusAreas = [
  "Identity & Access Management",
  "Microsoft Entra ID",
  "Conditional Access",
  "Cloud Security",
  "Security Operations",
  "Governance & Risk",
  "Endpoint Security",
  "Network Segmentation",
  "Logging & Monitoring",
  "Automation",
];

export const metadata = {
  title: "Security",
  description:
    "Brandon Tate's cybersecurity approach, security operating model, focus areas, and hands-on security projects.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-6 pb-20 pt-24 text-white sm:pt-32 lg:px-8">
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
            Security as Part of
            <br className="hidden sm:block" />
            the System
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            My focus is practical security: identity, hardening, visibility,
            segmentation, governance, response, and security controls that
            support the business instead of fighting it.
          </p>
        </div>
      </section>

      {/* Philosophy */}
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
              That is why identity, access control, logging, segmentation,
              hardening, documentation, automation, and recovery are recurring
              themes throughout my labs and projects.
            </p>
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
            Operating Model
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            From Fundamentals to Real-World Application
          </h2>

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

      {/* Focus */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Current Focus
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Building Deeper Security Capability
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              I am combining structured certification study with hands-on
              infrastructure and security labs.
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

      {/* Projects */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Security Projects
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Learning Through Building
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href="/projects/identity-zero-trust"
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D6A85F]">
                Identity & Access
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Identity & Zero Trust Lab
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Conditional Access, MFA, RBAC, account lifecycle, privileged
                workflows, and practical identity design.
              </p>

              <p className="mt-6 text-sm font-bold text-[#79B8AE]">
                Explore Project →
              </p>
            </a>

            <a
              href="/projects/sentinelforge"
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D6A85F]">
                Security Operations
              </p>

              <h3 className="mt-3 text-2xl font-black">
                AI-Assisted Security Operations
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Exploring local AI for event classification, log
                summarization, incident-response assistance, and workflow
                automation.
              </p>

              <p className="mt-6 text-sm font-bold text-[#79B8AE]">
                Explore Project →
              </p>
            </a>
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