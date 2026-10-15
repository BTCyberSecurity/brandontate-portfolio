import Link from "next/link";

export default function LabArchitectureDiagram() {
  return (
    <figure className="hidden min-w-0 rounded-3xl lg:block border border-[#79B8AE]/30 bg-white/[0.04] p-6">
      <figcaption className="text-sm font-bold text-[#79B8AE]">Documented Lab Architecture</figcaption>
      <ol className="mt-4 space-y-2 text-center">
        <li className="rounded-xl border border-white/20 bg-[#17384D] px-5 py-3">
          <p className="font-bold">Open WebUI</p>
          <p className="mt-1 text-sm text-white/75">Model Interface</p>
        </li>
        <li aria-hidden="true" className="leading-none text-[#D6A85F]">↓</li>
        <li className="rounded-xl border border-[#79B8AE]/40 bg-[#17384D] px-5 py-3">
          <p className="font-bold">Ollama</p>
          <p className="mt-1 text-sm text-white/75">Local LLM Inference</p>
        </li>
        <li aria-hidden="true" className="leading-none text-[#D6A85F]">↓</li>
        <li className="rounded-xl border border-white/20 bg-[#17384D] px-5 py-3">
          <p className="font-bold">Ubuntu Server LTS</p>
          <p className="mt-1 text-sm text-white/75">NVIDIA RTX 5070 Ti</p>
        </li>
      </ol>
      <p className="mt-5 text-sm leading-6 text-white/75">Simplified service layers from my local LLM lab.</p>
      <Link href="/projects/private-ai-infrastructure" className="mt-4 inline-block font-bold text-[#E5B45E]">Explore Project →</Link>
    </figure>
  );
}
