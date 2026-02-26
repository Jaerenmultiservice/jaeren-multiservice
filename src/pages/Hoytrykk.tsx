import ServicePageLayout from '../components/ServicePageLayout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Hoytrykk() {
  return (
    <>
      <ServicePageLayout
        title="Høytrykkspyling"
        intro="Effektiv høytrykksvask av terrasser, fasader, oppkjørsel og utstyr. Vi tilpasser trykk og metode etter underlag – rask og grundig rens."
        heroImagePlaceholder="hoytrykk"
        howWeDoIt={[
          'Vurdering av underlag og grad av forurensning',
          'Valg av trykk og eventuell kjemisk forbehandling',
          'Grundig høytrykksvask av flater',
          'Rens av fuger og vanskelig tilgjengelige områder',
          'Opprydding og tørking der nødvendig',
        ]}
        whyWorthIt={[
          'Terrasse og treverk ser nye ut igjen',
          'Fasader og vegger blir rene uten skader',
          'Oppkjørsel og parkeringsplasser holdes holdbare',
          'Utstyr og maskiner får lengre levetid',
        ]}
        recommendedAddons={[
          'Behandling mot mose og alger',
          'Impregnering av treverk',
          'Rens av takrenner og nedløp',
        ]}
        ctaTitle="Bestill gratis befaring for høytrykkspyling"
      />
      <Contact />
      <Footer />
    </>
  )
}
