import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const newsArticles = [
  {
    id: 1,
    tag: "Immobilier",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    description:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
    backgroundImage: "url(..//frame-374.png)",
  },
  {
    id: 2,
    tag: "Immobilier",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    description:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
    backgroundImage: "url(..//frame-375.png)",
  },
  {
    id: 3,
    tag: "Immobilier",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    description:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
    backgroundImage: "url(..//frame-376.png)",
  },
];

export const NewsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start gap-2.5 pt-[60px] pb-[5px] px-4">
      <div className="flex flex-col w-full items-start gap-8">
        <header className="flex flex-col items-start justify-center gap-[15px] w-full overflow-hidden">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Actualités immo sur Argenteuil
          </h2>

          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-base tracking-[0] leading-4">
            <span className="text-[#1c1b1b] leading-[0.1px]">
              Découvrez les
            </span>
            <span className="text-[#1e0143] leading-[20.8px]">&nbsp;</span>
            <span className="text-[#1c1b1b] leading-[0.1px]">
              articles de notre{" "}
            </span>
            <span className="[font-family:'Pecita-Regular',Helvetica] text-[#7e3287] text-[23px] leading-[27.6px]">
              blog
            </span>
            <span className="text-[#1c1b1b] leading-[0.1px]">
              {" "}
              sur la ville d&apos;Argenteuil
            </span>
          </p>
        </header>

        <div className="flex w-full items-start gap-3.5 overflow-x-auto">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="flex-shrink-0 w-[220px] h-[415px] rounded-2xl overflow-hidden border-0 shadow-none"
              style={{
                background: `${article.backgroundImage} 50% 50% / cover`,
              }}
            >
              <CardContent className="relative w-full h-full p-0">
                <div className="flex flex-col w-full h-4 items-start justify-center p-3 absolute top-2 left-0 overflow-hidden">
                  <Badge className="flex flex-col w-[57px] h-[18px] items-start justify-center gap-[15px] p-1.5 bg-violet-clair rounded-[25px] shadow-[inset_0px_-1.85px_1.85px_#a271ff] border-0 hover:bg-violet-clair">
                    <span className="flex items-center justify-center w-[46px] h-auto font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-white text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
                      {article.tag}
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col w-[204px] h-[239px] items-start gap-3.5 pt-[15px] pb-2.5 px-2.5 absolute top-[168px] left-2 bg-[#ffffffcc] rounded-2xl">
                  <div className="flex flex-col items-start justify-center gap-1.5 w-full">
                    <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                      {article.title}
                    </h3>

                    <p className="w-full font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                      {article.description}
                    </p>
                  </div>

                  <div className="flex flex-col h-[51px] items-start gap-[5px] w-full">
                    <div className="w-fit [font-family:'Pecita-Book',Helvetica] font-normal text-dark text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                      {article.author}
                    </div>

                    <div className="flex w-[85px] h-[31px] items-center justify-center gap-2 p-4 rounded-md overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(31,1,66,1)_37%,rgba(30,1,67,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                      <div className="[font-family:'Pecita-Book',Helvetica] font-normal text-dark text-lg tracking-[0] leading-[21.6px]">
                        {article.date}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col h-12 items-center justify-center gap-2.5 w-full">
          <div className="flex flex-col items-end gap-2.5 w-full">
            <Button
              variant="ghost"
              className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]"
            >
              <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Tous les articles
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
