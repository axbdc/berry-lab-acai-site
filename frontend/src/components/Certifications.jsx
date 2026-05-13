import React from "react";
import { Leaf, Wheat, Milk, Sprout } from "lucide-react";
import WaveDivider from "./WaveDivider";

const ITEMS = [
  { key: "organico", label: "Orgânico", Icon: Leaf },
  { key: "gluten", label: "Glúten Free", Icon: Wheat },
  { key: "lactose", label: "Lactose Free", Icon: Milk },
  { key: "vegano", label: "Vegano", Icon: Sprout },
];

export const Certifications = () => {
  return (
    <section
      data-testid="certifications-section"
      className="relative bg-[#572A7C] text-white grain section-wave py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="reveal max-w-2xl">
          <div className="h-px w-12 bg-[#9FC9A6] mb-5" />
          <h2 className="font-display-extra text-3xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Puro. <em className="italic font-normal text-[#9FC9A6]">Honesto.</em> Sempre.
          </h2>
          <p className="mt-5 text-white/75 text-base sm:text-lg max-w-lg">
            Ingredientes que respeitam o teu corpo e o planeta — sem compromissos.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ITEMS.map((item, i) => (
            <li
              key={item.key}
              data-testid={`cert-${item.key}`}
              className={`reveal reveal-delay-${i + 1} group relative rounded-[2rem] border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-500 p-6 sm:p-8`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#9FC9A6] text-[#2A143D] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <item.Icon size={26} strokeWidth={2} />
              </div>
              <div className="h-px w-10 bg-white/40 mb-3" />
              <div className="font-display text-lg sm:text-xl uppercase tracking-wide">
                {item.label.split(" ")[0]}{" "}
                {item.label.split(" ")[1] && (
                  <em className="italic font-normal text-white/85">
                    {item.label.split(" ")[1]}
                  </em>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <WaveDivider fill="#FDFBF7" />
    </section>
  );
};

export default Certifications;
