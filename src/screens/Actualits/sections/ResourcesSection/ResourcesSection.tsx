import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const resourcesData = [
  {
    image: "/frame-403-1.svg",
    badge: "Nouveau",
    title: "Guide du DPE",
    description: "Comprendre et réussir son DPE étape par étape",
    buttonImage: "/bouton-3.svg",
  },
  {
    image: "/frame-403-2.svg",
    badge: "Nouveau",
    title: "Checklist vent",
    description: "Checklist essentielle pour vendre votre logement",
    buttonImage: "/bouton-1.svg",
  },
  {
    image: "/frame-403.svg",
    badge: "Nouveau",
    title: "Tout comprendre sur l'amiante",
    description: "L'essentiel sur l'amiante avant une vente ou des travaux",
    buttonImage: "/bouton-2.svg",
  },
];

export const ResourcesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-0 pb-[60px] px-4 relative">
      <div className="flex flex-col items-start gap-8 relative w-full">
        <header className="flex flex-col items-start justify-center gap-[15px] relative w-full">
          <h2 className="relative w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Nos ressources
          </h2>

          <p className="relative max-w-[325px] font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-transparent text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              Guides, checklists et documents{" "}
            </span>
            <span className="font-paragraphe-1 text-[#7e3287] text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)]">
              utiles
            </span>
            <span className="text-[#7e3287] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              &nbsp;
            </span>
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              pour vos démarches immobilières.
            </span>
          </p>
        </header>

        <div className="flex items-start gap-[15px] overflow-x-auto w-full pb-4">
          {resourcesData.map((resource, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[222px] bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="flex flex-col items-start gap-[15px] p-4">
                <img
                  className="relative w-full h-auto"
                  alt={resource.title}
                  src={resource.image}
                />

                <div className="flex flex-col items-start gap-2 relative w-full">
                  <Badge className="inline-flex h-[18px] items-center justify-center gap-2 px-1.5 py-1.5 bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] border-none hover:bg-violet-clair">
                    <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] [font-style:var(--tags-mobile-font-style)]">
                      {resource.badge}
                    </span>
                  </Badge>

                  <h3 className="relative w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {resource.title}
                  </h3>

                  <p className="relative w-full [font-family:'Open_Sans',Helvetica] font-normal text-dark text-xs tracking-[0] leading-[14.4px]">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-end w-full">
                    <img
                      className="relative h-auto"
                      alt="Download button"
                      src={resource.buttonImage}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-end w-full">
          <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc] border-none h-auto">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              Voir nos ressources
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
