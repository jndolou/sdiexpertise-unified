import { MoreHorizontalIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/layout/Header";
import { DiagnosticsSection } from "./sections/DiagnosticsSection";

export const RendezVous = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(..//commande-9.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-screen flex flex-col relative">
      <Header />

      <main className="flex flex-col w-full pt-[110px]">
        <DiagnosticsSection />
      </main>
    </div>
  );
};
