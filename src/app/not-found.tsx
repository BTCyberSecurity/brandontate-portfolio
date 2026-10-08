import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0F3046] text-white">
      <Header />

      <section className="flex min-h-screen items-center px-6 py-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            404 Â· Not Found
          </p>

          <div className="mt-6 max-w-4xl">
            <h1 className="text-[4rem] font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Lost Route.
              <br />
              Known Destination.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              The page you requested does not exist, may have moved, or is
              still being built.
            </p>

            <div className="mt-10 flex flex-col gap-4 min-[380px]:flex-row">
              <a
                href="/"
                className="rounded-md bg-[#E5B45E] px-6 py-3 text-center text-sm font-bold text-[#102F46] transition hover:bg-[#F0C574]"
              >
                Return Home
              </a>

              <a
                href="/projects"
                className="rounded-md border border-white/30 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#102F46]"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="mt-20 border-t border-white/10 pt-8">
            <p className="font-mono text-xs text-white/35">
              ERROR_ROUTE_NOT_FOUND
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
