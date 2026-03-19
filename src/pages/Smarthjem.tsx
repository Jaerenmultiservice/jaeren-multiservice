import { Link } from "react-router-dom";

function Smarthjem() {
  return (
    <>
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/images/smarthjem.jpg"
          alt="Smarthjem"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Smarthjem
          </h1>
        </div>
      </div>

      <section>
        <h1>Smarthjem</h1>

        <div className="grid">
          <Link to="/smarthjem/installasjon">Installasjon</Link>
          <Link to="/smarthjem/feilsok">Feilsøking</Link>
        </div>
      </section>
    </>
  );
}

export default Smarthjem;
