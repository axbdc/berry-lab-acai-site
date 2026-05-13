import React from "react";
import WaveDivider from "./WaveDivider";

export const Sustainability = () => {
  return (
    <section
      id="sustentabilidade"
      data-testid="sustainability-section"
      className="relative bg-[#2a143d] text-white grain section-wave py-24 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Subtle teal/ocean wash like the brand reference */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(159,201,166,0.35) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(120,180,200,0.25) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        <div className="reveal text-center">
          <span className="label-box text-white text-xs sm:text-sm uppercase">
            Sustainability
          </span>
        </div>

        <p
          data-testid="sustainability-copy"
          className="reveal reveal-delay-1 mt-8 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-white/85"
        >
          Nossa contribuição para o meio ambiente é incentivar a preservá-lo —{" "}
          <em className="italic text-[#9FC9A6] not-italic font-medium">
            pequenas escolhas
          </em>{" "}
          que geram grandes consequências.
        </p>

        <div className="reveal reveal-delay-2 mt-16 relative max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
            {/* Annotation left */}
            <div
              data-testid="sustain-annotation-colher"
              className="text-center md:text-right"
            >
              <div className="text-white/90 font-display text-base sm:text-lg leading-tight">
                Colher
                <br />
                <em className="italic font-normal text-[#9FC9A6]">
                  100% compostável
                </em>
              </div>
              <div className="hidden md:block mt-3 ml-auto h-px w-24 bg-white/40" />
            </div>

            {/* Center product placeholder */}
            <div className="relative mx-auto">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-t-[8rem] rounded-b-[3rem] bg-gradient-to-b from-white/95 to-white/70 shadow-2xl overflow-hidden flex flex-col items-center justify-end">
                <div className="absolute inset-x-0 top-6 flex justify-center">
                  <div className="w-3 h-32 rounded-full bg-[#FDFBF7] border border-[#2A143D]/20" />
                </div>
                <div className="absolute inset-x-0 top-3 flex justify-center">
                  <div className="font-display-extra text-[#2A143D] text-xs tracking-tight">
                    açaí
                  </div>
                </div>
                <div className="w-full bg-[#572A7C] py-4 px-3 text-center">
                  <div className="font-display-extra text-white text-sm">
                    berry<span className="text-[#9FC9A6]">lab</span>
                  </div>
                  <div className="text-[10px] text-white/70 italic mt-0.5">
                    The Authentic Açaí.
                  </div>
                </div>
              </div>
            </div>

            {/* Annotation right */}
            <div
              data-testid="sustain-annotation-bowl"
              className="text-center md:text-left"
            >
              <div className="hidden md:block mb-3 mr-auto h-px w-24 bg-white/40" />
              <div className="text-white/90 font-display text-base sm:text-lg leading-tight">
                Bowl em
                <br />
                <em className="italic font-normal text-[#9FC9A6]">papel cartão</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#572A7C" />
    </section>
  );
};

export default Sustainability;
