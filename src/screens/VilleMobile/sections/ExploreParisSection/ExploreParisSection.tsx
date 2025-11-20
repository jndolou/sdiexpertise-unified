import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { InteractiveMap } from "../../../../components/shared";

export const ExploreParisSection = (): JSX.Element => {

  return (
    <section className="flex flex-col w-full items-start gap-[25px] pt-[60px] pb-0 px-4">
      <div className="inline-flex flex-col items-start gap-5 w-full">
        <div className="inline-flex flex-col items-start gap-[15px] w-full">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Explorer Paris par arrondissement
          </h2>

          <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              Tapez un code postal ou{" "}
            </span>
            <span className="font-paragraphe-1 text-[#7e3287] text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)]">
              explorez
            </span>
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              {" "}
              la carte.
            </span>
          </p>
        </div>

      </div>

      <Card className="w-full h-[232px] rounded-2xl border border-solid border-[#aa7ffb] overflow-hidden bg-cover bg-center bg-no-repeat">
        <CardContent className="p-0 h-full">
          <InteractiveMap />
        </CardContent>
      </Card>
    </section>
  );
};
