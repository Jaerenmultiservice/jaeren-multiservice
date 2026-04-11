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

  const labelClass = "mb-2 block text-sm font-medium text-neutral-200";

  const fieldClass =
    "h-12 w-full rounded-lg border border-neutral-600 bg-[#1a1a1a] px-4 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-accent focus:ring-1 focus:ring-accent";
  const textareaClass =
    "min-h-[140px] w-full rounded-lg border border-neutral-600 bg-[#1a1a1a] px-4 py-3 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-accent focus:ring-1 focus:ring-accent";

  return (
    <section id="befaring" className="scroll-mt-[120px] border-y border-white/10 bg-[#0d0d0d] py-20 md:py-28">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Få gratis befaring</h2>

        <p className="mt-3 text-base leading-relaxed text-neutral-400 md:text-lg">
          Fyll ut skjemaet – vi kontakter deg for en uforpliktende befaring og skriftlig tilbud.
        </p>

        <form onSubmit={handleSubmit} method="POST" action={FORMSPREE_URL} className="mt-10 space-y-5">
          <input type="hidden" name="_subject" value="Ny forespørsel fra jaerenmultiservice.no" />

          <div>
            <label htmlFor="name" className={labelClass}>
              Navn
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Ditt fulle navn" />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClass}
              placeholder="Telefonnummer"
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
              placeholder="din@epost.no"
            />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>
              Type tjeneste
            </label>
            <select id="service" name="service" className={`${fieldClass} cursor-pointer`} defaultValue="">
              <option value="" disabled>
                Velg kategori
              </option>
              <option value="Tak / takvask">Tak / takvask</option>
              <option value="Hage">Hage</option>
              <option value="Graving / drenering">Graving / drenering</option>
              <option value="Smarthjem / teknisk">Smarthjem / teknisk</option>
              <option value="Annet">Annet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Beskrivelse
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={textareaClass}
              placeholder="Kort om hva du trenger hjelp med …"
            />
          </div>

          {status === "sent" && <p className="text-accent font-medium">Takk! Vi tar kontakt så snart vi kan.</p>}
          {status === "error" && <p className="text-red-400">Noe gikk galt. Prøv igjen eller ring oss.</p>}

          <button
            type="submit"
            disabled={status === "sending"}
            className="h-14 w-full rounded-lg bg-accent text-base font-semibold text-white transition hover:bg-[#ff8f1f] disabled:opacity-70"
          >
            {status === "sending" ? "Sender …" : "Send melding"}
          </button>
        </form>
      </div>
    </section>
  )
}

