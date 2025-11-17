import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface Article {
  id?: number | string;
  tag?: string;
  tags?: string[];
  title: string;
  excerpt?: string;
  description?: string;
  author: string;
  date: string;
  backgroundImage?: string;
}

interface FeaturedArticlesProps {
  title?: string;
  subtitle?: string;
  subtitleHighlight?: string;
  subtitleEnd?: string;
  articles?: Article[];
  showButton?: boolean;
  buttonText?: string;
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const defaultArticles: Article[] = [
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

export const FeaturedArticles = ({
  title = "Articles à la une",
  subtitle = "Découvrez les",
  subtitleHighlight = "derniers",
  subtitleEnd = "articles de notre blog",
  articles = defaultArticles,
  showButton = true,
  buttonText = "Tous les articles",
  className = "",
  paddingTop = "pt-0",
  paddingBottom = "pb-[65px]",
}: FeaturedArticlesProps): JSX.Element => {
  return (
    <section
      className={`flex items-start gap-2.5 ${paddingTop} ${paddingBottom} px-4 w-full ${className}`}
    >
      <div className="flex flex-col items-start gap-8 w-full">
        <header className="flex flex-col items-start justify-center gap-[15px] w-full overflow-hidden">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            {title}
          </h2>

          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-base tracking-[0] leading-4">
            <span className="text-[#1c1b1b] leading-[0.1px]">{subtitle}</span>
            <span className="text-[#1e0142] leading-[0.1px]">&nbsp;</span>
            <span className="[font-family:'Pecita',Helvetica] text-[#7e3287] text-[23px] leading-[27.6px]">
              {subtitleHighlight}
            </span>
            <span className="text-[#1e0143] leading-[20.8px]">&nbsp;</span>
            <span className="text-[#1c1b1b] leading-[0.1px]">
              {subtitleEnd}
            </span>
          </p>
        </header>

        <ScrollArea className="w-full">
          <div className="flex items-start gap-3.5 pb-4">
            {articles.map((article, index) => {
              const articleKey = article.id || index;
              const articleTags = article.tags || (article.tag ? [article.tag] : []);
              const articleExcerpt = article.excerpt || article.description || "";

              return (
                <Card
                  key={articleKey}
                  className="relative w-[220px] h-[415px] flex-shrink-0 rounded-2xl overflow-hidden bg-cover bg-[50%_50%] border-0"
                  style={
                    article.backgroundImage
                      ? { background: `${article.backgroundImage} 50% 50% / cover` }
                      : undefined
                  }
                >
                  <CardContent className="p-0 h-full">
                    {articleTags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1 p-3 absolute top-2 left-0 overflow-hidden z-10">
                        {articleTags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="flex items-center justify-center h-[18px] px-1.5 py-1 bg-violet-clair rounded-[25px] shadow-[inset_0px_-1.85px_1.85px_#a271ff] border-0 hover:bg-violet-clair"
                          >
                            <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-white text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] [font-style:var(--tags-mobile-font-style)]">
                              {tag}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-col w-[204px] items-start gap-3.5 pt-[15px] pb-2.5 px-2.5 absolute top-[168px] left-2 bg-[#ffffffcc] rounded-2xl">
                      <div className="flex flex-col items-start justify-center gap-1.5 w-full">
                        <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                          {article.title}
                        </h3>

                        <p className="w-full font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                          {articleExcerpt}
                        </p>
                      </div>

                      <div className="flex flex-col h-[51px] items-start gap-[5px] w-full">
                        <div className="[font-family:'Pecita-Book',Helvetica] font-normal text-dark text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                          {article.author}
                        </div>

                        <div className="flex w-[85px] h-[31px] items-center justify-center gap-2 px-4 py-3 rounded-md overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(31,1,66,1)_37%,rgba(30,1,67,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                          <span className="[font-family:'Pecita-Book',Helvetica] font-normal text-dark text-lg tracking-[0] leading-[21.6px]">
                            {article.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {showButton && (
          <div className="flex flex-col h-12 items-center justify-center gap-2.5 w-full">
            <div className="flex flex-col items-end gap-2.5 w-full">
              <Link to="/services">
                <Button className="h-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f5f3f7] border-0">
                  <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                    {buttonText}
                  </span>
                  <ArrowRightIcon className="w-6 h-6 text-[#1c1b1b]" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
