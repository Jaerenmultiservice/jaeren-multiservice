interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ImageCard({ title, description, image }: Props) {
  return (
    <div className="relative group rounded-xl overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 h-[220px] flex flex-col justify-end">

        <h3 className="text-white text-2xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>

        <span className="text-[#ff7a00] font-semibold tracking-wide">
          LES MER →
        </span>

      </div>

      {/* Glow border */}
      <div className="absolute inset-0 rounded-xl border border-[#ff7a00]/30 group-hover:border-[#ff7a00] transition duration-500" />
    </div>
  );
}
