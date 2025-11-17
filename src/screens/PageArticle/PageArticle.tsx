import React from "react";
import { Button } from "../../components/ui/button";
import { AvisSection } from "./sections/AvisSection";
import { ChiffresClesSection } from "./sections/ChiffresClesSection";
import { CitationSection } from "./sections/CitationSection";
import { ContenuSection } from "./sections/ContenuSection";
import { ContenuWrapperSection } from "./sections/ContenuWrapperSection";
import { DernieresEvolutionsSection } from "./sections/DernieresEvolutionsSection";
import { EnBrefSection } from "./sections/EnBrefSection";
import { FooterSection } from "./sections/FooterSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { SourcesReferencesSection } from "./sections/SourcesReferencesSection";
import { TabBarSection } from "./sections/TabBarSection";

const decorativeShapes = [
  {
    top: "top-[322px]",
    left: "left-[108px]",
    width: "w-[33px]",
    height: "h-28",
    src: "/forme-d-corative-5.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1077px]",
    left: "left-[474px]",
    width: "w-[27px]",
    height: "h-[138px]",
    src: "/forme-d-corative-4.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2176px]",
    left: "left-[433px]",
    width: "w-[68px]",
    height: "h-[82px]",
    src: "/forme-d-corative-7.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2399px]",
    left: "left-[108px]",
    width: "w-[35px]",
    height: "h-[138px]",
    src: "/forme-d-corative-4.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[3093px]",
    left: "left-[436px]",
    width: "w-[65px]",
    height: "h-[111px]",
    src: "/forme-d-corative-10.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[3649px]",
    left: "left-[108px]",
    width: "w-12",
    height: "h-[83px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[-11676px]",
    left: "left-[-5160px]",
    width: "w-[120px]",
    height: "h-[121px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[-11676px]",
    left: "left-[-5160px]",
    width: "w-[153px]",
    height: "h-[146px]",
    src: "/forme-d-corative-4.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[-11676px]",
    left: "left-[-5160px]",
    width: "w-[88px]",
    height: "h-[88px]",
    src: "/forme-d-corative-11.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[-11676px]",
    left: "left-[-5160px]",
    width: "w-[120px]",
    height: "h-[121px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
];

const additionalShapes = [
  {
    top: "top-[26px]",
    left: "left-[334px]",
    width: "w-[167px]",
    height: "h-[200px]",
    className: "rounded-[34px] object-cover",
    src: "/polygon-3.png",
    alt: "Polygon",
  },
  {
    top: "top-[1656px]",
    left: "left-[150px]",
    width: "w-[135px]",
    height: "h-[149px]",
    src: "/forme-d-corative-9.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-0.5",
    left: "left-[405px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1622px]",
    left: "left-[189px]",
    width: "w-[88px]",
    height: "h-[90px]",
    src: "/forme-d-corative-8.svg",
    alt: "Forme dcorative",
  },
];

export const PageArticle = (): JSX.Element => {
  return (
    <main className="overflow-hidden [background:url(..//--v4-1-0-page-article-de-blog.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-[5525px] relative">
      <div className="absolute top-[278px] left-[-108px] w-[617px] h-[8349px] pointer-events-none">
        {decorativeShapes.map((shape, index) => (
          <img
            key={`decorative-${index}`}
            className={`absolute ${shape.top} ${shape.left} ${shape.width} ${shape.height}`}
            alt={shape.alt}
            src={shape.src}
          />
        ))}

        {additionalShapes.map((shape, index) => (
          <img
            key={`additional-${index}`}
            className={`absolute ${shape.top} ${shape.left} ${shape.width} ${shape.height} ${shape.className || ""}`}
            alt={shape.alt}
            src={shape.src}
          />
        ))}
      </div>

      <header className="flex w-[395px] items-center justify-between pt-[50px] pb-4 px-4 fixed -top-px -left-px rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none z-50">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-[170px] h-8 object-cover"
            alt="Logo horizontal"
            src="/logo-horizontal-condense--violet-fonce--2x-1.png"
          />
        </div>

        <nav className="flex items-center justify-end gap-2 relative flex-1 grow">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-2 rounded-[62px]"
          >
            <img className="relative w-5 h-5" alt="Person" src="/person.svg" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-2 rounded-[62px]"
          >
            <img className="relative w-5 h-5" alt="Cart" src="/cart-1.svg" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 p-2 bg-[#faf8fc] rounded-[62px] shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb]"
          >
            <img
              className="relative w-6 h-6"
              alt="Ellipsis horizontal"
              src="/ellipsis-horizontal.svg"
            />
          </Button>
        </nav>
      </header>

      <TabBarSection />
      <DernieresEvolutionsSection />
      <EnBrefSection />
      <ContenuWrapperSection />
      <CitationSection />
      <ContenuSection />
      <ChiffresClesSection />
      <AvisSection />
      <SourcesReferencesSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
};
