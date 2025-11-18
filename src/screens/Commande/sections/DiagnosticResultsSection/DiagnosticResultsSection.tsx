import { Search as SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const projectTypes = [
  { value: "vendre", label: "Vendre" },
  { value: "louer", label: "Louer" },
  { value: "renover", label: "Rénover" },
  { value: "autre", label: "Autre" },
];

export const DiagnosticResultsSection = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<string>("louer");

  return (
    <section className="flex flex-col w-full items-start gap-8 px-4 py-8 rounded-2xl overflow-hidden">
      <header className="inline-flex flex-col items-start gap-[11px] w-full">
        <h1 className="w-full [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-2xl tracking-[0] leading-[28.8px]">
          Votre prix en une 1 étape
        </h1>

        <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-sm tracking-[0] leading-[21px]">
          <span className="text-[#1c1b1b]">Une estimation </span>
          <span className="text-[#7e3287] font-semibold italic">claire</span>
          <span className="text-[#1c1b1b]"> et rapide avant de commander ou télécharger votre devis.</span>
        </p>
      </header>
    </section>
  );
};
