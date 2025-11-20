import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";

const packItems = [
  {
    id: 1,
    icon: "/group.png",
    name: "Électricité",
    action: "Ajouter",
    added: false,
    advice: "Conseil : retirer un élément n'impacte pas le prix : le pack reste à 350 € car vous bénéficiez d'un tarif avantageux, même en retirant un diagnostic.",
  },
  {
    id: 2,
    icon: "/group-1.png",
    name: "Diagnostic DPE",
    added: true,
  },
  {
    id: 3,
    icon: "/group-2.png",
    name: "Gaz",
    added: true,
  },
  {
    id: 4,
    icon: "/group-3.png",
    name: "ERP (offert - 60€)",
    isGift: true,
  },
  {
    id: 5,
    name: "Déplacement (offert - 50€)",
    isGift: true,
  },
];

export const RecommendedPackSection = (): JSX.Element => {
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full items-start gap-[11px] relative">
      <header className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
        <Badge className="inline-flex h-[18px] items-center justify-center gap-[5px] px-1.5 py-1 relative bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-violet-clair">
          <span className="relative w-fit mt-[-3.50px] mb-[-1.50px] font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
            Économisez jusqu&apos;à 230€
          </span>
        </Badge>

        <h3 className="relative w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
          Pack recommandé - très avantageux :
        </h3>
      </header>

      <Card className="inline-flex flex-col items-start gap-3.5 w-full relative border-none shadow-none">
        <CardContent className="flex flex-col w-full items-center gap-[15px] p-[5px] relative bg-[#efe7ff] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <Popover
            open={openPopoverId === 0}
            onOpenChange={(open) => setOpenPopoverId(open ? 0 : null)}
          >
            <PopoverTrigger asChild>
              <button
                className="flex items-start gap-2 p-2.5 bg-[#e5d9ff] rounded-lg w-full text-left cursor-pointer hover:bg-[#dcc9ff] transition-colors"
                onClick={() => setOpenPopoverId(openPopoverId === 0 ? null : 0)}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C7.17157 0 6.5 0.671573 6.5 1.5V2C4.84315 2.58577 3.58577 4.13137 3.58577 6C3.58577 7.1 3.9 8.1 4.4 8.9V12C4.4 12.5523 4.84772 13 5.4 13H10.6C11.1523 13 11.6 12.5523 11.6 12V8.9C12.1 8.1 12.4143 7.1 12.4143 6C12.4143 4.13137 11.1569 2.58577 9.5 2V1.5C9.5 0.671573 8.82843 0 8 0Z" fill="#7C5ED6"/>
                    <path d="M6 14C6 14.5523 6.44772 15 7 15H9C9.55228 15 10 14.5523 10 14V13.5H6V14Z" fill="#7C5ED6"/>
                    <path d="M7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 5.27614 10.7239 5.5 11 5.5C11.2761 5.5 11.5 5.27614 11.5 5C11.5 3.067 9.933 1.5 8 1.5C7.72386 1.5 7.5 1.72386 7.5 2C7.5 2.27614 7.5 2.72386 7.5 3Z" fill="white"/>
                  </svg>
                </div>
                <p className="text-xs [font-family:'Open_Sans',Helvetica] text-[#1c1b1b] leading-[16.8px] flex-1 font-bold">
                  Conseil
                </p>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[calc(100vw-2rem)] max-w-[361px] p-4 bg-white rounded-xl shadow-lg border border-[#e0e0e0]"
              align="start"
              sideOffset={8}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C7.17157 0 6.5 0.671573 6.5 1.5V2C4.84315 2.58577 3.58577 4.13137 3.58577 6C3.58577 7.1 3.9 8.1 4.4 8.9V12C4.4 12.5523 4.84772 13 5.4 13H10.6C11.1523 13 11.6 12.5523 11.6 12V8.9C12.1 8.1 12.4143 7.1 12.4143 6C12.4143 4.13137 11.1569 2.58577 9.5 2V1.5C9.5 0.671573 8.82843 0 8 0Z" fill="#7C5ED6"/>
                    <path d="M6 14C6 14.5523 6.44772 15 7 15H9C9.55228 15 10 14.5523 10 14V13.5H6V14Z" fill="#7C5ED6"/>
                    <path d="M7.5 3C7.5 2.72386 7.72386 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 5.27614 10.7239 5.5 11 5.5C11.2761 5.5 11.5 5.27614 11.5 5C11.5 3.067 9.933 1.5 8 1.5C7.72386 1.5 7.5 1.72386 7.5 2C7.5 2.27614 7.5 2.72386 7.5 3Z" fill="white"/>
                  </svg>
                </div>
                <p className="text-sm [font-family:'Open_Sans',Helvetica] text-[#1c1b1b] leading-[18.2px] flex-1">
                  <span className="font-bold">Conseil :</span> retirer un élément n'impacte pas le prix : le pack reste à 350 € car vous bénéficiez d'un tarif avantageux, même en retirant un diagnostic.
                </p>
              </div>
            </PopoverContent>
          </Popover>

          {packItems.map((item) => (
            <div key={item.id} className="flex flex-col w-full">
              <div className="flex h-[23px] items-center justify-between w-full">
                <div className="flex items-center gap-2.5">
                  {item.icon && (
                    <img
                      className="relative w-[13px] h-[13px]"
                      alt="Icon"
                      src={item.icon}
                    />
                  )}
                  <span className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                    {item.name}
                  </span>
                </div>

                {item.isGift ? (
                  <img
                    className="relative flex-[0_0_auto] h-[23px]"
                    alt="Gift"
                    src="/bouton.svg"
                  />
                ) : item.added ? (
                  <div className="inline-flex h-12 items-center justify-center gap-[9px] p-3 mt-[-12.50px] mb-[-12.50px] rounded-[62px] overflow-hidden">
                    <CheckIcon className="relative w-[9px] h-2" />
                    <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-black text-base tracking-[0] leading-[19.2px] underline whitespace-nowrap">
                      Ajouté
                    </span>
                  </div>
                ) : (
                  <Button
                    variant="link"
                    className="h-auto p-0 [font-family:'Ubuntu',Helvetica] font-bold text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] underline"
                  >
                    {item.action}
                  </Button>
                )}
              </div>
            </div>
          ))}

          <div className="w-full h-px bg-[#d0c4e5] my-2" />

          <div className="flex w-full items-center justify-between">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
              Total : 350€ TTC
            </span>
            <div className="flex items-center gap-2">
              <span className="[font-family:'Ubuntu',Helvetica] font-normal text-[#6a6a6a] text-lg tracking-[0] leading-[21.6px] line-through">
                580€
              </span>
              <Badge className="inline-flex h-[18px] items-center justify-center gap-[5px] px-1.5 py-1 bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-violet-clair">
                <span className="relative w-fit mt-[-3.50px] mb-[-1.50px] font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
                  Économie : 230€
                </span>
              </Badge>
            </div>
          </div>

          <Button className="flex w-full h-12 items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 15C6.32843 15 7 14.3284 7 13.5C7 12.6716 6.32843 12 5.5 12C4.67157 12 4 12.6716 4 13.5C4 14.3284 4.67157 15 5.5 15Z" fill="#1C1B1B"/>
              <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12C13.6716 12 13 12.6716 13 13.5C13 14.3284 13.6716 15 14.5 15Z" fill="#1C1B1B"/>
              <path d="M0 0.5C0 0.223858 0.223858 0 0.5 0H2.5C2.73206 0 2.93187 0.161508 2.98658 0.387376L3.5 2.5H17.5C17.6394 2.5 17.7731 2.55632 17.8713 2.65622C17.9695 2.75613 18.0241 2.89141 18.0045 3.02703L16.5045 12.527C16.4741 12.7439 16.2875 12.9 16.0682 12.9H4.43182C4.21249 12.9 4.02592 12.7439 3.99546 12.527L2.01342 1.5H0.5C0.223858 1.5 0 1.27614 0 1V0.5Z" fill="#1C1B1B"/>
            </svg>
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
              Je choisis le pack
            </span>
          </Button>
        </CardContent>
      </Card>

      <div className="flex items-center gap-3 w-full mt-4">
        <div className="flex-1">
          <label className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px] mb-2 block">
            Code promo :
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full h-[45px] px-4 py-2.5 bg-white rounded-2xl border border-[#e0e0e0] [font-family:'Open_Sans',Helvetica] text-sm focus:outline-none focus:ring-2 focus:ring-[#5d3ca4]"
          />
        </div>
        <button
          type="button"
          className="h-[45px] w-[45px] mt-7 flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1C1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
