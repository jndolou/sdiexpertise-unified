import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "/frame-357.svg",
    title: "Cumulez des points à chaque commande",
    description:
      "Plus vous commandez, plus vous progressez. Convertissez vos points en remises ou cadeaux.",
    iconBg: "/polygon-5.svg",
    iconMain: "/frame-357.svg",
  },
  {
    icon: "/vector-1.svg",
    title: 'Soyez le "Partenaire du mois"',
    description:
      "Classement mensuel. Mettez en valeur votre entreprise et gagnez des prix exclusifs.",
    iconBg: "/polygon-5.svg",
    iconMain: "/vector-1.svg",
  },
  {
    icon: "/vector-3.svg",
    title: "Statistiques avancées & soutien dédié",
    description:
      "Accédez à vos performances en temps réel. Un conseiller vous accompagne dans votre évolution.",
    iconBg: "/polygon-5.svg",
    iconMain: "/vector-3.svg",
  },
];

export const ProgrammePartenaireSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 pt-10 pb-[23px] px-4 bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(175deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_75%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
      <header className="flex flex-col w-full max-w-[354px] items-center justify-center gap-[15px]">
        <h2 className="w-full max-w-[283px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
          Programme partenaire
        </h2>

        <p className="w-full max-w-[325px] [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-4">
          <span className="text-[#1c1b1b] leading-[0.1px]">
            Récompensez votre
          </span>
          <span className="text-[#7e3387] leading-[0.1px]">&nbsp;</span>
          <span className="[font-family:'Pecita-Regular',Helvetica] text-[#7e3287] text-[23px] leading-[27.6px]">
            fidélité
          </span>
          <span className="text-[#1c1b1b] leading-[0.1px]">
            . Gagnez des points, des avantages et de la visibilité.
          </span>
        </p>
      </header>

      <div className="flex flex-col w-full max-w-[357px] items-start justify-center gap-3.5">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="w-full bg-transparent border-none shadow-none"
          >
            <CardContent className="p-0 relative w-full">
              <div className="flex w-[86px] h-20 items-center justify-center gap-2.5 mx-auto mb-[-40px] relative z-10">
                <img
                  className="absolute top-px left-1.5 w-[74px] h-[78px]"
                  alt="Polygon"
                  src={card.iconBg}
                />
                <img
                  className={`relative ${index === 0 ? "w-[22px] h-[30px]" : index === 1 ? "w-[22px] h-[30px]" : "w-[30px] h-[26px]"}`}
                  alt="Icon"
                  src={card.iconMain}
                />
              </div>

              <div className="flex flex-col w-full items-center gap-5 pt-[30px] pb-[25px] px-5 bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
                <div className="inline-flex flex-col items-start gap-[15px]">
                  <h3 className="w-full max-w-[317px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {card.title}
                  </h3>

                  <p className="w-full max-w-[317px] font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {card.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <footer className="flex flex-col w-full max-w-[357px] items-center gap-[15px]">
        <div className="flex items-center justify-center gap-[17px] w-full">
          <Button
            variant="ghost"
            className="h-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
          >
            <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              En savoir plus
            </span>
            <ArrowRightIcon className="w-6 h-6 text-[#5d3ca4]" />
          </Button>

          <Button className="h-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              Devenir partenaire
            </span>
          </Button>
        </div>
      </footer>
    </section>
  );
};
