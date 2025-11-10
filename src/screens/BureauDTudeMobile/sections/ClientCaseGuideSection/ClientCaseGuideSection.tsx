import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cardsData = [
  {
    icon: "/vector.svg",
    iconClass: "w-[30px] h-[37px]",
    title: 'Guide "Audit énergétique réglementaire"',
    description: "Tout comprendre sur l'audit exigé en cas de passoire F ou G",
    buttonText: "Télécharger",
  },
  {
    icon: "/vector-3.svg",
    iconClass: "w-[38px] h-[34px]",
    title: "Cas client : bâtiment ancien rénové",
    description: "Optimisation d'un immeuble haussmannien  en copropriété",
    buttonText: "Lire le cas",
  },
  {
    icon: "/vector-2.svg",
    iconClass: "w-[34px] h-[22px]",
    title: 'Simulateur "Impact énergétique des travaux"',
    description: "Mesurez l'effet de vos choix de rénovation",
    buttonText: "Tester",
  },
  {
    icon: "/vector-1.svg",
    iconClass: "w-9 h-[41px]",
    title: "Modèle de cahier des charges thermique",
    description: "Exemple pour lancer un projet en marché public ou privé",
    buttonText: "Télécharger",
  },
];

export const ClientCaseGuideSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 pt-[60px]">
      <div className="flex flex-col items-start gap-[17px]">
        <header className="flex flex-col items-start justify-center gap-[15px] w-full">
          <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Documents techniques, étude réelles, outils d&apos;aide à la
            décision
          </h2>
        </header>

        <div className="flex flex-col items-start gap-[17px] w-full">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              className="w-full bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(52,108,160,1)_26%,rgba(52,108,160,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="flex flex-col items-start gap-[13px] p-4">
                <img
                  className={`${card.iconClass}`}
                  alt="Icon"
                  src={card.icon}
                />

                <div className="flex flex-col items-start justify-center gap-[17px] w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2 w-full">
                      <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <Button className="h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] hover:bg-[#faf8fc]">
                    {card.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
