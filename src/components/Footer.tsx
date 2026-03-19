export default function Footer() {
  return (
    <footer className="footer bg-black py-12 md:py-16 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold text-white">Jæren Multiservice</h3>
          <p className="mt-2 text-gray-500 text-sm">Org.nr: 926 553 526</p>
          <p className="text-gray-500 text-sm">Område: Jæren, Sandnes, Stavanger</p>
        </div>

        <div className="text-gray-400 text-sm">
          <p>
            <a href="tel:+4792939628" className="hover:text-orange-500 transition-colors">
              Telefon: 929 39 628
            </a>
          </p>
          <p className="mt-1">
            <a href="mailto:post@jaerenmultiservice.no" className="hover:text-orange-500 transition-colors">
              E-post: post@jaerenmultiservice.no
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
