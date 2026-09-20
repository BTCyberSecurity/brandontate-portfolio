export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#"
          className="text-3xl font-black tracking-tight text-white"
          aria-label="Brandon Tate home"
        >
          B<span className="text-[#4FA3D1]">T</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a className="transition hover:text-white" href="#about">
            About
          </a>

          <a className="transition hover:text-white" href="#experience">
            Experience
          </a>

          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>

          <a className="transition hover:text-white" href="#security">
            Security
          </a>

          <a className="transition hover:text-white" href="#lab">
            Lab
          </a>

          <a className="transition hover:text-white" href="#writing">
            Writing
          </a>

          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="#"
          className="rounded-md border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2537]"
        >
          Résumé ↓
        </a>
      </div>
    </header>
  );
}