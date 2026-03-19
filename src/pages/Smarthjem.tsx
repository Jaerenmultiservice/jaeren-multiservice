import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Smarthjem() {
  return (
    <>
      <Hero image="/images/smarthjem.jpg" title="Smarthjem" position="center" />

      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mt-10 mb-4">Velg tjeneste</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/smarthjem/smarthus" className="btn-secondary">
            Smarthus
          </Link>
          <Link to="/smarthjem/wifi" className="btn-secondary">
            WiFi & nettverk
          </Link>
          <Link to="/smarthjem/pc" className="btn-secondary">
            PC-hjelp
          </Link>
          <Link to="/smarthjem/feilsoking" className="btn-secondary">
            Feilsøking
          </Link>
        </div>
      </section>
    </>
  );
}

export default Smarthjem;
