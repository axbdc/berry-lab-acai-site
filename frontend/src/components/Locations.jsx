import React from "react";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import WaveDivider from "./WaveDivider";

const LOCATIONS = [
  {
    key: "ericeira",
    name: "Ericeira",
    tag: "Surf town",
    address: "Morada em breve",
    hours: "Todos os dias · 11:00 – 20:00",
    mapQuery: "Berrylab Acai Ericeira",
    grad: "from-[#572A7C] via-[#7a3da6] to-[#9FC9A6]",
  },
  {
    key: "santa-cruz",
    name: "Santa Cruz",
    tag: "Costa Oeste",
    address: "Morada em breve",
    hours: "Todos os dias · 11:00 – 20:00",
    mapQuery: "Berrylab Acai Santa Cruz Portugal",
    grad: "from-[#3d1f4c] via-[#572A7C] to-[#c47ff0]",
  },
  {
    key: "torres-vedras",
    name: "Torres Vedras",
    tag: "Cidade",
    address: "Morada em breve",
    hours: "Todos os dias · 11:00 – 20:00",
    mapQuery: "Berrylab Acai Torres Vedras",
    grad: "from-[#2a143d] via-[#4a236b] to-[#9FC9A6]",
  },
];

export const Locations = () => {
  return (
    <section
      id="localizacoes"
      data-testid="locations-section"
      className="relative bg-[#FDFBF7] text-[#2A143D] section-wave py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <span className="label-box text-[#2A143D] text-xs uppercase">
            Localizações
          </span>
          <h2 className="font-display-extra mt-7 text-3xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Encontra-nos na{" "}
            <em className="italic font-normal text-[#572A7C]">costa</em>
          </h2>
          <p className="mt-5 text-[#2A143D]/70 text-base sm:text-lg max-w-xl">
            Três casas, um propósito — açaí autêntico onde o oceano te espera.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {LOCATIONS.map((loc, i) => (
            <article
              key={loc.key}
              data-testid={`location-${loc.key}`}
              className={`reveal reveal-delay-${i + 1} group rounded-[2.5rem] bg-white border border-[#2A143D]/10 overflow-hidden hover:-translate-y-1 transition-all duration-500`}
            >
              {/* Image placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${loc.grad} flex items-end p-5`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_55%)]" />
                <div className="relative z-10 flex items-center gap-2 text-white/90 text-xs uppercase tracking-[0.25em]">
                  <MapPin size={14} />
                  {loc.tag}
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <h3 className="font-display-extra text-3xl sm:text-4xl">
                  {loc.name}
                </h3>
                <div className="h-px w-10 bg-[#572A7C]/40 my-4" />

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#572A7C] mt-0.5 shrink-0" />
                    <span className="text-[#2A143D]/75 italic">
                      {loc.address}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#572A7C] mt-0.5 shrink-0" />
                    <span className="text-[#2A143D]/75">{loc.hours}</span>
                  </div>
                </div>

                <a
                  data-testid={`location-${loc.key}-maps-link`}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    loc.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#572A7C] hover:text-[#2A143D] transition group/btn"
                >
                  <span className="border-b border-[#572A7C]/40 group-hover/btn:border-[#2A143D]">
                    Ver no Google Maps
                  </span>
                  <ExternalLink
                    size={14}
                    className="group-hover/btn:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <WaveDivider fill="#2a143d" flip />
    </section>
  );
};

export default Locations;
