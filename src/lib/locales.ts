export const locales = ["en", "es", "ja", "ru", "zh", "hi"] as const;
export type Locale = typeof locales[number];
export type TranslatedLocale = Exclude<Locale, "en">;
export const translatedLocales = locales.filter((locale): locale is TranslatedLocale => locale !== "en");
export const languageTags = { en: "en", es: "es", ja: "ja", ru: "ru", zh: "zh-Hans", hi: "hi" };
export const languageNames = { en: "English", es: "Español", ja: "日本語", ru: "Русский", zh: "简体中文", hi: "हिंदी" };
export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return translatedLocales.some(locale => locale === value);
}
export function localizedPath(locale: Locale, path: string) {
  if (!path.startsWith("/") || path.endsWith(".pdf")) return path;
  return locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;
}
export const navigationCopy = {
  en: { outside: "Outside of Work", about: "About", security: "Security", projects: "Projects", experience: "Experience", writing: "Writing", certifications: "Certifications", contact: "Contact", resume: "Résumé", viewResume: "View Résumé", language: "Language", selectLanguage: "Select language", toggleMenu: "Toggle navigation menu", home: "Brandon Tate home", skip: "Skip to main content" },
  es: { outside: "Fuera del trabajo", about: "Sobre mí", security: "Seguridad", projects: "Proyectos", experience: "Experiencia", writing: "Notas", certifications: "Certificaciones", contact: "Contacto", resume: "Currículum", viewResume: "Ver currículum", language: "Idioma", selectLanguage: "Seleccionar idioma", toggleMenu: "Abrir o cerrar el menú", home: "Inicio de Brandon Tate", skip: "Saltar al contenido principal" },
  ja: { outside: "仕事以外の時間", about: "自己紹介", security: "セキュリティ", projects: "プロジェクト", experience: "職務経験", writing: "技術ノート", certifications: "資格", contact: "お問い合わせ", resume: "職務経歴書", viewResume: "職務経歴書を見る", language: "言語", selectLanguage: "言語を選択", toggleMenu: "メニューを開閉", home: "Brandon Tate のホーム", skip: "メインコンテンツへ移動" },
  ru: { outside: "Вне работы", about: "Обо мне", security: "Безопасность", projects: "Проекты", experience: "Опыт", writing: "Заметки", certifications: "Сертификаты", contact: "Контакты", resume: "Резюме", viewResume: "Посмотреть резюме", language: "Язык", selectLanguage: "Выбрать язык", toggleMenu: "Открыть или закрыть меню", home: "Главная страница Brandon Tate", skip: "Перейти к основному содержимому" },
  zh: { outside: "工作之外", about: "关于我", security: "安全", projects: "项目", experience: "工作经历", writing: "技术笔记", certifications: "认证", contact: "联系", resume: "简历（英文）", viewResume: "查看简历（英文）", language: "语言", selectLanguage: "选择语言", toggleMenu: "打开或关闭导航菜单", home: "Brandon Tate 首页", skip: "跳转到主要内容" },
  hi: { outside: "काम के अलावा", about: "मेरे बारे में", security: "सुरक्षा", projects: "परियोजनाएँ", experience: "कार्य अनुभव", writing: "तकनीकी नोट्स", certifications: "प्रमाणपत्र", contact: "संपर्क", resume: "रिज़्यूमे (अंग्रेज़ी)", viewResume: "रिज़्यूमे देखें (अंग्रेज़ी)", language: "भाषा", selectLanguage: "भाषा चुनें", toggleMenu: "नेविगेशन मेनू खोलें या बंद करें", home: "Brandon Tate का मुख्य पृष्ठ", skip: "मुख्य सामग्री पर जाएँ" },
} satisfies Record<Locale, Record<string, string>>;
