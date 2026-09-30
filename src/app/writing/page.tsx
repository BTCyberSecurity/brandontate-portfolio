import Header from "@/components/Header";

const entries = [
  {
    number: "01",
    category: "Infrastructure",
    type: "Build Log",
    title: "Building My Private AI Infrastructure",
    description:
      "Notes from building a locally controlled AI server around Linux, GPU acceleration, containers, remote administration, and local language models.",
    topics: ["Linux", "AI", "GPU", "Docker", "Infrastructure"],
  },
  {
    number: "02",
    category: "Security",
    type: "Incident Notes",
    title: "MFA Fatigue: Containment and Response",
    description:
      "A practical look at MFA fatigue attacks, how the attack works, what defenders should investigate, and how identity controls can reduce risk.",
    topics: ["IAM", "MFA", "Identity", "Incident Response"],
  },
  {
    number: "03",
    category: "Networking",
    type: "Lab Notes",
    title: "Designing a Segmented Home Lab Network",
    description:
      "Documenting how I think about separating infrastructure, clients, servers, management interfaces, and lab services while keeping the environment manageable.",
    topics: ["Networking", "VLANs", "Segmentation", "Security"],
  },
];

const themes = [
  {
    title: "Build Logs",
    text: "Documenting infrastructure and security projects from planning through implementation.",
  },
  {
    title: "Troubleshooting",
    text: "Capturing failures, symptoms, investigation steps, root causes, and lessons learned.",
  },
  {
    title: "Security Notes",
    text: "Breaking down identity, cloud security, incident response, governance, and defensive concepts.",
  },
  {
    title: "Experiments",
    text: "Testing ideas around automation, private AI, Linux, infrastructure, and emerging technology.",
  },
];

export const metadata = {
  title: "Writing",
  description:
    "Engineering notes, security research, infrastructure build logs, troubleshooting documentation, and technical writing by Brandon Tate.",
};

export default function WritingPage() {
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
            Engineering Notebook
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Learn. Build.
            <br className="hidden sm:block" />
            Document.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            Notes from the workbench — infrastructure builds, security
            exercises, troubleshooting, experiments, and lessons learned.
          </p>
        </div>
      </section>

      {/* Purpose */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Why I Write
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Documentation Is Part of the Work
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5E7685]">
            <p>
              Writing forces me to explain what I built, why I made particular
              decisions, what failed, and what I would change the next time.
            </p>

            <p>
              That makes documentation useful for more than remembering
              commands. It becomes a way to improve troubleshooting,
              architecture, communication, and technical judgment.
            </p>

            <p>
              This notebook will continue growing alongside my infrastructure,
              cybersecurity, identity, automation, and AI work.
            </p>
          </div>
        </div>
      </section>

      {/* Entries */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Notebook
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Current Notes
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {entries.map((entry) => (
              <article
                key={entry.number}
                className="flex min-h-[320px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:min-h-[340px] sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                    {entry.number}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#79B8AE]">
                    {entry.type}
                  </span>
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  {entry.category}
                </p>

                <h3 className="mt-3 text-2xl font-black">{entry.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  {entry.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {entry.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white/55"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Writing areas */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
            Areas
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            What I&apos;ll Document
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {themes.map((theme, index) => (
              <article
                key={theme.title}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-black">{theme.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {theme.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-l-2 border-[#D6A85F] pl-5">
            <p className="max-w-3xl font-serif text-xl italic leading-8 text-[#456174]">
              “Documenting what I learn turns one troubleshooting session into
              knowledge I can reuse.”
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#0F3046] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6A85F]">
              Hands-On Work
            </p>

            <h2 className="mt-2 text-2xl font-black">
              See the systems behind the notes.
            </h2>
          </div>

          <a
            href="/#projects"
            className="w-fit rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#102F46]"
          >
            Explore Projects →
          </a>
        </div>
      </section>
    </main>
  );
}