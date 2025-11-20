import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/shared";
import { AssuranceElementsSection } from "./sections/AssuranceElementsSection";
import { ExploreParisSection } from "./sections/ExploreParisSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LatestPropertiesSection } from "./sections/LatestPropertiesSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { YourPartnerSection } from "./sections/YourPartnerSection";
import { YourQuoteSection } from "./sections/YourQuoteSection";

export const VilleMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_95%] w-full min-w-[393px] relative pb-28">
      <div className="absolute top-[187px] left-[-88px] w-[549px] h-[4311px] flex flex-col">
        <img
          className="ml-[88px] w-[64.75px] h-[138.35px] mt-[3.8px]"
          alt="Forme dcorative"
          src="/forme-d-corative-3.svg"
        />

        <img
          className="ml-[396.0px] w-[84.96px] h-[112.52px] mt-[156.1px]"
          alt="Forme dcorative"
          src="/forme-d-corative.svg"
        />

        <img
          className="ml-[88px] w-[58.11px] h-[83.36px] mt-[154.6px]"
          alt="Forme dcorative"
          src="/forme-d-corative-4.svg"
        />

        <img
          className="ml-[394.0px] w-[86.96px] h-[112.52px] mt-[243.6px]"
          alt="Forme dcorative"
          src="/forme-d-corative.svg"
        />

        <img
          className="ml-[88px] w-[56.75px] h-[138.35px] mt-[191.1px]"
          alt="Forme dcorative"
          src="/forme-d-corative-3.svg"
        />

        <img
          className="ml-[416.0px] w-[64.96px] h-[112.52px] mt-[318.1px]"
          alt="Forme dcorative"
          src="/forme-d-corative.svg"
        />

        <img
          className="ml-[88px] w-[56.11px] h-[83.36px] mt-[232.6px]"
          alt="Forme dcorative"
          src="/forme-d-corative-6.svg"
        />

        <img
          className="ml-[406.2px] w-[74.75px] h-[138.35px] mt-[528.1px]"
          alt="Forme dcorative"
          src="/forme-d-corative-3.svg"
        />

        <img
          className="ml-[88px] w-[56.11px] h-[83.36px] mt-[302.1px]"
          alt="Forme dcorative"
          src="/forme-d-corative-1.svg"
        />

        <img
          className="ml-[407.0px] w-[73.96px] h-[112.52px] mt-[288.6px]"
          alt="Forme dcorative"
          src="/forme-d-corative.svg"
        />

        <img
          className="ml-[88px] w-[54.75px] h-[138.35px] mt-[635.1px]"
          alt="Forme dcorative"
          src="/forme-d-corative-3.svg"
        />
      </div>

      <Header />

      <HeroSection />
      <ExploreParisSection />
      <AssuranceElementsSection />
      <YourPartnerSection />
      <OurServicesSection />
      <YourQuoteSection />
      <LatestPropertiesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
      <BottomNavigation />
    </div>
  );
};
