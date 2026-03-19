import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function SmarthjemInstallasjon() {
  return (
    <>
      <section>
        <h1>Smarthjem installasjon</h1>
        <p className="lead">
          Vi setter opp smarte løsninger som gjør hverdagen enklere.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hvordan vi utfører jobben</h2>
        <p>
          Installasjon av smarte lys, termostater, nettverk og automatisering. Vi tilpasser løsningen til bolig og behov.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          Økt komfort, lavere strømforbruk og bedre kontroll. Smarthjem øker også verdien og salgbarheten på boligen.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>750 kr/time</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Vi kan også sette opp nettverk og WiFi for stabil dekning i hele huset.</p>
        </div>
        <Link to="/" state={{ scrollTo: "befaring" }} className="btn-primary">
          Få hjelp
        </Link>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default SmarthjemInstallasjon;
