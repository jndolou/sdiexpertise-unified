import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const simulators = [
  {
    image: "/frame-403.svg",
    title: "Estimer la valeur de mon bien",
    description:
      "Obtenez une fourchette de prix selon les caractéristiques de votre logement.",
    buttonText: "Faire une estimation",
  },
  {
    image: "/frame-403-1.svg",
    title: "Simuler mon DPE",
    description: "Visualisez la performance énergétique estimée de votre bien.",
    buttonText: "Lancer la simulation",
  },
];

export const NosSimulateursEnSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 px-4 py-[60px]">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col w-full items-center gap-[15px]">
          <h2 className="w-fit mt-[-1.00px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] whitespace-nowrap [font-style:var(--titre-2-mobile-font-style)]">
            Nos simulateurs en ligne
          </h2>

          <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-4">
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              Estimez, simulez, anticipez en
            </span>
            <span className="[font-family:'Pecita-Regular',Helvetica] text-[#1c1b1b] text-[23px] leading-[27.6px]">
              &nbsp;
            </span>
            <span className="[font-family:'Pecita-Regular',Helvetica] text-[#7e3287] text-[23px] leading-[27.6px]">
              quelques
            </span>
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              {" "}
              clics.
            </span>
          </p>
        </div>

        {simulators.map((simulator, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center gap-[17px] w-full border-0 shadow-none"
          >
            <CardContent className="flex flex-col items-center justify-center gap-[17px] w-full p-0">
              <img
                className="w-[216px] h-[159px]"
                alt={simulator.title}
                src={simulator.image}
              />

              <div className="flex flex-col h-20 items-center justify-center gap-3 w-full rounded-2xl">
                <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                  {simulator.title}
                </h3>

                <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                  {simulator.description}
                </p>
              </div>

              <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0edf5]">
                <span className="w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                  {simulator.buttonText}
                </span>
                <ArrowRightIcon className="w-6 h-6" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
