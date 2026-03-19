import { Link } from "react-router-dom";

const MAIN_SERVICES = [
  { title: "Takvask", link: "/takvask", image: "/images/services/rengjoring-hus.png", description: "Profesjonell takvask og vedlikehold for bolig og næring." },
  { title: "Fasadevask", link: "/fasadevask", image: "/images/services/rengjoring-hus.png", description: "Rens av fasader, inngangspartier og utvendige flater." },
  { title: "Hagearbeid", link: "/hagearbeid", image: "/images/services/gartner.png", description: "Hekkeklipp, plenklipp og generelt hagevedlikehold." },
  { title: "Gravearbeid", link: "/gravearbeid", image: "/images/services/gravearbeid-arbeid.png", description: "Graving, drenering og rydding av tomter og oppkjørsel." },
  { title: "Kattedør", link: "/kattedor", image: "/images/services/smarthjem.png", description: "Montering og tilpasning av kattedører." },
  { title: "Takrens", link: "/takvask/takrens", image: "/images/services/rengjoring-hus.png", description: "Fjerning av mose, skitt og begroing." },
];

export default function Services() {
  return (
    <section id="tjenester" className="relative bg-black py-32 px-6 lg:px-8 xl:px-10 overflow-hidden scroll-mt-[140px]">
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl xl:max-w-[80rem] 2xl:max-w-[90rem] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight text-center">
          Våre tjenester
        </h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto text-lg">
          Profesjonelle tjenester for private og bedrifter i Jæren-området
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {MAIN_SERVICES.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group block rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#1a1a1a] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={`${service.title} – les mer`}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/65" aria-hidden />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{service.description}</p>
                  <span className="mt-4 inline-block bg-[#ff7a00] px-5 py-2 rounded-md text-white text-sm font-semibold hover:bg-[#e56700] transition-colors">
                    Les mer
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
