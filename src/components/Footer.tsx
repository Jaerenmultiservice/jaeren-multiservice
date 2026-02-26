import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark py-12 md:py-16 border-t border-gray-800 scroll-mt-[140px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-white uppercase tracking-tight">
              Jæren Multiservice
            </Link>
            <p className="mt-2 text-gray-500 text-sm">
              Organisasjonsnummer: [Fyll inn]
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-gray-400">
            <a href="tel:+4792939628" className="hover:text-accent transition-colors">
              Telefon: 92 93 96 28
            </a>
            <a href="mailto:post@jaeremultiservice.no" className="hover:text-accent transition-colors">
              E-post: post@jaeremultiservice.no
            </a>
          </div>
        </div>
        <p className="mt-8 text-gray-500 text-sm">
          Område: Jæren, Sandnes, Stavanger
        </p>
      </div>
    </footer>
  )
}
