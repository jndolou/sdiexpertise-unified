import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

const newsArticles = [
  {
    id: 1,
    backgroundImage: "url(..//frame-374-3.png)",
    tags: ["Vendre", "Plomp"],
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
  {
    id: 2,
    backgroundImage: "url(..//frame-375-3.png)",
    tags: ["Vendre", "Plomp"],
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
  {
    id: 3,
    backgroundImage: "url(..//frame-376.png)",
    tags: ["Immobilier"],
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
];

export const NewsHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-[15px]">
          <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Les articles à la une
          </h2>

          <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b]">Nos contenus les plus</span>
            <span className="text-[#7e3287]"> utiles</span>
            <span className="text-[#1c1b1b]"> pour bien vendre.</span>
          </p>
        </header>

        <ScrollArea className="w-full">
          <div className="flex gap-3.5 pb-4">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="relative w-[220px] h-[415px] rounded-2xl overflow-hidden border-none flex-shrink-0"
                style={{
                  background: `${article.backgroundImage} 50% 50% / cover`,
                }}
              >
                <CardContent className="p-0 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-1 p-3">
                    {article.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="h-auto bg-violet-clair rounded-[25px] shadow-[inset_0px_-1.85px_1.85px_#a271ff] px-1.5 py-1 border-none hover:bg-violet-clair"
                      >
                        <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-white text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] [font-style:var(--tags-mobile-font-style)]">
                          {tag}
                        </span>
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3.5 pt-[15px] pb-2.5 px-2.5 m-2 bg-[#ffffffcc] rounded-2xl">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {article.title}
                      </h3>

                      <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[5px]">
                      <div className="[font-family:'Pecita-Book',Helvetica] font-normal text-dark text-sm tracking-[0] leading-[16.8px]">
                        {article.author}
                      </div>

                      <div className="flex flex-col w-[85px] h-[31px] items-center justify-center gap-2 p-4 rounded-md overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(31,1,66,1)_37%,rgba(30,1,67,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
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
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
