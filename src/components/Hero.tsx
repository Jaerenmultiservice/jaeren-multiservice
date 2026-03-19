export default function Hero() {
  return (
    <section className="hero relative bg-black text-white min-h-[78vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-90" aria-hidden />
      <div className="absolute w-[700px] h-[700px] bg-orange-500/10 blur-[160px] rounded-full" aria-hidden />

      <div className="hero-content relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Profesjonell hjelp til bolig, hage og eiendom
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Takvask, hagearbeid, graving og teknisk hjelp i Jæren.
          Rask respons – solid utført arbeid.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => document.getElementById('befaring')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-primary bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-base transition cursor-pointer"
          >
            Gratis befaring
          </button>
          <button
            type="button"
            onClick={() => document.getElementById('tjenester')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-secondary border border-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white hover:text-black transition cursor-pointer"
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
