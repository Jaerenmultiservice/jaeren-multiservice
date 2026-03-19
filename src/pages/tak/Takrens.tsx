import { useNavigate } from "react-router-dom";

export default function Takrens() {
  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Takrens</h1>
      <p className="mb-6">
        Takrens fjerner skitt, alger og belegg som over tid bryter ned taket. Regelmessig rens bidrar til lengre levetid og et penere utseende på boligen.
      </p>
      <h2 className="text-xl font-semibold mb-2">Hvordan vi jobber</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Gratis befaring</li>
        <li>Skånsom og effektiv rens</li>
        <li>Kontroll av resultat</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Anbefalt tillegg</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Mosefjerning</li>
        <li>Impregnering (anbefales for lengre effekt)</li>
        <li>Rens av takrenner</li>
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
