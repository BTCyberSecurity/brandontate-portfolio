import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
 return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      {/* =========================================================
          HEADER
      ========================================================== */}
     <Header />

      {/* =========================================================
          HERO
      ========================================================== */}
      <Hero />

      {/* =========================================================
          ABOUT
      ========================================================== */}
      
      {/* ==========================================================
    ABOUT
    ========================================================== */}
<About />

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
      
      <Projects />
    </main>
  );
}