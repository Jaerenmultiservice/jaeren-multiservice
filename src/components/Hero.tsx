export type HeroProps = {
  image: string
  title: string
  position: string
}

export default function Hero({ image, title, position }: HeroProps) {
  return (
    <div className="relative w-full h-[50vh] md:h-[55vh] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="flex h-full items-center justify-center pt-10">
          <h1 className="text-4xl font-bold text-white md:text-6xl">{title}</h1>
        </div>
      </div>
    </div>
  )
}
