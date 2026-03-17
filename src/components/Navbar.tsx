export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-800">

      <div className="max-w-7xl mx-auto h-28 px-6 grid grid-cols-3 items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Jæren Multiservice"
            className="h-20 w-auto"
          />
        </div>

        {/* Center navigation */}
        <nav className="flex justify-center gap-12 text-white text-lg font-medium">

          <a href="#tjenester" className="hover:text-orange-400 transition">
            Tjenester
          </a>

          <a href="#om" className="hover:text-orange-400 transition">
            Om oss
          </a>

          <a href="#kontakt" className="hover:text-orange-400 transition">
            Kontakt
          </a>

        </nav>

        {/* CTA */}
        <div className="flex justify-end">
          <a
            href="#kontakt"
            className="bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-md font-semibold transition text-base"
          >
            Gratis befaring
          </a>
        </div>

      </div>
    </header>
  );
}

