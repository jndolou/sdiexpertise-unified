import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DiagnosticSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[60px] pb-0 px-4">
      <Card className="w-full bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(105deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_77%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col items-center gap-5 px-5 py-10">
          <div className="inline-flex flex-col items-start gap-[15px]">
            <h2 className="w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl text-center tracking-[0] leading-[28.8px]">
              Quels sont les diagnostics obligatoires ?
            </h2>

            <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              <span className="text-[#1c1b1b]">
                Découvrez les diagnostics obligatoires selon{" "}
              </span>
              <span className="text-[#7e3287]">votre</span>
              <span className="text-[#1c1b1b]"> situation.</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2.5 w-full">
            <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0edf4]">
              <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Découvrir
              </span>
              <ArrowRightIcon className="w-6 h-6 text-[#1c1b1b]" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
