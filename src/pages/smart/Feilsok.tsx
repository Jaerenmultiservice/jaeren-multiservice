import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function SmarthjemFeilsok() {
  return (
    <>
      <section>
        <h1>Feilsøking smarthjem</h1>
        <p className="lead">
          Vi finner og retter feil på smarte lys, termostater og automatisering.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hvordan vi utfører jobben</h2>
        <p>
          Vi feilsøker nettverk, enheter og oppsett. Ofte er det en enkel justering eller et nytt oppsett som løser problemet.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          Et smarthjem som ikke fungerer er frustrerende. Rask feilsøking sparer tid og gir tilbake komforten.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>750 kr/time</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Etter feilsøking kan vi foreslå forbedringer eller nye enheter for å unngå gjentakende problemer.</p>
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

export default SmarthjemFeilsok;
