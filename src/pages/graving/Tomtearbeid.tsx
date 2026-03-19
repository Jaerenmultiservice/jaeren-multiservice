import { useNavigate } from "react-router-dom";

const MASKIN_TEKST =
  "Vi vurderer hvert prosjekt individuelt og velger riktig gravemaskin og utstyr basert på størrelse og behov. Dette gir mer effektivt arbeid, mindre belastning på eiendommen og bedre resultat. Ved behov leies passende gravemaskin inn for oppdraget.";

export default function Tomtearbeid() {
  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Tomtearbeid</h1>
      <p className="mb-6">
        Vi utfører grunnarbeid og klargjøring av tomt for små prosjekter.
      </p>
      <h2 className="text-xl font-semibold mb-2">Hvordan vi jobber</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Plan</li>
        <li>Utførelse</li>
        <li>Kontroll</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Ekstra info</h2>
      <p className="mb-6">{MASKIN_TEKST}</p>
      <h2 className="text-xl font-semibold mb-2">Anbefalt tillegg</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Graving</li>
        <li>Planering</li>
        <li>Hagearbeid</li>
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
