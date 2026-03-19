import { Link } from "react-router-dom";
import { Home, TreePine, Wrench, Cpu } from "lucide-react";

const services = [
  {
    title: "Takvask",
    icon: Home,
    description: "Takvask, takrens og fjerning av mose og smuss.",
    items: ["Takvask", "Takrens", "Mosefjerning", "Impregnering"],
    image: "/images/takvask.jpg",
    imagePosition: "object-[50%_12%]",
    link: "/takvask",
  },
  {
    title: "Hagearbeid",
    icon: TreePine,
    description:
      "Vedlikehold av hage og uteområder for private boliger og eiendommer.",
    items: ["Hekkeklipp", "Plenklipp", "Hagevedlikehold", "Rydding"],
    image: "/images/hage.jpg",
    imagePosition: "object-[50%_18%]",
    link: "/hagearbeid",
  },
  {
    title: "Gravearbeid",
    icon: Wrench,
    description:
      "Mindre gravearbeid og klargjøring av tomt, drenering og oppkjørsel.",
    items: ["Graving", "Drenering", "Oppkjørsel", "Tomtearbeid"],
    image: "/images/graving.jpg",
    imagePosition: "object-[50%_20%]",
    link: "/graving",
  },
  {
    title: "Smarthjem & Teknisk Hjelp",
    icon: Cpu,
    description:
      "Installasjon av smarthus, nettverk, WiFi og teknisk hjelp i hjemmet.",
    items: ["Smarthus", "WiFi & nettverk", "PC-hjelp", "Feilsøking"],
    image: "/images/smarthjem.jpg",
    imagePosition: "object-[50%_22%]",
    link: "/smarthjem",
  },
];

export default function ServiceCards() {
  return (
    <section id="tjenester" className="bg-black text-white pt-0 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hva kan vi hjelpe deg med?
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Tjenester for hjem, eiendom og uteområder i Jæren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {services.map((service, i) => {

            

            return (
              <Link
                key={i}
                to={service.link}
                className="service-card group block bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1"
                aria-label={`${service.title} – les mer`}
              >
                <div className="w-full h-60 md:h-64 bg-black/20 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover ${service.imagePosition}`}
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="text-sm text-gray-300 space-y-1 mb-6">
                    {service.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>

                  <span className="text-orange-500 font-semibold group-hover:underline">
                    Les mer →
                  </span>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}

