import Link from "next/link";
export default function Contact() {
  const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/btcybersecurity/",
  },
  {
    label: "GitHub",
    href: "https://github.com/BTCyberSecurity/",
  },
  {
    label: "Email",
    href: "mailto:brandontate@outlook.com",
  },
  {
    label: "Résumé",
    href: "/resume",
  },
];

  return (
    <section
  id="contact"
  className="scroll-mt-24 bg-[#0F3046] px-6 py-20 text-white lg:px-8"
>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
          {/* Left side */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6A85F]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6A85F]">
                Contact
              </p>
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something
              <br />
              Worth Running.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              For career opportunities or technical collaboration, email me or connect on LinkedIn.
            </p>

            <div className="mt-8 flex flex-col gap-4 min-[380px]:flex-row min-[380px]:flex-wrap">
  <Link
    href="mailto:brandontate@outlook.com"
    className="w-full rounded-md bg-[#E5B45E] px-7 py-3.5 text-center text-sm font-bold text-[#102F46] transition hover:-translate-y-0.5 hover:bg-[#F0C574] min-[380px]:w-auto"
  >
    Get in Touch →
  </Link>

  <Link
    href="/resume"
    className="w-full rounded-md border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 min-[380px]:w-auto"
  >
    View Résumé
  </Link>
</div>
          </div>

          {/* Right side */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#79B8AE]">
                Connect
              </p>

              <div className="mt-6 divide-y divide-white/10">
                {links.map((link) => (
<Link
  key={link.label}
  href={link.href}
  target={link.href.startsWith("http") ? "_blank" : undefined}
  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
  className="group flex items-center justify-between py-4 text-sm font-semibold text-white/75 transition hover:text-white"
>
  <span>{link.label}</span>

  <span className="text-[#D6A85F] transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}