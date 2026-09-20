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
    icon: "◎",
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
    detail: "Diagnose · Fix · Improve",
  },
  {
    icon: "↗",
    title: "Continuous Learning",
    detail: "Security · Cloud · AI",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F4F1EA]">
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
  );
}