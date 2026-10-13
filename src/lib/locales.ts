export const locales = ["en", "es", "ja", "ru"] as const;
export type Locale = typeof locales[number];
export type TranslatedLocale = Exclude<Locale, "en">;
export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return value === "es" || value === "ja" || value === "ru";
}
export function localizedPath(locale: Locale, path: string) {
  if (!path.startsWith("/") || path.endsWith(".pdf")) return path;
  return locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;
}
export const navigationCopy = {
  en: { about: "About", security: "Security", projects: "Projects", experience: "Experience", writing: "Writing", certifications: "Certifications", contact: "Contact", resume: "Résumé", viewResume: "View Résumé", language: "Language", selectLanguage: "Select language", toggleMenu: "Toggle navigation menu", home: "Brandon Tate home", skip: "Skip to main content" },
  es: { about: "Sobre mí", security: "Seguridad", projects: "Proyectos", experience: "Experiencia", writing: "Notas", certifications: "Certificaciones", contact: "Contacto", resume: "Currículum", viewResume: "Ver currículum", language: "Idioma", selectLanguage: "Seleccionar idioma", toggleMenu: "Abrir o cerrar el menú", home: "Inicio de Brandon Tate", skip: "Saltar al contenido principal" },
  ja: { about: "自己紹介", security: "セキュリティ", projects: "プロジェクト", experience: "職務経験", writing: "技術ノート", certifications: "資格", contact: "お問い合わせ", resume: "職務経歴書", viewResume: "職務経歴書を見る", language: "言語", selectLanguage: "言語を選択", toggleMenu: "メニューを開閉", home: "Brandon Tate のホーム", skip: "メインコンテンツへ移動" },
  ru: { about: "Обо мне", security: "Безопасность", projects: "Проекты", experience: "Опыт", writing: "Заметки", certifications: "Сертификаты", contact: "Контакты", resume: "Резюме", viewResume: "Посмотреть резюме", language: "Язык", selectLanguage: "Выбрать язык", toggleMenu: "Открыть или закрыть меню", home: "Главная страница Brandon Tate", skip: "Перейти к основному содержимому" },
} satisfies Record<Locale, Record<string, string>>;
