import { useState, FormEvent } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mzdjbypk'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)
    // include subject for Formspree
    formData.set('_subject', 'Ny forespørsel fra jaerenmultiservice.no')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-dark border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
  const labelClass = 'block text-sm font-medium text-gray-300 mb-2'

  return (
    <section id="befaring" className="py-20 md:py-28 bg-dark-section border-y border-gray-800 scroll-mt-[140px]">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight text-center">
          Få gratis befaring
        </h2>
        <p className="mt-4 text-gray-400 text-center text-lg">
          Send forespørsel – vi tar kontakt for en uforpliktende befaring og skriftlig tilbud.
        </p>

        <form onSubmit={handleSubmit} method="POST" action={FORMSPREE_URL} className="mt-12 space-y-6">
          <input type="hidden" name="_subject" value="Ny forespørsel fra jaerenmultiservice.no" />

          <div>
            <label htmlFor="name" className={labelClass}>
              Navn
            </label>
            <input id="name" name="name" type="text" required className={inputClass} placeholder="Ditt fulle navn" />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Telefonnummer
            </label>
            <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="F.eks. 123 45 678" />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-post
            </label>
            <input id="email" name="email" type="email" required className={inputClass} placeholder="din@epost.no" />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>
              Hvilken tjeneste
            </label>
            <select id="service" name="service" required className={inputClass}>
              <option value="">Velg tjeneste</option>
              <option>Takvask</option>
              <option>Høytrykkspyling</option>
              <option>Hekkeklipp</option>
              <option>Gravearbeid</option>
              <option>Drenering</option>
              <option>Takrennerens</option>
              <option>Fasadevask</option>
              <option>Steinlegging</option>
              <option>Snørydding</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className={labelClass}>
              Beskrivelse
            </label>
            <textarea
              id="description"
              name="message"
              rows={4}
              className={`${inputClass} resize-y`}
              placeholder="Kort beskrivelse av oppgaven eller adresse …"
            />
          </div>

          {status === 'sent' && <p className="text-accent font-medium">Takk! Vi tar kontakt så snart vi kan.</p>}
          {status === 'error' && <p className="text-red-400">Noe gikk galt. Prøv igjen eller ring oss.</p>}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-accent text-white font-semibold text-lg uppercase tracking-wide hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-section disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'sending' ? 'Sender …' : 'Send melding'}
          </button>
        </form>
      </div>
    </section>\n  )\n }\n*** End Patch"}
