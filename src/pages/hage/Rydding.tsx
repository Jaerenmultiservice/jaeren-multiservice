import { Link } from "react-router-dom";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Rydding() {
  return (
    <>
      <section>
        <h1>Rydding i Jæren</h1>
        <p className="lead">
          Rydding av hage og tomt – avfall, løv og vedlikehold. Ryddig og effektivt.
        </p>
        <div className="trust">
          <span>✔ Lokalt firma</span>
          <span>✔ Rask respons</span>
          <span>✔ Gratis befaring</span>
        </div>
        <h2>Hvordan vi utfører jobben</h2>
        <p>
          Vi rydder, kaster løk og håndterer avfall. Vi kan også hjelpe med vedlikehold og enkel planting.
        </p>
        <h2>Hvorfor er dette viktig?</h2>
        <p>
          En ryddig hage og tomt ser bedre ut, er tryggere å ferdes i og gir ro i sinnet.
        </p>
        <div className="price-box">
          <h3>Pris</h3>
          <p>Pris etter befaring</p>
        </div>
        <div className="upsell">
          <h2>Anbefalt tillegg</h2>
          <p>Kombiner med hekkeklipp eller gravearbeid for en helhetlig løsning.</p>
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

export default Rydding;
