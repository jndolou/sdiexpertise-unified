import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const checkmarkItems = [
  { text: "Intervention rapide & conforme" },
  { text: "Accompagnement dédié" },
  { text: "Solutions sur mesure" },
];

const stars = Array(5).fill(null);

const paginationDots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
];

export const HeroSectionSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 relative">
      <Card className="flex flex-col w-full items-start gap-[59px] px-4 py-8 relative rounded-2xl shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] border-none">
        <CardContent className="p-0 w-full">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <div className="flex flex-col w-full items-start gap-5 relative flex-[0_0_auto]">
              <h1 className="self-stretch mt-[-1.00px] font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] leading-[var(--titre-1-mobile-line-height)] relative tracking-[var(--titre-1-mobile-letter-spacing)] [font-style:var(--titre-1-mobile-font-style)]">
                Des diagnostics fiables pour des transactions sécurisées
              </h1>
            </div>

            <ul className="flex flex-col w-full items-start gap-2 relative flex-[0_0_auto]">
              {checkmarkItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-[7px] pl-0 pr-3.5 py-0 relative self-stretch w-full"
                >
                  <img
                    className="relative w-5 h-5 flex-shrink-0"
                    alt="Checkmark"
                    src="/checkmark.svg"
                  />
                  <p className="relative w-fit font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-start gap-2 p-4 flex-[0_0_auto] mb-[-1.00px] rounded-2xl flex-col relative ml-[-1.00px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                      {stars.map((_, index) => (
                        <img
                          key={index}
                          className="relative w-3 h-3"
                          alt="Star"
                          src="/star.svg"
                        />
                      ))}
                    </div>
                    <span className="[font-family:'Ubuntu',Helvetica] font-medium text-xs leading-[14.4px] relative w-fit text-dark tracking-[0] whitespace-nowrap">
                      4.9
                    </span>
                  </div>
                  <p className="relative self-stretch font-mot-en-valeur-3 font-[number:var(--mot-en-valeur-3-font-weight)] text-dark text-[length:var(--mot-en-valeur-3-font-size)] tracking-[var(--mot-en-valeur-3-letter-spacing)] leading-[var(--mot-en-valeur-3-line-height)] [font-style:var(--mot-en-valeur-3-font-style)]">
                    Sur Google
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto] mt-[59px]">
            <div className="flex w-full items-center relative">
              <p className="relative w-fit [font-family:'Pecita-Regular',Helvetica] font-normal text-dark text-[28px] tracking-[0] leading-7 whitespace-nowrap">
                <span className="text-[#1c1b1b] leading-[33.6px]">+1000</span>
                <span className="[font-family:'Open_Sans',Helvetica] text-[#1c1b1b] text-base leading-[0.1px]">
                  {" "}
                  Diagnostics réalisés
                </span>
              </p>
            </div>

            <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
              {paginationDots.map((dot, index) => (
                <div
                  key={index}
                  className={`relative w-[5px] h-[5px] rounded-[2.5px] ${
                    dot.active
                      ? "bg-[#1d1c1c]"
                      : "border border-solid border-[#1c1b1b]"
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
