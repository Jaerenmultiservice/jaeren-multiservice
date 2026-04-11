import { Link } from "react-router-dom";
import { Home, TreePine, Wrench, Cpu } from "lucide-react";

const services = [
  {
    title: "Takvask",
    icon: Home,
    description: "Takvask, takrens og fjerning av mose og smuss.",
    items: ["Takvask", "Takrens", "Mosefjerning", "Impregnering"],
    image:
      "https://images.unsplash.com/photo-1632778149955-e48f8e377b37?auto=format&fit=crop&w=800&q=80",
    imagePosition: "object-[50%_12%]",
    link: "/takvask",
  },
  {
    title: "Hagearbeid",
    icon: TreePine,
    description:
      "Vedlikehold av hage og uteområder for private boliger og eiendommer.",
    items: ["Hekkeklipp", "Plenklipp", "Hagevedlikehold", "Rydding"],
    image:
      "https://images.unsplash.com/photo-1558904541-ef23c1559016?auto=format&fit=crop&w=800&q=80",
    imagePosition: "object-[50%_18%]",
    link: "/hagearbeid",
  },
  {
    title: "Gravearbeid",
    icon: Wrench,
    description:
      "Mindre gravearbeid og klargjøring av tomt, drenering og oppkjørsel.",
    items: ["Graving", "Drenering", "Oppkjørsel", "Tomtearbeid"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    imagePosition: "object-[50%_20%]",
    link: "/graving",
  },
  {
    title: "Smarthjem & Teknisk Hjelp",
    icon: Cpu,
    description:
      "Installasjon av smarthus, nettverk, WiFi og teknisk hjelp i hjemmet.",
    items: ["Smarthus", "WiFi & nettverk", "PC-hjelp", "Feilsøking"],
    image:
      "https://images.unsplash.com/photo-1558002038-1058797c48da?auto=format&fit=crop&w=800&q=80",
    imagePosition: "object-[50%_22%]",
    link: "/smarthjem",
  },
];

export default function ServiceCards() {
  return (
    <section id="tjenester" className="bg-[#0a0a0a] pb-24 pt-4 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Hva kan vi hjelpe deg med?</h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-400 md:text-lg">
            Tjenester for hjem, eiendom og uteområder i Jæren.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.link}
              className="group block overflow-hidden rounded-xl border border-white/10 bg-[#141414] transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              aria-label={`${service.title} – les mer`}
            >
              <div className="h-52 overflow-hidden bg-black/30 md:h-56">
                <img
                  src={service.image}
                  alt=""
                  className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${service.imagePosition}`}
                  loading="lazy"
                />
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{service.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400 md:text-base">{service.description}</p>

                <ul className="mb-5 mt-4 space-y-1 text-sm text-neutral-300">
                  {service.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

                <span className="font-semibold text-accent group-hover:underline">Les mer →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

