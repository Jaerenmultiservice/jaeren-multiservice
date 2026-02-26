export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[70vh] flex items-center bg-black overflow-hidden scroll-mt-[140px]"
      aria-label="Hovedseksjon"
    >
      {/* Subtil bakgrunn gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" aria-hidden />

      {/* Content – smalere og mindre vertikal luft */}
      <div className="relative z-10 max-w-[640px] mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Profesjonelle tjenester i Jæren
        </h1>

        <p className="text-base md:text-lg text-gray-300 max-w-[540px] mb-5">
          Takvask, fasadevask, gravearbeid og vedlikehold for private og bedrifter i
          Sandnes, Stavanger og omegn.
        </p>

        <div className="flex gap-3">
          <a
            href="#befaring"
            className="bg-[#ff7a00] hover:bg-[#e56700] text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Få gratis befaring
          </a>

          <a
            href="#tjenester"
            className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Se våre tjenester
          </a>
        </div>
      </div>
    </section>
  )
}
