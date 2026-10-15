import { pageMetadata } from "@/lib/metadata";
import Header from "@/components/Header";

const contactMethods = [
  {
    label: "Email",
    value: "brandontate@outlook.com",
    href: "mailto:brandontate@outlook.com",
    action: "Send Email →",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/btcybersecurity",
    href: "https://www.linkedin.com/in/btcybersecurity/",
    action: "View LinkedIn →",
  },
  {
    label: "GitHub",
    value: "github.com/BTCyberSecurity",
    href: "https://github.com/BTCyberSecurity",
    action: "View GitHub →",
  },
  {
    label: "Résumé",
    value: "View résumé",
    href: "/resume.pdf",
    action: "View Résumé →",
  },
];

const focusAreas = [
  "Infrastructure Architecture",
  "Network & Security Architecture",
  "Identity & Cloud Security",
  "Private AI Infrastructure",
  "Systems Reliability",
  "Technology Leadership & Strategy"
];

export const metadata = pageMetadata("/contact", {
  title: "Contact",
  description:
    "Contact Brandon Tate about IT leadership, infrastructure, cybersecurity, identity, cloud security, private AI, and technical collaboration.",
});

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
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
            For career opportunities, project collaboration, or a conversation about the work.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#28638F]">
              Get in Touch
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Contact & Professional Profiles
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#506879]">
            The easiest way to reach me is by email. You can also
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
                className="group min-w-0 rounded-2xl border border-[#CBD5D8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#28638F]">
                  {item.label}
                </p>

                <p className="mt-3 text-xl font-black text-[#102F46] [overflow-wrap:anywhere]">
                  {item.value}
                </p>

                <p className="mt-5 text-sm font-bold text-[#805B1F] transition group-hover:text-[#102F46]">
                  {item.action}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="bg-[#E9ECE8] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#28638F]">
                Areas of Focus
              </p>
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Where I&apos;m Focused
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#506879]">
              I lead IT operations while developing practical architecture skills through labs and projects. My focus is secure, resilient systems, from infrastructure and identity to private AI.
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
    </main>
  );
}