import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const diagnosticsData = [
  {
    image: "/frame-403-5.svg",
    badge: "Nouveau",
    title: "Assistance technique pour la mise en conformité",
    description:
      "Bénéficiez d'une assistance technique fiable pour la mise en conformité de vos biens...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-7.svg",
    badge: "Nouveau",
    title: "Contrôles spécifiques, pollution des sols, PMR...",
    description:
      "Effectuez des contrôles spécifiques adaptés à vos besoins pour garantir la...",
    price: "à partir de 300€",
  },
  {
    image: "/frame-403-2.svg",
    badge: "Nouveau",
    title: "Suivi et veille réglementaire personnalisée",
    description:
      "Profitez d'un suivi et d'une veille réglementaire personnalisée pour rester...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-4.svg",
    badge: "Nouveau",
    title: "État des lieux locatif détaillé",
    description:
      "Réalisez des états des lieux complets et détaillés pour sécuriser chaque location...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-3.svg",
    badge: "Nouveau",
    title: "Diagnostics Vente & Location",
    description:
      "Assurez des transactions réglementaires grâce à des diagnostics complets : DPE...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-6.svg",
    badge: "Nouveau",
    title: "Suivi et veille réglementaire personnalisée",
    description:
      "Profitez d'un suivi et d'une veille réglementaire personnalisée pour rester conforme en toute...",
    price: "à partir de 100€",
  },
];

export const NosSubsection = (): JSX.Element => {
  return (
    <section className="w-full py-[65px] px-4 flex flex-col items-start gap-2.5">
      <div className="flex flex-col items-start gap-8 w-full">
        <header className="flex flex-col items-start justify-center gap-[15px] w-full">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Nos diagnostics incontournables
          </h2>

          <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] tracking-[var(--paragraphe-1-letter-spacing)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b]">
              Des diagnostics précis, pour des décisions{" "}
            </span>
            <span className="text-[#875eda]">sereines</span>
          </p>
        </header>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex items-start gap-[15px] pb-4">
            {diagnosticsData.map((diagnostic, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[222px] bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(135,94,218,1)_26%,rgba(135,94,218,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="p-4 flex flex-col items-start gap-[15px]">
                  <img
                    className="w-full h-auto"
                    alt={diagnostic.title}
                    src={diagnostic.image}
                  />

                  <div className="flex flex-col items-start gap-2 w-full">
                    <Badge className="bg-[#a97ffb] text-[#f3f1f5] rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] px-1.5 py-1.5 h-auto [font-family:'Ubuntu',Helvetica] font-medium text-[9px] tracking-[0] leading-[normal]">
                      {diagnostic.badge}
                    </Badge>

                    <h3 className="w-full [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-lg tracking-[0] leading-[21.6px]">
                      {diagnostic.title}
                    </h3>

                    <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-xs tracking-[0] leading-[15.6px]">
                      {diagnostic.description}
                    </p>

                    <div className="flex items-center justify-end gap-2 w-full">
                      <span className="flex-1 [font-family:'Pecita-Book',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                        {diagnostic.price}
                      </span>

                      <Button
                        size="icon"
                        className="w-12 h-12 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] hover:bg-[#f0eef2]"
                      >
                        <img
                          className="w-6 h-6"
                          alt="Arrow forward"
                          src="/arrow-forward.svg"
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex flex-col items-end w-full">
          <Button className="h-12 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef2] px-4 py-3">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
              Tous les diagnostics
            </span>
            <img
              className="w-6 h-6"
              alt="Arrow forward"
              src="/arrow-forward.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
