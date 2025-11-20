import { SearchIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

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

        <div className="flex flex-col w-full items-start gap-0.5">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="flex items-center gap-2 pl-3 pr-2 py-0 w-full h-11 rounded-xl border-[none] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
              <SearchIcon className="w-6 h-6 text-dark" />
              <Input
                type="text"
                placeholder="Code postal"
                className="flex-1 h-auto border-0 bg-transparent px-0 py-1.5 [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5 placeholder:text-[#1c1b1b80] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </div>

      <Card
        className="w-full h-[232px] rounded-2xl border border-solid border-[#aa7ffb] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/frame-435.png)" }}
      >
        <CardContent className="flex flex-col items-start gap-2.5 px-[52px] py-[39px] h-full">
          <div className="flex flex-col w-[110px] h-12 items-start gap-[3px] p-[5px] bg-[#ffffffcc] rounded-[11px] border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[11px] before:[background:linear-gradient(126deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_31%,rgba(170,127,251,1)_62%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
            <Badge className="h-auto bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] px-1.5 py-1 hover:bg-violet-clair">
              <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
                8e arrondissement
              </span>
            </Badge>

            <div className="inline-flex items-center gap-[9px]">
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-dark text-xs tracking-[0] leading-[15.6px]">
                12 900 €/m2
              </span>
              <img
                className="w-[11.96px] h-[10.46px]"
                alt="Vector"
                src="/vector-2.svg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
