export default function HomeHero() {
  return (
    <section className="hero relative bg-black text-white h-[60vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden pb-10 md:pb-12">
      <div className="absolute w-[700px] h-[700px] bg-orange-500/10 blur-[160px] rounded-full" aria-hidden />
      <div className="absolute inset-0 bg-black/70" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent" aria-hidden />

      <div className="hero-content relative z-10 max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-0">
          Alt innen hage og hjem
        </h1>

        <p className="mt-3 text-lg md:text-xl text-gray-300 leading-relaxed mb-0">
          Takvask, hagearbeid, graving og smarthjem i Jæren – rask respons og solid utført arbeid.
        </p>

        <div className="hero-buttons mt-5 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => document.getElementById('befaring')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="border-none outline-none overflow-hidden transform-gpu rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.01)] ring-0 ring-offset-0 transition-colors transition-transform duration-300 hover:scale-[1.02] hover:bg-orange-600 cursor-pointer"
          >
            Bestill befaring
          </button>
          <button
            type="button"
            onClick={() => document.getElementById('tjenester')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="border-none outline-none overflow-hidden transform-gpu rounded-xl bg-transparent px-8 py-4 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.01)] ring-1 ring-white/30 ring-offset-0 ring-offset-transparent transition-colors transition-transform duration-300 hover:scale-[1.02] hover:bg-white hover:text-black cursor-pointer"
          >
            Se tjenester
          </button>
        </div>

        <div className="hero-trust mt-8 text-sm md:text-base text-gray-400 flex flex-wrap justify-center gap-6">
          <span>✔ Lokalt firma i Jæren</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
      </div>
    </section>
  );
}
