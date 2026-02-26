import ServicePageLayout from '../components/ServicePageLayout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Gravearbeid() {
  return (
    <>
      <ServicePageLayout
        title="Gravearbeid"
        intro="Graving, drenering og tilrettelegging av tomt for private og bedrifter. Presist og ryddig arbeid – fra mindre graving til større anleggsjobber."
        heroImagePlaceholder="gravearbeid"
        howWeDoIt={[
          'Kartlegging og planlegging av arbeidet',
          'Graving til riktig dybde og bredde',
          'Legging av rør, kabler eller drenering',
          'Tilbakefylling og kompaktering',
          'Ryddig håndtering av masse og avfall',
        ]}
        whyWorthIt={[
          'Profesjonell utførelse uten unødvendig styr',
          'Riktig drenering forhindrer fukt og skader',
          'Tomten blir klar for bygging eller planting',
          'Én samarbeidspartner fra start til slutt',
        ]}
        recommendedAddons={[
          'Dreneringsrør og sluk',
          'Kontroll av eksisterende anlegg',
          'Planlegging av tomtearbeid',
        ]}
        ctaTitle="Bestill gratis befaring for gravearbeid"
      />
      <Contact />
      <Footer />
    </>
  )
}
