import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation, NewsletterSection, Footer } from "../../components/shared";
import { AvisSection } from "./sections/AvisSection";
import { ChiffresClesSection } from "./sections/ChiffresClesSection";
import { CitationSection } from "./sections/CitationSection";
import { ContenuSection } from "./sections/ContenuSection";
import { ContenuWrapperSection } from "./sections/ContenuWrapperSection";
import { DernieresEvolutionsSection } from "./sections/DernieresEvolutionsSection";
import { EnBrefSection } from "./sections/EnBrefSection";
import { SourcesReferencesSection } from "./sections/SourcesReferencesSection";

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
    <main className="overflow-hidden [background:url(/grid.jpeg)_center_/_150%] w-full min-w-[393px] min-h-[5525px] relative">
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

      <Header />

      <BottomNavigation />
      <DernieresEvolutionsSection />
      <EnBrefSection />
      <ContenuWrapperSection />
      <CitationSection />
      <ContenuSection />
      <ChiffresClesSection />
      <AvisSection />
      <SourcesReferencesSection />
      <NewsletterSection useIconButton={false} />
      <Footer logoSrc="/logo-principal-violet-7c5ed6-2x-1.png" />
    </main>
  );
};
