import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../ui/toggle-group";

const professionOptions = [
  { id: "pro", label: "Professionnelle de l'immobilier" },
  { id: "syndic", label: "Syndic" },
  { id: "notaire", label: "Notaire" },
  { id: "collectivite", label: "Collectivité" },
  { id: "promoteur", label: "Promoteur" },
];

export const DcouvrirNotreSubsection = (): JSX.Element => {
  const [selectedProfession, setSelectedProfession] = useState("syndic");

  return (
    <section className="flex flex-col w-full items-start gap-8 px-4 py-0">
      <h2 className="relative self-stretch font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
        Découvrir notre univers pro
      </h2>

      <Card className="relative self-stretch w-full bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col items-center justify-center gap-5 pt-[30px] pb-[25px] px-5">
          <div className="inline-flex flex-col items-center justify-center gap-[17px] w-full">
            <div className="flex flex-col w-full items-start gap-3">
              <div className="inline-flex flex-col items-start gap-[17px] w-full">
                <h3 className="w-full font-[number:var(--titre-2-mobile-font-weight)] text-[length:var(--titre-2-mobile-font-size)] leading-[var(--titre-2-mobile-line-height)] font-titre-2-mobile text-[#1c1b1b] tracking-[var(--titre-2-mobile-letter-spacing)] [font-style:var(--titre-2-mobile-font-style)]">
                  Je suis...
                </h3>

                <ToggleGroup
                  type="single"
                  value={selectedProfession}
                  onValueChange={(value) =>
                    value && setSelectedProfession(value)
                  }
                  className="flex flex-col w-full items-start justify-center gap-[15px]"
                >
                  <div className="flex w-full items-center justify-between gap-[15px]">
                    <ToggleGroupItem
                      value="pro"
                      className="bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-2 px-4 py-3 flex-1 h-auto rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                    >
                      <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        Professionnelle de l&apos;immobilier
                      </span>
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="syndic"
                      className="bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-2 px-4 py-3 flex-1 h-auto rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                    >
                      <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        Syndic
                      </span>
                    </ToggleGroupItem>
                  </div>

                  <div className="inline-flex items-start gap-[15px] w-full flex-wrap">
                    <ToggleGroupItem
                      value="notaire"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 h-auto rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                    >
                      <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        Notaire
                      </span>
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="collectivite"
                      className="bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-2 px-4 py-3 h-auto rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                    >
                      <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        Collectivité
                      </span>
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="promoteur"
                      className="bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-2 px-4 py-3 h-auto rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                    >
                      <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        Promoteur
                      </span>
                    </ToggleGroupItem>
                  </div>
                </ToggleGroup>
              </div>
            </div>

            <Button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 hover:bg-[#f0eef4]">
              <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Voir les offres adaptées
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
