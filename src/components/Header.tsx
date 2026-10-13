"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { localizedPath, navigationCopy, type Locale } from "@/lib/locales";

export default function Header({ locale = "en" }: { locale?: Locale }) {
  const copy = navigationCopy[locale];
  const pathname = usePathname();
  const pagePath = locale === "en" ? pathname : pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "/";
  const menuButton = useRef<HTMLButtonElement>(null);
  const languageButton = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const navItems = [
    { label: copy.about, href: localizedPath(locale, "/about") },
    { label: copy.security, href: localizedPath(locale, "/security") },
    { label: copy.projects, href: localizedPath(locale, "/projects") },
    { label: copy.experience, href: localizedPath(locale, "/experience") },
    { label: copy.writing, href: localizedPath(locale, "/writing") },
    { label: copy.certifications, href: localizedPath(locale, "/certifications") },
    { label: copy.contact, href: localizedPath(locale, "/contact") },
  ];

  const languages = [
    { code: "EN", label: "English", href: localizedPath("en", pagePath) },
    { code: "ES", label: "Español", href: localizedPath("es", pagePath) },
    { code: "JA", label: "日本語", href: localizedPath("ja", pagePath) },
    { code: "RU", label: "Русский", href: localizedPath("ru", pagePath) },
  ];

  return (
    <header onKeyDown={(event) => {
      if (event.key === "Escape") {
        if (menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
        if (languageOpen) { setLanguageOpen(false); languageButton.current?.focus(); }
      }
    }} className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0F3046]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link
          href={localizedPath(locale, "/")}
          className="text-3xl font-black tracking-tight text-white"
          aria-label={copy.home}
          onClick={() => {
            setMenuOpen(false);
            setLanguageOpen(false);
          }}
        >
          B<span className="text-[#4FA3D1]">T</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label={copy.toggleMenu} className="hidden items-center gap-4 text-sm text-white/75 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 xl:flex">
          {/* Résumé */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2537]"
          >
            {copy.resume} ↓
          </a>

          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              ref={languageButton}
              aria-controls="language-options"
              aria-label={copy.selectLanguage}
              aria-expanded={languageOpen}
            >
              {locale.toUpperCase()}
              <span
                className={`text-xs transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {languageOpen && (
              <div id="language-options" className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#102F46] shadow-xl">
                {languages.map((language) => (
                  <Link
                    key={language.code}
                    href={language.href}
                    hrefLang={language.code.toLowerCase()}
                    lang={language.code.toLowerCase()}
                    aria-current={language.code.toLowerCase() === locale ? "true" : undefined}
                    onClick={() => setLanguageOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    <span>{language.label}</span>

                    <span className="text-xs font-bold text-[#D6A85F]">
                      {language.code}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D6A85F]/60 xl:hidden"
          ref={menuButton}
          aria-controls="mobile-navigation"
          aria-label={copy.toggleMenu}
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
        id="mobile-navigation"
        hidden={!menuOpen}
        className="max-h-[calc(100dvh-84px)] overflow-y-auto border-t border-white/10 bg-[#0F3046] xl:hidden"
      >
        <nav aria-label={copy.toggleMenu} className="mx-auto max-w-7xl px-6 py-5">
          <div className="divide-y divide-white/10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between py-3.5 text-sm font-semibold text-white/75 transition hover:text-white"
              >
                <span>{item.label}</span>

                <span className="text-[#D6A85F] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile language selector */}
          <div className="mt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#79B8AE]">
              {copy.language}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {languages.map((language) => (
                  <Link
                  key={language.code}
                  href={language.href}
                  hrefLang={language.code.toLowerCase()}
                  lang={language.code.toLowerCase()}
                  aria-current={language.code.toLowerCase() === locale ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{language.label}</span>

                    <span className="text-xs font-bold text-[#D6A85F]">
                      {language.code}
                    </span>
                  </div>
                </Link>
                ))}
            </div>
          </div>

          {/* Mobile résumé */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-md bg-[#E5B45E] px-6 py-3.5 text-sm font-bold text-[#102F46] transition hover:bg-[#F0C574]"
          >
            {copy.viewResume} ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
