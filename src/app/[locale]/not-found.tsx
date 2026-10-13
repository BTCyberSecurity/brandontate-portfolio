"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { isTranslatedLocale, localizedPath } from "@/lib/locales";

const copy = {
  en: ["Lost Route.", "Known Destination.", "The page you requested does not exist, may have moved, or is still being built.", "Return Home", "View Projects"],
  es: ["Ruta perdida.", "Destino conocido.", "La página solicitada no existe, puede haberse trasladado o aún está en desarrollo.", "Volver al inicio", "Ver proyectos"],
  ja: ["ページが見つかりません。", "こちらからお進みください。", "指定されたページは存在しないか、移動したか、現在作成中です。", "ホームへ戻る", "プロジェクトを見る"],
  ru: ["Маршрут потерян.", "Пункт назначения известен.", "Запрошенная страница не существует, перемещена или ещё находится в разработке.", "На главную", "Посмотреть проекты"],
  zh: ["页面未找到。", "从这里继续浏览。", "您访问的页面不存在、已移动或仍在建设中。", "返回首页", "查看项目"],
  hi: ["पृष्ठ नहीं मिला।", "यहाँ से आगे बढ़ें।", "यह पृष्ठ मौजूद नहीं है, स्थानांतरित हो गया है या अभी तैयार किया जा रहा है।", "मुख्य पृष्ठ पर लौटें", "परियोजनाएँ देखें"],
};

export default function LocalizedNotFound() {
  const segment = usePathname().split("/")[1];
  const locale = isTranslatedLocale(segment) ? segment : "en";
  const text = copy[locale];
  return <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#0F3046] text-white">
    <Header locale={locale} />
    <section className="flex min-h-screen items-center px-6 py-32 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#79B8AE]">404</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{text[0]}<br />{text[1]}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">{text[2]}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={localizedPath(locale, "/")} className="rounded-md bg-[#E5B45E] px-6 py-3 font-bold text-[#102F46]">{text[3]}</Link>
          <Link href={localizedPath(locale, "/projects")} className="rounded-md border border-white/30 px-6 py-3 font-bold">{text[4]}</Link>
        </div>
      </div>
    </section>
  </main>;
}
