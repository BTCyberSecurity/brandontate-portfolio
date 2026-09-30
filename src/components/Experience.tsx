export default function Experience() {
  const responsibilities = [
    "Multi-property IT operations",
    "Front desk and back-of-house systems",
    "Network and infrastructure support",
    "Vendor and MSP coordination",
    "Oracle OPERA / PMS environments",
    "POS and A/V systems",
    "Infrastructure upgrades and migrations",
    "User support and operational continuity",
    "Access control and system administration",
  ];

  const highlights = [
    {
      number: "01",
      title: "Operations",
      text: "Supporting technology environments where uptime, guest experience, and staff productivity all matter.",
    },
    {
      number: "02",
      title: "Infrastructure",
      text: "Managing networks, endpoints, hotel systems, back-office technology, and modernization efforts.",
    },
    {
      number: "03",
      title: "Leadership",
      text: "Coordinating vendors, MSP partners, internal teams, projects, escalations, and operational priorities.",
    },
  ];

  return (
    <section
  id="experience"
  className="scroll-mt-24 border-t border-[#D7DEDF] bg-[#E9ECE8] px-6 py-20 lg:px-8"
>
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
            Experience
          </p>
        </div>

        <div className="mt-3 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          {/* Left column */}
          <div>
            <h2 className="max-w-lg text-4xl font-black tracking-tight text-[#102F46] sm:text-5xl">
              Technology Leadership
              <br />
              in Real Operations
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              My work sits at the intersection of infrastructure,
              operations, support, security, vendors, and people.
              I focus on keeping technology dependable while
              improving the systems behind it.
            </p>

            <div className="mt-8 border-l-2 border-[#D6A85F] pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                Current Role
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#102F46]">
                Area Manager of IT
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#5E7685]">
                Hyatt / Bunkhouse Group
              </p>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#5E7685]">
                Supporting multi-site hospitality technology environments
                across operational systems, infrastructure, vendors,
                end users, and enterprise platforms.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="rounded-2xl border border-[#C9D3D8] bg-[#F7F8F6] p-5 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-[#D9E0E2] pb-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2F6F9F]">
                    Scope of Responsibility
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-[#102F46]">
                    Multi-Site IT Operations
                  </h3>
                </div>

                <p className="text-sm font-semibold text-[#936D27]">
                  Hospitality Technology
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {responsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A85F]" />

                    <p className="text-sm leading-6 text-[#456174]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-8 grid gap-4 border-t border-[#D9E0E2] pt-7 md:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
                  >
                    <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                      {item.number}
                    </span>

                    <h4 className="mt-4 text-lg font-black text-[#102F46]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#5E7685]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy line */}
            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#CBD4D7] pt-5 sm:flex-row sm:items-center">
              <p className="font-serif text-lg italic text-[#456174]">
                “Good IT disappears into the operation — because it works.”
              </p>

              <a
                href="/experience"
                className="text-sm font-bold text-[#2F6F9F] transition hover:text-[#102F46]"
              >
                View Experience →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}