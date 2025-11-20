import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BeReadySection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 pt-[55px] pb-0 px-4 relative">
      <Card className="w-full px-5 py-[25px] relative flex flex-col items-center gap-5 bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(52,108,160,1)_24%,rgba(52,108,160,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="gap-[26px] flex-[0_0_auto] inline-flex flex-col items-start relative p-0">
          <div className="inline-flex flex-col items-start gap-[17px] relative flex-[0_0_auto]">
            <h2 className="relative w-full mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl text-center tracking-[0] leading-[28.8px]">
              Donnez un cap clair à vos projets techniques
            </h2>

            <p className="relative w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              <br />
              Rénover, construire ou valoriser un bien nécessite des choix
              éclairés.
              <br />
              <br /> Notre bureau d&apos;études vous apporte une analyse précise
              et des solutions réalistes pour atteindre vos objectifs de
              performance, conformité ou confort.
            </p>
          </div>

          <div className="inline-flex flex-col h-20 items-center justify-center gap-[5px] relative">
            <Button className="inline-flex items-center justify-center gap-2 px-4 py-[15px] relative flex-[0_0_auto] mt-[-0.50px] bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef2] h-auto">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base text-center tracking-[0] leading-[19.2px]">
                Télécharger notre kit <br />
                &quot;Étude technique bâtiment&quot;
              </span>
            </Button>

            <p className="relative w-full font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-[#346ca0] text-[length:var(--paragraphe-2-mobile-font-size)] text-center tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
              Fiche + grille + exemples
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
