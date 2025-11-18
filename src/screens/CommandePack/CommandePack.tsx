import { ArrowLeftIcon, CheckIcon, ShoppingCartIcon, Gift, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/layout/Header";

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
    showAction: "Ajouter",
    isAdded: false,
  },
  {
    id: 2,
    icon: "/group-1.png",
    name: "Diagnostic DPE",
    status: "added",
    showAction: null,
    isAdded: true,
  },
  {
    id: 3,
    icon: "/group-2.png",
    name: "Gaz",
    status: "added",
    showAction: null,
    isAdded: true,
  },
  {
    id: 4,
    icon: "/group-3.png",
    name: "ERP (offert - 60€)",
    status: "gift",
    showAction: null,
    isAdded: false,
  },
  {
    id: 5,
    icon: null,
    name: "Déplacement (offert - 50€)",
    status: "gift",
    showAction: null,
    isAdded: false,
  },
];

export const CommandePack = (): JSX.Element => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="overflow-hidden bg-[#f3f1f7] w-full min-w-[393px] flex flex-col relative min-h-screen">
      <Header />

      <main className="flex flex-col w-full items-start gap-6 pt-[120px] pb-8 px-4">
        <section className="inline-flex flex-col items-start gap-[11px] relative w-full">
          <h2 className="relative w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
            Prix :
          </h2>

          <Card className="inline-flex flex-col items-start relative w-full border-none shadow-none">
            <CardContent className="flex flex-col w-full items-start justify-center px-4 py-2.5 relative bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none p-0">
              <div className="flex items-center justify-between w-full gap-2">
                <div className="[font-family:'Ubuntu',Helvetica] font-bold text-xs leading-[13.8px] underline text-dark tracking-[0]">
                  {diagnosticItem.name}
                </div>

                <div className="[font-family:'Pecita-Book',Helvetica] font-normal text-[#5d3ca4] text-[23px] tracking-[0] leading-[33.6px] whitespace-nowrap">
                  {diagnosticItem.price}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="flex flex-col w-full items-start gap-[11px] relative">
          <header className="inline-flex flex-col items-start gap-1.5 relative w-full">
            <Badge className="inline-flex h-[18px] items-center justify-center gap-[5px] px-2 py-1.5 relative bg-[#7c5ed6] rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-[#7c5ed6]">
              <span className="relative w-fit mt-[-3.50px] mb-[-1.50px] [font-family:'Ubuntu',Helvetica] font-bold text-[#f3f1f5] text-[10px] tracking-[0] leading-[12px] whitespace-nowrap">
                Économisez jusqu&apos;à 230€
              </span>
            </Badge>

            <h3 className="relative w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
              Pack recommandé - très avantageux :
            </h3>
          </header>

          <Card className="inline-flex flex-col items-start gap-3.5 relative w-full border-none shadow-none">
            <CardContent className="flex flex-col w-full items-center gap-[15px] px-5 pt-[21px] pb-2.5 relative bg-[#efe7ff] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none p-0">
              {packItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between relative w-full"
                >
                  <div className="flex items-center gap-2.5 relative">
                    {item.icon && (
                      <img
                        className="relative w-[13px] h-[13px]"
                        alt="Icon"
                        src={item.icon}
                      />
                    )}

                    {item.status === "gift" && !item.icon && (
                      <Gift className="relative w-[13px] h-[13px] text-[#7c5ed6]" />
                    )}

                    <span className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                      {item.name}
                    </span>
                  </div>

                  {item.showAction === "Ajouter" ? (
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-[#5d3ca4] [font-family:'Ubuntu',Helvetica] font-bold text-sm underline hover:bg-transparent"
                    >
                      Ajouter
                    </Button>
                  ) : item.isAdded ? (
                    <div className="inline-flex items-center gap-1.5 relative">
                      <CheckIcon className="relative w-3 h-3 text-[#1c1b1b]" />
                      <span className="relative [font-family:'Ubuntu',Hepatica] font-bold text-black text-sm tracking-[0] leading-[16.8px] underline whitespace-nowrap">
                        Ajouté
                      </span>
                    </div>
                  ) : item.status === "gift" ? (
                    <Gift className="relative w-5 h-5 text-[#7c5ed6]" />
                  ) : null}
                </div>
              ))}

              {packItems[0].name === "Électricité" && (
                <div className="flex flex-col gap-2 w-full bg-white/40 rounded-lg p-3 -mx-1">
                  <div className="flex items-start gap-2">
                    <Gift className="relative w-4 h-4 text-[#7c5ed6] mt-0.5 flex-shrink-0" />
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-xs tracking-[0] leading-[16px]">
                      <span className="font-semibold">Conseil :</span> retirer un élément n&apos;impacte pas le prix : le pack reste à 350 € car vous bénéficiez d&apos;un prix avantageux, même en retirant un diagnostic.
                    </p>
                  </div>
                </div>
              )}

              <footer className="inline-flex flex-col items-start gap-5 relative w-full">
                <div className="w-full h-px bg-[#d0d0d0]"></div>

                <div className="flex w-full items-center gap-2 flex-wrap">
                  <span className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px] whitespace-nowrap">
                    Total :
                  </span>

                  <span className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px] whitespace-nowrap">
                    350€ TTC
                  </span>

                  <span className="[font-family:'Ubuntu',Helvetica] font-normal text-[#6a6a6a] text-lg tracking-[0] leading-[21.6px] line-through whitespace-nowrap">
                    580€
                  </span>

                  <Badge className="inline-flex h-[18px] items-center justify-center gap-[5px] px-2 py-1.5 relative bg-[#7c5ed6] rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-[#7c5ed6]">
                    <span className="relative w-fit mt-[-3.50px] mb-[-1.50px] [font-family:'Ubuntu',Helvetica] font-bold text-[#f3f1f5] text-[10px] tracking-[0] leading-[12px] whitespace-nowrap">
                      Économie : 230€
                    </span>
                  </Badge>
                </div>

                <Button className="flex w-full h-12 items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
                  <ShoppingCartIcon className="relative w-[17.92px] h-[15.21px]" />

                  <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                    Je choisis le pack
                  </span>
                </Button>
              </footer>
            </CardContent>
          </Card>
        </div>

        <section className="flex w-full items-center gap-2 relative">
          <label className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
            Code promo :
          </label>

          <div className="flex-1 relative">
            <Input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full h-10 px-3 py-2 bg-white/50 border border-[#d0d0d0] rounded-lg [font-family:'Open_Sans',Helvetica] text-sm"
              placeholder=""
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 p-0 hover:bg-transparent"
          >
            <ArrowRight className="w-6 h-6 text-[#1c1b1b]" />
          </Button>
        </section>

        <section className="flex w-full items-center justify-center gap-4">
          <Button className="flex h-12 items-center justify-center gap-2 px-6 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f5f3f7] text-[#1c1b1b] [font-family:'Ubuntu',Helvetica] font-bold text-base">
            <ShoppingCartIcon className="w-[17.92px] h-[15.21px]" />
            Commander
          </Button>

          <Button
            variant="outline"
            className="flex h-12 items-center justify-center gap-2 px-6 py-3 rounded-[62px] border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)] text-[#5d3ca4] [font-family:'Ubuntu',Helvetica] font-medium text-base relative"
          >
            Télécharger le devis
          </Button>
        </section>
      </main>
    </div>
  );
};
