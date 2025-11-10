import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const projectCards = [
  {
    title: "Je vends",
    description:
      "Bénéficiez d'une assistance technique fiable pour la mise en conformité de vos biens...",
    image: "/frame-403-5.svg",
  },
  {
    title: "Je loue",
    description:
      "Respectez les normes énergétiques et les diagnostics obligatoires",
    image: "/frame-403-14.svg",
  },
  {
    title: "Je rénove",
    description:
      "Améliorez l'efficacité énergétique avec les bons diagnostics.",
    image: "/frame-403-10.svg",
  },
  {
    title: "Je construis",
    description:
      "Respectez les normes et études pour une construction durable.",
    image: "/frame-403-6.svg",
  },
  {
    title: "Je démolis",
    description:
      "Profitez d'un suivi et d'une veille réglementaire personnalisée pour rester conforme en toute...",
    image: "/frame-403-8.svg",
  },
];

export const VotreProjetSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 py-0 px-4">
      <div className="flex flex-col items-start gap-7 w-full">
        <div className="flex flex-col items-start gap-8 w-full">
          <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Votre projet
          </h2>

          <div className="flex items-start gap-[15px] w-full overflow-x-auto pb-2 scrollbar-hide">
            {projectCards.map((card, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[222px] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(135,94,218,1)_26%,rgba(135,94,218,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none overflow-hidden"
              >
                <CardContent className="p-4 flex flex-col gap-[15px]">
                  <img
                    className="w-full h-[158px]"
                    alt={card.title}
                    src={card.image}
                  />

                  <div className="flex flex-col items-start gap-2">
                    <h3 className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-lg tracking-[0] leading-[21.6px]">
                      {card.title}
                    </h3>

                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-xs tracking-[0] leading-[15.6px]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2.5 w-full">
          <Button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] hover:bg-[#f0eef4]">
            Tous nos services
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
