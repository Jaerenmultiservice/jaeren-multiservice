export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-bold tracking-tight text-white">
            JÆREN <span className="text-accent">MULTISERVICE</span>
          </p>
          <p className="mt-2 text-sm text-neutral-500">Org.nr: 926 553 526</p>
          <p className="text-sm text-neutral-500">Område: Jæren, Sandnes, Stavanger</p>
        </div>

        <div className="text-sm text-neutral-400">
          <p>
            <a href="tel:+4792939628" className="transition-colors hover:text-accent">
              Telefon: 929 39 628
            </a>
          </p>
          <p className="mt-2">
            <a href="mailto:post@jaerenmultiservice.no" className="transition-colors hover:text-accent">
              post@jaerenmultiservice.no
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
