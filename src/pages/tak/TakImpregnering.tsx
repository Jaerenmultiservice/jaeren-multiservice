import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function TakImpregnering() {
  return (
    <>
      <section>
        <h1>Takimpregnering</h1>
        <p className="lead">
          Beskytt taket ditt etter vask og unngå ny mosevekst.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hva gjør impregnering?</h2>
        <p>
          Impregnering legger en beskyttende overflate som hindrer vann og smuss i å feste seg. Taket holder seg penere lenger.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          Gir lengre levetid på taket og reduserer behov for fremtidig rengjøring.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>Tillegg etter takrens</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Bestill impregnering sammen med takrens for best resultat og én rask jobb.</p>
        </div>
        <Link to="/" state={{ scrollTo: "befaring" }} className="btn-primary">
          Få gratis befaring
        </Link>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default TakImpregnering;
