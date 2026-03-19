import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Graving() {
  return (
    <>
      <Hero image="/images/graving.jpg" title="Gravearbeid" position="center" />

      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mt-10 mb-4">Velg tjeneste</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/graving/graving" className="btn-secondary">
            Graving
          </Link>
          <Link to="/graving/drenering" className="btn-secondary">
            Drenering
          </Link>
          <Link to="/graving/oppkjoring" className="btn-secondary">
            Oppkjørsel
          </Link>
          <Link to="/graving/tomtearbeid" className="btn-secondary">
            Tomtearbeid
          </Link>
        </div>
      </section>
    </>
  );
}

export default Graving;
