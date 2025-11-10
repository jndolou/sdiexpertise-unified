import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const articles = [
  {
    id: 1,
    tag: "Immobilier",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
  {
    id: 2,
    tag: "Immobilier",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
  {
    id: 3,
    tag: "Immobilier",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
];

export const ActualitsPourLesSubsection = ({ title = "Articles à la une" }: { title?: string }): JSX.Element => {
  return (
    <section className="flex items-start gap-2.5 pt-0 pb-[65px] px-4 w-full">
      <div className="flex flex-col items-start gap-8 w-full">
        <header className="flex flex-col items-start justify-center gap-[15px] w-full overflow-hidden">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            {title}
          </h2>

          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-base tracking-[0] leading-4">
            <span className="text-[#1c1b1b] leading-[0.1px]">
              Découvrez les
            </span>
            <span className="text-[#1e0142] leading-[0.1px]">&nbsp;</span>
            <span className="[font-family:'Pecita',Helvetica] text-[#7E3287] text-[23px] leading-[27.6px]">
              derniers
            </span>
            <span className="text-[#1e0143] leading-[20.8px]">&nbsp;</span>
            <span className="text-[#1c1b1b] leading-[0.1px]">
              articles de notre blog
            </span>
          </p>
        </header>

        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-start gap-3.5 pb-4">
            {articles.map((article) => (
              <article
                key={article.id}
                className="relative w-[220px] h-[415px] rounded-2xl overflow-hidden bg-cover bg-[50%_50%] flex-shrink-0"
              >
                <div className="flex flex-col w-[220px] h-4 items-start justify-center p-3 absolute top-2 left-0 overflow-hidden">
                  <Badge className="flex flex-col w-[57px] h-[18px] items-start justify-center gap-[15px] p-1.5 bg-violet-clair rounded-[25px] shadow-[inset_0px_-1.85px_1.85px_#a271ff] border-none hover:bg-violet-clair">
                    <span className="relative flex items-center justify-center w-[46px] h-auto font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-white text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
                      {article.tag}
                    </span>
                  </Badge>
                </div>

                <Card className="flex flex-col w-[204px] items-start gap-3.5 pt-[15px] pb-2.5 px-2.5 absolute top-[168px] left-2 bg-[#ffffffcc] rounded-2xl border-none">
                  <CardContent className="flex flex-col items-start justify-center gap-1.5 w-full p-0">
                    <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                      {article.title}
                    </h3>

                    <p className="w-full font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                      {article.excerpt}
                    </p>
                  </CardContent>

                  <div className="flex flex-col h-[51px] items-start gap-[5px] w-full">
                    <p className="w-fit [font-family:'Pecita-Book',Helvetica] font-normal text-dark text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                      {article.author}
                    </p>

                    <div className="flex w-[85px] h-[31px] items-center justify-center gap-2 p-4 rounded-md flex-col overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(31,1,66,1)_37%,rgba(30,1,67,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                      <div className="items-center justify-center inline-flex flex-col gap-0.5">
                        <time className="[font-family:'Pecita-Book',Helvetica] font-normal text-dark text-lg tracking-[0] leading-[21.6px]">
                          {article.date}
                        </time>
                      </div>
                    </div>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-12 items-center justify-center gap-2.5 w-full">
          <div className="flex flex-col items-end gap-2.5 w-full">
            <Button
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 hover:bg-[#f0eef4]"
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
