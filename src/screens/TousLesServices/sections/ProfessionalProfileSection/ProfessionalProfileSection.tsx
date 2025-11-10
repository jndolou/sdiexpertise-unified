import { ArrowRightIcon, CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const features = [
  { text: "Packs pros adaptés" },
  { text: "Tarifs préférentiels" },
  { text: "Fonctionnalités avancées" },
];

export const ProfessionalProfileSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-end gap-10 pt-[65px] pb-[15px] px-4 relative rounded-2xl">
      <div className="inline-flex flex-col items-start gap-[18px] relative flex-[0_0_auto]">
        <div className="flex flex-col w-full max-w-[361px] items-center justify-center gap-[15px] relative">
          <h2 className="relative self-stretch font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Vous êtes un professionnel de l&apos;immobilier ?
          </h2>

          <p className="relative self-stretch font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b]">Accédez à vos services </span>
            <span className="text-[#7e3287]">spécifiques</span>
            <span className="text-[#1c1b1b]"> :</span>
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[361px] items-start gap-[25px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-full max-w-[331px] items-start gap-[30px] relative flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[7px] pl-0 pr-3.5 py-0 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <CheckIcon className="relative w-[19px] h-[19px] text-dark flex-shrink-0" />
                  <div className="relative flex-1 [font-family:'Open_Sans',Helvetica] font-normal text-dark text-base tracking-[0] leading-[19.2px]">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Button
              variant="ghost"
              className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f5f2f9]"
            >
              <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Je suis un pro
              </span>
              <ArrowRightIcon className="relative w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[271px] items-start gap-2.5 relative flex-[0_0_auto]">
        <img
          className="relative self-stretch w-full h-auto aspect-[271/260.96] rounded-[34px] object-cover"
          alt="Polygon"
          src="/polygon-3.png"
        />
      </div>
    </section>
  );
};
