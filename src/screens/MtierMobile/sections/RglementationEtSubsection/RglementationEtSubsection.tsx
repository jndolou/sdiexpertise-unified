import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cardsData = [
  {
    title: "Diagnostics requis",
    description:
      "Certains diagnostics sont obligatoires : performance énergétique, matériaux à risque, sécurité des installations…",
    buttonText: "Voir les diagnostics concernés",
    iconSrc: "/vector.svg",
    polygonSrc: "/polygon-5.svg",
    topOffset: "top-0",
    cardTopOffset: "top-[60px]",
    iconContainerClasses: "px-[26px] py-[21px]",
    iconClasses: "w-7 h-7",
    polygonClasses: "top-px left-1.5 w-[74px] h-[78px]",
    height: "h-[280px]",
  },
  {
    title: "Normes et évolutions",
    description:
      "De nouvelles obligations entrent en vigueur régulièrement : seuils DPE, interdictions de louer, durées de validité modifiées…",
    buttonText: "En savoir plus",
    iconSrc: "/frame-360.svg",
    polygonSrc: null,
    topOffset: "top-0",
    cardTopOffset: "top-[60px]",
    iconContainerClasses: "",
    iconClasses: "w-[86px] h-20",
    polygonClasses: "",
    height: "h-[304px]",
  },
  {
    title: "Sanctions en cas de non-conformité",
    description:
      "Litiges, amendes, blocage de vente : l'absence d'un diagnostic peut avoir des conséquences importantes.",
    buttonText: "Comment éviter les erreurs",
    iconSrc: "/vector-2.svg",
    polygonSrc: "/polygon-5.svg",
    topOffset: "top-0",
    cardTopOffset: "top-[61px]",
    iconContainerClasses: "px-[21px] py-[18px]",
    iconClasses: "w-7 h-[26px]",
    polygonClasses: "top-px left-1.5 w-[74px] h-[78px]",
    height: "h-[284px]",
  },
];

export const RglementationEtSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 pt-10 pb-[23px] px-4 relative bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(175deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_14%,rgba(170,127,251,1)_75%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <header className="flex flex-col w-full max-w-[354px] items-center justify-center gap-[15px] relative">
        <h2 className="relative w-full max-w-[283px] mt-[-1.00px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
          Réglementations et obligations
        </h2>

        <p className="relative w-full max-w-[325px] [font-family:'Open_Sans',Helvetica] font-normal text-dark text-base text-center tracking-[0] leading-4">
          <span className="text-[#1c1b1b] leading-[0.1px]">
            Vendre ou louer en toute{" "}
          </span>

          <span className="[font-family:'Pecita-Regular',Helvetica] text-[#7e3287] text-[23px] leading-[27.6px]">
            conformité
          </span>

          <span className="text-[#1c1b1b] leading-[20.8px]">, </span>

          <span className="text-[#1c1b1b] leading-[0.1px]">
            sans surprise ni risque.
          </span>
        </p>
      </header>

      <div className="flex flex-col w-full max-w-[357px] items-center gap-3.5 relative">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`relative self-stretch w-full ${card.height}`}
          >
            <Card
              className={`flex flex-col w-full items-center gap-5 pt-[30px] pb-[25px] px-5 absolute ${card.cardTopOffset} left-0 bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(${103 + index}deg,rgba(255,255,255,1)_${index === 0 ? "1" : "0"}%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_${71 + index * 3}%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
            >
              <CardContent className="p-0 w-full">
                <div
                  className={`${index === 1 ? "inline-flex" : "relative w-full max-w-[317px]"} flex-col items-start gap-[15px] ${index === 1 ? "relative flex-[0_0_auto]" : ""}`}
                >
                  <h3
                    className={`relative ${index === 1 ? "w-[317px]" : "w-full"} ${index === 0 ? "mt-[-1.00px]" : index === 2 ? "mt-[-1.00px]" : ""} font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`relative ${index === 1 ? "w-[317px]" : "w-full"} font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]`}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2.5 relative w-full mt-5">
                  <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f5f3f7]">
                    <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                      {card.buttonText}
                    </span>

                    <ArrowRightIcon className="relative w-6 h-6 text-[#1c1b1b]" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {card.polygonSrc ? (
              <div
                className={`flex w-[86px] h-20 items-center justify-center gap-2.5 ${card.iconContainerClasses} absolute ${card.topOffset} left-[136px]`}
              >
                <img
                  className={`absolute ${card.polygonClasses}`}
                  alt="Polygon"
                  src={card.polygonSrc}
                />

                <img
                  className={`relative ${card.iconClasses}`}
                  alt="Icon"
                  src={card.iconSrc}
                />
              </div>
            ) : (
              <img
                className={`absolute ${card.topOffset} left-[136px] ${card.iconClasses}`}
                alt="Icon"
                src={card.iconSrc}
              />
            )}
          </div>
        ))}
      </div>

      <footer className="w-full max-w-[357px] justify-center flex flex-col items-center gap-[15px] relative">
        <div className="flex flex-wrap w-full max-w-[301px] items-center justify-center gap-[1px_3px] relative">
          <p className="relative w-fit mt-[-1.00px] font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] whitespace-nowrap [font-style:var(--paragraphe-1-font-style)]">
            Vous avez un doute sur vos obligations ?
          </p>
        </div>

        <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f5f3f7]">
          <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Parler à un expert
          </span>
        </Button>
      </footer>
    </section>
  );
};
