import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ALL_OTHER_SERVICES = [
  { title: "Takrennerens", desc: "Rens og vedlikehold av takrenner", link: "/takrennerens" },
  { title: "Steinlegging", desc: "Terrasse, oppkjørsel og mur", link: "/steinlegging" },
  { title: "Snørydding", desc: "Rydding og salting", link: "/snorydding" },
  { title: "Plenklipp", desc: "Plenklipp og hagevedlikehold", link: "/plenklipp" },
  { title: "Maling", desc: "Innvendig og utvendig maling", link: "/maling" },
  { title: "Vinduspuss", desc: "Profesjonell vindusvask", link: "/vinduspuss" },
  { title: "Sandblasting", desc: "Overflatebehandling og rens", link: "/sandblasting" },
  { title: "Flislegging", desc: "Fliser innendørs og utendørs", link: "/flislegging" },
  { title: "Trearbeid", desc: "Bygg og reparasjon i tre", link: "/trearbeid" },
  { title: "Trailer", desc: "Transport og frakt", link: "/trailer" },
];

export default function TjenesterPage() {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Link
            to="/#tjenester"
            className="inline-block text-zinc-500 hover:text-[#ff7a00] text-sm tracking-wide mb-12 transition-colors"
          >
            ← Tilbake til forsiden
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            Alle tjenester
          </h1>
          <p className="mt-3 text-gray-500 max-w-xl">
            Oversikt over alle våre tjenester. Ta kontakt for befaring og tilbud.
          </p>
          <ul className="mt-14 space-y-6">
            {ALL_OTHER_SERVICES.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.link}
                  className="block py-4 border-b border-zinc-800/80 hover:border-[#ff7a00]/30 transition-colors group"
                >
                  <span className="text-lg font-medium text-white group-hover:text-[#ff7a00] transition-colors">
                    {service.title}
                  </span>
                  <span className="block mt-1 text-sm text-zinc-500">
                    {service.desc}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
