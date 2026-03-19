export default function Pricing() {
  return (
    <section className="pricing bg-black py-24 px-6 scroll-mt-[140px]" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Hva koster det?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Enkle og tydelige priser. Endelig pris gis etter befaring.
        </p>

        <div className="pricing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="price-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Takvask</h3>
            <p className="price text-2xl font-bold text-orange-500 mb-1">Fra 3.000 kr</p>
            <p className="text-gray-400 text-sm">Avhenger av størrelse og tilstand</p>
          </div>

          <div className="price-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Hagearbeid</h3>
            <p className="price text-2xl font-bold text-orange-500 mb-1">650 kr/time</p>
            <p className="text-gray-400 text-sm">Hekkeklipp, rydding, vedlikehold</p>
          </div>

          <div className="price-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Gravearbeid</h3>
            <p className="price text-2xl font-bold text-orange-500 mb-1">Fra 900 kr/time</p>
            <p className="text-gray-400 text-sm">Minigraver og klargjøring</p>
          </div>

          <div className="price-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Smarthjem / IT</h3>
            <p className="price text-2xl font-bold text-orange-500 mb-1">750 kr/time</p>
            <p className="text-gray-400 text-sm">Installasjon og oppsett</p>
          </div>
        </div>
      </div>
    </section>
  );
}
