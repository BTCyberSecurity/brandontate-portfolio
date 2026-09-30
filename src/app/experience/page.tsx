import Header from "@/components/Header";

const responsibilities = [
  "Multi-property IT operations",
  "Front desk and back-of-house technology",
  "Network and infrastructure support",
  "Vendor and MSP coordination",
  "Oracle OPERA / PMS environments",
  "POS and A/V systems",
  "Infrastructure upgrades and migrations",
  "Endpoint provisioning and support",
  "Access control and system administration",
  "Operational troubleshooting and continuity",
];

const leadershipAreas = [
  {
    number: "01",
    title: "Operations",
    text: "Supporting environments where technical outages directly affect employees, guests, revenue, and service delivery.",
  },
  {
    number: "02",
    title: "Infrastructure",
    text: "Coordinating network, endpoint, application, server, vendor, and property technology as parts of one operating environment.",
  },
  {
    number: "03",
    title: "Leadership",
    text: "Balancing technical priorities, stakeholder needs, vendor relationships, project execution, and operational risk.",
  },
];

export const metadata = {
  title: "Experience",
  description:
    "Professional experience and technology leadership background of Brandon Tate.",
};

export default function ExperiencePage() {
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
            Experience
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Technology Leadership
            <br className="hidden sm:block" />
            Grounded in Operations
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            My experience has been shaped by supporting real businesses where
            systems need to work reliably, securely, and with as little
            operational friction as possible.
          </p>
        </div>
      </section>

      {/* Current role */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Current Role
            </p>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight">
                Area Manager of IT
              </h2>

              <p className="mt-3 text-lg font-bold text-[#936D27]">
                Hyatt / Bunkhouse Group
              </p>

              <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
                Supporting technology across multiple hospitality properties,
                coordinating infrastructure, vendors, business systems, and
                day-to-day operational support.
              </p>
            </div>

            <div className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                Scope
              </p>

              <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {responsibilities.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A85F]" />
                    <p className="text-sm leading-6 text-[#5E7685]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            The Work Goes Beyond Support
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

      {/* Operating philosophy */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Operating Philosophy
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Technology Has to Survive Contact With Reality
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/65">
            <p>
              Hospitality technology is a useful test of operational thinking.
              Systems interact with employees, guests, vendors, networks,
              payment systems, property applications, physical spaces, and
              business processes every day.
            </p>

            <p>
              That environment has taught me to value reliability,
              documentation, communication, recovery planning, and clear
              ownership just as much as technical capability.
            </p>

            <p>
              It is also why I am increasingly interested in security and
              architecture: the strongest environments are designed to be
              manageable before something goes wrong.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-l-2 border-[#D6A85F] pl-5">
          <p className="max-w-3xl font-serif text-xl italic leading-8 text-white/70">
            “Good IT disappears into the operation — because it works.”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
              Hands-On Work
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Explore the systems I&apos;m building.
            </h2>
          </div>

          <a
            href="/#projects"
            className="w-fit rounded-md bg-[#102F46] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A4562]"
          >
            View Projects →
          </a>
        </div>
      </section>
    </main>
  );
}