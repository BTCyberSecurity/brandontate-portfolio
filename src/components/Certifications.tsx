const completed = [
  {
    name: "CompTIA A+",
    title: "Hardware, Software & Troubleshooting",
  },
  {
    name: "AZ-900",
    title: "Microsoft Azure Fundamentals",
  },
];

const currentFocus = [
  {
    name: "SC-900",
    title: "Security, Compliance, and Identity Fundamentals",
    status: "Current",
  },
 {
  name: "Security+",
  title: "CompTIA Security+",
  status: "Planned",
},
  {
    name: "CISSP",
    title: "Certified Information Systems Security Professional",
    status: "4–6 Month Goal",
  },
];

const learningTracks = [
  "Identity & Access",
  "Cloud Security",
  "Security Operations",
  "Governance & Risk",
  "Automation",
  "Infrastructure Security",
];

export default function Certifications() {
  return (
    <section
  id="certifications"
  className="scroll-mt-24 bg-[#F4F1EA] px-6 py-20 lg:px-8"
>
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
            Certifications & Learning
          </p>
        </div>

        <div className="mt-3 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          {/* Left column */}
          <div>
            <h2 className="max-w-lg text-4xl font-black tracking-tight text-[#102F46] sm:text-5xl">
              Building Depth,
              <br />
              Not Just Badges
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              Certifications give me structure, but the real goal is
              deeper understanding. I pair formal study with labs,
              troubleshooting, documentation, and practical application.
            </p>

            <div className="mt-8 rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                Completed
              </p>

              <div className="mt-5 divide-y divide-[#E1E6E7]">
                {completed.map((cert) => (
                  <div
                    key={cert.name}
                    className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                  >
                    <div>
                      <p className="text-3xl font-black text-[#102F46]">
                        {cert.name}
                      </p>

                      <p className="mt-1 text-sm text-[#5E7685]">
                        {cert.title}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-[#E5EBDD] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#55733F]">
  Completed
</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right column */}
          <div>
            <div className="rounded-2xl border border-[#CBD5D8] bg-[#FBFCFA] p-6 shadow-sm sm:p-8">
              <div className="border-b border-[#D9E0E2] pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                  Current Focus
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#102F46]">
                  Security Learning Path
                </h3>
              </div>

              <div className="mt-6 space-y-5">
                {currentFocus.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="flex items-start gap-5 rounded-xl border border-[#D9E0E2] bg-white p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#102F46] text-xs font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <h4 className="text-lg font-black text-[#102F46]">
                            {cert.name}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-[#5E7685]">
                            {cert.title}
                          </p>
                        </div>

                        <span className="w-fit shrink-0 rounded-full bg-[#F3E7CF] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#936D27]">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Learning tracks */}
              <div className="mt-8 border-t border-[#D9E0E2] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                  Learning Tracks
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {learningTracks.map((track) => (
                    <span
                      key={track}
                      className="rounded-md bg-[#E9EFEE] px-3 py-2 text-xs font-semibold text-[#456174]"
                    >
                      {track}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#CBD4D7] pt-5 sm:flex-row sm:items-center">
              <p className="font-serif text-lg italic text-[#456174]">
                “Study gives me the map. Building gives me the terrain.”
              </p>

              <a
                href="/certifications"
                className="text-sm font-bold text-[#2F6F9F] transition hover:text-[#102F46]"
              >
                View Learning Path →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}