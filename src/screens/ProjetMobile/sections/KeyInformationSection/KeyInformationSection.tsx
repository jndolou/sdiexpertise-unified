import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const propertyTypes = [
  { id: 1, label: "Maison", icon: "/group-2.png", selected: true },
  { id: 2, label: "Appartement", icon: "/group-3.png", selected: false },
  { id: 3, label: "Local commerical", icon: "/group-4.png", selected: false },
  { id: 4, label: "Local industriel", icon: "/group-5.png", selected: false },
  { id: 5, label: "Bureau", icon: "/group-6.png", selected: false },
  { id: 6, label: "Entrepôt", icon: "/group-7.png", selected: false },
  { id: 7, label: "Hôtel", icon: "/group-8.png", selected: false },
  { id: 8, label: "Restaurant", icon: "/group-9.png", selected: false },
  { id: 9, label: "Villa", icon: "/group-10.png", selected: false },
  { id: 10, label: "Chatêau", icon: "/group-11.png", selected: false },
  { id: 11, label: "Manoir", icon: "/group-12.png", selected: false },
  { id: 12, label: "Parking & garage", icon: "/group-13.png", selected: false },
  { id: 13, label: "Parking & garage", icon: "/group-14.png", selected: false },
  { id: 14, label: "Cellier & cave", icon: "/group-15.png", selected: false },
  { id: 15, label: "Lieux de culte", icon: "/group-16.png", selected: false },
  { id: 16, label: "Hangar & grange", icon: "/group-17.png", selected: false },
];

const diagnostics = [
  {
    id: 1,
    image: "/frame-403-3.svg",
    badge: "Pack Vente",
    title: "DPE (Diagnostic de performance énergétique)",
    description: "Obligatoire pour la vente.\nRapport valable 10 ans.",
    price: "Dès 90€ TTC",
    buttonIcon: "/bouton-2.svg",
  },
  {
    id: 2,
    image: "/frame-403.svg",
    badge: "Pack Vente",
    title: "Diagnostic électricité",
    description: "Obligatoire pour la vente.\nRapport valable 15 ans.",
    price: "Dès 100€ TTC",
    buttonIcon: "/bouton-1.svg",
  },
];

export const KeyInformationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-8 pb-[65px] px-4">
      <div className="flex flex-col items-start gap-[49px] w-full">
        <div className="flex flex-col w-full items-start gap-5">
          <h1 className="font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
            L&apos;essentiel pour la vente de votre <br />
            maison
          </h1>
        </div>

        <div className="flex flex-col w-full items-start justify-center gap-[15px]">
          <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl tracking-[0] leading-[28.8px]">
            Votre type de bien :
          </h2>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex items-center gap-[15px] pb-4">
              {propertyTypes.map((type) => (
                <Button
                  key={type.id}
                  variant="ghost"
                  className={`h-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                    type.selected
                      ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                      : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                  }`}
                >
                  <img
                    className="w-[22.38px] h-[18.19px]"
                    alt={type.label}
                    src={type.icon}
                  />
                  <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    {type.label}
                  </span>
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-8 mt-8">
        <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
          Diagnostics obligatoires pour une maison
        </h2>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex items-start gap-[15px] pb-4">
            {diagnostics.map((diagnostic) => (
              <Card
                key={diagnostic.id}
                className="flex-shrink-0 w-[222px] p-4 bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="p-0 flex flex-col items-start gap-[15px]">
                  <img
                    className="w-full"
                    alt={diagnostic.title}
                    src={diagnostic.image}
                  />

                  <div className="flex flex-col items-start gap-2 w-full">
                    <Badge className="h-[18px] px-1.5 py-1.5 bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] border-none">
                      <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] [font-style:var(--tags-mobile-font-style)]">
                        {diagnostic.badge}
                      </span>
                    </Badge>

                    <div className="flex flex-col items-start gap-[13px]">
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                          {diagnostic.title}
                        </h3>

                        <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)] whitespace-pre-line">
                          {diagnostic.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-start gap-[13px]">
                        <div className="flex items-center gap-2">
                          <span className="[font-family:'Pecita-Book',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                            {diagnostic.price}
                          </span>
                        </div>

                        <div className="inline-flex items-start gap-1.5">
                          <Button
                            variant="ghost"
                            className="h-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                          >
                            <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                              En savoir plus
                            </span>
                          </Button>

                          <img
                            className="h-12"
                            alt="Bouton"
                            src={diagnostic.buttonIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
