export default function ServicesList() {
  return (
    <section id="tjenester" className="bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight text-center">
          Våre tjenester
        </h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
          Vi tilbyr praktiske tjenester for bolig og eiendom i Jæren.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <article id="boligservice" className="bg-dark-card border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Boligservice</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Montering av kattedør</li>
                <li>Smarthjem installasjon</li>
                <li>PC og teknisk hjelp i hjemmet</li>
                <li>Montering av utstyr</li>
                <li>Små reparasjoner</li>
                <li>Generell boligservice</li>
              </ul>
            </div>
            <div className="mt-6">
              <a href="#befaring" className="inline-block w-full text-center bg-accent text-black font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
                Be om hjelp
              </a>
            </div>
          </article>

          <article id="vask" className="bg-dark-card border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Hus- og takvask</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Takvask</li>
                <li>Fasadevask</li>
                <li>Terrassevask</li>
                <li>Rens av takrenner</li>
                <li>Vedlikehold av utvendige flater</li>
              </ul>
            </div>
            <div className="mt-6">
              <a href="#befaring" className="inline-block w-full text-center bg-accent text-black font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
                Bestill vask
              </a>
            </div>
          </article>

          <article id="hage" className="bg-dark-card border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Hagearbeid</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Hekkeklipp</li>
                <li>Hagevedlikehold</li>
                <li>Rydding av tomt</li>
                <li>Fjerning av busker</li>
                <li>Klargjøring av hage</li>
              </ul>
            </div>
            <div className="mt-6">
              <a href="#befaring" className="inline-block w-full text-center bg-accent text-black font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
                Få tilbud
              </a>
            </div>
          </article>

          <article id="gravearbeid" className="bg-dark-card border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Gravearbeid</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Graving</li>
                <li>Planering</li>
                <li>Drenering</li>
                <li>Flytting av masser</li>
                <li>Klargjøring til bygg</li>
              </ul>
            </div>
            <div className="mt-6">
              <a href="#befaring" className="inline-block w-full text-center bg-accent text-black font-semibold py-3 rounded-lg hover:bg-orange-600 transition">
                Be om befaring
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

