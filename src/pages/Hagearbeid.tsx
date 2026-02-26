import ServicePageLayout from '../components/ServicePageLayout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Hagearbeid() {
  return (
    <>
      <ServicePageLayout
        title="Hagearbeid"
        intro="Profesjonelt hagearbeid for private og bedrifter. Vi hjelper med alt fra plenklipp og kantklipping til planting, rydding og generelt hagevedlikehold – enkeltstående jobber eller faste avtaler."
        heroImagePlaceholder="hagearbeid"
        howWeDoIt={[
          'Vurdering av hagen og ønsket resultat',
          'Plenklipp, kantklipping og forming',
          'Planting og rydding',
          'Avfallshåndtering og ryddig opprydding',
          'Vedlikeholdsplan etter behov',
        ]}
        whyWorthIt={[
          'Hagen ser vedlikeholdt og innbydende ut',
          'Spar tid og slit med profesjonell hjelp',
          'Faste avtaler gir forutsigbarhet',
          'Erfaring med ulike hagetyper',
        ]}
        recommendedAddons={[
          'Hekkeklipp og forming',
          'Gravearbeid og drenering',
          'Planlegging av sesongvis vedlikehold',
        ]}
        ctaTitle="Bestill gratis befaring for hagearbeid"
      />
      <Contact />
      <Footer />
    </>
  )
}
