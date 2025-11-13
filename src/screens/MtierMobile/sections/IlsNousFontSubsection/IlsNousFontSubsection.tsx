import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const industries = [
  { id: 1, label: "Industrie", active: false },
  { id: 2, label: "Agro alimentaire", active: true },
  { id: 3, label: "Hôtellerie", active: false },
  { id: 4, label: "Tertiaire", active: false },
  { id: 5, label: "Public", active: false },
  { id: 6, label: "Logements", active: false },
  { id: 7, label: "Centre commerciaux", active: false },
  { id: 8, label: "Logistiques", active: false },
];

export const IlsNousFontSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[18px] px-4 py-[60px]">
      <div className="inline-flex flex-col items-start gap-5 w-full">
        <div className="flex flex-col w-full items-start justify-center gap-[15px]">
          <h2 className="self-stretch h-[23px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] whitespace-nowrap [font-style:var(--titre-2-mobile-font-style)]">
            Ils nous font confiance
          </h2>

          <p className="self-stretch [font-family:'Pecita-Regular',Helvetica] font-normal text-transparent text-[23px] tracking-[0] leading-[23px]">
            <span className="text-[#7e3287] leading-[27.6px]">98%</span>
            <span className="[font-family:'Open_Sans',Helvetica] text-[#1e0142] text-base leading-[0.1px]">
              &nbsp;
            </span>
            <span className="[font-family:'Open_Sans',Helvetica] text-[#1c1b1b] text-base leading-[0.1px]">
              de satisfactions clients
            </span>
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex items-center gap-[15px] pb-4">
            {industries.map((industry) => (
              <Badge
                key={industry.id}
                variant="outline"
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                  industry.active
                    ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                    : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                } cursor-pointer hover:opacity-80 transition-opacity`}
              >
                <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {industry.label}
                </span>
              </Badge>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <img className="w-full" alt="Frame" src="/frame-133.svg" />
    </section>
  );
};
