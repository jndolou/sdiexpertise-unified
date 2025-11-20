import React from "react";
import { Header } from "../../components/layout";
import { ActualitsPourLesSubsection } from "../../components/sections/ActualitsPourLesSubsection";
import { FooterSubsection } from "../../components/sections/FooterSubsection";
import { HeroSectionSubsection } from "../../components/sections/HeroSectionSubsection";
import { IlsNousFontConfianceSubsection } from "../../components/sections/IlsNousFontConfianceSubsection";
import { LmentsDeRassuranceSubsection } from "../../components/sections/LmentsDeRassuranceSubsection";
import { NewsletterSubsection } from "../../components/sections/NewsletterSubsection";
import { NosWrapperSubsection } from "../../components/sections/NosWrapperSubsection";
import { TabBarSubsection } from "../../components/sections/TabBarSubsection";
import { VotreDevisEnSubsection } from "../../components/sections/VotreDevisEnSubsection";

export const MetierMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_30%] w-full min-w-[393px] relative">
      <img
        className="absolute top-[306px] left-[-79px] w-[557px] h-[5207px] pointer-events-none"
        alt="Formes décoratives"
      />

      <Header />

      <main className="relative w-full pt-[110px]">
        <HeroSectionSubsection />

        <LmentsDeRassuranceSubsection />
        <NosWrapperSubsection />
        <VotreDevisEnSubsection />
        <IlsNousFontConfianceSubsection />
        <ActualitsPourLesSubsection title="Actualités pour les professionnels de l'immobilier" />
        <NewsletterSubsection />
        <FooterSubsection />
      </main>

      <TabBarSubsection />
    </div>
  );
};
