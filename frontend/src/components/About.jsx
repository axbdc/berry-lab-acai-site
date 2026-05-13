import React from "react";
import WaveDivider from "./WaveDivider";

export const About = () => {
  return (
    <section
      id="sobre"
      data-testid="about-section"
      className="relative bg-[#FDFBF7] text-[#2A143D] section-wave pt-24 sm:pt-28 lg:pt-32 pb-32 sm:pb-40"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="reveal">
          <span className="label-box text-[#2A143D] text-xs sm:text-sm uppercase">
            Na Berrylab açaí
          </span>
        </div>

        <h2
          data-testid="about-heading"
          className="reveal reveal-delay-1 font-display-extra mt-8 text-3xl sm:text-5xl lg:text-6xl leading-[1.02] max-w-3xl"
        >
          Nutrição e sabor que <em className="italic font-normal text-[#572A7C]">caminham juntos</em>.
        </h2>

        <div className="reveal reveal-delay-2 mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <p className="md:col-span-7 text-lg sm:text-xl leading-relaxed text-[#2A143D]/85">
            Acreditamos que nutrição e sabor caminham juntos para criar um{" "}
            <em className="italic">estilo de vida</em> leve e equilibrado. Valorizamos a pureza e a simplicidade do açaí, oferecendo combinações{" "}
            <em className="italic">autênticas</em> que inspiram escolhas conscientes e promovem o bem-estar.
          </p>
          <p className="md:col-span-5 text-base sm:text-lg leading-relaxed text-[#2A143D]/70">
            Temos orgulho de trabalhar com <em className="italic">ingredientes orgânicos</em>, embalagens sustentáveis e um propósito claro: levar saúde e alegria em cada bowl de açaí.
          </p>
        </div>
      </div>

      <WaveDivider fill="#572A7C" flip />
    </section>
  );
};

export default About;
