import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Hage() {
  return (
    <>
      <Hero image="/images/hage.jpg" title="Hagearbeid" position="center" />

      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mt-10 mb-4">Velg tjeneste</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/hagearbeid/hekkeklipp" className="btn-secondary">
            Hekkeklipp
          </Link>
          <Link to="/hagearbeid/plenklipp" className="btn-secondary">
            Plenklipp
          </Link>
          <Link to="/hagearbeid/hagevedlikehold" className="btn-secondary">
            Hagevedlikehold
          </Link>
          <Link to="/hagearbeid/rydding" className="btn-secondary">
            Rydding
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hage;
