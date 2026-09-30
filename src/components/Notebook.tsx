const entries = [
  {
    category: "Infrastructure",
    title: "Building My Private AI Infrastructure",
    description:
      "Notes from designing a headless Linux AI environment, configuring GPU acceleration, hosting local models, and solving deployment issues.",
    meta: "Build Log",
    href: "#",
  },
  {
    category: "Security",
    title: "MFA Fatigue: Containment and Response",
    description:
      "A practical walkthrough of containment, investigation, account protection, and lessons learned from a simulated Microsoft 365 security incident.",
    meta: "Incident Notes",
    href: "#",
  },
  {
    category: "Networking",
    title: "Designing a Segmented Home Lab Network",
    description:
      "Documenting segmentation, remote access, infrastructure services, troubleshooting, and the transition toward a more structured network.",
    meta: "Lab Notes",
    href: "#",
  },
];

export default function Notebook() {
  return (
    <section
  id="writing"
  className="scroll-mt-24 bg-[#102F46] px-6 py-20 text-white lg:px-8"
>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6A85F]">
            Engineering Notebook
          </p>
        </div>

        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Learn. Build. Document.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/65">
  Notes from the workbench — infrastructure builds, security
  exercises, troubleshooting, experiments, and lessons learned.
</p>
          </div>

          <a
            href="/writing"
            className="text-sm font-bold text-[#E5B45E] transition hover:text-white"
          >
            View All Notes →
          </a>
        </div>

        {/* Entries */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {entries.map((entry, index) => (
            <article
              key={entry.title}
              className="group flex min-h-[320px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D6A85F]/50 hover:bg-white/[0.06] sm:min-h-[340px] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                  {entry.meta}
                </span>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#79B8AE]">
                {entry.category}
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight">
                {entry.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {entry.description}
              </p>

              <div className="mt-auto pt-8">
                <div className="border-t border-white/10 pt-5">
                  <a
                    href={entry.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E5B45E]"
                  >
                    Read Entry

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Notebook philosophy */}
        <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
              Document
            </p>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Capture what worked, what failed, and why.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
              Understand
            </p>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Go beyond the fix and understand the system behind it.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
              Improve
            </p>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Turn every problem into reusable knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}