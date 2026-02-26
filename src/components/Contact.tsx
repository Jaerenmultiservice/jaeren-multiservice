import { useState, FormEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const params = new URLSearchParams()
      params.append('form-name', 'contact')
      formData.forEach((value, key) => {
        if (key !== 'form-name') params.append(key, String(value))
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full px-4 py-3 bg-dark border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
  const labelClass = "block text-sm font-medium text-gray-300 mb-2"

  return (
    <section id="befaring" className="py-20 md:py-28 bg-dark-section border-y border-gray-800 scroll-mt-[140px]">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight text-center">
          Få gratis befaring
        </h2>
        <p className="mt-4 text-gray-400 text-center text-lg">
          Send forespørsel – vi tar kontakt for en uforpliktende befaring og skriftlig tilbud.
        </p>
        <form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>Ikke fyll ut dette: <input name="bot-field" aria-hidden="true" tabIndex={-1} /></label>
          </p>

          <div>
            <label htmlFor="name" className={labelClass}>Navn</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Navn"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>E-post</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-post"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>Melding</label>
            <textarea
              id="message"
              name="message"
              placeholder="Melding"
              rows={5}
              required
              className={`${inputClass} resize-y`}
            />
          </div>

          {status === 'sent' && (
            <p className="text-accent font-medium">
              Takk! Vi tar kontakt så snart vi kan.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400">
              Noe gikk galt. Prøv igjen eller ring oss.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-accent text-white font-semibold text-lg uppercase tracking-wide hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-section disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'sending' ? 'Sender …' : 'Send melding'}
          </button>
        </form>
      </div>
    </section>
  )
}
