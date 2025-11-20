import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const articlesData = [
  {
    id: 1,
    image: "/frame-374.png",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    tags: ["Vendre", "Plomp"],
    date: "25/04/25",
  },
  {
    id: 2,
    image: "/frame-376.png",
    title: "Diag Bpifrance",
    tags: ["Vendre", "Amiante"],
    date: "22/04/25",
  },
  {
    id: 3,
    image: "/frame-374-1.png",
    title: "Quel est l'impact du DPE pour les hôtes Airbnb ?",
    tags: ["Vendre", "Plomp"],
    date: "21/04/25",
  },
  {
    id: 4,
    image: "/frame-374-3.png",
    title: "Prêt à Taux Zéro : Les changements en 2024",
    tags: ["Vendre", "Amiante"],
    date: "2O/04/25",
  },
  {
    id: 5,
    image: "/frame-376.png",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    tags: ["Vendre", "Plomp"],
    date: "20/04/25",
  },
  {
    id: 6,
    image: "/frame-375-2.png",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    tags: ["Vendre", "Amiante"],
    date: "20/04/25",
  },
];

const groupedArticles = [
  [articlesData[0], articlesData[1]],
  [articlesData[2], articlesData[3]],
  [articlesData[4], articlesData[5]],
];

export const NewsForYouSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[65px] pb-0 px-4 relative">
      <div className="flex-col w-full gap-8 relative flex items-start">
        <header className="flex flex-col items-start justify-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-full h-7 mt-[-1.00px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] whitespace-nowrap [font-style:var(--titre-2-mobile-font-style)]">
            Tous les articles
          </h2>
        </header>

        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[84px] font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            Trier par :
          </div>

          <div className="flex flex-col flex-1 items-start gap-0.5 relative">
            <Select defaultValue="recent">
              <SelectTrigger className="w-full h-11 gap-2 pl-3 pr-2 py-0 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <SelectValue>
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5">
                    Le plus récent
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Le plus récent</SelectItem>
                <SelectItem value="oldest">Le plus ancien</SelectItem>
                <SelectItem value="popular">Le plus populaire</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {groupedArticles.map((articlePair, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex flex-col items-start gap-2.5 relative self-stretch w-full"
          >
            <div className="inline-flex items-start gap-3.5 relative flex-[0_0_auto]">
              {articlePair.map((article, colIndex) => (
                <Card
                  key={article.id}
                  className="relative w-[174px] h-[289px] rounded-2xl overflow-hidden border-none shadow-none"
                  style={{
                    background: `url(${article.image}) 50% 50% / cover`,
                  }}
                >
                  <CardContent className="p-0 h-full relative">
                    <div className="inline-flex items-center gap-1 absolute top-[7px] left-3">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge
                          key={`${article.id}-tag-${tagIndex}`}
                          className="h-[18px] px-1.5 py-1.5 bg-violet-clair rounded-[25px] shadow-[inset_0px_-1.85px_1.85px_#a271ff] border-none hover:bg-violet-clair"
                        >
                          <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-white text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] [font-style:var(--tags-mobile-font-style)]">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>

                    <div
                      className="absolute left-1 bg-[#ffffffcc] rounded-2xl px-2.5"
                      style={{
                        bottom:
                          colIndex === 0 && rowIndex === 0
                            ? "4px"
                            : colIndex === 1 && rowIndex === 0
                              ? "4px"
                              : colIndex === 0 && rowIndex === 1
                                ? "4px"
                                : colIndex === 1 && rowIndex === 1
                                  ? "4px"
                                  : colIndex === 0 && rowIndex === 2
                                    ? "4px"
                                    : "4px",
                        paddingTop:
                          colIndex === 1 && rowIndex === 0
                            ? "6px"
                            : colIndex === 0 && rowIndex === 2
                              ? "6px"
                              : colIndex === 1 && rowIndex === 2
                                ? "6px"
                                : "3px",
                        paddingBottom:
                          colIndex === 1 && rowIndex === 0
                            ? "0px"
                            : colIndex === 1 && rowIndex === 2
                              ? "10px"
                              : "6px",
                        width: "166px",
                        minHeight:
                          colIndex === 1 && rowIndex === 0
                            ? "51px"
                            : colIndex === 0 && rowIndex === 1
                              ? "80px"
                              : colIndex === 1 && rowIndex === 1
                                ? "104px"
                                : "129px",
                      }}
                    >
                      <div className="flex flex-col items-start gap-1.5">
                        <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex h-[29px] items-start gap-[105px] relative self-stretch w-full">
              {articlePair.map((article) => (
                <div
                  key={`date-${article.id}`}
                  className="flex flex-col w-[85px] h-[31px] items-center justify-center gap-2 p-4 relative rounded-md overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(31,1,66,1)_37%,rgba(30,1,67,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <div className="inline-flex flex-col items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                    <div className="relative [font-family:'Pecita-Book',Helvetica] font-normal text-dark text-lg tracking-[0] leading-[21.6px]">
                      {article.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
