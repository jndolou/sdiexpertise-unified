import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const stars = [
  { src: "/star-1.svg", alt: "Star" },
  { src: "/star-1.svg", alt: "Star" },
  { src: "/star-1.svg", alt: "Star" },
  { src: "/star-1.svg", alt: "Star" },
  { src: "/star-1.svg", alt: "Star" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[22px] pt-8 pb-0 px-4 relative rounded-2xl shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
      <div className="inline-flex flex-col items-start gap-[39px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
          <div className="flex flex-col w-full items-start gap-5 relative flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
              Bureau d&apos;études bâtiment &amp; énergie : l&apos;expertise au
              service de vos projets
            </h1>
          </div>

          <p className="relative w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            De l&apos;analyse thermique à la stratégie de rénovation, notre
            bureau d&apos;études vous accompagne dans vos choix techniques,
            <br />
            réglementaires et budgétaires.
          </p>

          <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
            <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              Découvrir nos études de cas
            </span>
          </Button>
        </div>

        <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
          <Card className="inline-flex items-start gap-2 p-4 flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] flex-col relative ml-[-1.00px] rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(52,108,160,1)_37%,rgba(52,108,160,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <CardContent className="inline-flex items-center gap-1 relative flex-[0_0_auto] p-0">
              <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                    {stars.map((star, index) => (
                      <img
                        key={`star-${index}`}
                        className="relative w-3 h-3"
                        alt={star.alt}
                        src={star.src}
                      />
                    ))}
                  </div>

                  <div className="[font-family:'Ubuntu',Helvetica] font-medium text-xs leading-[14.4px] relative w-fit text-dark tracking-[0] whitespace-nowrap">
                    4.9
                  </div>
                </div>

                <div className="relative self-stretch font-mot-en-valeur-3 font-[number:var(--mot-en-valeur-3-font-weight)] text-dark text-[length:var(--mot-en-valeur-3-font-size)] tracking-[var(--mot-en-valeur-3-letter-spacing)] leading-[var(--mot-en-valeur-3-line-height)] [font-style:var(--mot-en-valeur-3-font-style)]">
                  Sur Google
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
