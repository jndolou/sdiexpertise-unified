import React from "react";
import { Button } from "../../../../components/ui/button";

const projectOptions = [
  {
    icon: "/flash.svg",
    text: "Simuler mon DPE",
    alt: "Flash",
  },
  {
    icon: "/cash.svg",
    text: "Estimer la valeur de mon bien",
    alt: "Cash",
  },
];

export const ProjectSelectionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center gap-[23px] w-full">
      {projectOptions.map((option, index) => (
        <Button
          key={index}
          variant="ghost"
          className="flex items-center gap-1.5 h-auto p-0 hover:bg-transparent"
        >
          <img className="w-5 h-5" alt={option.alt} src={option.icon} />
          <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            {option.text}
          </span>
        </Button>
      ))}
    </section>
  );
};
