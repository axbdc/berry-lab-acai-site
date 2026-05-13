import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#2a143d] text-white pt-20 pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="font-display-extra text-4xl sm:text-6xl leading-none">
              <span className="text-[#9FC9A6]">berry</span>
              <span className="italic">lab</span>
              <span className="block sm:inline sm:ml-3">açaí</span>
            </div>
            <p className="mt-6 font-display text-lg sm:text-2xl text-white/85 italic max-w-md">
              Life is better with açaí.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col items-start md:items-end gap-4">
            <a
              data-testid="footer-instagram-link"
              href="https://www.instagram.com/berrylabacai"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline inline-flex items-center gap-2"
            >
              <Instagram size={16} />
              @berrylabacai
              <ArrowUpRight size={16} />
            </a>
            <div className="text-white/55 text-sm">
              Ericeira · Santa Cruz · Torres Vedras
            </div>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Berrylab Açaí · The Authentic Açaí.
          </div>
          <div className="flex items-center gap-5">
            <span className="italic">Orgânico · Vegano · Sustentável</span>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #9FC9A6, transparent 70%)" }}
      />
    </footer>
  );
};

export default Footer;
