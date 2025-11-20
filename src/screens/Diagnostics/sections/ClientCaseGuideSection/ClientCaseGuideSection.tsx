import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const resourceCards = [
  {
    icon: "/vector-3.svg",
    title: "Livre blanc Amiante",
    description: "Les 5 erreurs à éviter avant une vente",
    buttonText: "Télécharger",
  },
  {
    icon: "/vector-5.svg",
    title: "Cas client : copropriété",
    description:
      "Comment un syndic a réduit ses risques réglementaires de 40 %",
    buttonText: "Lire le cas",
  },
  {
    icon: "/vector-2.svg",
    title: "Replay DPE 2025",
    description: "Tout comprendre de la réforme et anticiper.",
    buttonText: "Voir le replay",
  },
  {
    icon: "/vector.svg",
    title: 'Fiche pratique "Validité des diagnostics"',
    description: "Un mémo clair sur les durées, selon la législation.",
    buttonText: "Télécharger",
  },
];

export const ClientCaseGuideSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 pt-[60px]">
      <div className="flex flex-col items-start gap-[17px] max-w-[361px]">
        <div className="flex flex-col items-start justify-center gap-[15px] w-full">
          <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Guide, cas client, outils... <br />
            nos ressources à votre disposition
          </h2>

          <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            Des ressources concrètes pour vous guider à chaque étape de votre
            diagnostic.
          </p>
        </div>

        {resourceCards.map((card, index) => (
          <Card
            key={index}
            className="w-full bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-start gap-[15px] px-4 py-[7px]">
              <div className="flex flex-col items-start justify-center gap-[13px] w-full">
                <img
                  className="w-auto h-auto max-w-[38px] max-h-[41px]"
                  alt={card.title}
                  src={card.icon}
                />

                <div className="flex flex-col items-start justify-center gap-[17px] w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2">
                      <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <Button
                    className="h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] hover:bg-[#f0eef4]"
                    variant="ghost"
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
