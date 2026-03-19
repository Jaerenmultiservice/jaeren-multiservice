import { useNavigate } from "react-router-dom";

export default function Rydding() {
  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Rydding av hage og tomt</h1>
      <p className="mb-6">
        Vi rydder opp i hage og uteområder – enten det er etter sesong, prosjekt eller behov.
      </p>
      <h2 className="text-xl font-semibold mb-2">Hvordan vi jobber</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Gjennomgang</li>
        <li>Rydding og fjerning</li>
        <li>Bortkjøring</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Anbefalt tillegg</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Hekketøy</li>
        <li>Plenklipp</li>
        <li>Bortkjøring</li>
      </ul>
      <button
        type="button"
        className="btn-primary"
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            document.getElementById("befaring")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 150);
        }}
      >
        Bestill befaring
      </button>
    </section>
  );
}
