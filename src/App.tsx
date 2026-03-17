import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Hero from './components/Hero'
import ServiceCards from '@/components/ServiceCards'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Takvask from './pages/Takvask'
import Hoytrykk from './pages/Hoytrykk'
import Hekkeklipp from './pages/Hekkeklipp'
import Hagearbeid from './pages/Hagearbeid'
import Gravearbeid from './pages/Gravearbeid'
import OmOss from './pages/OmOss'
import TjenestePlaceholder from './pages/TjenestePlaceholder'
import TjenesterPage from './pages/TjenesterPage'

function HomePage() {
  return (
    <Layout fullWidth>
      <Hero />
      <ServiceCards />
      <WhyUs />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/takvask" element={<Takvask />} />
        <Route path="/hoytrykk" element={<Hoytrykk />} />
        <Route path="/hekkeklipp" element={<Hekkeklipp />} />
        <Route path="/hagearbeid" element={<Hagearbeid />} />
        <Route path="/gravearbeid" element={<Gravearbeid />} />
        <Route path="/drenering" element={<TjenestePlaceholder title="Drenering" desc="Rør, sluk og dreneringsløsninger" />} />
        <Route path="/kattedor" element={<TjenestePlaceholder title="Kattedør" desc="Montering og tilpasning av kattedører" />} />
        <Route path="/takrennerens" element={<TjenestePlaceholder title="Takrennerens" desc="Rens og vedlikehold av takrenner" />} />
        <Route path="/fasadevask" element={<TjenestePlaceholder title="Fasadevask" desc="Profesjonell rens av fasader" />} />
        <Route path="/steinlegging" element={<TjenestePlaceholder title="Steinlegging" desc="Terrasse, oppkjørsel og mur" />} />
        <Route path="/snorydding" element={<TjenestePlaceholder title="Snørydding" desc="Rydding og salting" />} />
        <Route path="/tjenester" element={<TjenesterPage />} />
        <Route path="/kontakt" element={<Navigate to="/#befaring" replace />} />
        <Route path="/plenklipp" element={<TjenestePlaceholder title="Plenklipp" desc="Plenklipp og hagevedlikehold" />} />
        <Route path="/maling" element={<TjenestePlaceholder title="Maling" desc="Innvendig og utvendig maling" />} />
        <Route path="/vinduspuss" element={<TjenestePlaceholder title="Vinduspuss" desc="Profesjonell vindusvask" />} />
        <Route path="/sandblasting" element={<TjenestePlaceholder title="Sandblasting" desc="Overflatebehandling og rens" />} />
        <Route path="/flislegging" element={<TjenestePlaceholder title="Flislegging" desc="Fliser innendørs og utendørs" />} />
        <Route path="/trearbeid" element={<TjenestePlaceholder title="Trearbeid" desc="Bygg og reparasjon i tre" />} />
        <Route path="/trailer" element={<TjenestePlaceholder title="Trailer" desc="Transport og frakt" />} />
        </Routes>
      </main>
    </>
  )
}
