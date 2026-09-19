import SecurityLifecycle from "@/components/SecurityLifecycle";

export default function Home() {
  const strengths = [
    {
      icon: "☁",
      title: "Infrastructure",
      detail: "Build · Deploy · Support",
    },
    {
      icon: "◇",
      title: "Identity & Access",
      detail: "Entra ID · IAM · GRC",
    },
    {
      icon: "◉",
      title: "Automation",
      detail: "Script · Integrate · Scale",
    },
    {
      icon: "⚙",
      title: "Operations",
      detail: "Systems · Vendors · Teams",
    },
    {
      icon: "✦",
      title: "Problem Solving",
      detail: "Analyze · Troubleshoot · Improve",
    },
    {
      icon: "▤",
      title: "Continuous Learning",
      detail: "Certs · Labs · Real World",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      {/* =========================================================
          HEADER
      ========================================================== */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#"
            className="text-3xl font-black tracking-tight text-white"
            aria-label="Brandon Tate home"
          >
            B<span className="text-[#4FA3D1]">T</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a
              className="transition hover:text-white"
              href="#about"
            >
              About
            </a>

            <a
              className="transition hover:text-white"
              href="#experience"
            >
              Experience
            </a>

            <a
              className="transition hover:text-white"
              href="#projects"
            >
              Projects
            </a>

            <a
              className="transition hover:text-white"
              href="#security"
            >
              Security
            </a>

            <a
              className="transition hover:text-white"
              href="#lab"
            >
              Lab
            </a>

            <a
              className="transition hover:text-white"
              href="#writing"
            >
              Writing
            </a>

            <a
              className="transition hover:text-white"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <a
            href="#"
            className="rounded-md border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2537]"
          >
            Résumé ↓
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0F3046] text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 76% 35%, #2F6F9F 0%, transparent 40%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[590px] max-w-7xl items-center gap-16 px-6 pb-16 pt-32 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          {/* Hero copy */}
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A85F]">
              IT Leader · Builder · Problem Solver
            </p>

            <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              BRANDON{" "}
              <span className="text-[#4FA3D1]">
                TATE
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/90 sm:text-2xl">
              I build, secure, automate, and operate technology
              environments where downtime isn&apos;t an option.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
              <span>Infrastructure</span>

              <span className="text-[#D6A85F]">
                |
              </span>

              <span>Security</span>

              <span className="text-[#D6A85F]">
                |
              </span>

              <span>Automation</span>

              <span className="text-[#D6A85F]">
                |
              </span>

              <span>People</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-[#E5B45E] px-7 py-3.5 text-sm font-bold text-[#102F46] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#F0C574]"
              >
                View My Work →
              </a>

              <a
                href="#about"
                className="rounded-md border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                About Me
              </a>
            </div>

            <p className="mt-9 font-serif text-lg italic text-white/85">
              “Learn. Build. Break. Fix. Improve. Repeat.”
            </p>
          </div>

          {/* Temporary hero visual */}
          <div className="relative hidden min-h-[360px] lg:block">
            <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-white/[0.035]" />

            <div className="absolute inset-14 flex items-center justify-center rounded-[1.75rem] border border-[#79B8AE]/25 bg-[#102F46]/35">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#79B8AE]/50 bg-[#17384D] text-3xl font-black shadow-2xl">
                  B
                  <span className="text-[#4FA3D1]">
                    T
                  </span>
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#79B8AE]">
                  Infrastructure · Security
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                  Automation · Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section
        id="about"
        className="bg-[#F4F1EA]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          {/* About copy */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                About Me
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#102F46]">
              Curiosity. Systems. People.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#456174]">
              I&apos;m Brandon — an IT professional,
              infrastructure builder, and lifelong learner.
              I enjoy understanding how things work, solving
              complex problems, and using technology to make
              people&apos;s work easier.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#456174]">
              My career has grown from hands-on support to
              multi-site IT operations, and I&apos;m continuing
              to develop deeper expertise in identity, security,
              automation, and AI.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex rounded-md border border-[#2F6F9F] px-6 py-3 text-sm font-bold text-[#102F46] transition hover:bg-[#102F46] hover:text-white"
            >
              Read My Story →
            </a>
          </div>

          {/* Capability grid */}
          <div className="grid grid-cols-2 border-l border-t border-[#C9D3D8] sm:grid-cols-3">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="flex min-h-36 flex-col items-center justify-center border-b border-r border-[#C9D3D8] px-4 text-center"
              >
                <span className="mb-3 text-3xl text-[#147BC1]">
                  {strength.icon}
                </span>

                <h3 className="text-sm font-bold text-[#102F46]">
                  {strength.title}
                </h3>

                <p className="mt-1 text-xs text-[#5E7685]">
                  {strength.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITY
      ========================================================== */}
      <section
        id="security"
        className="relative overflow-hidden bg-[#0F3046] text-white"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, #147BC1 0%, transparent 42%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[.8fr_1.1fr_.55fr] lg:px-8">
          {/* Security copy */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6A85F]">
                Security
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              From Fundamentals
              <br />
              to Real-World Application
            </h2>

            <div className="mt-5 h-0.5 w-10 bg-[#D6A85F]" />

            <p className="mt-5 max-w-md leading-7 text-white/75">
              Security isn&apos;t a separate discipline —
              it&apos;s part of everything I build. I focus on
              practical security that supports operations,
              users, and the business.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex rounded-md border border-[#D6A85F] px-6 py-3 text-sm font-bold text-[#E5B45E] transition hover:bg-[#D6A85F] hover:text-[#102F46]"
            >
              Explore Security →
            </a>
          </div>

          {/* Interactive lifecycle */}
          <div>
            <SecurityLifecycle />
          </div>

          {/* Security philosophy */}
          <div className="hidden lg:block">
            <blockquote className="font-serif text-2xl italic leading-relaxed text-white/85">
              “Resilient
              <br />
              systems aren&apos;t
              <br />
              built by accident.”
            </blockquote>

            <div className="mt-5 h-0.5 w-10 bg-[#D6A85F]" />
          </div>
        </div>
      </section>
    </main>
  );
}