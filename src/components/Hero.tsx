export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F3046] text-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 76% 35%, #2F6F9F 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto grid min-h-[540px] max-w-7xl items-center gap-16 px-6 pb-16 pt-16 lg:min-h-[590px] lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pt-32">
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

          <p className="mt-4 max-w-xl text-xl leading-relaxed text-white/90 sm:text-2xl">
            I build, secure, automate, and operate technology
            environments where downtime isn&apos;t an option.
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
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
              className="rounded-md bg-[#E5B45E] px-7 py-3 text-sm font-bold text-[#102F46] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#F0C574]"
            >
              View My Work →
            </a>

            <a
              href="#about"
              className="rounded-md border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
  );
}