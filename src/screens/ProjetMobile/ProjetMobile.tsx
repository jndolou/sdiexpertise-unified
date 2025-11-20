import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/shared";
import { AboutUsSection } from "./sections/AboutUsSection";
import { AssuranceElementsSection } from "./sections/AssuranceElementsSection";
import { FooterSection } from "./sections/FooterSection";
import { KeyInformationSection } from "./sections/KeyInformationSection";
import { NewsSection } from "./sections/NewsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { OurSimulatorsSection } from "./sections/OurSimulatorsSection";
import { RegulationsSection } from "./sections/RegulationsSection";

export const ProjetMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_30%] w-full min-w-[393px] min-h-[6191px] relative">
      <img
        className="absolute top-[191px] left-0 w-[393px] h-[6000px]"
        alt="Formes dcoratives"
        src="/formes-d-coratives.png"
      />

      <Header />

      <div className="pt-[110px]">
        <KeyInformationSection />
      </div>
      <AboutUsSection />
      <AssuranceElementsSection />
      <RegulationsSection />
      <NewsSection />
      <OurSimulatorsSection />
      <NewsletterSection />
      <FooterSection />
      <BottomNavigation />
    </div>
  );
};
