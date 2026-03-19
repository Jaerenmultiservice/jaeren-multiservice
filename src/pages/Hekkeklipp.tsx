import { useNavigate } from "react-router-dom";

export default function Hekkeklipp() {
  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Hekketøy</h1>
      <p className="mb-6">
        Vi klipper og former hekk for et ryddig og pent uteområde. Riktig beskjæring gir sunn vekst og bedre utseende.
      </p>
      <h2 className="text-xl font-semibold mb-2">Hvordan vi jobber</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Vurdering av hekk</li>
        <li>Klipping og forming</li>
        <li>Opprydding</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Anbefalt tillegg</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Bortkjøring av avfall</li>
        <li>Plenklipp</li>
        <li>Vedlikeholdsavtale</li>
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
