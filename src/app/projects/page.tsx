import Header from "@/components/Header";

export const metadata = {
  title: "Projects",
  description: "Technical projects and hands-on labs from Brandon Tate.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      <section className="bg-[#0F3046] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Projects & Labs
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Projects
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Hands-on work across infrastructure, identity, security, private AI,
            and systems engineering.
          </p>
        </div>
      </section>
    </main>
  );
}