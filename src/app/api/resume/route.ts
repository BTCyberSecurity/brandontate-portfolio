import { createHash, timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const headers = { 'Cache-Control': 'private, no-store, max-age=0', 'X-Robots-Tag': 'noindex, noarchive', 'X-Content-Type-Options': 'nosniff' };
const fail = (status: number) => new Response(null, { status, headers });
export async function POST(request: Request) {
 const secret = process.env.RESUME_ACCESS_PASSWORD;
 // Fail closed until a strong server-only password is configured.
 if (!secret || secret.length < 16 || secret.length > 256) return fail(503);
 if (!request.headers.get('content-type')?.startsWith('application/json')) return fail(415);
 if (request.headers.get('sec-fetch-site') === 'cross-site') return fail(403);
 // Bound the streamed body, including requests without Content-Length.
 const reader = request.body?.getReader(); if (!reader) return fail(400);
 const chunks: Uint8Array[] = []; let size = 0;
 try {
  while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 2048) { await reader.cancel(); return fail(413); } chunks.push(value); }
  const data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  if (typeof data?.password !== 'string' || data.password.length > 256) return fail(400);
  const hash = (text: string) => createHash('sha256').update(text).digest();
  if (!timingSafeEqual(hash(data.password), hash(secret))) return fail(401);
 } catch { return fail(400); }
 try {
  const file = await readFile(path.join(process.cwd(), 'private', 'resume.pdf'));
  return new Response(file, { headers: { ...headers, 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename="Brandon_Tate_Resume.pdf"' } });
 } catch { return fail(503); }
}
