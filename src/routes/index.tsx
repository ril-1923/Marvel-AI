import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marvels AI — Reasoning That Reads the Room" },
      { name: "description", content: "Marvels AI decomposes complex work, reviews its output, and ships decisions you can defend." },
      { property: "og:title", content: "Marvels AI — Reasoning That Reads the Room" },
      { property: "og:description", content: "A planning mind for research, product, and data teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarvelsLanding,
});

const capabilities = [
  { code: "A / Self-review", title: "Checks its own work", body: "A second pass audits every output for unsupported claims before it reaches you, so you inherit confidence rather than doubt.", span: "md:col-span-7" },
  { code: "B / Tool routing", title: "Calls the right tool", body: "Searches, runs code, and reads files with a fixed latency budget — no silent, unbounded runs.", span: "md:col-span-5" },
];

const useCases = [
  ["Research ops", "Source sweeps", "Cross-references papers and filings into a single, cited brief."],
  ["Product", "Spec drafting", "Turns a fuzzy goal into a testable spec with open questions flagged."],
  ["Data", "Query translation", "Natural language to safe, explainable SQL — with the reasoning shown."],
];

const plans = [
  { name: "Field", price: "$0", note: "forever", items: ["50 reasoned tasks / month", "Single memory graph", "Community guardrails"], action: "Start free" },
  { name: "Studio", price: "$48", note: "per seat / month", items: ["Unlimited reasoned tasks", "Shared memory + citations", "Tool routing & latency budget"], action: "Get Studio", featured: true },
  { name: "Foundry", price: "Custom", note: "annual / on-prem", items: ["Self-hosted inference", "SSO, audit & retention", "Dedicated guardrail team"], action: "Talk to us" },
];

function MarvelsLanding() {
  const [prompt, setPrompt] = useState("draft a launch brief for a developer tool targeting EU teams");
  const [status, setStatus] = useState("ready");
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const runPrompt = () => {
    setStatus("reasoning");
    window.setTimeout(() => setStatus("complete"), 1100);
  };

  return (
    <main ref={mainRef} className="overflow-x-hidden bg-paper text-ink">
      <header className="nav-blur sticky top-0 z-50 border-b border-paper/10 bg-ink/90 text-paper">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-2" aria-label="Marvels AI home"><span className="grid size-7 place-items-center rounded-md bg-cyan font-grotesk text-sm font-semibold text-ink">M</span><span className="font-grotesk text-lg font-semibold">MARVELS<span className="text-cyan">.ai</span></span></a>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase text-steel md:flex" aria-label="Main navigation"><a href="#demo" className="hover:text-paper">Demo</a><a href="#features" className="hover:text-paper">Capabilities</a><a href="#cases" className="hover:text-paper">Use cases</a><a href="#pricing" className="hover:text-paper">Pricing</a></nav>
          <div className="flex items-center gap-3"><a className="hidden font-mono text-xs uppercase text-steel hover:text-paper sm:inline" href="#demo">Sign in</a><a className="rounded-md bg-cyan px-4 py-2 text-sm font-medium text-ink ring-1 ring-cyan transition hover:opacity-90" href="#pricing">Get access</a><button type="button" className="grid size-9 place-items-center rounded-md border border-paper/20 md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>☰</button></div>
        </div>
        {menuOpen && <nav className="flex flex-col border-t border-paper/10 px-5 py-4 font-mono text-xs uppercase text-steel md:hidden"><a className="py-2" href="#demo" onClick={() => setMenuOpen(false)}>Demo</a><a className="py-2" href="#features" onClick={() => setMenuOpen(false)}>Capabilities</a><a className="py-2" href="#cases" onClick={() => setMenuOpen(false)}>Use cases</a><a className="py-2" href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></nav>}
      </header>

      <section id="top" className="relative overflow-hidden bg-ink text-paper">
        <div className="scanline" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-5 py-24 sm:px-6 md:grid-cols-12 md:py-32">
          <div className="reveal md:col-span-8"><p className="mb-6 font-mono text-xs uppercase text-cyan">Neural interface · v4.2</p><h1 className="max-w-[16ch] font-serif text-5xl leading-none text-balance sm:text-6xl md:text-7xl">Reasoning that reads the room before you ask.</h1><p className="mt-8 max-w-[52ch] text-lg text-steel">Marvels wires a planning mind into your workflow — it decomposes the task, drafts, reviews its own output, and ships a decision you can defend.</p><div className="mt-10 flex flex-wrap gap-4"><a className="rounded-md bg-cyan px-6 py-3 font-grotesk font-medium text-ink ring-1 ring-cyan hover:opacity-90" href="#demo">See it think</a><a className="rounded-md px-5 py-3 font-mono text-sm text-paper ring-1 ring-paper/20 hover:ring-paper/40" href="#features">Read the spec</a></div></div>
          <div className="reveal delay-1 space-y-3 self-start md:col-span-4">{[["12.4M", "Tokens reasoned daily"], ["98.1%", "Plan accept rate"]].map(([value, label]) => <div key={label} className="rounded-lg bg-paper/5 px-5 py-4 ring-1 ring-paper/10"><p className="font-mono text-3xl font-medium">{value}</p><p className="mt-1 font-mono text-[11px] uppercase text-steel">{label}</p></div>)}</div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-ink/20 bg-cyan py-3 text-ink" aria-label="Capabilities ticker"><div className="marquee-track flex whitespace-nowrap font-mono text-sm uppercase">{[0, 1].map((group) => <div className="flex" key={group}>{["Context engine", "Self-review", "Tool routing", "Memory graph", "Guardrails", "Latency budget"].map((item) => <span className="px-8" key={`${group}-${item}`}>{item}</span>)}</div>)}</div></section>

      <section id="demo" className="bg-paper py-24 text-ink"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 md:grid-cols-12"><div className="reveal md:col-span-4"><p className="mb-4 font-mono text-xs uppercase text-cyan">Live surface</p><h2 className="max-w-[14ch] font-serif text-4xl leading-none text-balance md:text-5xl">Type a goal. Watch the plan assemble itself.</h2><p className="mt-6 max-w-[40ch] text-steel">Every prompt is decomposed into verifiable steps before anything is generated — inspect, edit, or reject each one.</p></div><div className="reveal delay-1 md:col-span-8"><div className="console-glow rounded-lg bg-card/70 p-5 ring-1 ring-ink/10 backdrop-blur-xl md:p-6"><div className="flex items-center gap-2 border-b border-ink/10 pb-4"><span className={`size-2.5 rounded-full ${status === "complete" ? "bg-cyan" : "bg-signal"}`} /><span className="font-mono text-xs text-steel">prompt://plan</span><span className="ml-auto font-mono text-xs text-cyan">{status}</span></div><label className="mt-5 block font-mono text-xs uppercase text-steel" htmlFor="prompt">Prompt</label><input id="prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)} className="mt-2 w-full border-0 bg-transparent font-mono text-sm text-ink outline-none md:text-base" /><ul className="mt-6 space-y-3"><li className="flex gap-3"><span className="shrink-0 font-mono text-cyan">01</span><span>Map buyer personas against existing search intent.</span></li><li className="flex gap-3"><span className="shrink-0 font-mono text-cyan">02</span><span>Position against incumbents; flag unclaimed wedges.</span></li><li className="flex gap-3"><span className="shrink-0 font-mono text-signal">03</span><span>{status === "complete" ? "Review complete — evidence mapped and ready to ship." : "Review: tighten claim 2 — evidence pending."}</span></li></ul><div className="mt-6 flex items-center gap-3 rounded-md bg-ink px-4 py-3 text-paper"><span className="font-mono text-cyan">&gt;</span><span className="min-w-0 flex-1 truncate font-mono text-sm text-steel">{prompt}</span><button type="button" onClick={runPrompt} className="rounded bg-cyan px-3 py-1 font-mono text-xs text-ink">Run</button></div></div></div></div></section>

      <section id="features" className="bg-ink-soft py-24 text-paper"><div className="mx-auto max-w-7xl px-5 sm:px-6"><div className="reveal"><p className="mb-4 font-mono text-xs uppercase text-cyan">Capabilities</p><h2 className="max-w-[20ch] font-grotesk text-4xl font-semibold leading-tight text-balance md:text-5xl">Built like an instrument, not a chatbox.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-12">{capabilities.map((item, index) => <article key={item.code} className={`reveal ${index ? "delay-1" : ""} ${item.span} rounded-lg bg-paper/5 p-8 ring-1 ring-paper/10`}><p className="font-mono text-xs text-cyan">{item.code}</p><h3 className="mt-3 text-2xl font-medium">{item.title}</h3><p className="mt-3 max-w-[46ch] text-steel">{item.body}</p></article>)}<article className="reveal delay-2 flex flex-col justify-between gap-6 rounded-lg bg-cyan/10 p-8 ring-1 ring-cyan/30 md:col-span-12 md:flex-row md:items-center"><div><p className="font-mono text-xs text-cyan">C / Memory graph</p><h3 className="mt-3 text-2xl font-medium">Remembers across sessions, on your terms</h3></div><a href="#demo" className="shrink-0 rounded-md px-5 py-3 font-mono text-sm ring-1 ring-paper/20 hover:ring-paper/40">Explore memory</a></article></div></div></section>

      <section id="cases" className="bg-warm py-24 text-ink"><div className="mx-auto max-w-7xl px-5 sm:px-6"><div className="reveal"><p className="mb-4 font-mono text-xs uppercase text-signal">Use cases</p><h2 className="max-w-[18ch] font-serif text-4xl leading-none text-balance md:text-5xl">Where teams point it first.</h2></div><div className="mt-14 grid gap-6 md:grid-cols-3">{useCases.map(([label, title, body], index) => <article key={label} className={`reveal ${index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""} rounded-lg bg-card/70 p-7 ring-1 ring-ink/10`}><p className="font-mono text-xs text-signal">{label}</p><h3 className="mt-3 text-xl font-medium">{title}</h3><p className="mt-2 text-sm text-ink/70">{body}</p></article>)}</div></div></section>

      <section id="pricing" className="bg-ink py-24 text-paper"><div className="mx-auto max-w-7xl px-5 sm:px-6"><div className="reveal text-center"><p className="mb-4 font-mono text-xs uppercase text-cyan">Pricing</p><h2 className="mx-auto max-w-[18ch] font-serif text-4xl leading-none text-balance md:text-5xl">Start free. Scale when the plans hold.</h2></div><div className="mt-14 grid gap-6 md:grid-cols-3">{plans.map((plan, index) => <article key={plan.name} className={`reveal ${index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""} rounded-lg p-7 ${plan.featured ? "bg-paper/10 ring-1 ring-cyan/50 md:-translate-y-4" : "bg-paper/5 ring-1 ring-paper/10"}`}>{plan.featured && <span className="font-mono text-[11px] uppercase text-cyan">Most chosen</span>}<h3 className={`${plan.featured ? "mt-3" : ""} text-xl font-medium`}>{plan.name}</h3><p className="mt-4 font-mono text-3xl">{plan.price}</p><p className="mt-1 font-mono text-xs text-steel">{plan.note}</p><ul className="mt-6 space-y-2 font-mono text-sm text-steel">{plan.items.map((item) => <li key={item}>{item}</li>)}</ul><a href="#demo" className={`mt-8 inline-flex w-full justify-center rounded-md px-4 py-3 text-sm ${plan.featured ? "bg-cyan font-medium text-ink ring-1 ring-cyan" : "font-mono ring-1 ring-paper/20"}`}>{plan.action}</a></article>)}</div></div></section>

      <footer className="border-t border-ink/10 bg-paper py-16 text-ink"><div className="mx-auto max-w-7xl px-5 sm:px-6"><div className="flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><a href="#top" className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-md bg-cyan text-sm font-semibold">M</span><span className="text-lg font-semibold">MARVELS<span className="text-cyan">.ai</span></span></a><p className="mt-4 max-w-[20ch] text-2xl">The planning mind behind your next decision.</p></div><nav className="grid grid-cols-2 gap-12 font-mono text-xs uppercase text-steel"><div className="space-y-3"><p className="text-ink">Product</p><a className="block hover:text-ink" href="#demo">Demo</a><a className="block hover:text-ink" href="#features">Capabilities</a><a className="block hover:text-ink" href="#pricing">Pricing</a></div><div className="space-y-3"><p className="text-ink">Company</p><a className="block hover:text-ink" href="#cases">Research</a><a className="block hover:text-ink" href="#top">Careers</a><a className="block hover:text-ink" href="mailto:hello@marvels.ai">Contact</a></div></nav></div><p className="mt-12 border-t border-ink/10 pt-6 font-mono text-xs text-steel">© 2026 Marvels AI — a fictional prototype. Built with restraint.</p></div></footer>
    </main>
  );
}