import React from "react";
import { Header } from "../../components/layout/Header";
import { DiagnosticResultsSection } from "./sections/DiagnosticResultsSection";
import { ProjectTypeSelectorSection } from "./sections/ProjectTypeSelectorSection";

export const Commande = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_95%] w-full min-w-[393px] min-h-[844px] relative">
      <Header />

      <main className="relative w-full pt-[100px]">
        <DiagnosticResultsSection />
        <ProjectTypeSelectorSection />
      </main>
    </div>
  );
};
