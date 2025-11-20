import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const diagnosticItem = {
  name: "Diagnostic électricité",
  price: "300€",
};

export const PricingSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-start gap-[11px] w-full relative flex-[0_0_auto]">
      <h2 className="relative w-full mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
        Prix :
      </h2>

      <Card className="inline-flex flex-col items-start w-full relative flex-[0_0_auto] border-none shadow-none">
        <CardContent className="flex flex-col w-full h-[45px] items-start justify-center px-4 py-2.5 relative bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none p-0">
          <div className="flex h-[31px] items-center justify-between w-full">
            <div className="[font-family:'Ubuntu',Helvetica] font-bold text-xs leading-[13.8px] underline text-dark tracking-[0]">
              {diagnosticItem.name}
            </div>
            <div className="[font-family:'Pecita-Book',Helvetica] font-normal text-[#5d3ca4] text-[23px] tracking-[0] leading-[33.6px]">
              {diagnosticItem.price}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
