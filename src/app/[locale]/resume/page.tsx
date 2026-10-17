import { notFound } from 'next/navigation';
import ResumeAccess from '@/components/ResumeAccess';
import { isTranslatedLocale, translatedLocales } from '@/lib/locales';
import { resumeCopy } from '@/lib/resume-copy';
export function generateStaticParams() { return translatedLocales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params; if (!isTranslatedLocale(locale)) notFound();
 return { title: resumeCopy[locale].title, robots: { index: false, follow: true }, alternates: { canonical: '/' + locale + '/resume' } };
}
export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
 const { locale } = await params; if (!isTranslatedLocale(locale)) notFound();
 return <ResumeAccess locale={locale}/>;
}
