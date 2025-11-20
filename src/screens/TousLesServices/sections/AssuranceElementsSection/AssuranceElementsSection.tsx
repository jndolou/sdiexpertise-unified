import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

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

export const AssuranceElementsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-10 pb-[60px] px-4">
      <div className="flex flex-wrap items-start gap-[15px] w-full">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="w-[175px] border-none rounded-2xl overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <div className="[font-family:'Ubuntu',Helvetica] font-bold text-2xl leading-[28.8px] w-fit text-[#1c1b1b] tracking-[0] whitespace-nowrap">
                {stat.value}
              </div>
              <div className="w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
