function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-800 py-3">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Jæren Multiservice"
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Center navigation – onClick så HashRouter (#/) ikke brytes av #ankre */}
        <nav className="flex justify-center gap-8 md:gap-12 text-white text-base md:text-lg font-medium">

          <button
            type="button"
            onClick={() => scrollToId("tjenester")}
            className="hover:text-orange-400 transition cursor-pointer bg-transparent border-0 p-0 font-inherit"
          >
            Tjenester
          </button>

          <button
            type="button"
            onClick={() => scrollToId("om")}
            className="hover:text-orange-400 transition cursor-pointer bg-transparent border-0 p-0 font-inherit"
          >
            Om oss
          </button>

          <button
            type="button"
            onClick={() => scrollToId("befaring")}
            className="hover:text-orange-400 transition cursor-pointer bg-transparent border-0 p-0 font-inherit"
          >
            Kontakt
          </button>

        </nav>

        {/* CTA */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => scrollToId("befaring")}
            className="bg-orange-500 hover:bg-orange-600 px-5 md:px-7 py-3 rounded-md font-semibold transition text-sm md:text-base text-white cursor-pointer border-0"
          >
            Bestill befaring
          </button>
        </div>

      </div>
    </header>
  );
}

