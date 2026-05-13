import React from "react";
import WaveDivider from "./WaveDivider";

const BOWLS = [
  {
    key: "240",
    size: "240 ml",
    tag: "Sobremesa",
    description:
      "Tamanho ideal para uma sobremesa, combinação com frutas, grãos e calda.",
    price: "5,90",
  },
  {
    key: "360",
    size: "360 ml",
    tag: "Refeição leve",
    description:
      "Substitui uma refeição e proporciona uma alimentação equilibrada.",
    price: "7,90",
  },
  {
    key: "480",
    size: "480 ml",
    tag: "Energia",
    description:
      "Para um dia agitado em que precisas de energia — corpo nutrido e saciado por mais tempo.",
    price: "9,90",
  },
  {
    key: "780",
    size: "780 ml",
    tag: "Para partilhar",
    description:
      "Para os amantes incondicionais do açaí Berrylab. Podes partilhar… se conseguires.",
    price: "12,90",
  },
  {
    key: "smoothie",
    size: "Smoothie",
    tag: "Pelo caminho",
    description:
      "Açaí batido com consistência e cremosidade incríveis. Ideal para dias sem tempo de parar.",
    price: "8,90",
  },
  {
    key: "1litro",
    size: "1 Litro",
    tag: "Para casa",
    description:
      "Bowl de 1 litro, ideal para teres em casa e criares as tuas combinações favoritas. Diverte-te.",
    price: "16,90",
  },
];

export const Bowls = () => {
  return (
    <section
      id="menu"
      data-testid="bowls-section"
      className="relative bg-[#572A7C] text-white grain section-wave py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="label-box text-white text-xs uppercase">Menu</span>
            <h2 className="font-display-extra mt-7 text-4xl sm:text-6xl lg:text-7xl leading-[0.98]">
              Escolhe o teu{" "}
              <em className="italic font-normal text-[#9FC9A6]">bowl</em>
            </h2>
          </div>
          <p className="text-white/75 max-w-xs text-sm sm:text-base">
            Todos os bowls feitos com açaí orgânico, 100% vegano. Inclui até 4 toppings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BOWLS.map((b, i) => (
            <article
              key={b.key}
              data-testid={`bowl-card-${b.key}`}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative rounded-[2.5rem] bg-[#FDFBF7] text-[#2A143D] p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#572A7C]/70">
                  {b.tag}
                </span>
                <span className="w-7 h-7 rounded-full bg-[#9FC9A6]" />
              </div>

              <h3 className="font-display-extra text-4xl sm:text-5xl leading-none">
                {b.size}
              </h3>

              <div className="h-px w-12 bg-[#2A143D]/20 my-5" />

              <p className="text-sm sm:text-base text-[#2A143D]/75 leading-relaxed min-h-[68px]">
                {b.description}
              </p>

              <div className="mt-7 flex items-end justify-between">
                <span className="font-display text-3xl sm:text-4xl text-[#572A7C]">
                  {b.price}
                  <span className="text-base align-top ml-0.5">€</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-[#2A143D]/50">
                  + 4 toppings
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bowls;
