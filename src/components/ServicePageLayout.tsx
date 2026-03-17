import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

export type ServicePageLayoutProps = {
  title: string
  intro: string
  heroImagePlaceholder?: string
  /**
   * Optional hero image path (public). When provided, this image will be used
   * as the hero background instead of the built-in gradient placeholders.
   * Example: "/images/takvask-hero.svg" or "/images/takvask-hero.jpg"
   */
  heroImage?: string
  howWeDoIt: string[]
  whyWorthIt: string[]
  recommendedAddons: string[]
  ctaTitle: string
  children?: ReactNode
}

export default function ServicePageLayout({
  title,
  intro,
  heroImagePlaceholder = 'default',
  heroImage,
  howWeDoIt,
  whyWorthIt,
  recommendedAddons,
  ctaTitle,
}: ServicePageLayoutProps) {
  const heroGradients: Record<string, string> = {
    default: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)',
    takvask: 'linear-gradient(135deg, #1a1810 0%, #2d2618 40%, #1a1a1a 100%)',
    hoytrykk: 'linear-gradient(135deg, #0f1419 0%, #1a2433 50%, #0d0d0d 100%)',
    hekkeklipp: 'linear-gradient(135deg, #0d120d 0%, #1a2e1a 50%, #0d0d0d 100%)',
    hagearbeid: 'linear-gradient(135deg, #0d120d 0%, #1a2e1a 50%, #0d0d0d 100%)',
    gravearbeid: 'linear-gradient(135deg, #151210 0%, #2a2520 50%, #0d0d0d 100%)',
  }
  const heroBg = heroGradients[heroImagePlaceholder] ?? heroGradients.default

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      {/* Hero for tjenesten */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-dark">
        {heroImage ? (
          <div className="absolute inset-0">
            <img src={heroImage} alt={`${title} hero`} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="absolute inset-0 opacity-90" style={{ background: heroBg }} aria-hidden />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/20" aria-hidden />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            {intro}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-16 md:py-24 space-y-24 md:space-y-32">
        {/* Hvordan vi utfører arbeidet */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight border-l-4 border-accent pl-4 mb-8">
            Hvordan vi utfører arbeidet
          </h2>
          <ul className="space-y-4">
            {howWeDoIt.map((item, i) => (
              <li key={i} className="flex gap-4 text-gray-300 text-lg">
                <span className="text-accent shrink-0 font-bold">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Hvorfor det lønner seg */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight border-l-4 border-accent pl-4 mb-8">
            Hvorfor det lønner seg
          </h2>
          <ul className="space-y-4">
            {whyWorthIt.map((item, i) => (
              <li key={i} className="flex gap-4 text-gray-300 text-lg">
                <span className="text-accent shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Anbefalt tillegg */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight border-l-4 border-accent pl-4 mb-8">
            Anbefalt tillegg
          </h2>
          <ul className="space-y-4">
            {recommendedAddons.map((item, i) => (
              <li key={i} className="flex gap-4 text-gray-300 text-lg">
                <span className="text-accent shrink-0">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-dark-section border-y border-gray-800 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
            {ctaTitle}
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Vi kommer på befaring og sender deg et skriftlig tilbud – uten forpliktelser.
          </p>
          <Link
            to="/#befaring"
            className="hero-cta-primary mt-8 inline-block min-w-[260px]"
          >
            Bestill gratis befaring
          </Link>
        </div>
      </section>
    </div>
  )
}
