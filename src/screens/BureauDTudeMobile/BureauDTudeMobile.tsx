import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/shared";
import { BeReadySection } from "./sections/BeReadySection";
import { ClientCaseGuideSection } from "./sections/ClientCaseGuideSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { OurSupportSection } from "./sections/OurSupportSection";
import { RegulationsAndComplianceSection } from "./sections/RegulationsAndComplianceSection";
import { WhyTheseSection } from "./sections/WhyTheseSection";

const decorativeImages = [
  {
    top: "top-[507px]",
    left: "left-0",
    width: "w-[43px]",
    height: "h-[98px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[938px]",
    left: "left-[326px]",
    width: "w-[67px]",
    height: "h-[98px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1973px]",
    left: "left-[337px]",
    width: "w-14",
    height: "h-[98px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[4483px]",
    left: "left-[327px]",
    width: "w-[66px]",
    height: "h-[98px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[392px]",
    left: "left-[319px]",
    width: "w-[74px]",
    height: "h-[125px]",
    src: "/forme-d-corative-6.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1402px]",
    left: "left-0",
    width: "w-[59px]",
    height: "h-[125px]",
    src: "/forme-d-corative-6.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[3001px]",
    left: "left-[320px]",
    width: "w-[73px]",
    height: "h-[125px]",
    src: "/forme-d-corative-6.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[3691px]",
    left: "left-0",
    width: "w-[45px]",
    height: "h-[76px]",
    src: "/forme-d-corative-3.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2468px]",
    left: "left-0",
    width: "w-[45px]",
    height: "h-[76px]",
    src: "/forme-d-corative-8.svg",
    alt: "Forme dcorative",
  },
];

export const BureauDTudeMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_30%] w-full min-w-[393px] min-h-screen relative">
      <div className="absolute top-[382px] left-[-82px] w-[543px] h-[4211px] pointer-events-none">
        {decorativeImages.map((img, index) => (
          <img
            key={`decorative-${index}`}
            className={`absolute ${img.top} ${img.left} ${img.width} ${img.height}`}
            alt={img.alt}
            src={img.src}
          />
        ))}
      </div>

      <Header />

      <main className="relative w-full mt-[90px] pb-[120px]">
        <HeroSection />
        <WhyTheseSection />
        <RegulationsAndComplianceSection />
        <OurSupportSection />
        <ClientCaseGuideSection />
        <FeaturesSection />
        <BeReadySection />
        <NewsletterSection />
        <FooterSection />
      </main>

      <BottomNavigation />
    </div>
  );
};
