import Header from "@/components/Header";

const completed = [
  {
    name: "CompTIA A+",
    description: "Hardware, Software & Troubleshooting",
  },
  {
    name: "AZ-900",
    description: "Microsoft Azure Fundamentals",
  },
];

const current = [
  {
    name: "SC-900",
    description: "Security, Compliance, and Identity Fundamentals",
    status: "Current",
  },
  {
    name: "Security+",
    description: "CompTIA Security+",
    status: "Planned",
  },
  {
    name: "CISSP",
    description: "Certified Information Systems Security Professional",
    status: "4–6 Month Goal",
  },
];

const tracks = [
  "Identity & Access",
  "Cloud Security",
  "Security Operations",
  "Governance & Risk",
  "Automation",
  "Infrastructure Security",
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
            Certifications & Learning
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Study the Map.
            <br className="hidden sm:block" />
            Build the Terrain.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            Certifications give structure to my learning. Labs, infrastructure,
            and real operational work turn that knowledge into experience.
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

          <div className="mt-10 rounded-2xl border border-[#CBD5D8] bg-white px-5 shadow-sm sm:px-8">
            {completed.map((cert) => (
              <div
                key={cert.name}
                className="grid gap-3 border-b border-[#D9E0E2] py-5 first:pt-6 last:border-b-0 last:pb-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
              >
                <div>
                  <h3 className="text-xl font-black">{cert.name}</h3>

                  <p className="mt-1 text-sm text-[#5E7685]">
                    {cert.description}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-[#E5EBDD] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#55733F]">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current roadmap */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
            Roadmap
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Current Certification Focus
          </h2>

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

                <p className="mt-2 text-sm leading-6 text-[#5E7685]">
                  {cert.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Learning Tracks
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Building Depth With Direction
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              The goal is not to collect disconnected certifications. Each
              credential should reinforce a broader technical capability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tracks.map((track, index) => (
              <div
                key={track}
                className="flex items-center gap-4 rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <span className="text-xs font-black tracking-[0.18em] text-[#D6A85F]">
                  0{index + 1}
                </span>

                <p className="font-bold">{track}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning philosophy */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#79B8AE]">
              Learn
            </p>

            <p className="mt-3 text-sm leading-6 text-white/65">
              Use structured study to understand concepts, terminology,
              frameworks, and architecture.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#79B8AE]">
              Build
            </p>

            <p className="mt-3 text-sm leading-6 text-white/65">
              Apply those concepts in labs where configuration decisions and
              failures have visible consequences.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#79B8AE]">
              Operate
            </p>

            <p className="mt-3 text-sm leading-6 text-white/65">
              Connect formal learning to the realities of supporting systems,
              users, infrastructure, security, and the business.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-l-2 border-[#D6A85F] pl-5">
          <p className="max-w-3xl font-serif text-xl italic leading-8 text-white/70">
            “Study gives me the map. Building gives me the terrain.”
          </p>
        </div>
      </section>
    </main>
  );
}