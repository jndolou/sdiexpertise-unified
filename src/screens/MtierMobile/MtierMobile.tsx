import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation, ExpertiseSection } from "../../components/shared";
import { ActualitsPourLesSubsection } from "./sections/ActualitsPourLesSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { IlsNousFontSubsection } from "./sections/IlsNousFontSubsection";
import { NewsletterSubsection } from "./sections/NewsletterSubsection";
import { NosSubsection } from "./sections/NosSubsection";
import { PourquoiCrerUnSubsection } from "./sections/PourquoiCrerUnSubsection";
import { ProgrammePartenaireSubsection } from "./sections/ProgrammePartenaireSubsection";
import { RencontronsNousSubsection } from "./sections/RencontronsNousSubsection";
import { RglementationEtSubsection } from "./sections/RglementationEtSubsection";
import { VotreDevisEnSubsection } from "./sections/VotreDevisEnSubsection";

const decorativeShapes = [
  {
    top: "top-[265px]",
    left: "left-[79px]",
    width: "w-[47px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-8",
    left: "left-[370px]",
    width: "w-[102px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-0.5",
    left: "left-[412px]",
    width: "w-[60px]",
    height: "h-[83px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[994px]",
    left: "left-[79px]",
    width: "w-16",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[648px]",
    left: "left-[295px]",
    width: "w-[104px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1715px]",
    left: "left-[113px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-14.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1288px]",
    left: "left-[326px]",
    width: "w-[104px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2356px]",
    left: "left-[79px]",
    width: "w-[91px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2878px]",
    left: "left-[386px]",
    width: "w-[86px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[3196px]",
    left: "left-[79px]",
    width: "w-[69px]",
    height: "h-[83px]",
    src: "/forme-d-corative-11.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[4307px]",
    left: "left-[79px]",
    width: "w-[62px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[4606px]",
    left: "left-[414px]",
    width: "w-[58px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[5121px]",
    left: "left-[389px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-7.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[5673px]",
    left: "left-[97px]",
    width: "w-[133px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[5624px]",
    left: "left-[163px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-18.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[6188px]",
    left: "left-[386px]",
    width: "w-[86px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[6627px]",
    left: "left-[79px]",
    width: "w-[68px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[7275px]",
    left: "left-[346px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-16.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[7951px]",
    left: "left-[79px]",
    width: "w-[60px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
];

export const MtierMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_55%] w-full min-w-[393px] min-h-[9586px] relative">
      <div className="absolute top-[306px] left-[-79px] w-[557px] h-[8068px]">
        {decorativeShapes.map((shape, index) => (
          <img
            key={`decorative-shape-${index}`}
            className={`absolute ${shape.top} ${shape.left} ${shape.width} ${shape.height}`}
            alt={shape.alt}
            src={shape.src}
          />
        ))}
      </div>

      <Header />

      <div className="pt-[106px]">
        <HeroSectionSubsection />
      </div>

      <section className="flex flex-col w-full items-center justify-end gap-[13px] px-4 py-8 overflow-hidden">
        <ExpertiseSection titleOnly showGoogleRating={false} showStats={false} />
      </section>

      <NosSubsection />
      <VotreDevisEnSubsection />
      <IlsNousFontSubsection />
      <RglementationEtSubsection />
      <ActualitsPourLesSubsection />
      <PourquoiCrerUnSubsection />
      <RencontronsNousSubsection />
      <ProgrammePartenaireSubsection />
      <NewsletterSubsection />
      <FooterSubsection />

      <BottomNavigation className="z-50" />
    </div>
  );
};
