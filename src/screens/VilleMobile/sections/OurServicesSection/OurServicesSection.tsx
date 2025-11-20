import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const servicesData = [
  {
    image: "/frame-403-2.svg",
    title: "Assistance technique pour la mise en conformité",
    description:
      "Bénéficiez d'une assistance technique fiable pour la mise en conformité de vos biens...",
    price: "100€",
    buttonImage: "/bouton-3.svg",
  },
  {
    image: "/frame-403.svg",
    title: "Contrôles spécifiques, pollution des sols, PMR...",
    description:
      "Effectuez des contrôles spécifiques adaptés à vos besoins pour garantir la...",
    price: "300€",
    buttonImage: "/bouton-1.svg",
  },
  {
    image: "/frame-403-3.svg",
    title: "Suivi et veille réglementaire personnalisée",
    description:
      "Profitez d'un suivi et d'une veille réglementaire personnalisée pour rester...",
    price: "100€",
    buttonImage: "/bouton-5.svg",
  },
  {
    image: "/frame-403-1.svg",
    title: "État des lieux locatif détaillé",
    description:
      "Réalisez des états des lieux complets et détaillés pour sécuriser chaque location...",
    price: "100€",
    buttonImage: "/bouton.svg",
  },
  {
    image: "/frame-403-5.svg",
    title: "Diagnostics Vente & Location",
    description:
      "Assurez des transactions réglementaires grâce à des diagnostics complets : DPE...",
    price: "100€",
    buttonImage: "/bouton-6.svg",
  },
  {
    image: "/frame-403-4.svg",
    title: "Suivi et veille réglementaire personnalisée",
    description:
      "Profitez d'un suivi et d'une veille réglementaire personnalisée pour rester conforme en toute...",
    price: "100€",
    buttonImage: "/bouton-2.svg",
  },
];

export const OurServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[65px] pb-[5px] px-4 relative">
      <div className="flex flex-col items-start gap-8 relative w-full">
        <header className="flex flex-col items-start justify-center gap-[15px] relative w-full">
          <h2 className="relative w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Nos services de diagnostics immobiliers à Argenteuil
          </h2>

          <p className="relative max-w-[325px] font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b]">
              Tous vos diagnostics obligatoires réalisés{" "}
            </span>
            <span className="text-[#7e3287]">localement</span>
            <span className="text-[#1c1b1b]">.</span>
          </p>
        </header>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex items-start gap-[15px] pb-4">
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[222px] bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="flex flex-col items-start gap-[15px] p-4">
                  <img
                    className="relative w-full h-auto"
                    alt={service.title}
                    src={service.image}
                  />

                  <div className="flex flex-col items-start gap-2 relative w-full">
                    <Badge className="h-[18px] px-1.5 py-1.5 bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] border-none hover:bg-violet-clair">
                      <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] [font-style:var(--tags-mobile-font-style)]">
                        Nouveau
                      </span>
                    </Badge>

                    <h3 className="relative w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                      {service.title}
                    </h3>

                    <p className="relative w-full font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-end gap-2 relative w-full">
                      <span className="relative flex-1 [font-family:'Pecita-Book',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                        à partir de {service.price}
                      </span>

                      <img
                        className="flex-shrink-0 h-12 relative"
                        alt="Bouton"
                        src={service.buttonImage}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex flex-col items-end gap-2.5 relative w-full">
          <Button className="h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc] border-none">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
              Tous les diagnostics
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
