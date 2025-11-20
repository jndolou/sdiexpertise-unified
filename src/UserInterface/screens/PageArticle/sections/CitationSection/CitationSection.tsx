import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CitationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[29px] pb-[3px] px-4 relative">
      <Card className="w-full rounded-2xl border-[none] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex items-center gap-4 px-5 py-[25px]">
          <div className="flex flex-col items-start gap-3 flex-1">
            <p className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              &quot;Un diagnostic clair, c&apos;est plus qu&apos;une obligation
              : c&apos;est la première étape pour vendre en toute
              confiance.&quot;
            </p>

            <p className="w-full [font-family:'Pecita-Book',Helvetica] font-normal text-mauve text-[23px] text-center tracking-[0] leading-[29.9px]">
              Jules Ferrero
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
