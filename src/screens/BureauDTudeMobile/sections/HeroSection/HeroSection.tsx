import React from "react";
import { Button } from "../../../../components/ui/button";
import { GoogleRating } from "../../../../components/shared";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[22px] pt-8 pb-0 px-4 relative rounded-2xl shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33]">
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

        <GoogleRating variant="card" />
      </div>
    </section>
  );
};
