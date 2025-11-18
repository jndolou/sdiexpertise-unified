import { BanknoteIcon, ZapIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const appointmentItems = [
  {
    icon: ZapIcon,
    text: "Simuler mon DPE",
  },
  {
    icon: BanknoteIcon,
    text: "Estimer la valeur de mon bien",
  },
];

export const AppointmentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center gap-[23px] w-full">
      {appointmentItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="flex items-center gap-1.5 h-auto p-0 hover:bg-transparent"
        >
          <item.icon className="w-5 h-5 text-dark" />
          <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            {item.text}
          </span>
        </Button>
      ))}
    </section>
  );
};
