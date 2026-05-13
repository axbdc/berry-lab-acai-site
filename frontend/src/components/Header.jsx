import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { id: "sobre", label: "Sobre" },
  { id: "menu", label: "Menu" },
  { id: "toppings", label: "Toppings" },
  { id: "sustentabilidade", label: "Sustentabilidade" },
  { id: "localizacoes", label: "Localizações" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2a143d]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <button
          data-testid="logo-home-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Berrylab Açaí — início"
        >
          <span className="font-display-extra text-xl sm:text-2xl text-[#9FC9A6] leading-none">
            berry<span className="italic">lab</span>
          </span>
          <span className="font-display-extra text-xl sm:text-2xl text-white leading-none">
            açaí
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}-btn`}
              onClick={() => go(item.id)}
              className="px-4 py-2 text-sm font-medium text-white/85 hover:text-white rounded-full hover:bg-white/10 transition-all"
            >
              {item.label}
            </button>
          ))}
          <button
            data-testid="nav-cta-menu-btn"
            onClick={() => go("menu")}
            className="ml-2 cta-primary text-sm py-2.5 px-5"
          >
            Ver o Menu
          </button>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
          className="md:hidden w-11 h-11 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[#2a143d]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                data-testid={`nav-mobile-${item.id}-btn`}
                onClick={() => go(item.id)}
                className="text-left px-4 py-3 rounded-2xl text-white/90 hover:bg-white/10 transition"
              >
                {item.label}
              </button>
            ))}
            <button
              data-testid="nav-mobile-cta-menu-btn"
              onClick={() => go("menu")}
              className="cta-primary mt-3 w-full"
            >
              Ver o Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
