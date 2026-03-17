import ServicePageLayout from '../components/ServicePageLayout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Takvask() {
  return (
    <>
      <ServicePageLayout
        title="Takvask"
        intro="Profesjonell takvask for bolig og bedrift. Vi forlenger levetiden på taket med trygg og skånsom rens – og gir deg et rent, holdbart resultat."
        heroImage="/images/takvask-hero.svg"
        howWeDoIt={[
          'Grundig inspeksjon av tak og beslag',
          'Skånsom rens av takflater',
          'Fjerning av mose og alger',
          'Kontroll av takstein og skader',
          'Opprydding og ryddig avvikling',
        ]}
        whyWorthIt={[
          'Forlenger levetiden på taket',
          'Forhindrer frostskader og fukt',
          'Øker verdi og utseende på boligen',
          'Mindre vedlikehold på sikt',
        ]}
        recommendedAddons={[
          'Impregnering for bedre beskyttelse',
          'Rens av takrenner',
          'Kontroll av beslag og skruer',
        ]}
        ctaTitle="Bestill gratis befaring for takvask"
      />
      <Contact />
      <Footer />
    </>
  )
}
