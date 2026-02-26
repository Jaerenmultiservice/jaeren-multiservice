import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function OmOss() {
  return (
    <>
      <div className="min-h-screen bg-dark flex flex-col">
        <section className="relative py-20 md:py-28 overflow-hidden bg-dark-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Om oss
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Jæren Multiservice leverer profesjonelle tjenester for private og bedrifter i Jæren-området. 
              Vi er opptatt av kvalitet, tydelige tilbud og ryddig arbeid.
            </p>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Vi tilbyr takvask, høytrykkspyling, hekkeklipp og gravearbeid. 
              Ta gjerne kontakt for en uforpliktende befaring og skriftlig tilbud.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/#tjenester" className="btn-secondary min-w-0">
                Se våre tjenester
              </Link>
              <Link to="/#befaring" className="btn-primary min-w-0">
                Få gratis befaring
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  )
}
