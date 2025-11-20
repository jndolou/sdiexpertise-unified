import { ChevronRightIcon } from "lucide-react";
import React from "react";

const menuItems = [
  { label: "Page principale", hasChevron: false },
  { label: "Accès pro", hasChevron: false },
  { label: "Plan du site", hasChevron: false },
  { label: "Zones d'interventions", hasChevron: true },
  { label: "Tous nos services", hasChevron: true },
  { label: "Ordre de mission", hasChevron: false },
  { label: "Mon projet", hasChevron: false },
  { label: "Ressources", hasChevron: false },
  { label: "Actualités", hasChevron: false },
  { label: "Qui sommes nous ?", hasChevron: false },
];

export const MapDisplaySection = (): JSX.Element => {
  return (
    <nav className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div
            className={`${item.hasChevron ? "inline-flex" : "flex"} items-center gap-1.5 ${item.hasChevron ? "flex-[0_0_auto]" : "flex-1 grow"} relative`}
          >
            <div className="relative w-fit mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
              {item.label}
            </div>
          </div>

          {item.hasChevron && (
            <ChevronRightIcon className="relative w-4 h-4 text-dark" />
          )}
        </div>
      ))}
    </nav>
  );
};
