import React from "react";
import WaveDivider from "./WaveDivider";

const DRINKS = [
  { key: "agua", name: "Água NO PLASTIC", note: "50cl" },
  { key: "agua-gas", name: "Água NO PLASTIC", note: "com gás" },
  { key: "pedras", name: "Água das Pedras", note: "" },
  { key: "frize", name: "Frize limão", note: "" },
  { key: "kombucha", name: "Kombucha", note: "" },
  { key: "cafe", name: "Café", note: "" },
];

export const Drinks = () => {
  return (
    <section
      data-testid="drinks-section"
      className="relative bg-[#572A7C] text-white grain section-wave pt-4 pb-32 sm:pb-40"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="reveal text-center">
          <span className="label-box text-white text-xs uppercase">Bebidas</span>
          <h2 className="font-display-extra mt-7 text-3xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Para acompanhar o teu{" "}
            <em className="italic font-normal text-[#9FC9A6]">bowl</em>.
          </h2>
        </div>

        <div
          data-testid="drinks-list"
          className="reveal reveal-delay-1 mt-12 rounded-[2.5rem] border border-white/15 bg-white/[0.04] overflow-hidden"
        >
          {DRINKS.map((d, i) => (
            <div
              key={d.key}
              data-testid={`drink-${d.key}`}
              className={`flex items-center justify-between px-6 sm:px-9 py-5 sm:py-6 hover:bg-white/[0.06] transition-colors ${
                i !== DRINKS.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-white/40 font-display text-sm w-6">
                  0{i + 1}
                </span>
                <div>
                  <div className="font-display text-lg sm:text-xl">
                    {d.name}
                  </div>
                  {d.note && (
                    <div className="text-white/55 text-xs sm:text-sm mt-0.5 italic">
                      {d.note}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-[#9FC9A6] text-xs uppercase tracking-widest">
                in-store
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider fill="#2a143d" />
    </section>
  );
};

export default Drinks;
