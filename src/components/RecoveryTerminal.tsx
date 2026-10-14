"use client";
import { useEffect, useRef, useState } from "react";
import { recoveryCopy } from "@/lib/recovery-copy";
import { initialRecovery, runRecovery } from "@/lib/recovery-game";
import type { Locale } from "@/lib/locales";

export default function RecoveryTerminal({ locale = "en" }: { locale?: Locale }) {
 const copy = recoveryCopy[locale];
 const [state, setState] = useState(initialRecovery);
 const [input, setInput] = useState("");
 const [lines, setLines] = useState<{ command: string; message: string }[]>([]);
 const output = useRef<HTMLDivElement>(null);
 const commandInput = useRef<HTMLInputElement>(null);
 useEffect(() => { if(output.current) output.current.scrollTop = output.current.scrollHeight; }, [lines]);
 function submit(command: string) {
  if (!command.trim()) return;
  const result = runRecovery(state, command);
  setState(result.state);
  setLines(previous => [...(result.clear ? [] : previous), { command: command.slice(0, 100), message: copy[result.message] }].slice(-30));
  setInput("");
  commandInput.current?.focus({ preventScroll: true });
 }
 const progress = [state.gateway, state.inspected, state.restored, state.verified];
 const suggestions = ["help", "status", !state.gateway ? "ping gateway" : !state.inspected ? "route" : !state.restored ? "restore route" : "ping destination", "cls"];
 return <section aria-labelledby="recovery-title" className="mt-12 max-w-4xl">
  <h2 id="recovery-title" className="text-2xl font-bold text-[#E5B45E]">{copy.title}</h2>
  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">{copy.intro}</p>
  <ol aria-label={copy.progress} className="my-5 grid gap-2 text-xs sm:grid-cols-2 lg:grid-cols-4">
   {copy.steps.map((step,index)=><li key={step} className={progress[index] ? "text-[#A4DDD0]" : "text-white/70"}><span aria-hidden="true">{progress[index] ? "✓" : "○"} </span>{index+1}. {step}</li>)}
  </ol>
  <div className="overflow-hidden rounded-xl border border-white/25 bg-[#081B29] shadow-xl">
   <div className="border-b border-white/20 px-4 py-3 font-mono text-xs text-white/70">BT://recovery <span aria-hidden="true" className="terminal-cursor">▌</span></div>
   <div ref={output} tabIndex={0} aria-label={copy.title} className="h-64 overflow-y-auto whitespace-pre-wrap break-words px-4 py-5 font-mono text-sm leading-7 text-[#A4DDD0] focus-visible:outline-2 focus-visible:outline-[#E5B45E]">
    {lines.length === 0 && <p>{copy.welcome}</p>}
    {lines.map((line,index)=><div key={index} className="mb-4"><p className="text-white/75">guest@portfolio:~$ {line.command}</p><p>{line.message}</p></div>)}
   </div>
   <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{lines.at(-1)?.message}</p>
   <form onSubmit={event=>{event.preventDefault();submit(input);}} className="flex flex-wrap gap-3 border-t border-white/20 p-4">
    <label htmlFor="recovery-command" className="sr-only">{copy.command}</label>
    <span aria-hidden="true" className="self-center font-mono text-[#E5B45E]">&gt;</span>
    <input ref={commandInput} id="recovery-command" value={input} onChange={event=>setInput(event.target.value)} maxLength={100} autoComplete="off" autoCapitalize="none" spellCheck={false} className="min-w-0 flex-1 rounded border border-white/30 bg-[#0F3046] px-3 py-3 font-mono text-base text-white focus-visible:outline-2 focus-visible:outline-[#E5B45E]" />
    <button type="submit" className="rounded bg-[#E5B45E] px-5 py-3 text-sm font-bold text-[#102F46]">{copy.run}</button>
   </form>
  </div>
  <div aria-label={copy.shortcuts} className="mt-4 flex flex-wrap gap-2">
   {suggestions.map(command=><button type="button" key={command} onClick={()=>submit(command)} className="rounded-md border border-white/30 px-4 py-3 font-mono text-xs text-white hover:bg-white/10">{command}</button>)}
   <button type="button" onClick={()=>submit("reset")} className="rounded-md border border-white/30 px-4 py-3 text-xs text-white hover:bg-white/10">{copy.reset}</button>
  </div>
  {state.verified && <p className="mt-5 font-bold text-[#E5B45E]">✓ {copy.complete}</p>}
 </section>;
}
