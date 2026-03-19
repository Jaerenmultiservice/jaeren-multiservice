import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Takrens() {
  return (
    <>
      <section>
        <h1>Takrens i Jæren</h1>
        <p className="lead">
          Profesjonell fjerning av mose, alger og skitt – utført skånsomt og effektivt.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hvordan vi utfører jobben</h2>
        <p>
          Vi bruker profesjonelt utstyr med riktig trykk og metode tilpasset taktype. Dette sikrer effektiv rengjøring uten skade på takstein.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          Mose holder på fukt og kan føre til frostsprengning og slitasje. Regelmessig vedlikehold forlenger levetiden på taket betydelig.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>Fra 3.000 kr</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Vi anbefaler impregnering etter rens for å beskytte taket og redusere fremtidig vedlikehold.</p>
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

export default Takrens;
