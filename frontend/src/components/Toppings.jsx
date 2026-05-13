import React from "react";

const GROUPS = [
  {
    key: "frutas",
    title: "Frutas",
    extra: "+0,60 €",
    items: ["Banana", "Morango", "Kiwi", "Mirtilo", "Chia", "Gojiberry"],
  },
  {
    key: "granola",
    title: "Granola & Grãos",
    extra: "+1,00 €",
    items: [
      "Granola especial",
      "Aveia sem glúten",
      "Amendoim",
      "Paçoca caseira",
    ],
  },
  {
    key: "outros",
    title: "Outros",
    extra: "+0,70 €",
    items: [
      "Coco laminado",
      "Nibs de cacau",
      "Manteiga de amendoim",
      "Leite condensado",
      "Leite em pó Nido",
      "Mel",
    ],
  },
];

export const Toppings = () => {
  return (
    <section
      id="toppings"
      data-testid="toppings-section"
      className="relative bg-[#572A7C] text-white grain pt-4 pb-24 sm:pb-28 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="reveal max-w-3xl mt-20">
          <span className="label-box text-white text-xs uppercase">
            Toppings
          </span>
          <h2 className="font-display-extra mt-7 text-3xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Monte o bowl do{" "}
            <em className="italic font-normal text-[#9FC9A6]">seu jeito</em>.
          </h2>
          <p className="mt-5 text-white/75 text-base sm:text-lg max-w-xl">
            Até <em className="italic text-[#9FC9A6] not-italic font-medium">4 toppings incluídos</em>. Podes adicionar extras.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {GROUPS.map((g, gi) => (
            <div
              key={g.key}
              data-testid={`topping-group-${g.key}`}
              className={`reveal reveal-delay-${gi + 1} rounded-[2rem] border border-white/15 bg-white/[0.04] p-6 sm:p-8`}
            >
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="font-display text-xl sm:text-2xl">{g.title}</h3>
                <span
                  data-testid={`topping-extra-price-${g.key}`}
                  className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#9FC9A6] text-[#2A143D] font-bold"
                >
                  extra {g.extra}
                </span>
              </div>
              <div className="h-px w-10 bg-white/30 mb-5" />
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    data-testid={`topping-${g.key}-${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="pill bg-white/10 border border-white/20 text-white hover:bg-[#9FC9A6] hover:text-[#2A143D] hover:border-[#9FC9A6] cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          data-testid="toppings-howto"
          className="reveal reveal-delay-4 mt-12 text-center text-white/70 text-sm max-w-2xl mx-auto"
        >
          <em className="italic">Como funciona?</em> Escolhe o tamanho do bowl, depois até 4 toppings incluídos e, se quiseres, adiciona extras.
        </p>
      </div>
    </section>
  );
};

export default Toppings;
