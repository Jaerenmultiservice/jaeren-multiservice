import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const scrollToContact = () => {
    const el = document.getElementById("befaring") ?? document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <section className="hero">
        <h1>Alt innen hage og bolig i Jæren</h1>
        <p className="lead">
          Takvask, hagearbeid, graving og smarthjem – utført skikkelig og til avtalt tid.
        </p>

        <button type="button" onClick={scrollToContact} className="btn-primary">
          Gratis befaring
        </button>
      </section>

      <section>
        <h2>Velg tjeneste</h2>

        <div className="grid">
          <Link to="/takvask" className="card">
            <h3>Takvask</h3>
            <p>Fjerning av mose og skitt</p>
          </Link>

          <Link to="/hagearbeid" className="card">
            <h3>Hagearbeid</h3>
            <p>Vedlikehold og rydding</p>
          </Link>

          <Link to="/graving" className="card">
            <h3>Gravearbeid</h3>
            <p>Planering og klargjøring</p>
          </Link>

          <Link to="/smarthjem" className="card">
            <h3>Smarthjem</h3>
            <p>Installasjon og teknisk hjelp</p>
          </Link>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
