const points = [
  {
    title: 'Erfaring',
    description: 'Vi har lang erfaring med takvask, høytrykk, hekkeklipp og gravearbeid. Du får et trygt og profesjonelt oppdrag.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Kvalitet',
    description: 'Vi bruker gode metoder og materiell, og leverer arbeid vi står for. Kunden er fornøyd – det er målet.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Skriftlig tilbud',
    description: 'Du får et skriftlig tilbud før vi starter. Ingen overraskelser – tydelig pris og omfang.',
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="hvorfor" className="py-20 md:py-28 bg-dark scroll-mt-[140px]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight text-center">
          Hvorfor velge oss
        </h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto text-lg">
          Vi er opptatt av å levere seriøst og forutsigbart – for private og bedrifter.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point) => (
            <div
              key={point.title}
              className="text-center"
            >
              <div className="flex justify-center">{point.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white uppercase">{point.title}</h3>
              <p className="mt-3 text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
