import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const featureCards = [
  {
    icon: "/group.png",
    iconWidth: "w-[26.09px]",
    iconHeight: "h-10",
    title: "Expertise locale",
    description: "Une parfaite connaissance du marché immobilier d'Argenteuil.",
  },
  {
    icon: "/group-1.png",
    iconWidth: "w-[44.48px]",
    iconHeight: "h-9",
    title: "Intervention rapide",
    description:
      "Prise de rendez-vous et réalisation des diagnostics sous 24h.",
  },
  {
    icon: "/vector-1.svg",
    iconWidth: "w-[33px]",
    iconHeight: "h-[43px]",
    title: "Tarifs compétitifs",
    description: "Des prix parmi les plus attractifs du marché.",
  },
  {
    icon: "/vector.svg",
    iconWidth: "w-10",
    iconHeight: "h-[39px]",
    title: "Certifications reconnues",
    description: "Diagnostiqueurs certifiés et assurés.",
  },
  {
    icon: "/group-2.png",
    iconWidth: "w-[42px]",
    iconHeight: "h-[30px]",
    title: "Accompagnement personnalisé",
    description: "Un interlocuteur dédié pour vous guider dans vos démarches.",
  },
];

export const YourPartnerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[25px] pt-[60px] pb-0 px-4 relative">
      <div className="flex flex-col items-start gap-8 relative w-full">
        <div className="flex flex-col items-start justify-center gap-[15px] relative w-full">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Votre partenaire local pour des diagnostics en toute sérénité
          </h2>

          <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              Un service{" "}
            </span>
            <span className="font-paragraphe-1 text-[#7e3287] text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)]">
              fiable
            </span>
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              , proche de chez vous.
            </span>
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex items-start gap-[15px] pb-4">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[222px] h-[183px] bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="flex flex-col items-start gap-[15px] p-4 h-full">
                  <img
                    className={`relative ${card.iconWidth} ${card.iconHeight} brightness-0 saturate-100 invert-[28%] sepia-[94%] saturate-[1958%] hue-rotate-[256deg] brightness-[94%] contrast-[92%]`}
                    alt={card.title}
                    src={card.icon}
                  />

                  <div className="flex flex-col w-[188px] items-start gap-2 rounded-2xl">
                    <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                      {card.title}
                    </h3>

                    <p className="w-full font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex flex-col items-end gap-2.5 w-full">
          <Button
            className="h-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap"
            variant="ghost"
          >
            Planifier mon diagnostic
          </Button>
        </div>
      </div>
    </section>
  );
};
