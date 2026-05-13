import React from "react";
import { Sparkles, Zap, Droplets } from "lucide-react";
import WaveDivider from "./WaveDivider";

const BENEFITS = [
  {
    key: "antioxidantes",
    title: "Antioxidantes",
    body: "Combate os radicais livres e protege as células — beleza que vem de dentro.",
    Icon: Sparkles,
  },
  {
    key: "energia",
    title: "Energia",
    body: "Energia saudável e duradoura para o teu dia, sem picos nem quedas.",
    Icon: Zap,
  },
  {
    key: "omegas",
    title: "Ómegas",
    body: "Gorduras boas (ómega 6 e 9) que cuidam do coração e do cérebro.",
    Icon: Droplets,
  },
];

export const Benefits = () => {
  return (
    <section
      data-testid="benefits-section"
      className="relative bg-[#FDFBF7] text-[#2A143D] section-wave py-24 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <span className="label-box text-[#2A143D] text-xs uppercase">
            Benefícios
          </span>
          <h2 className="font-display-extra mt-7 text-3xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Açaí —{" "}
            <em className="italic font-normal text-[#572A7C]">
              um superalimento
            </em>{" "}
            delicioso e saudável.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {BENEFITS.map((b, i) => (
            <article
              key={b.key}
              data-testid={`benefit-${b.key}`}
              className={`reveal reveal-delay-${i + 1} group rounded-[2.5rem] bg-white border border-[#2A143D]/10 p-7 sm:p-9 hover:border-[#572A7C]/40 transition-all duration-500`}
            >
              <div className="w-14 h-14 rounded-full bg-[#572A7C] text-[#9FC9A6] flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500">
                <b.Icon size={24} />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl">
                {b.title}
              </h3>
              <p className="mt-3 text-[#2A143D]/70 leading-relaxed">
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <WaveDivider fill="#572A7C" flip />
    </section>
  );
};

export default Benefits;
