import Image from "next/image";

const services = [
  {
    src: "/takvask.png",
    title: "Rengjøring av Hus",
    description:
      "Takvask, fasadevask, takrennerens og høytrykkspyling av uteområder.",
    items: ["Takvask", "Fasadevask", "Takrennerens", "Avløpsrens"],
    alt: "Håndverker som vasker tak med høytrykkspyler, festet i sikkerhetssele.",
  },
  {
    src: "/hekkeklipping.png",
    title: "Hagearbeid",
    description:
      "Vedlikehold av hage og uteområder for private boliger og eiendommer.",
    items: ["Hekkeklipp", "Plenklipp", "Hagevedlikehold", "Rydding"],
    alt: "Håndverker som klipper hekk med batteridrevet hekksaks.",
  },
  {
    src: "/gravemaskin.png",
    title: "Gravearbeid",
    description:
      "Mindre gravearbeid og klargjøring av tomt, drenering og oppkjørsel.",
    items: ["Graving", "Drenering", "Oppkjørsel", "Tomtearbeid"],
    alt: "Betjening av liten gravemaskin i hage med oppgravd jord.",
  },
  {
    src: "/kattedor.png",
    title: "Smart Hjem & Teknisk Hjelp",
    description:
      "Installasjon av smarthus, nettverk, WiFi og teknisk hjelp hjemme.",
    items: ["Smarthus", "WiFi & nettverk", "PC-hjelp", "Feilsøking"],
    alt: "Håndverker som monterer elektronisk kattedør i ytterdør.",
  },
] as const;

const orgNrLabel = "Org.nr. 937 516 606";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#050505] text-zinc-100">
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a className="flex items-center gap-3" href="#" aria-label="Jæren Multiservice">
            <span className="grid h-14 w-24 place-items-center rounded-full border border-orange-500/30 bg-[radial-gradient(circle_at_center,#3a2614,#090909_70%)] text-center shadow-[0_0_22px_rgba(249,115,22,0.22)]">
              <span className="text-[11px] font-black uppercase leading-3 tracking-wide text-orange-300">
                Jæren
                <br />
                <span className="text-[9px] text-white">Multiservice</span>
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-12 text-sm font-semibold text-zinc-100 md:flex">
            <a className="transition hover:text-orange-400" href="#tjenester">
              Tjenester
            </a>
            <a className="transition hover:text-orange-400" href="#om-oss">
              Om oss
            </a>
            <a className="transition hover:text-orange-400" href="#kontakt">
              Kontakt
            </a>
          </nav>

          <a
            className="rounded-md bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_18px_rgba(249,115,22,0.28)] transition hover:bg-orange-400"
            href="#kontakt"
          >
            Gratis befaring
          </a>
        </div>
      </header>

      <main className="flex-1 bg-black">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,#151515,#050505_52%)] px-5 py-10 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Profesjonelle tjenester
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Praktisk hjelp på Jæren
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Ryddig arbeid innen husvask, hagearbeid, graving og teknisk hjelp
              hjemme. Gratis og uforpliktende befaring.
            </p>
          </div>
        </section>

        <section
          id="tjenester"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-9 sm:px-8 sm:py-10"
        >
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <li
                key={item.src}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#171717] shadow-2xl shadow-black/30"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="flex min-h-64 flex-col p-7">
                  <h2 className="text-2xl font-black tracking-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-1 text-sm leading-6 text-zinc-300">
                    {item.items.map((service) => (
                      <li key={service}>- {service}</li>
                    ))}
                  </ul>

                  <a
                    className="mt-auto pt-7 text-sm font-bold text-orange-500 transition hover:text-orange-400"
                    href="#kontakt"
                  >
                    Les mer →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="om-oss"
          className="border-y border-white/10 bg-[#0b0b0b] px-5 py-14 sm:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Om oss
              </p>
              <h2 className="mt-3 text-3xl font-black text-white">
                Små og store oppdrag, gjort skikkelig
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                Jæren Multiservice hjelper private og bedrifter med praktiske
                oppdrag der kvalitet, ryddighet og tydelig avtale betyr mest.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black p-6 text-sm leading-7 text-zinc-300">
              <p>{orgNrLabel}</p>
              <p>jaerenmultiservice.no</p>
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="scroll-mt-24 bg-black px-5 py-14 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Kontakt
            </h2>
            <p className="mt-4 max-w-xl text-zinc-300">
              Vi svarer så raskt vi kan. Beskriv gjerne type oppdrag og adresse,
              så vurderer vi sammen neste steg.
            </p>
            <a
              className="mt-8 inline-flex rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
              href="mailto:post@jaerenmultiservice.no"
            >
              post@jaerenmultiservice.no
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            © {new Date().getFullYear()} Jæren Multiservice · {orgNrLabel}
          </span>
          <span className="text-zinc-500">jaerenmultiservice.no</span>
        </div>
      </footer>
    </div>
  );
}
