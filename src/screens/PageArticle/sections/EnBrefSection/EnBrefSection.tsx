import { ChevronDownIcon, ListIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tableOfContents: TocItem[] = [
  { id: "en-bref", title: "En bref", level: 2 },
  { id: "ptz-definition", title: "Le prêt à taux zéro, qu'est-ce que c'est ?", level: 2 },
  { id: "ptz-2024", title: "PTZ 2024, un total revirement", level: 2 },
  { id: "economies-energie", title: "Des économies sur vos factures d'énergie", level: 2 },
  { id: "valoriser-bien", title: "Valorisez votre bien immobilier sur le marché", level: 2 },
  { id: "chiffres-cles", title: "80 % des logements sont classés D ou moins au DPE", level: 3 },
  { id: "avis", title: "Qu'avez-vous pensé de cet article ?", level: 2 },
  { id: "sources", title: "Sources & références", level: 2 },
];

export const EnBrefSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };
  return (
    <section className="flex flex-col w-full items-start gap-10 pt-[60px] px-4">
      <Card className="w-full rounded-2xl border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-start gap-[15px] p-5">
          <h2 id="en-bref" className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl tracking-[0] leading-[28.8px]">
            En bref
          </h2>

          <div className="flex flex-col items-start gap-[26px] w-full">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-[20.8px]">
              Cet article vous explique pourquoi le DPE est obligatoire, ce
              qu&apos;il contient, combien il coûte et comment le préparer
              efficacement.
            </p>

            <div className="relative w-full">
              <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-auto justify-between items-center gap-2 px-3 py-2 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
              >
                <div className="flex items-center gap-2">
                  <ListIcon className="w-[17px] h-5" />
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5">
                    Sommaire
                  </span>
                </div>
                <ChevronDownIcon className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </Button>

              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 z-40 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.85)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none shadow-lg max-h-[400px] overflow-y-auto">
                  <div className="relative z-10 p-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg hover:bg-[#f3f1f5] transition-colors ${
                          item.level === 3 ? 'pl-6 text-sm' : 'text-sm'
                        } [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] tracking-[0] leading-5`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
