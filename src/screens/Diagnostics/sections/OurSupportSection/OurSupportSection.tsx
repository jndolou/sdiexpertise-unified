import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const stepsData = [
  {
    number: "1.",
    title: "Diagnostics de vos besoins",
    description:
      "Analyse personnalisée de vos obligations en fonction du bien, de son ancienneté, de sa localisation.",
  },
  {
    number: "2.",
    title: "Réalisation des diagnostics",
    description:
      "Intervention de techniciens certifiés (amiante, gaz, DPE, etc.) et remise de rapports clairs et exploitables.",
  },
  {
    number: "3.",
    title: "Suivi & alertes",
    description:
      "Un tableau de bord pour suivre la validité de vos diagnostics, avec des rappels automatiques.",
  },
  {
    number: "4.",
    title: "Aides, travaux, arbitrages",
    description:
      "Conseil neutre sur les travaux prioritaires, les aides mobilisables, ou les u Les stratégies patrimoniales (vente, location, rénovation).",
  },
];

export const OurSupportSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 pt-[60px] pb-[5px] px-4 relative">
      <div className="flex flex-col w-full items-start gap-8 relative">
        <header className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
          <h2 className="relative w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Notre accompagnement en <br />4 étapes
          </h2>

          <p className="relative w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              Notre approche : simple, claire,{" "}
            </span>
            <span className="font-paragraphe-1 text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)]">
              rigoureuse
            </span>
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              .
            </span>
          </p>
        </header>

        <div className="inline-flex flex-col items-start gap-8 relative w-full">
          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto] w-full">
            {stepsData.map((step, index) => (
              <Card
                key={index}
                className="justify-center flex flex-col w-full items-start gap-2 p-4 relative flex-[0_0_auto] rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="flex items-center gap-4 relative w-full p-0">
                  <div className="flex w-[50px] h-[50px] items-center justify-center gap-8 p-2 flex-col relative rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <div className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[length:var(--titre-2-mobile-font-size)] leading-[var(--titre-2-mobile-line-height)] relative w-fit text-dark tracking-[var(--titre-2-mobile-letter-spacing)] whitespace-nowrap [font-style:var(--titre-2-mobile-font-style)]">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1 relative flex-1">
                    <h3 className="relative w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                      {step.title}
                    </h3>

                    <p className="relative w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col h-12 items-end justify-end gap-2.5 relative w-full">
            <Link to="/contact">
              <Button className="h-auto inline-flex items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef4]">
                <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                  Prendre rendez-vous avec un expert
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
