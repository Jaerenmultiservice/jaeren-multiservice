export default function BeforeAfter() {
  return (
    <section className="before-after bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Resultater du kan stole på
        </h2>

        <div className="before-after-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
            <img
              src="/images/before.jpg"
              alt="Før takvask"
              className="w-full h-64 md:h-80 object-cover"
            />
            <p className="py-4 text-gray-400 font-medium">Før</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
            <img
              src="/images/after.jpg"
              alt="Etter takvask"
              className="w-full h-64 md:h-80 object-cover"
            />
            <p className="py-4 text-gray-400 font-medium">Etter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
