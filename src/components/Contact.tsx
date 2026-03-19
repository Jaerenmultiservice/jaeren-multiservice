import { useState, FormEvent } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mgonpjya'

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

  const labelClass = 'block text-base font-medium text-gray-200 mb-2'

  const inputClass = 'h-14 w-full bg-transparent border border-neutral-700 px-4 text-base text-white placeholder:text-gray-500'
  const textareaClass = 'min-h-[160px] w-full bg-transparent border border-neutral-700 px-4 py-4 text-base text-white placeholder:text-gray-500'

  return (
    <section id="befaring" className="py-20 md:py-28 bg-dark-section border-y border-gray-800 scroll-mt-[140px]">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Få gratis befaring
        </h2>

        <p className="text-base md:text-lg text-gray-400 mb-10">
          Send forespørsel – vi tar kontakt for en uforpliktende befaring og skriftlig tilbud.
        </p>

        <form onSubmit={handleSubmit} method="POST" action={FORMSPREE_URL} className="mt-6 space-y-6">
          <input type="hidden" name="_subject" value="Ny forespørsel fra jaerenmultiservice.no" />

          <div>
            <label htmlFor="name" className={labelClass}>
              Navn
            </label>
            <input id="name" name="name" type="text" required className={inputClass} placeholder="Navn" />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-post
            </label>
            <input id="email" name="email" type="email" required className={inputClass} placeholder="E-post" />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Melding
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={textareaClass}
              placeholder="Hva trenger du hjelp med?"
            />
          </div>

          {status === 'sent' && <p className="text-accent font-medium">Takk! Vi tar kontakt så snart vi kan.</p>}
          {status === 'error' && <p className="text-red-400">Noe gikk galt. Prøv igjen eller ring oss.</p>}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="h-14 w-full bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold rounded-lg transition-colors disabled:opacity-70"
          >
            {status === 'sending' ? 'Sender …' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}

