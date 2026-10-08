"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Security", href: "/security" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Writing", href: "/writing" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "EN", label: "English", href: "/" },
    { code: "ES", label: "Español", href: "/es" },
    { code: "JA", label: "日本語", href: "/ja" },
    { code: "RU", label: "Русский", href: "/ru" },
  ];

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0F3046]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-black tracking-tight text-white"
          aria-label="Brandon Tate home"
          onClick={() => {
            setMenuOpen(false);
            setLanguageOpen(false);
          }}
        >
          B<span className="text-[#4FA3D1]">T</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              aria-label="Select language"
              aria-expanded={languageOpen}
            >
              EN
              <span
                className={`text-xs transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#102F46] shadow-xl">
                {languages.map((language) => (
                  <a
                    key={language.code}
                    href={language.href}
                    onClick={() => setLanguageOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    <span>{language.label}</span>
                    <span className="text-xs font-bold text-[#D6A85F]">
                      {language.code}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Desktop résumé */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2537]"
          >
            Résumé ↓
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D6A85F]/60 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((open) => !open);
            setLanguageOpen(false);
          }}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0F3046] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[850px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5">
          <div className="divide-y divide-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-3.5 text-sm font-semibold text-white/75 transition hover:text-white"
              >
                <span>{item.label}</span>

                <span className="text-[#D6A85F] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Mobile language selector */}
          <div className="mt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
              Language
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {languages.map((language) => (
                <a
                  key={language.code}
                  href={language.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{language.label}</span>
                    <span className="text-xs font-bold text-[#D6A85F]">
                      {language.code}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-md bg-[#E5B45E] px-6 py-3.5 text-sm font-bold text-[#102F46] transition hover:bg-[#F0C574]"
          >
            View Résumé ↓
          </a>
        </nav>
      </div>
    </header>
  );
}