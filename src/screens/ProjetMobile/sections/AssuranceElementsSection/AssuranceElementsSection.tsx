import { StarIcon } from "lucide-react";
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
    <section className="flex flex-col w-full items-start gap-6 pt-[50px] pb-[65px] px-4 relative">
      <Card className="inline-flex items-start gap-2 flex-[0_0_auto] rounded-2xl border-[none] flex-col p-4 relative overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="inline-flex items-center gap-1 relative flex-[0_0_auto] p-0">
          <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className="relative w-3 h-3 fill-current text-yellow-400"
                  />
                ))}
              </div>

              <div className="[font-family:'Ubuntu',Helvetica] font-medium text-xs leading-[14.4px] relative w-fit text-dark tracking-[0] whitespace-nowrap">
                4.9
              </div>
            </div>

            <div className="relative self-stretch font-mot-en-valeur-3 font-[number:var(--mot-en-valeur-3-font-weight)] text-dark text-[length:var(--mot-en-valeur-3-font-size)] tracking-[var(--mot-en-valeur-3-letter-spacing)] leading-[var(--mot-en-valeur-3-line-height)] [font-style:var(--mot-en-valeur-3-font-style)]">
              Sur Google
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col h-[138px] items-center justify-end gap-[13px] px-4 py-0 relative self-stretch w-full overflow-hidden">
        <div className="flex flex-col w-[927px] items-center gap-[13px] px-0 py-[15px] relative flex-[0_0_auto] ml-[-299.00px] mr-[-299.00px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
          <h2 className="relative w-[361px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Une expertise reconnue
          </h2>

          <img
            className="relative w-[361px] h-[66px]"
            alt="Frame"
            src="/frame-337.svg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 w-[361px] gap-[15px] relative flex-[0_0_auto]">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="flex items-center justify-center gap-2 rounded-2xl border-[none] flex-col p-4 relative overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-center gap-2 p-0">
              <div className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-2xl tracking-[0] leading-[28.8px] whitespace-nowrap">
                {stat.value}
              </div>

              <div className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm text-center tracking-[0] leading-[16.8px]">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
