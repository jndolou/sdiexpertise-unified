import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/shared";
import { ClientCaseGuideSection } from "./sections/ClientCaseGuideSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GetReadySection } from "./sections/GetReadySection";
import { HeroSection } from "./sections/HeroSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { OurSupportSection } from "./sections/OurSupportSection";
import { RegulationsSection } from "./sections/RegulationsSection";
import { WhyThisSection } from "./sections/WhyThisSection";

const decorativeShapes = [
  {
    top: "top-[118px]",
    left: "left-[79px]",
    width: "w-[47px]",
    height: "h-[113px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-1",
    left: "left-[397px]",
    width: "w-[75px]",
    height: "h-[138px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[893px]",
    left: "left-[79px]",
    width: "w-16",
    height: "h-[138px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[547px]",
    left: "left-[407px]",
    width: "w-[65px]",
    height: "h-[113px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1679px]",
    left: "left-[79px]",
    width: "w-[52px]",
    height: "h-[83px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1187px]",
    left: "left-[399px]",
    width: "w-[73px]",
    height: "h-[113px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2304px]",
    left: "left-[79px]",
    width: "w-[69px]",
    height: "h-[138px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2859px]",
    left: "left-[387px]",
    width: "w-[85px]",
    height: "h-[113px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[3522px]",
    left: "left-[79px]",
    width: "w-[46px]",
    height: "h-[83px]",
    src: "/forme-d-corative-13.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[4347px]",
    left: "left-[79px]",
    width: "w-[62px]",
    height: "h-[113px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[4715px]",
    left: "left-[414px]",
    width: "w-[58px]",
    height: "h-[138px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
];

export const Diagnostics = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_95%] w-full min-w-[393px] relative">
      <div className="absolute top-[407px] left-[-79px] w-[557px] h-[7967px] pointer-events-none">
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

      <main className="relative w-full pb-[120px]">
        <HeroSection />
        <WhyThisSection />
        <RegulationsSection />
        <OurSupportSection />
        <ClientCaseGuideSection />
        <FeaturesSection />
        <GetReadySection />
        <NewsletterSection />
        <FooterSection />
      </main>

      <BottomNavigation />
    </div>
  );
};
