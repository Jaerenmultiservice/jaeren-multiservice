import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Hekk() {
  return (
    <>
      <section>
        <h1>Hekkeklipp i Jæren</h1>
        <p className="lead">
          Vi sørger for en ryddig og velstelt hage – raskt og effektivt.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hvordan vi utfører jobben</h2>
        <p>
          Klipping, forming og vedlikehold av hekk for private og borettslag. Vi bruker profesjonelt utstyr og ryddig opprydding.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          Regelmessig klipp gir tettere hekk og et penere uteområde. Det øker trivselen og verdien på eiendommen.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>650 kr/time</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Kombiner med generell rydding eller plenklipp for en komplett hagepakke.</p>
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

export default Hekk;
