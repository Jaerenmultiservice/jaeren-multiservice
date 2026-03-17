export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[78vh] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-90" />
      <div className="absolute w-[700px] h-[700px] bg-orange-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-6">
          Alt innen hage og hjem
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Fra takvask og hagearbeid til gravearbeid og smarthus – vi tar jobben.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-base transition"
          >
            Gratis befaring
          </a>

          <a
            href="#tjenester"
            className="border border-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white hover:text-black transition"
          >
            Se tjenester
          </a>
        </div>

        <div className="mt-8 text-sm md:text-base text-gray-400 flex flex-wrap justify-center gap-6">
          <span>✔ Lokal bedrift i Jæren</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
      </div>
    </section>
  );
}
