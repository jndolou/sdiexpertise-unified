import React from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const steps = [
  {
    number: "1.",
    title: "Votre projet",
    description: "Répondez à un questionnaire rapide",
  },
  {
    number: "2.",
    title: "Vos diagnostics",
    description: "Obtenez la liste personnalisée selon votre besoin",
  },
  {
    number: "3.",
    title: "Votre devis",
    description: "Recevez un devis clair sous 24h",
  },
  {
    number: "4.",
    title: "Votre rendez-vous",
    description: "Planifiez & payez en ligne en toute simplicité",
  },
];

export const VotreDevisEnSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 px-4 py-0 pb-[65px]">
      <div className="flex flex-col w-full items-start gap-8">
        <header className="inline-flex flex-col items-start gap-1.5">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Votre devis en 2 minutes
          </h2>

          <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
            <span className="text-[#1c1b1b] leading-[0.1px]">En</span>
            <span className="text-[#1e0143] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              &nbsp;
            </span>
            <span className="[font-family:'Pecita',Helvetica] text-[#7E3287] text-[23px] leading-[29.9px]">
              4
            </span>
            <span className="text-[#1e0143] leading-[20.8px]">&nbsp;</span>
            <span className="text-[#1c1b1b] leading-[0.1px]">
              étapes simples, sans engagement.
            </span>
          </p>
        </header>

        <div className="inline-flex flex-col w-full items-start gap-8">
          <div className="inline-flex flex-col items-start gap-4 w-full">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="w-full rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex w-[50px] h-[50px] items-center justify-center gap-8 p-2 rounded-2xl flex-col overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <span className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] whitespace-nowrap [font-style:var(--titre-2-mobile-font-style)]">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-1 flex-1">
                    <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                      {step.title}
                    </h3>
                    <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-end gap-2.5 w-full">
            <Button className="h-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:bg-[#f0eef4]">
              Démarrer mon projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
