import { CheckIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const diagnosticItem = {
  name: "Diagnostic électricité",
  price: "300€",
};

const packItems = [
  {
    id: 1,
    icon: "/group.png",
    name: "Électricité",
    status: "added",
    hasCheckmark: true,
  },
  {
    id: 2,
    icon: "/group-1.png",
    name: "Diagnostic DPE",
    status: "added",
    hasCheckmark: true,
  },
  {
    id: 3,
    icon: "/group-2.png",
    name: "Gaz",
    status: "added",
    hasCheckmark: true,
  },
  {
    id: 4,
    icon: "/group-3.png",
    name: "ERP (offert - 60€)",
    status: "gift",
    hasCheckmark: false,
  },
  {
    id: 5,
    icon: null,
    name: "Déplacement (offert - 50€)",
    status: "gift",
    hasCheckmark: false,
  },
];

export const PromoCodeSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-start gap-6 relative">
      <div className="inline-flex flex-col items-start gap-[11px] relative flex-[0_0_auto]">
        <h2 className="relative w-[361px] mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
          Prix :
        </h2>

        <Card className="inline-flex flex-col items-start relative flex-[0_0_auto] border-none shadow-none">
          <CardContent className="flex flex-col w-[363px] h-[45px] items-start justify-center px-4 py-2.5 relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none p-0">
            <div className="flex h-[31px] items-center gap-[17px] relative self-stretch w-full mt-[-4.00px] mb-[-2.00px]">
              <div className="flex w-[329px] h-[23px] items-center gap-[9px] relative">
                <img
                  className="relative w-px h-px mt-[-11911.00px] ml-[-36739.00px]"
                  alt="Union"
                />

                <div className="w-[266px] h-[13px] [font-family:'Ubuntu',Helvetica] font-bold text-xs leading-[13.8px] underline relative text-dark tracking-[0] whitespace-nowrap">
                  {diagnosticItem.name}
                </div>

                <div className="relative w-fit mt-[-6.50px] mb-[-4.50px] [font-family:'Pecita-Book',Helvetica] font-normal text-[#5d3ca4] text-[23px] tracking-[0] leading-[33.6px] whitespace-nowrap">
                  {diagnosticItem.price}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col w-[361px] items-start gap-[11px] relative">
        <header className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
          <Badge className="inline-flex h-[18px] items-center justify-center gap-[5px] p-1.5 relative bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-violet-clair">
            <span className="relative w-fit mt-[-3.50px] mb-[-1.50px] font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
              Économisez jusqu&apos;à 230€
            </span>
          </Badge>

          <h3 className="relative w-[361px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
            Pack recommandé - très avantageux :
          </h3>
        </header>

        <Card className="inline-flex flex-col items-start gap-3.5 relative mb-[-76.00px] border-none shadow-none">
          <CardContent className="flex flex-col w-[363px] items-center gap-[15px] pl-[19px] pr-2.5 pt-[21px] pb-2.5 relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#efe7ff] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none p-0">
            {packItems.map((item) => (
              <div
                key={item.id}
                className="flex h-[23px] items-center justify-between relative self-stretch w-full"
              >
                <div
                  className={`flex items-center gap-2.5 relative ${item.icon ? "w-auto" : "w-[282px]"}`}
                >
                  {item.icon && (
                    <img
                      className="relative w-[13px] h-[13px]"
                      alt="Group"
                      src={item.icon}
                    />
                  )}

                  <span
                    className={`${item.icon ? "relative" : "relative mt-[-1.00px]"} w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap`}
                  >
                    {item.name}
                  </span>
                </div>

                {item.hasCheckmark ? (
                  <div className="inline-flex h-12 items-center justify-center gap-[9px] p-3 relative flex-[0_0_auto] mt-[-12.50px] mb-[-12.50px] rounded-[62px] overflow-hidden">
                    <CheckIcon className="relative w-[9px] h-2" />

                    <span className="relative w-[54px] h-[11px] [font-family:'Ubuntu',Helvetica] font-bold text-black text-base tracking-[0] leading-[19.2px] underline whitespace-nowrap">
                      Ajouté
                    </span>
                  </div>
                ) : (
                  <img
                    className="relative flex-[0_0_auto] h-[23px] ml-[-11px]"
                    alt="Bouton"
                    src="/bouton.svg"
                  />
                )}
              </div>
            ))}

            <footer className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <img
                className="w-[323px] mt-[-1.00px] relative h-px object-cover"
                alt="Line"
                src="/line-144.svg"
              />

              <div className="flex w-[323px] items-center relative flex-[0_0_auto]">
                <span className="relative w-[57px] h-[22px] mt-[-0.50px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px] whitespace-nowrap">
                  Total :
                </span>

                <span className="relative w-[137px] h-[22px] mt-[-0.50px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px] whitespace-nowrap">
                  350€ TTC
                </span>

                <span className="relative w-[49px] h-[23px] mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-normal text-[#6a6a6a] text-lg tracking-[0] leading-[21.6px] line-through whitespace-nowrap">
                  580€
                </span>

                <Badge className="inline-flex h-[18px] items-center justify-center gap-[5px] p-1.5 relative flex-[0_0_auto] bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-violet-clair">
                  <span className="relative w-fit mt-[-3.50px] mb-[-1.50px] font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
                    Économie : 230€
                  </span>
                </Badge>
              </div>

              <Button className="flex w-[323px] h-12 items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc] h-auto">
                <ShoppingCartIcon className="relative w-[17.92px] h-[15.21px]" />

                <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                  Je choisis le pack
                </span>
              </Button>
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
