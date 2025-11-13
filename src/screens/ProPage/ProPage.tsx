import React from "react";
import { Header } from "../../components/layout";
import { ActualitsPourLesSubsection } from "../../components/sections/ActualitsPourLesSubsection";
import { CeQueDisentNosSubsection } from "../../components/sections/CeQueDisentNosSubsection";
import { DcouvrirNotreSubsection } from "../../components/sections/DcouvrirNotreSubsection";
import { FooterSubsection } from "../../components/sections/FooterSubsection";
import { HeroSectionSubsection } from "../../components/sections/HeroSectionSubsection";
import { NewsletterSubsection } from "../../components/sections/NewsletterSubsection";
import { NosSubsection } from "../../components/sections/NosSubsection";
import { NosWrapperSubsection } from "../../components/sections/NosWrapperSubsection";
import { TabBarSubsection } from "../../components/sections/TabBarSubsection";
import { VotreDevisEnSubsection } from "../../components/sections/VotreDevisEnSubsection";
import { VotreProjetSubsection } from "../../components/sections/VotreProjetSubsection";

export const ProPage = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] relative">
      <img
        className="absolute top-[306px] left-[-79px] w-[557px] h-[5207px] pointer-events-none"
        alt="Formes décoratives"
      />

      <Header />

      <main className="relative w-full pt-[110px]">
        <HeroSectionSubsection />

        <DcouvrirNotreSubsection />
        <VotreProjetSubsection />
        <ActualitsPourLesSubsection />
        <NosWrapperSubsection />
        <NosSubsection />
        <VotreDevisEnSubsection />
        <CeQueDisentNosSubsection />
        <NewsletterSubsection />
        <FooterSubsection />
      </main>

      <TabBarSubsection />
    </div>
  );
};
