import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const regulationCards = [
  {
    title: "Diagnostics requis",
    description:
      "Certains diagnostics sont obligatoires : performance énergétique, matériaux à risque, sécurité des installations…",
    buttonText: "Voir les diagnostics concernés",
    iconType: "vector",
    iconSrc: "/vector-1.svg",
    iconClasses: "w-[34px] h-9",
  },
  {
    title: "Normes et évolutions",
    description:
      "De nouvelles obligations entrent en vigueur régulièrement : seuils DPE, interdictions de louer, durées de validité modifiées…",
    buttonText: "En savoir plus",
    iconType: "image",
    iconSrc: "/a-hand-drawn-lightning-bolt-symbol-is-depicted-in--2.png",
    iconClasses: "w-[52px] h-[52px] object-cover",
  },
  {
    title: "Sanctions en cas de non-conformité",
    description:
      "Litiges, amendes, blocage de vente : l'absence d'un diagnostic peut avoir des conséquences importantes.",
    buttonText: "Comment éviter les erreurs",
    iconType: "image",
    iconSrc: "/law-paper-1.png",
    iconClasses: "w-[43px] h-[43px] object-cover",
  },
];

export const RegulationsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 pt-10 pb-[23px] px-4 bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(175deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_14%,rgba(170,127,251,1)_75%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
      <header className="flex flex-col w-full max-w-[354px] items-center justify-center gap-[15px]">
        <h2 className="w-full max-w-[283px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
          Réglementations pour la vente de votre maison
        </h2>

        <p className="w-full max-w-[325px] [font-family:'Open_Sans',Helvetica] font-normal text-dark text-base text-center tracking-[0] leading-4">
          <span className="text-[#1c1b1b] leading-[0.1px]">
            Vendre en toute{" "}
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

      <div className="flex flex-col w-full max-w-[357px] items-center gap-3.5">
        {regulationCards.map((card, index) => (
          <div key={index} className="relative w-full pt-10">
            <div className="flex w-[86px] h-20 items-center justify-center absolute -top-0 left-1/2 -translate-x-1/2 z-10">
              <img
                className="absolute top-0 left-0 w-[86px] h-20"
                alt="Polygon"
                src="/polygon-8.svg"
              />
              <img
                className={`relative ${card.iconClasses} z-10`}
                alt={card.title}
                src={card.iconSrc}
              />
            </div>

            <Card
              className={`flex flex-col items-center justify-center gap-5 pt-[60px] pb-[25px] px-5 bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(${103 + index}deg,rgba(255,255,255,1)_${index === 0 ? "1" : "0"}%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_${71 + index * 3}%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
            >
              <CardContent className="flex flex-col items-center gap-5 p-0 w-full">
                <div className="flex flex-col items-center gap-[15px] w-full max-w-[317px]">
                  <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {card.title}
                  </h3>

                  <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2.5 w-full">
                  <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0edf5]">
                    <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                      {card.buttonText}
                    </span>
                    <ArrowRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <footer className="flex flex-col w-full max-w-[357px] items-center justify-center gap-[15px]">
        <div className="flex flex-wrap w-full max-w-[301px] items-center justify-center gap-[1px_3px]">
          <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] whitespace-nowrap [font-style:var(--paragraphe-1-font-style)]">
            Vous avez un doute sur vos obligations ?
          </p>
        </div>

        <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0edf5]">
          <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Parler à un expert
          </span>
        </Button>
      </footer>
    </section>
  );
};
