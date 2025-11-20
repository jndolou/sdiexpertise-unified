import { ArrowLeftIcon, EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/layout/Header";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { DiagnosticDetailsSection } from "./sections/DiagnosticDetailsSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OverviewSection } from "./sections/OverviewSection";
import { PricingSection } from "./sections/PricingSection";
import { RecommendedPackSection } from "./sections/RecommendedPackSection";
import { SummarySection } from "./sections/SummarySection";

export const CommandePack = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_180%] w-full min-w-[393px] flex flex-col relative">
      <Header />
      <main className="flex flex-col w-full items-start gap-3 pt-[130px] pb-8 px-4">
        <nav className="flex w-full items-center justify-between gap-4 relative">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto w-auto p-0 hover:bg-transparent"
          >
            <ArrowLeftIcon className="w-6 h-6 text-[#5d3ca4]" />
          </Button>

          <Button
            variant="link"
            className="h-auto flex items-center gap-1.5 px-0 py-3 text-[#5d3ca4] text-base font-medium [font-family:'Ubuntu',Helvetica] underline"
          >
            <EyeIcon className="w-4 h-4" />
            Aperçu du devis
          </Button>
        </nav>

        <DiagnosticDetailsSection />
        <PricingSection />
        <RecommendedPackSection />
        <ActionButtonsSection />
      </main>

    </div>
  );
};
