import { Link } from "react-router-dom";

function Graving() {
  return (
    <>
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/images/graving.jpg"
          alt="Graving"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Graving
          </h1>
        </div>
      </div>

      <section>
        <h1>Gravearbeid</h1>

        <div className="grid">
          <Link to="/graving/planering">Planering</Link>
          <Link to="/graving/drenering">Drenering</Link>
        </div>
      </section>
    </>
  );
}

export default Graving;
