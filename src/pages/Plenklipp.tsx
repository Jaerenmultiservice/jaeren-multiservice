import { useNavigate } from "react-router-dom";

export default function Plenklipp() {
  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Plenklipp</h1>
      <p className="mb-6">
        Vi sørger for jevn og pen plen gjennom sesongen. Perfekt for deg som vil slippe arbeidet selv.
      </p>
      <h2 className="text-xl font-semibold mb-2">Hvordan vi jobber</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Klipping</li>
        <li>Kantklipp</li>
        <li>Opprydding</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Anbefalt tillegg</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Hagevedlikehold</li>
        <li>Rydding</li>
        <li>Fast avtale</li>
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
