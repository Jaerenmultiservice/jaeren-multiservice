import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Tjenester", href: "#tjenester", pathHash: "tjenester" },
  { label: "Om oss", href: "#hvorfor", pathHash: "hvorfor" },
  { label: "Kontakt", href: "#befaring", pathHash: "befaring" },
];

function scrollToSection(hash: string) {
  const el = document.getElementById(hash.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (isHome) {
      e.preventDefault();
      scrollToSection(href);
    }
    setMobileOpen(false);
  };

  return (
    <header className="w-full bg-black border-b border-zinc-800 flex items-center">
      <div className="max-w-5xl mx-auto px-8 w-full h-[200px] flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" aria-label="Jæren Multiservice – forsiden" className="flex items-center">
          <img
            src={logo}
            alt="Jæren Multiservice"
            style={{ height: '180px', width: 'auto' }}
            className="object-contain"
          />
        </Link>

        {/* MENU – desktop */}
        <nav className="hidden md:flex items-center gap-8 text-[22px] font-semibold tracking-wide text-white">
          {NAV_LINKS.map(({ label, href, pathHash }) =>
            isHome ? (
              <a
                key={pathHash}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="hover:text-orange-500 transition"
              >
                {label}
              </a>
            ) : (
              <Link
                key={pathHash}
                to={{ pathname: "/", hash: pathHash }}
                className="hover:text-orange-500 transition"
              >
                {label}
              </Link>
            )
          )}
          {isHome ? (
            <a
              href="#befaring"
              onClick={(e) => handleNavClick(e, "#befaring")}
              className="bg-orange-500 px-7 py-3 rounded-lg text-black font-bold hover:bg-orange-600 transition"
            >
              GRATIS BEFARING
            </a>
          ) : (
            <Link
              to={{ pathname: "/", hash: "befaring" }}
              className="bg-orange-500 px-7 py-3 rounded-lg text-black font-bold hover:bg-orange-600 transition"
            >
              GRATIS BEFARING
            </Link>
          )}
        </nav>

        {/* Mobil: hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 text-gray-400 hover:text-white rounded"
            aria-expanded={mobileOpen}
            aria-label="Meny"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobilmeny */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black border-b border-zinc-800 pt-[200px] px-8 pb-6"
          aria-modal
          role="dialog"
          aria-label="Meny"
        >
          <div className="max-w-[1100px] mx-auto flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href, pathHash }) =>
              isHome ? (
                <a
                  key={pathHash}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="py-3 text-white hover:text-orange-500 font-medium text-[20px]"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={pathHash}
                  to={{ pathname: "/", hash: pathHash }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-white hover:text-orange-500 font-medium text-[20px]"
                >
                  {label}
                </Link>
              )
            )}
            <div className="pt-4">
              {isHome ? (
                <a
                  href="#befaring"
                  onClick={(e) => handleNavClick(e, "#befaring")}
                  className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-black font-semibold transition"
                >
                  GRATIS BEFARING
                </a>
              ) : (
                <Link
                  to={{ pathname: "/", hash: "befaring" }}
                  onClick={() => setMobileOpen(false)}
                  className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-black font-semibold transition"
                >
                  GRATIS BEFARING
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
