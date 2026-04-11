import { Link } from "react-router-dom";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const navBtn =
  "text-white text-base md:text-lg font-medium hover:text-accent transition cursor-pointer bg-transparent border-0 p-0 font-inherit";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-between gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 min-w-0"
            aria-label="Jæren Multiservice – forsiden"
          >
            <img src="/favicon.svg" alt="" className="h-11 w-11 md:h-12 md:w-12 rounded-lg" width={48} height={48} />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
              JÆREN <span className="text-accent">MULTISERVICE</span>
            </span>
          </Link>

          <nav
            className="order-3 flex w-full md:order-none md:w-auto justify-center gap-8 md:gap-12 border-t border-white/10 pt-4 md:border-t-0 md:pt-0"
            aria-label="Hovedmeny"
          >
            <button type="button" onClick={() => scrollToId("tjenester")} className={navBtn}>
              Tjenester
            </button>
            <button type="button" onClick={() => scrollToId("om")} className={navBtn}>
              Om oss
            </button>
            <button type="button" onClick={() => scrollToId("befaring")} className={navBtn}>
              Kontakt
            </button>
          </nav>

          <div className="flex justify-end shrink-0">
            <button
              type="button"
              onClick={() => scrollToId("befaring")}
              className="rounded-lg bg-accent px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold text-white shadow-[0_0_24px_-4px_rgba(255,122,0,0.45)] transition hover:bg-[#ff8f1f] cursor-pointer border-0"
            >
              Bestill befaring
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

