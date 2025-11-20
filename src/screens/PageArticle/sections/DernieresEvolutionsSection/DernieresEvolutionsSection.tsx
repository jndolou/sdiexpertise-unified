import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const DernieresEvolutionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-5 pt-8 pb-0 px-4 overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-full">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="inline-flex flex-col items-start gap-6">
            <div className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b99] text-[9px] tracking-[0] leading-[11.7px]">
              Accueil - Actualités - Vendre - Dernières évolutions
              réglementaires en diagnostic...
            </div>

            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center justify-center gap-2 p-4 rounded-md border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(31,1,66,1)_37%,rgba(30,1,67,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative overflow-hidden">
                <div className="[font-family:'Pecita-Book',Helvetica] font-normal text-dark text-lg tracking-[0] leading-[21.6px]">
                  25/04/25
                </div>
              </div>

              <Badge className="h-auto items-center justify-center gap-2 px-3 py-1.5 bg-violet-clair rounded-[62px] shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] border-none hover:bg-violet-clair">
                <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
                  Article mis à jour le 07/06/25
                </span>
              </Badge>
            </div>
          </div>

          <h1 className="w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-[32px] tracking-[0] leading-[38.4px]">
            Dernières évolutions réglementaires en diagnostic immobilier
          </h1>
        </div>

        <div className="inline-flex flex-col items-start gap-2">
          <div className="inline-flex items-center justify-center gap-[9px]">
            <img
              className="w-[20.43px] h-[20.43px]"
              alt="Union"
              src="/union.svg"
            />

            <div className="w-[135px] font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Jules Ferrero
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-[9px]">
            <img className="w-[19px] h-[19px]" alt="Group" src="/group-3.png" />

            <div className="w-[135px] font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              4 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
