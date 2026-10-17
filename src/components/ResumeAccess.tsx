"use client";
import { useState, type FormEvent } from 'react';
import Header from './Header';
import { resumeCopy } from '@/lib/resume-copy';
import type { Locale } from '@/lib/locales';
export default function ResumeAccess({ locale = 'en' }: { locale?: Locale }) {
 const copy = resumeCopy[locale];
 const [busy, setBusy] = useState(false);
 const [message, setMessage] = useState('');
 async function download(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); if (busy) return;
  const form = event.currentTarget;
  const password = String(new FormData(form).get('password') ?? '');
  setBusy(true); setMessage('');
  try {
   const response = await fetch('/api/resume', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }), cache: 'no-store' });
   if (!response.ok) { setMessage(response.status === 401 ? copy.error : copy.unavailable); return; }
   const url = URL.createObjectURL(await response.blob());
   const link = document.createElement('a'); link.href = url; link.download = 'Brandon_Tate_Resume.pdf'; document.body.appendChild(link); link.click(); link.remove();
   setTimeout(() => URL.revokeObjectURL(url), 60000); form.reset();
  } catch { setMessage(copy.unavailable); } finally { setBusy(false); }
 }
 return <><Header locale={locale}/><main id="main-content" className="min-h-[65vh] bg-[#F5F2EB] px-6 py-16 text-[#102F46]">
  <div className="mx-auto max-w-xl rounded-2xl border border-[#102F46]/15 bg-white p-6 sm:p-10">
   <h1 className="text-3xl font-black">{copy.title}</h1><p className="mt-4 leading-7">{copy.intro}</p>
   <form onSubmit={download} className="mt-8">
    <label htmlFor="resume-password" className="block font-semibold">{copy.password}</label>
    <input id="resume-password" name="password" type="password" required maxLength={256} autoComplete="current-password" aria-describedby="resume-message" className="mt-2 w-full rounded-md border border-[#102F46]/40 p-3 focus:outline-2 focus:outline-[#147BC1]"/>
    <button disabled={busy} className="mt-5 w-full rounded-md bg-[#102F46] px-5 py-3 font-bold text-white disabled:opacity-60">{busy ? copy.busy : copy.download}</button>
    <p id="resume-message" role="status" aria-live="polite" className="mt-4 text-sm leading-6">{message}</p>
   </form>
   <a href="mailto:brandontate@outlook.com?subject=Resume%20access%20request" className="mt-4 inline-block font-semibold underline underline-offset-4">{copy.request}</a>
  </div>
 </main></>;
}