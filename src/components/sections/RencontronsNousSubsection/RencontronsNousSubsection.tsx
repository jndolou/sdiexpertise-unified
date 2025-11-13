import React from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const checklistItems = [
  "Une vraie personne à votre écoute",
  "Un soutien qui parle le même langage",
  "Des conseils personnalisés",
];

export const RencontronsNousSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-center gap-2.5 pt-[65px] pb-[35px] px-4">
      <div className="flex flex-col w-full max-w-[361px] items-center justify-center gap-[30px]">
        <Card className="w-full bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(138deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_27%,rgba(170,127,251,1)_75%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="flex flex-col items-center gap-[18px] pt-[50px] pb-[30px] px-[15px]">
            <div className="flex flex-col items-center justify-center gap-7 w-full">
              <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
                Rencontrons-nous
              </h2>

              <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                Vos projets sont complexes et méritent du temps. Nous
                connaissons vos contraintes, laissez-nous vous exposer nos
                solutions
              </p>
            </div>

            <div className="inline-flex flex-col items-start gap-[25px]">
              <div className="flex flex-col w-[331px] items-start gap-[30px]">
                <div className="flex flex-col items-start justify-center gap-[9px] w-full">
                  {checklistItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-[7px] pl-0 pr-3.5 py-0 w-full"
                    >
                      <img
                        className="w-[19px] h-[19px] flex-shrink-0"
                        alt="Checkmark"
                        src="/checkmark.svg"
                      />
                      <div className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[331px] flex flex-col items-center gap-[15px]">
                <div className="flex items-center gap-[15px] w-full">
                  <Button
                    variant="ghost"
                    className="h-12 px-4 py-3 rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                  >
                    Prendre un café
                  </Button>

                  <Button className="h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:bg-[#faf8fc]">
                    Prévoir un visio
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="relative w-[357px] h-[251px]">
          <img
            className="absolute top-0 left-[107px] w-[255px] h-[261px] object-cover"
            alt="Polygon"
          />
        </div>
      </div>
    </section>
  );
};
