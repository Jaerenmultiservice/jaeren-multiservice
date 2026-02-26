interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ImageServiceCard({ title, description, image }: Props) {
  return (
    <div className="relative group rounded-2xl overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient overlay for readability */}
      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black/80
        via-black/50
        to-black/30
        transition duration-500
        group-hover:from-black/60
      " />

      {/* Subtle glow edge */}
      <div className="
        absolute inset-0
        rounded-2xl
        border border-[#ff7a00]/30
        group-hover:border-[#ff7a00]
        transition duration-500
      " />

      {/* Content */}
      <div className="relative z-10 p-8 h-[240px] flex flex-col justify-end">

        <h3 className="text-white text-2xl font-bold mb-2 tracking-wide">
          {title}
        </h3>

        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>

        <span className="text-[#ff7a00] font-semibold tracking-wider">
          LES MER →
        </span>

      </div>
    </div>
  );
}
