import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import WaveDivider from "./WaveDivider";

// Stylised placeholder tiles in different aspect ratios for an organic masonry feel.
const TILES = [
  { h: "h-56", label: "bowl • morango", grad: "from-[#3d1f4c] to-[#572A7C]" },
  { h: "h-72", label: "surf • ericeira", grad: "from-[#572A7C] to-[#9FC9A6]" },
  { h: "h-48", label: "smoothie", grad: "from-[#7a3da6] to-[#3d1f4c]" },
  { h: "h-64", label: "açaí + granola", grad: "from-[#2a143d] to-[#7a3da6]" },
  { h: "h-56", label: "praia", grad: "from-[#9FC9A6] to-[#572A7C]" },
  { h: "h-72", label: "toppings", grad: "from-[#572A7C] to-[#2a143d]" },
  { h: "h-52", label: "lifestyle", grad: "from-[#4a236b] to-[#9FC9A6]" },
  { h: "h-60", label: "bowl 480ml", grad: "from-[#2a143d] to-[#572A7C]" },
];

export const Gallery = () => {
  return (
    <section
      data-testid="gallery-section"
      className="relative bg-[#572A7C] text-white grain section-wave py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="label-box text-white text-xs uppercase">
              Instagram
            </span>
            <h2 className="font-display-extra mt-7 text-4xl sm:text-6xl lg:text-7xl leading-[0.98]">
              Catch us on the{" "}
              <em className="italic font-normal text-[#9FC9A6]">'gram</em>
            </h2>
          </div>
          <a
            data-testid="gallery-instagram-cta"
            href="https://www.instagram.com/berrylabacai"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <Instagram size={18} />
            @berrylabacai
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div
          data-testid="gallery-grid"
          className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5 space-y-4 sm:space-y-5"
        >
          {TILES.map((t, i) => (
            <a
              key={i}
              data-testid={`gallery-tile-${i}`}
              href="https://www.instagram.com/berrylabacai"
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-tile block break-inside-avoid ${t.h}`}
            >
              <div
                className={`ph w-full h-full bg-gradient-to-br ${t.grad} flex items-end p-4 relative`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_55%)]" />
                <div className="relative z-10 text-[10px] uppercase tracking-[0.25em] text-white/85">
                  {t.label}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Instagram size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <WaveDivider fill="#FDFBF7" />
    </section>
  );
};

export default Gallery;
