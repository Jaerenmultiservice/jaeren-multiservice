import { Check } from "lucide-react";

const trust = [
  { label: "Lokalt i Jæren" },
  { label: "Rask respons" },
  { label: "God service" },
];

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden bg-[#0a0a0a] pb-14 pt-6 text-white md:min-h-[62vh] md:pb-16">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120vw,720px)] w-[min(120vw,720px)] -translate-x-1/2 -translate-y-[55%] rounded-full bg-accent/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(255,122,0,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.08]">
          Alt innen hage og hjem
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-400 md:text-xl">
          Profesjonelle tjenester for bolig og eiendom – fra tak og hage til graving og smarthjem. Vi svarer raskt og
          leverer solid arbeid.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => document.getElementById("befaring")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="rounded-lg border-0 bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_28px_-6px_rgba(255,122,0,0.55)] transition hover:bg-[#ff8f1f] cursor-pointer"
          >
            Bestill befaring
          </button>
          <button
            type="button"
            onClick={() => document.getElementById("tjenester")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="cursor-pointer rounded-lg border border-white/35 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#0a0a0a]"
          >
            Se tjenester
          </button>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400 md:text-base">
          {trust.map(({ label }) => (
            <li key={label} className="flex items-center gap-2">
              <Check className="h-5 w-5 shrink-0 text-accent" strokeWidth={2.5} aria-hidden />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
