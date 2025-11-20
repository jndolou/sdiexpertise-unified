import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    icon: "/group-3.png",
    iconWidth: "w-[27.17px]",
    iconHeight: "h-[12.05px]",
    title: "Population",
    description:
      "Certains diagnostics sont obligatoires : performance énergétique, matériaux à risque...",
    containerHeight: "h-[82px]",
    descriptionWidth: "w-[266px]",
    descriptionHeight: "h-[54px]",
    marginBottom: "mb-[-19.05px]",
  },
  {
    icon: "/group-4.png",
    iconWidth: "w-[22.38px]",
    iconHeight: "h-[18.19px]",
    title: "Logements",
    description:
      "La ville dispose de 46 428 logements, dont 92,5 % de résidences principales.",
    containerHeight: "h-[91px]",
    descriptionWidth: "w-[278px]",
    descriptionHeight: "h-[37px]",
    marginBottom: "",
  },
  {
    icon: "/vector-3.svg",
    iconWidth: "w-[19px]",
    iconHeight: "h-5",
    title: "Climat actuel",
    description:
      "Aujourd'hui, le temps est ensoleillé avec une température agréable de 19°C.",
    containerHeight: "h-[91px]",
    descriptionWidth: "w-[266px]",
    descriptionHeight: "h-[35px]",
    marginBottom: "mb-[-7.00px]",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[25px] pt-[120px] pb-0 px-0 relative">
      <div className="flex flex-col w-[360px] items-start gap-5 relative flex-[0_0_auto]">
        <h1 className="relative self-stretch mt-[-1.00px] font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] text-center tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
          Argenteuil en chiffres
        </h1>
      </div>

      <Card className="flex flex-col w-[328px] h-[339px] items-center gap-[13px] px-0 py-7 relative bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(174deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col items-center gap-[13px] p-0 w-full">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col ${stat.containerHeight} items-center gap-[7px] relative ${stat.marginBottom} ${index === 1 ? "inline-flex" : stat.descriptionWidth === "w-[278px]" ? "w-[278px]" : "w-[278px]"}`}
            >
              <img
                className={`relative ${stat.iconWidth} ${stat.iconHeight}`}
                alt={stat.title}
                src={stat.icon}
              />

              <h3
                className={`relative ${stat.title === "Climat actuel" ? "w-[140px]" : "w-[101px]"} font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]`}
              >
                {stat.title === "Climat actuel"
                  ? "Climat\u00A0\u00A0actuel"
                  : stat.title}
              </h3>

              <p
                className={`relative ${stat.descriptionWidth} ${stat.descriptionHeight} [font-family:'Open_Sans',Helvetica] font-normal text-dark text-xs text-center tracking-[0] leading-[15.6px]`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
