import Image from "next/image";

const services = [
  {
    src: "/hekkeklipping.png",
    title: "Hekk og utemiljø",
    description:
      "Trimming av hekk og busker med riktig utstyr og fokus på sikkerhet.",
    alt: "Håndverker som klipper hekk med batteridrevet hekksaks.",
  },
  {
    src: "/takvask.png",
    title: "Takvask",
    description:
      "Skånsom og effektiv vask av takstein med høytrykkspyler og sikkerhetsutstyr.",
    alt: "Håndverker som vasker tak med høytrykkspyler, festet i sikkerhetssele.",
  },
  {
    src: "/gravemaskin.png",
    title: "Graving og planering",
    description:
      "Kompakt gravemaskin for mindre grøfter, planering og oppdrag i trange områder.",
    alt: "Betjening av liten gravemaskin i hage med oppgravd jord.",
  },
  {
    src: "/kattedor.png",
    title: "Montering og småjobber",
    description:
      "Nøyaktig montering av blant annet kattedør og små installasjoner i bolig.",
    alt: "Håndverker som monterer elektronisk kattedør i ytterdør.",
  },
] as const;

const orgNrLabel = "Org.nr. 937 516 606";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-lg font-semibold tracking-tight">
            Jæren Multiservice
          </span>
          <a
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            href="#tjenester"
          >
            Våre tjenester
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative isolate min-h-[min(85vh,52rem)] w-full overflow-hidden bg-zinc-900">
          <Image
            src="/hekkeklipping.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-90"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex min-h-[min(85vh,52rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-200/95">
              Lokalt på Jæren
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Alt fra hekk og tak til graving og montering
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-200">
              Vi leverer ryddige oppdrag med profesjonelt utstyr og tydelig
              kommunikasjon — til avtalt tid og pris.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100"
                href="#tjenester"
              >
                Se hva vi gjør
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                href="#kontakt"
              >
                Kontakt oss
              </a>
            </div>
          </div>
        </section>

        <section
          id="tjenester"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Tjenester
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-zinc-600">
              Et utvalg av oppdrag vi tar på oss. Ta gjerne kontakt dersom du
              lurer på om vi kan hjelpe med noe annet.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {services.map((item) => (
              <li
                key={item.src}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-zinc-300 hover:shadow-md"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="kontakt"
          className="border-t border-zinc-200 bg-white scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Kontakt
            </h2>
            <p className="mt-3 max-w-xl text-zinc-600">
              Vi svarer så raskt vi kan. Beskriv gjerne type oppdrag og adresse,
              så vurderer vi sammen neste steg.
            </p>
            <p className="mt-4 text-sm text-zinc-500">{orgNrLabel}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>
            © {new Date().getFullYear()} Jæren Multiservice · {orgNrLabel}
          </span>
          <span className="text-zinc-400">jaerenmultiservice.no</span>
        </div>
      </footer>
    </div>
  );
}
