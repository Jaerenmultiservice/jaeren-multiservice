import { useNavigate } from "react-router-dom";

export default function Mosefjerning() {
  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Mosefjerning</h1>
      <p className="mb-6">
        Mose trekker til seg fukt og kan skade takstein over tid. Vi fjerner mose effektivt og skånsomt uten å skade taket.
      </p>
      <h2 className="text-xl font-semibold mb-2">Hvordan vi jobber</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Vurdering av tak</li>
        <li>Skånsom fjerning</li>
        <li>Rens av overflate</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Anbefalt tillegg</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>Takrens</li>
        <li>Impregnering</li>
        <li>Takrenner</li>
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
