import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Notebook from "@/components/Notebook";
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
  className="relative scroll-mt-24 overflow-hidden bg-[#0F3046] text-white"
>
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, #147BC1 0%, transparent 42%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-[.8fr_1.1fr_.55fr] lg:gap-12 lg:px-8">
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
              href="/security"
              className="mt-7 inline-flex rounded-md border border-[#D6A85F] px-6 py-3 text-sm font-bold text-[#E5B45E] transition hover:bg-[#D6A85F] hover:text-[#102F46]"
            >
             Explore Security →
            </a>
          </div>

          {/* Security operating model */}
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Identity",
                  text: "Access control, MFA, role design, account lifecycle, and least privilege.",
                },
                {
                  number: "02",
                  title: "Protect",
                  text: "Secure configuration, endpoint hygiene, network segmentation, and hardening.",
                },
                {
                  number: "03",
                  title: "Detect",
                  text: "Logging, monitoring, alert triage, and identifying abnormal behavior.",
                },
                {
                  number: "04",
                  title: "Respond",
                  text: "Containment, investigation, recovery, communication, and documentation.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#D6A85F]/60 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-black tracking-[0.22em] text-[#D6A85F]">
                      {item.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-white/20 transition group-hover:bg-[#D6A85F]" />
                  </div>

                  <h3 className="mt-4 text-lg font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Improve */}
            <div className="mt-4 rounded-xl border border-[#D6A85F]/30 bg-[#D6A85F]/[0.07] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D6A85F]/50 text-xs font-black text-[#D6A85F]">
                  05
                </span>

                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-[#E5B45E]">
                    Improve
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Turn incidents, audits, and operational friction into
                    stronger systems.
                  </p>
                </div>
              </div>
            </div>
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

<Experience />

<Notebook />

<Certifications />

<Contact />
    </main>
  );
}