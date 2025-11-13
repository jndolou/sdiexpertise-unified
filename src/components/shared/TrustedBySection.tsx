import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Badge } from "../ui/badge";

interface Category {
  value: string;
  label: string;
}

interface Logo {
  name: string;
  src: string;
  alt: string;
}

interface TrustedBySectionProps {
  title?: string;
  subtitle?: string;
  categories?: Category[];
  logos?: Logo[];
  defaultCategory?: string;
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
  useToggleGroup?: boolean;
  showLogos?: boolean;
  logoFrameSrc?: string;
}

const defaultCategories: Category[] = [
  { value: "industrie", label: "Industrie" },
  { value: "agro", label: "Agro alimentaire" },
  { value: "hotellerie", label: "Hôtellerie" },
];

const defaultLogos: Logo[] = [
  { name: "My TFI", src: "/logo%20copie.png", alt: "My TFI" },
  { name: "BFM Business", src: "/Logo_BFM_Business.svg.png", alt: "BFM Business" },
  { name: "Marie Claire", src: "/logo-2.png", alt: "Marie Claire" },
  { name: "Vici", src: "/logo.png", alt: "Vici" },
];

export const TrustedBySection = ({
  title = "Ils nous font confiance",
  subtitle = "98% de satisfactions clients",
  categories = defaultCategories,
  logos = defaultLogos,
  defaultCategory = "agro",
  className = "",
  paddingTop = "pt-0",
  paddingBottom = "pb-[65px]",
  useToggleGroup = true,
  showLogos = true,
  logoFrameSrc,
}: TrustedBySectionProps): JSX.Element => {
  return (
    <section
      className={`flex w-full items-start gap-2.5 px-4 py-0 ${paddingTop} ${paddingBottom} ${className}`}
    >
      <div className="flex flex-col w-full items-start gap-8">
        <header className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col items-start gap-1.5 w-full">
            <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              {title}
            </h2>

            <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-4">
              {subtitle}
            </p>
          </div>

          {useToggleGroup ? (
            <ToggleGroup
              type="single"
              defaultValue={defaultCategory}
              className="flex gap-2 flex-wrap"
            >
              {categories.map((category) => (
                <ToggleGroupItem
                  key={category.value}
                  value={category.value}
                  className="px-4 py-2 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] data-[state=on]:bg-[#a97ffb] data-[state=on]:text-white [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-normal hover:bg-[#f0eef4] data-[state=on]:hover:bg-[#9b6ff0]"
                >
                  {category.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          ) : (
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex items-center gap-[15px] pb-4">
                {categories.map((category, index) => (
                  <Badge
                    key={category.value}
                    variant="outline"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                      category.value === defaultCategory
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
        </header>

        {showLogos && (
          <>
            {logoFrameSrc ? (
              <img className="w-full" alt="Trusted brands" src={logoFrameSrc} />
            ) : (
              <div className="flex items-start gap-[15px] w-full overflow-x-auto pb-2 scrollbar-hide">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center h-[66px] px-6 rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
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
          </>
        )}
      </div>
    </section>
  );
};
