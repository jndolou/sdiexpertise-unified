import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GetReadySection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 pt-[55px] pb-2.5 px-4 relative">
      <Card className="w-full px-5 py-[25px] relative flex flex-col items-center gap-5 bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="inline-flex flex-col items-start gap-[26px] p-0">
          <div className="inline-flex flex-col items-start gap-[17px] relative flex-[0_0_auto]">
            <h2 className="relative w-full mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl text-center tracking-[0] leading-[28.8px]">
              Soyez prêts, conformes
              <br />
              et sereins.
            </h2>

            <p className="relative w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Une vente ? Une mise en location ? Une mise à jour de votre parc
              immobilier ?<br />
              <br />
              Ne laissez rien au hasard. Nos diagnostics sont un point de
              départ, notre accompagnement va bien plus loin.
            </p>
          </div>

          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef2]">
              <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Télécharger notre pack de démarrage
              </span>
            </Button>

            <p className="relative w-full font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-[#5d3ca4] text-[length:var(--paragraphe-2-mobile-font-size)] text-center tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
              Guides + modèles de rapport
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
