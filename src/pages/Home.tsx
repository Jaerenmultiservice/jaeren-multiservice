import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import ServiceCards from "../components/ServiceCards";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HomeHero />
      <ServiceCards />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
