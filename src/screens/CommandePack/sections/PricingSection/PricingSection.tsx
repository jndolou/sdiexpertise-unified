import React from "react";

export const PricingSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-start gap-[11px] w-full relative flex-[0_0_auto]">
      <h2 className="relative w-full mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-lg tracking-[0] leading-[21.6px]">
        Prix :
      </h2>

      <div className="flex w-full h-[65px] items-center justify-between px-6 py-5 relative bg-white rounded-[20px] border border-[#5d3ca4]">
        <div className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[normal]">
          Diagnostic électricité
        </div>
        <div className="relative w-fit [font-family:'Pecita-Book',Helvetica] font-normal text-[#5d3ca4] text-[32px] tracking-[0] leading-[normal]">
          300€
        </div>
      </div>
    </section>
  );
};
