import ServicePageLayout from '../components/ServicePageLayout'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Hekkeklipp() {
  return (
    <>
      <ServicePageLayout
        title="Hekkeklipp"
        intro="Ryddige hekker og profesjonell klipping som holder hagen i form. Vi har erfaring med ulike hekketyper og størrelser – enkeltstående jobber eller faste avtaler."
        heroImagePlaceholder="hekkeklipp"
        howWeDoIt={[
          'Vurdering av hekketype og tilstand',
          'Klipping og forming etter ønsket profil',
          'Ryddige linjer og jevn høyde',
          'Rydding og avfallshåndtering',
          'Tips til vedlikehold mellom besøk',
        ]}
        whyWorthIt={[
          'Hagen ser ryddig og vedlikeholdt ut',
          'Hekkene tåler vær og vind bedre',
          'Spar tid og slit med egen klipping',
          'Faste avtaler gir forutsigbarhet',
        ]}
        recommendedAddons={[
          'Hagearbeid og kantklipping',
          'Fjerning av avfall',
          'Planlegging av klippefrekvens',
        ]}
        ctaTitle="Bestill gratis befaring for hekkeklipp"
      />
      <Contact />
      <Footer />
    </>
  )
}
