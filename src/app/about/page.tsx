import Header from "@/components/Header";

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

export const metadata = {
  title: "About",
  description:
    "Learn more about Brandon Tate, an IT leader focused on infrastructure, cybersecurity, identity, automation, operations, and private AI.",
};

export default function AboutPage() {
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
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              About Me
            </p>

            <h1 className="mt-4 max-w-5xl text-[2.35rem] font-black leading-[0.98] tracking-tight min-[420px]:text-[2.6rem] sm:text-5xl lg:text-6xl">
  Technology Should Make the Operation Stronger
</h1>

            <p className="mt-6 max-w-4xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
              I work at the intersection of IT operations, infrastructure,
              leadership, and security — with a growing focus on identity,
              automation, cloud security, and private AI.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Background
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Built Through Operations
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
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
              Today, I am building deeper expertise in cybersecurity, identity,
              cloud security, automation, and AI while continuing to approach
              technology from an operational perspective.
            </p>

            <p>
              My goal is to grow into leadership roles where I can connect
              technical architecture, security, people, and business strategy
              instead of treating them as separate disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
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

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
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
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Direction
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Where I&apos;m Going
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              I&apos;m deliberately expanding from broad IT operations into
              deeper security and technology leadership.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Identity & Access Management",
              "Cloud Security",
              "Security Operations",
              "Governance & Risk",
              "Infrastructure Security",
              "Automation",
              "Private AI",
              "Technology Leadership",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <p className="font-bold text-[#102F46]">{item}</p>
              </div>
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
              Continue
            </p>

            <h2 className="mt-2 text-2xl font-black">
              See how that translates into real work.
            </h2>
          </div>

          <a
            href="/#projects"
            className="w-fit rounded-md bg-[#102F46] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A4562]"
          >
            Explore Projects →
          </a>
        </div>
      </section>
    </main>
  );
}