import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

type Props = {
  title: string
  desc: string
}

export default function TjenestePlaceholder({ title, desc }: Props) {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            {desc}
          </p>
          <p className="mt-6 text-gray-500">
            Vi tilbyr denne tjenesten for private og bedrifter. Ta kontakt for befaring og tilbud.
          </p>
          <Link
            to="/#befaring"
            className="hero-cta-primary mt-10 inline-block"
          >
            Bestill gratis befaring
          </Link>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}
