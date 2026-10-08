import Header from "@/components/Header";

const contactMethods = [
  {
    label: "Email",
    value: "brandontate@outlook.com",
    href: "mailto:brandontate@outlook.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/btcybersecurity",
    href: "https://www.linkedin.com/in/btcybersecurity/",
  },
  {
    label: "GitHub",
    value: "github.com/BTCyberSecurity",
    href: "https://github.com/BTCyberSecurity",
  },
  {
    label: "Résumé",
    value: "View résumé",
    href: "/resume.pdf",
  },
];

const focusAreas = [
  "IT Leadership",
  "Infrastructure",
  "Cybersecurity",
  "Identity & Access",
  "Cloud Security",
  "Private AI",
  "Automation",
  "Technical Operations",
];

const reasonsToConnect = [
  {
    number: "01",
    title: "IT Leadership",
    text: "Roles involving infrastructure, operations, security, service delivery, and technology leadership.",
  },
  {
    number: "02",
    title: "Cybersecurity",
    text: "Opportunities involving IAM, GRC, SecOps, cloud security, endpoint security, and operational risk.",
  },
  {
    number: "03",
    title: "Technical Collaboration",
    text: "Projects involving infrastructure, private AI, automation, lab development, troubleshooting, and systems design.",
  },
  {
    number: "04",
    title: "Professional Networking",
    text: "Conversations with people working across technology leadership, security, infrastructure, and operations.",
  },
];

export const metadata = {
  title: "Contact",
  description:
    "Contact Brandon Tate about IT leadership, infrastructure, cybersecurity, identity, cloud security, private AI, and technical collaboration.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F3046] px-5 pb-20 pt-16 text-white sm:px-6 sm:pt-20 lg:px-8">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 75% 35%, #147BC1 0%, transparent 42%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
            Contact
          </p>

          <h1 className="mt-4 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s Connect
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-xl sm:leading-8">
            For IT leadership, infrastructure, cybersecurity, identity,
            cloud security, private AI, and technical collaboration
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Get in Touch
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Contact & Professional Links
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#5E7685]">
            The easiest way to reach me is by email or LinkedIn. You can also
            explore my technical work on GitHub or download my résumé directly.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contactMethods.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F6F9F]">
                  {item.label}
                </p>

                <p className="mt-3 text-xl font-black text-[#102F46]">
                  {item.value}
                </p>

                <p className="mt-5 text-sm font-bold text-[#936D27] transition group-hover:text-[#102F46]">
                  Open →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
                Areas of Interest
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Where I&apos;m Focused
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#5E7685]">
              My work sits at the intersection of operations, infrastructure,
              security, identity, automation, and technology leadership.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#D7DEDF] bg-white p-4 sm:p-5"
              >
                <p className="font-bold text-[#102F46]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Connect */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2F6F9F]">
              Why Connect
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Conversations I&apos;m Open To
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasonsToConnect.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#CBD5D8] bg-white p-5 shadow-sm"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#D6A85F]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5E7685]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#102F46] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">
              Next Step
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Start With the Work
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/65">
              If you want to understand how I approach technology, the best
              place to start is with the projects, security work, and technical
              notes already documented on this site.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/projects"
                className="rounded-md bg-[#D6A85F] px-6 py-3 text-sm font-bold text-[#102F46] transition hover:bg-white"
              >
                View Projects
              </a>

              <a
                href="/writing"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#102F46]"
              >
                Engineering Notebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}