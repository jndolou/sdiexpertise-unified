import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface Feature {
  title: string;
  description: string;
}

interface WhyCreateProSectionProps {
  title?: string;
  subtitle?: React.ReactNode;
  features?: Feature[];
  imageSrc?: string;
  buttonText?: string;
  promoText?: string;
  onButtonClick?: () => void;
}

const defaultFeatures: Feature[] = [
  {
    title: "Un tableau de bord ultra-intuitif",
    description: "Suivez tous vos diagnostics en un clin d'oeil",
  },
  {
    title: "Commandez en 1 clic",
    description: "Plus besoin de remplir des formulaires à chaque fois.",
  },
  {
    title: "Gestion multi-biens & multi-projets",
    description: "Suivi des échéances et accès aux rapports en ligne.",
  },
  {
    title: "Accès à des tarifs préférentiels",
    description: "Ne manquez plus aucune échéance.",
  },
  {
    title: "Rappel automatique des obligations légales",
    description: "Ne manquez plus aucune échéance.",
  },
];

const defaultSubtitle = (
  <>
    <span className="text-[#1c1b1b] leading-[0.1px]">Un outil pensé pour les</span>
    <span className="text-[#1c1b1b] leading-[20.8px]">&nbsp;</span>
    <span className="[font-family:'Pecita-Regular',Helvetica] text-[#7e3287] text-[23px] leading-[27.6px]">
      professionnels
    </span>
    <span className="text-[#1c1b1b] leading-[20.8px]">&nbsp;</span>
    <span className="text-[#1c1b1b] leading-[0.1px]">
      qui veulent gagner du temps et réduire leurs coûts.
    </span>
  </>
);

export const WhyCreateProSection = ({
  title = "Pourquoi créer un espace pro",
  subtitle = defaultSubtitle,
  features = defaultFeatures,
  imageSrc,
  buttonText = "Je crée mon compte en 1 minute",
  promoText = "-10% sur votre 1ère commande pour toute inscription aujourd'hui !",
  onButtonClick,
}: WhyCreateProSectionProps): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 pt-[60px] pb-[5px] px-4 relative">
      <div className="flex flex-col w-full items-start gap-8 relative">
        <header className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
          <h2 className="relative w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            {title}
          </h2>

          <p className="relative w-full [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
            {subtitle}
          </p>
        </header>

        <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto] w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="gap-2.5 p-2 self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] flex items-start relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(138deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_34%,rgba(170,127,251,1)_66%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[19px] h-[19px]"
                    alt="Checkmark"
                    src="/checkmark.svg"
                  />
                </div>

                <div className="flex flex-col items-start gap-1 relative flex-1 grow">
                  <h3 className="relative self-stretch font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {feature.title}
                  </h3>

                  <p className="relative self-stretch font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {imageSrc && (
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] shadow-[0px_4px_11px_#8160d369]">
            <img className="relative w-full h-[185px]" alt="Pro space preview" src={imageSrc} />
          </div>
        )}

        <div className="flex flex-col items-end justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Button
            onClick={onButtonClick}
            className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0edf5] h-auto"
          >
            <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              {buttonText}
            </span>
          </Button>

          {promoText && (
            <Badge className="flex w-[216px] h-11 items-center justify-center gap-2.5 px-[13px] py-[3px] relative bg-lila rounded-[9px] hover:bg-lila">
              <span className="relative w-[198px] h-[26px] ml-[-4.00px] mr-[-4.00px] [font-family:'Ubuntu',Helvetica] font-normal text-transparent text-xs text-right tracking-[0] leading-3">
                <span className="font-medium text-[#1c1b1b] leading-[17px]">-10%</span>
                <span className="font-medium text-[#875edb] leading-[17px]">&nbsp;</span>
                <span className="font-medium text-[#7e3287] leading-[17px]">{promoText}</span>
              </span>
            </Badge>
          )}
        </div>
      </div>
    </section>
  );
};
