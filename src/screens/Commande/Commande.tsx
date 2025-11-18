import React from "react";
import { Header } from "../../components/layout/Header";
import { DiagnosticResultsSection } from "./sections/DiagnosticResultsSection";
import { ProjectTypeSelectorSection } from "./sections/ProjectTypeSelectorSection";

export const Commande = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-[844px] relative">
      <Header />

      <main className="relative w-full pt-[100px]">
        <DiagnosticResultsSection />
        <ProjectTypeSelectorSection />
      </main>
    </div>
  );
};
