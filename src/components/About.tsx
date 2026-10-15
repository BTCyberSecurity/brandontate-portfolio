import Link from "next/link";


export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#F4F1EA]"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16  lg:px-8 lg:py-16">
        {/* About copy */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#28638F]">
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
            Years of supporting business-critical systems shape the questions I bring to architecture: how a design handles failure, controls access, and remains supportable.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex rounded-md border border-[#2F6F9F] px-6 py-3 text-sm font-bold text-[#102F46] transition hover:bg-[#102F46] hover:text-white"
          >
            Read My Story →
          </Link>
        </div>

      </div>
    </section>
  );
}