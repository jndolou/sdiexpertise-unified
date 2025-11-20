import React from "react";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface Category {
  id: number | string;
  label: string;
  active?: boolean;
}

interface Logo {
  name: string;
  src: string;
  alt: string;
}

interface TrustSectionProps {
  title?: string;
  satisfactionRate?: string;
  categories?: Category[];
  logos?: Logo[];
  variant?: "badges" | "logos";
}

const defaultCategories: Category[] = [
  { id: 1, label: "Industrie", active: false },
  { id: 2, label: "Agro alimentaire", active: true },
  { id: 3, label: "Hôtellerie", active: false },
  { id: 4, label: "Tertiaire", active: false },
  { id: 5, label: "Public", active: false },
  { id: 6, label: "Logements", active: false },
  { id: 7, label: "Centre commerciaux", active: false },
  { id: 8, label: "Logistiques", active: false },
];

const defaultLogos: Logo[] = [
  { name: "My TFI", src: "/logo%20copie.png", alt: "My TFI" },
  { name: "BFM Business", src: "/Logo_BFM_Business.svg.png", alt: "BFM Business" },
  { name: "Marie Claire", src: "/logo-2.png", alt: "Marie Claire" },
  { name: "Vici", src: "/logo.png", alt: "Vici" },
];

export const TrustSection = ({
  title = "Ils nous font confiance",
  satisfactionRate = "98%",
  categories = defaultCategories,
  logos,
  variant = "badges",
}: TrustSectionProps): JSX.Element => {
  const displayLogos = logos || defaultLogos;

  return (
    <section className="flex flex-col w-full items-start gap-[18px] px-4 py-[60px]">
      <div className="inline-flex flex-col items-start gap-5 w-full">
        <div className="flex flex-col w-full items-start justify-center gap-[15px]">
          <h2 className="self-stretch font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            {title}
          </h2>

          <p className="self-stretch [font-family:'Pecita-Regular',Helvetica] font-normal text-transparent text-[23px] tracking-[0] leading-[23px]">
            <span className="text-[#7e3287] leading-[27.6px]">{satisfactionRate}</span>
            <span className="[font-family:'Open_Sans',Helvetica] text-[#1e0142] text-base leading-[0.1px]">
              &nbsp;
            </span>
            <span className="[font-family:'Open_Sans',Helvetica] text-[#1c1b1b] text-base leading-[0.1px]">
              de satisfactions clients
            </span>
          </p>
        </div>

        {variant === "badges" && (
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex items-center gap-[15px] pb-4">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant="outline"
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                    category.active
                      ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                      : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                  } cursor-pointer hover:opacity-80 transition-opacity`}
                >
                  <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    {category.label}
                  </span>
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        )}

        {variant === "logos" && (
          <div className="flex items-start gap-[15px] w-full overflow-x-auto pb-2 scrollbar-hide">
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-[66px] px-6 rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full max-h-[50px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {variant === "badges" && <img className="w-full" alt="Frame" src="/frame-133.svg" />}
    </section>
  );
};
