import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Takvask() {
  return (
    <>
      <Hero image="/images/takvask.jpg" title="Takvask" position="top center" />

      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mt-10 mb-4">Velg tjeneste</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/takvask/takvask" className="btn-secondary">
            Takvask
          </Link>
          <Link to="/takvask/takrens" className="btn-secondary">
            Takrens
          </Link>
          <Link to="/takvask/mosefjerning" className="btn-secondary">
            Mosefjerning
          </Link>
          <Link to="/takvask/impregnering" className="btn-secondary">
            Impregnering
          </Link>
        </div>
      </section>
    </>
  );
}

export default Takvask;
