import { ArrowLeftIcon, EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { DiagnosticDetailsSection } from "./sections/DiagnosticDetailsSection";
import { PromoCodeSection } from "./sections/PromoCodeSection";
import { HeaderNavSection } from "./sections/HeaderNavSection";
import { PromoInputSection } from "./sections/PromoInputSection";

export const CommandePack = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[#f3f1f7] w-full min-w-[393px] flex flex-col relative min-h-screen">
      <HeaderNavSection />

      <main className="flex flex-col w-full items-start gap-6 pt-6 pb-8 px-4 mt-[72px]">
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
        <PromoCodeSection />
        <PromoInputSection />
        <ActionButtonsSection />
      </main>
    </div>
  );
};
