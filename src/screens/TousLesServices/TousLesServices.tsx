import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/shared";
import { AllServicesSection } from "./sections/AllServicesSection";
import { AssuranceElementsSection } from "./sections/AssuranceElementsSection";
import { DiagnosticSection } from "./sections/DiagnosticSection";
import { FilterSection } from "./sections/FilterSection";
import { FooterSection } from "./sections/FooterSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { ProfessionalProfileSection } from "./sections/ProfessionalProfileSection";

const decorativeShapes = [
  {
    top: "top-[1829px]",
    left: "left-[103px]",
    width: "w-[133px]",
    height: "h-[138px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[287px]",
    left: "left-[74px]",
    width: "w-[38px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-8",
    left: "left-[365px]",
    width: "w-[102px]",
    height: "h-[138px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-0.5",
    left: "left-[407px]",
    width: "w-[60px]",
    height: "h-[83px]",
    src: "/forme-d-corative-6.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1227px]",
    left: "left-[74px]",
    width: "w-[73px]",
    height: "h-[138px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[922px]",
    left: "left-[407px]",
    width: "w-[60px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1578px]",
    left: "left-[393px]",
    width: "w-[74px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1771px]",
    left: "left-[148px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-7.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2136px]",
    left: "left-[417px]",
    width: "w-[50px]",
    height: "h-[83px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
];

export const TousLesServices = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_150%] w-full min-w-[393px] min-h-[4091px] relative">
      <div className="absolute top-[244px] left-[-74px] w-[519px] h-[2222px]">
        {decorativeShapes.map((shape, index) => (
          <img
            key={`decorative-shape-${index}`}
            className={`absolute ${shape.width} ${shape.height} ${shape.top} ${shape.left}`}
            alt={shape.alt}
            src={shape.src}
          />
        ))}
      </div>

      <Header />

      <main className="relative w-full pb-[120px]">
        <AllServicesSection />
        <FilterSection />
        <DiagnosticSection />
        <ProfessionalProfileSection />
        <NewsletterSection />
        <FooterSection />
      </main>

      <BottomNavigation />
    </div>
  );
};
