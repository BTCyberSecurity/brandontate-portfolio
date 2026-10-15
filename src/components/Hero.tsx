import LabArchitectureDiagram from "./LabArchitectureDiagram";
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

      <div className="content-shell relative mx-auto grid min-h-[540px] max-w-7xl items-center gap-16 px-6 pb-16 pt-16 lg:min-h-[590px] lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pt-16">
        {/* Hero copy */}
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A85F]">
            IT Operations & Technology Leadership
          </p>

          <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            BRANDON{" "}
            <span className="text-[#4FA3D1]">
              TATE
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-xl leading-relaxed text-white/90 sm:text-2xl">
            I lead technology operations and build practical expertise in infrastructure, network, and security architecture.
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

        <LabArchitectureDiagram />
      </div>
    </section>
  );
}