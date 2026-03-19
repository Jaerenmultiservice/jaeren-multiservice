import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Planering() {
  return (
    <>
      <section>
        <h1>Planering og klargjøring av tomt</h1>
        <p className="lead">
          Vi klargjør underlag for hage, plen, terrasse eller bygg.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hvordan vi utfører jobben</h2>
        <p>
          Planering, utjevning og forberedelse av grunn. Vi kartlegger behov og utfører arbeidet ryddig og presist.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          Riktig grunnarbeid er avgjørende for et varig resultat. Dårlig forberedt underlag gir problemer senere.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>Fra 900 kr/time</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Drenering eller rørlegging kan legges inn samtidig for å spare tid og penger.</p>
        </div>
        <Link to="/" state={{ scrollTo: "befaring" }} className="btn-primary">
          Få befaring
        </Link>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Planering;
