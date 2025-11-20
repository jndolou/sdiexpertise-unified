import React from "react";
import { Header } from "../../components/layout";
import { ActualitsPourLesSubsection } from "../../components/sections/ActualitsPourLesSubsection";
import { DcouvrirNotreSubsection } from "../../components/sections/DcouvrirNotreSubsection";
import { FooterSubsection } from "../../components/sections/FooterSubsection";
import { HeroSectionSubsection } from "../../components/sections/HeroSectionSubsection";
import { IlsNousFontConfianceSubsection } from "../../components/sections/IlsNousFontConfianceSubsection";
import { NewsletterSubsection } from "../../components/sections/NewsletterSubsection";
import { NosExpertisesSubsection } from "../../components/sections/NosExpertisesSubsection";
import { PourquoiCrerUnSubsection } from "../../components/sections/PourquoiCrerUnSubsection";
import { RencontronsNousSubsection } from "../../components/sections/RencontronsNousSubsection";
import { TabBarSubsection } from "../../components/sections/TabBarSubsection";
import { AssuranceElementsSection } from "../VilleMobile/sections/AssuranceElementsSection";

export const ProPage = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_55%] w-full min-w-[393px] relative">
      <img
        className="absolute top-[306px] left-[-79px] w-[557px] h-[5207px] pointer-events-none"
        alt="Formes décoratives"
      />

      <Header />

      <main className="relative w-full pt-[110px]">
        <HeroSectionSubsection />

        <DcouvrirNotreSubsection />
        <IlsNousFontConfianceSubsection />
        <NosExpertisesSubsection />
        <PourquoiCrerUnSubsection />
        <ActualitsPourLesSubsection />
        <RencontronsNousSubsection />
        <AssuranceElementsSection />
        <NewsletterSubsection />
        <FooterSubsection />
      </main>

      <TabBarSubsection />
    </div>
  );
};
