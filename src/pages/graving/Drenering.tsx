import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Drenering() {
  return (
    <>
      <section>
        <h1>Drenering</h1>
        <p className="lead">
          Dreneringsrør, sluk og avløpsløsninger for tomt og bygg.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hvordan vi utfører jobben</h2>
        <p>
          Vi legger drenering, sluk og rør etter behov. Riktig avløp og fukthåndtering sikrer tørr og trygg bygg og tomt.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          Dårlig drenering gir fukt, mugg og skader. Profesjonell utforming og utførelse sparer penger på sikt.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>Pris etter befaring</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Kombiner med planering eller gravearbeid for en komplett tomte-/byggeløsning.</p>
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

export default Drenering;
