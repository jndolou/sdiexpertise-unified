import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/shared";
import { ActualitsPourLesSubsection } from "../../components/sections/ActualitsPourLesSubsection";
import { CeQueDisentNosSubsection } from "../../components/sections/CeQueDisentNosSubsection";
import { DcouvrirNotreSubsection } from "../../components/sections/DcouvrirNotreSubsection";
import { FooterSubsection } from "../../components/sections/FooterSubsection";
import { HeroSectionSubsection } from "../../components/sections/HeroSectionSubsection";
import { JeLoueJeVendLaSubsection } from "../../components/sections/JeLoueJeVendLaSubsection";
import { LmentsDeRassuranceSubsection } from "../../components/sections/LmentsDeRassuranceSubsection";
import { NewsletterSubsection } from "../../components/sections/NewsletterSubsection";
import { NosSubsection } from "../../components/sections/NosSubsection";
import { NosWrapperSubsection } from "../../components/sections/NosWrapperSubsection";
import { VotreDevisEnSubsection } from "../../components/sections/VotreDevisEnSubsection";
import { VotreProjetSubsection } from "../../components/sections/VotreProjetSubsection";

export const AccueilMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_95%] w-full min-w-[393px] relative">
      <img
        className="absolute top-[306px] left-[-79px] w-[557px] h-[5207px] pointer-events-none"
        alt="Formes décoratives"
      />

      <Header />

      <main className="relative w-full pt-[110px]">
        <HeroSectionSubsection />

        <JeLoueJeVendLaSubsection />
        <LmentsDeRassuranceSubsection />
        <VotreProjetSubsection />
        <ActualitsPourLesSubsection />
        <NosWrapperSubsection />
        <DcouvrirNotreSubsection />
        <NosSubsection />
        <VotreDevisEnSubsection />
        <CeQueDisentNosSubsection />
        <NewsletterSubsection />
        <FooterSubsection />
      </main>

      <BottomNavigation />
    </div>
  );
};
