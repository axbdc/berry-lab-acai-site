import React from "react";
import { ArrowDown } from "lucide-react";
import WaveDivider from "./WaveDivider";

export const Hero = () => {
  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden grain bg-[#572A7C] section-wave"
    >
      {/* Decorative sage blob */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #9FC9A6 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-20 w-[480px] h-[480px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #c47ff0 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 sm:pt-36 pb-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 z-10">
            <div className="reveal">
              <span className="label-box text-white/95 text-xs sm:text-sm uppercase">
                The Authentic Açaí
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="reveal reveal-delay-1 font-display-extra text-white mt-7 text-[3.4rem] sm:text-7xl lg:text-[7.5rem] leading-[0.92]"
            >
              O Açaí
              <br />
              <span className="text-[#9FC9A6] italic font-normal" style={{ fontFamily: "'Cabinet Grotesk', serif" }}>
                Autêntico
              </span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className="reveal reveal-delay-2 mt-7 text-base sm:text-lg lg:text-xl text-white/85 max-w-xl leading-relaxed"
            >
              Combinamos o <em className="text-[#9FC9A6] not-italic font-medium">bem-estar</em> e sabor com a <em className="italic">pureza</em> do açaí.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <button
                data-testid="hero-cta-menu-btn"
                onClick={scrollToMenu}
                className="cta-primary inline-flex items-center gap-2"
              >
                Ver o Menu
                <ArrowDown size={18} />
              </button>
              <a
                data-testid="hero-instagram-link"
                href="https://www.instagram.com/berrylabacai"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                Segue-nos no Instagram
              </a>
            </div>

            <div className="reveal reveal-delay-4 mt-12 flex items-center gap-6 text-white/65 text-xs uppercase tracking-[0.25em]">
              <span>Ericeira</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FC9A6]" />
              <span>Santa Cruz</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FC9A6]" />
              <span>Torres Vedras</span>
            </div>
          </div>

          {/* Visual placeholder bowl */}
          <div className="lg:col-span-5 z-10">
            <div className="reveal reveal-delay-2 relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/20" />
              <div className="absolute inset-6 rounded-full border border-white/10" />
              {/* Inner bowl placeholder */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#3d1f4c] via-[#572A7C] to-[#2a143d] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(159,201,166,0.18),transparent_55%)]" />
                <div className="text-center px-8 z-10">
                  <div className="text-[#9FC9A6] text-xs uppercase tracking-[0.32em] mb-3">
                    bowl
                  </div>
                  <div className="font-display-extra text-white text-4xl">açaí</div>
                  <div className="text-white/55 text-xs mt-3 italic">
                    foto em breve
                  </div>
                </div>
                {/* Floating toppings */}
                <span className="absolute top-8 right-10 w-3 h-3 rounded-full bg-[#9FC9A6]" />
                <span className="absolute bottom-12 left-12 w-4 h-4 rounded-full bg-[#c47ff0]/70" />
                <span className="absolute top-1/2 left-8 w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>
              {/* Floating chip */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-4 bg-[#9FC9A6] text-[#2A143D] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-xl">
                100% orgânico
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="#FDFBF7" />
    </section>
  );
};

export default Hero;
