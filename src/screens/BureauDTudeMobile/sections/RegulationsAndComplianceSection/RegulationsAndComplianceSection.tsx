import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const cardsData = [
  {
    title: "Ingénierie sur mesure",
    description:
      "Chaque bâtiment est unique. Notre bureau d'étude adapte son approche à votre patrimoine, vos contraintes techniques et vos objectifs.",
    icon: "/vector-5.svg",
    iconWidth: "w-[21px]",
    iconHeight: "h-7",
    contentHeight: "h-[187px]",
  },
  {
    title: "Optimisation thermique et énergétique",
    description:
      "Nous identifions les leviers les plus efficaces pour réduire les consommations, améliorer le confort et respecter lesexigences environnementales.",
    icon: "/vector-6.svg",
    iconWidth: "w-3.5",
    iconHeight: "h-[34px]",
    contentHeight: "h-[225px]",
  },
  {
    title: "Maîtrise des normes et des calculs réglementaires",
    description:
      "DPE, audit énergétique, 3CL, RE2020, décret tertiaire… Nous assurons la conformité technique de vos projets, avec des outils validés.",
    icon: "/group.png",
    iconWidth: "w-[26px]",
    iconHeight: "h-[26px]",
    contentHeight: "h-[225px]",
  },
  {
    title: "Préconisations réalistes et hiérarchisées",
    description:
      "Nous proposons des solutions concrètes, priorisées par efficacité, coût et faisabilité, pour faciliter la prise de décision.",
    icon: "/vector.svg",
    iconWidth: "w-[23px]",
    iconHeight: "h-7",
    contentHeight: "h-[211px]",
  },
];

export const RegulationsAndComplianceSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 pt-[60px] pb-[15px] px-4 rounded-2xl overflow-visible">
      <div className="flex flex-col w-full max-w-[357px] items-center gap-12">
        {cardsData.map((card, index) => (
          <div key={index} className="relative w-full mt-10 first:mt-0">
            <div className="flex w-[86px] h-20 items-center justify-center gap-2.5 px-[26px] py-[21px] absolute -top-10 left-1/2 -translate-x-1/2 z-10">
              <img
                className="absolute top-px left-1.5 w-[74px] h-[78px]"
                alt="Polygon"
                src="/polygon-7.svg"
              />
              <img
                className={`relative ${card.iconWidth} ${card.iconHeight} z-10 brightness-0 saturate-100 invert-[0.4] sepia-[1] hue-rotate-[180deg] saturate-[3]`}
                alt={card.title}
                src={card.icon}
                style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(58%) saturate(1165%) hue-rotate(176deg) brightness(89%) contrast(88%)' }}
              />
            </div>

            <Card className="w-full bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(52,108,160,1)_24%,rgba(52,108,160,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <CardContent className="flex flex-col items-center justify-start gap-4 pt-14 pb-6 px-5 min-h-[180px]">
                <div className="flex flex-col items-center gap-3 w-full">
                  <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {card.title}
                  </h3>
                  <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
