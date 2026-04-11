import { CheckCircle2, FileText, Sparkles } from "lucide-react";

const points = [
  {
    icon: CheckCircle2,
    title: "Erfaring",
    text: "Vi kjenner arbeidet på tak, i hage og på tomt – og leverer trygt og effektivt.",
  },
  {
    icon: Sparkles,
    title: "Kvalitet",
    text: "Riktig utstyr, nøye utførelse og ryddig ferdigstilling på hvert oppdrag.",
  },
  {
    icon: FileText,
    title: "Skriftlig tilbud",
    text: "Du får oversiktlig tilbud og avtalt omfang før vi starter – ingen overraskelser.",
  },
] as const;

export default function WhyUs() {
  return (
    <section id="om" className="scroll-mt-[120px] bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Hvorfor velge oss</h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-400">
          Lokalt firma med fokus på kvalitet, tydelig kommunikasjon og fornøyde kunder.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-[#141414] p-8 text-left transition hover:border-accent/40"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent/15 p-3 text-accent">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
