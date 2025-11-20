import React from "react";
import { Card, CardContent } from "../../ui/card";
import { GoogleRating } from "../../shared";

const features = [
  "Intervention rapide & conforme",
  "Accompagnement dédié",
  "Solutions sur mesure",
];

export const HeroSectionSubsection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 px-px py-0">
      <Card className="flex flex-col w-full items-start gap-[59px] px-4 py-8 rounded-2xl shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] border-none bg-transparent">
        <CardContent className="inline-flex flex-col items-start gap-5 p-0 w-full">
          <div className="flex flex-col w-full items-start gap-5">
            <h1 className="self-stretch font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] leading-[var(--titre-1-mobile-line-height)] tracking-[var(--titre-1-mobile-letter-spacing)] [font-style:var(--titre-1-mobile-font-style)]">
              Des diagnostics fiables pour des transactions sécurisées
            </h1>
          </div>

          <ul className="flex flex-col w-full items-start gap-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-[7px] pl-0 pr-3.5 py-0 self-stretch w-full"
              >
                <img
                  className="relative w-5 h-5 flex-shrink-0"
                  alt="Checkmark"
                  src="/checkmark.svg"
                />
                <p className="relative w-fit font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <GoogleRating variant="badge" />
        </CardContent>
      </Card>
    </section>
  );
};
