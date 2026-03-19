export default function Reviews() {
  return (
    <section className="reviews bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Hva sier kundene?
        </h2>

        <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="review-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <p className="text-gray-200 italic mb-4">"Veldig fornøyd med takvask – seriøs og effektiv."</p>
            <span className="text-gray-500 text-sm">– Kunde, Sandnes</span>
          </div>

          <div className="review-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <p className="text-gray-200 italic mb-4">"Kom raskt og gjorde en kjempejobb i hagen."</p>
            <span className="text-gray-500 text-sm">– Kunde, Klepp</span>
          </div>

          <div className="review-card bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left hover:border-orange-500/50 transition-colors">
            <p className="text-gray-200 italic mb-4">"Profesjonell og ryddig utført arbeid."</p>
            <span className="text-gray-500 text-sm">– Kunde, Stavanger</span>
          </div>
        </div>

        <p className="rating text-gray-400 text-lg">⭐ 4.7/5 på MittAnbud</p>
      </div>
    </section>
  );
}
