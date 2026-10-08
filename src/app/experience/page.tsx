import Header from "@/components/Header";

const platforms = [
  "Microsoft 365",
  "Active Directory",
  "Microsoft Entra ID",
  "Windows",
  "ServiceNow",
  "Oracle OPERA",
  "OPERA Cloud",
  "Aloha POS",
  "Micros POS",
  "Microsoft Teams",
  "BitLocker",
  "MFA",
  "VPN",
  "LAN / WAN",
  "Wi-Fi",
  "A/V",
  "Telecommunications",
  "Mobile Devices",
];

const initiatives = [
  {
    number: "01",
    title: "OPERA / OPERA Cloud Transitions",
    text: "Supporting property-management-system transitions, coordinating technical requirements, validating connectivity and workstation readiness, and helping operational teams move through platform changes with minimal disruption.",
  },
  {
    number: "02",
    title: "ServiceNow Adoption",
    text: "Helping move support activity toward a more structured ticketing workflow so incidents, requests, ownership, escalation, and recurring problems are easier to track.",
  },
  {
    number: "03",
    title: "Endpoint Lifecycle",
    text: "Managing provisioning, configuration, replacement, reassignment, encryption, access, and support across user endpoints and operational workstations.",
  },
  {
    number: "04",
    title: "Network & Wi-Fi Operations",
    text: "Troubleshooting wired and wireless connectivity, coordinating infrastructure changes, validating service availability, and working with vendors or managed providers when problems cross ownership boundaries.",
  },
  {
    number: "05",
    title: "POS & Property Technology",
    text: "Supporting technology tied directly to hotel operations, including Aloha, Micros, property systems, front-desk environments, A/V, telecommunications, and other operational technology.",
  },
  {
    number: "06",
    title: "Documentation & Standards",
    text: "Building clearer technical documentation, repeatable procedures, system inventories, support standards, and escalation paths so knowledge does not remain dependent on one person.",
  },
];

const securityAreas = [
  {
    title: "Identity Lifecycle",
    text: "Thinking about access from onboarding through role changes and offboarding rather than treating account creation as a one-time task.",
  },
  {
    title: "MFA & Access Control",
    text: "Supporting stronger authentication and access decisions while accounting for real users, operational requirements, and recovery scenarios.",
  },
  {
    title: "Endpoint Security",
    text: "Treating provisioning, encryption, patching, ownership, authentication, and device state as part of the operational security lifecycle.",
  },
  {
    title: "Operational Security",
    text: "Balancing risk reduction with availability, guest-facing systems, business continuity, support requirements, and the realities of a 24-hour operating environment.",
  },
];

const leadershipAreas = [
  {
    number: "01",
    title: "Operations",
    text: "Keep technology aligned with what the properties need to operate reliably every day.",
  },
  {
    number: "02",
    title: "Infrastructure",
    text: "Understand the dependencies behind networks, endpoints, property systems, vendors, applications, and support services.",
  },
  {
    number: "03",
    title: "Leadership",
    text: "Prioritize work, coordinate people and vendors, communicate risk, establish ownership, and move issues toward resolution.",
  },
];

const impactAreas = [
  {
    title: "Continuity",
    text: "Reduce avoidable downtime and restore services quickly when operational technology fails.",
  },
  {
    title: "Guest Experience",
    text: "Support the systems employees rely on to deliver a smooth experience to guests.",
  },
  {
    title: "Operational Consistency",
    text: "Create repeatable standards and support practices across multiple locations instead of solving every problem differently.",
  },
  {
    title: "Risk Reduction",
    text: "Improve access, documentation, visibility, lifecycle practices, and technical ownership so preventable issues are less likely to become larger incidents.",
  },
];

export const metadata = {
  title: "Experience",
  description:
    "Professional IT leadership and operations experience from Brandon Tate across hospitality technology, infrastructure, identity, support, security, vendors, and multi-site environments.",
};

export default function ExperiencePage() {
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
            Experience
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Technology in the Context of the Operation
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            My professional experience sits at the intersection of IT
            operations, infrastructure, hospitality technology, leadership,
            support, and security.
          </p>
        </div>
      </section>

      {/* Current Role */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Current Role
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Area Manager of Information Technology
            </h2>

            <p className="mt-3 font-bold text-[#936D27]">
              Hyatt / Bunkhouse Group
            </p>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              I lead day-to-day technology operations across a multi-property
              hospitality environment where availability, support, user
              experience, security, and business operations are tightly
              connected.
            </p>

            <p>
              The role spans traditional IT and property technology: networks,
              endpoints, Microsoft services, identity, property-management
              systems, point-of-sale systems, A/V, telecommunications, vendor
              coordination, and front-of-house and back-of-house support.
            </p>

            <p>
              The work requires moving between technical troubleshooting,
              project coordination, escalation management, standards,
              documentation, security decisions, and communication with both
              technical and operational stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Systems & Platforms
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Supporting the Full Technology Environment
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            Hospitality IT crosses many different platforms. A problem that
            appears to be an endpoint issue may depend on identity, networking,
            a vendor service, a property system, or another part of the
            technology stack.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {platforms.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-[#D7DEDF] bg-white px-4 py-3 text-sm font-bold text-[#456174]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Initiatives */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Selected Initiatives
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Work Beyond the Ticket Queue
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            Much of the role involves improving the environment around support,
            not simply resolving individual incidents.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-6"
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

      {/* Security */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Security & Identity
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Security Inside the Operation
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-white/65">
            My security focus has grown directly out of operating real
            environments where identity, endpoints, availability, access, and
            business continuity cannot be separated from one another.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {securityAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vendors */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Vendor & MSP Leadership
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Owning the Outcome Across Boundaries
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              Modern IT environments depend on managed providers, software
              vendors, telecommunications carriers, installers, property-system
              partners, and other external teams.
            </p>

            <p>
              My responsibility does not end when an issue belongs to another
              vendor. I still need to establish impact, provide useful evidence,
              coordinate the correct parties, track ownership, communicate with
              the operation, and move the issue toward resolution.
            </p>

            <p>
              That requires enough technical depth to challenge assumptions,
              enough operational awareness to prioritize correctly, and enough
              communication to keep multiple groups aligned.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              How I Work
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Operations. Infrastructure. Leadership.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {leadershipAreas.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-6"
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

      {/* Business Impact */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Business Impact
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Technology Has to Improve the Operation
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Operating Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Understand the System Around the Problem
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#5E7685]">
              A technical issue rarely exists in isolation. The most useful
              solutions come from understanding the people, systems,
              dependencies, risks, vendors, and business processes around it.
            </p>

            <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
              <p className="max-w-3xl font-serif text-xl italic leading-8 text-[#456174]">
                “The best technology decisions connect architecture, security,
                operations, and people.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#102F46] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#79B8AE]">
              Beyond the Résumé
            </p>

            <h2 className="mt-2 text-2xl font-black">
              See how I apply the work.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/projects"
              className="rounded-md bg-[#D6A85F] px-6 py-3 text-sm font-bold text-[#102F46] transition hover:bg-white"
            >
              Explore Projects →
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#102F46]"
            >
              View Résumé
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}