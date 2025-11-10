import React from "react";
import { Card, CardContent } from "../../ui/card";

const statsData = [
  {
    value: "+15",
    label: "Années d'expériences",
  },
  {
    value: "+10k",
    label: "Diagnostics réalisés",
  },
  {
    value: "+3k",
    label: "Clients",
  },
  {
    value: "98%",
    label: "Satisfaction client",
  },
];

export const LmentsDeRassuranceSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-6 pt-0 pb-[65px] px-4 relative">
      <div className="flex flex-col items-center justify-end gap-[13px] px-4 py-0 relative self-stretch w-full overflow-hidden">
        <div className="flex flex-col w-[927px] items-center gap-[13px] px-0 py-[15px] relative flex-[0_0_auto] ml-[-299.00px] mr-[-299.00px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
          <h2 className="relative w-[361px] mt-[-1.00px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Une expertise reconnue
          </h2>

          <img
            className="relative w-[853px] h-[66px]"
            alt="Frame"
            src="/frame-337.svg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full items-start gap-[15px] relative max-w-[800px] mx-auto">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="flex w-full items-center gap-2 p-4 rounded-2xl flex-col relative overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-center gap-2 p-0">
              <div className="[font-family:'Ubuntu',Helvetica] font-bold text-2xl leading-[28.8px] relative w-fit text-[#1c1b1b] tracking-[0] whitespace-nowrap">
                {stat.value}
              </div>

              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
