export default function WhyUs() {
  return (
    <section id="om" className="why-us py-20 md:py-28 bg-black scroll-mt-[140px]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Hvorfor velge oss
        </h2>

        <div className="why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Erfaring</h3>
            <p className="text-gray-400">Erfaring med takvask, hagearbeid og graving.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Kvalitet</h3>
            <p className="text-gray-400">Vi bruker solid utstyr og leverer arbeid vi står for.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Tydelige priser</h3>
            <p className="text-gray-400">Du får alltid pris eller estimat før oppstart.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Rask oppstart</h3>
            <p className="text-gray-400">Ofte mulighet for oppstart innen få dager.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
