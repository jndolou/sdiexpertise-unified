import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { GoogleRating } from "../../../../components/shared";

const checkmarkItems = [
  { text: "Intervention rapide & conforme" },
  { text: "Accompagnement dédié" },
  { text: "Solutions sur mesure" },
];

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

            <GoogleRating variant="card" className="mb-[-1.00px] ml-[-1.00px]" />
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
