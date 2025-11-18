import { BanknoteIcon, ZapIcon } from "lucide-react";
import React from "react";

const menuItems = [
  {
    icon: ZapIcon,
    text: "Simuler mon DPE",
  },
  {
    icon: BanknoteIcon,
    text: "Estimer la valeur de mon bien",
  },
];

export const UserInfoSection = (): JSX.Element => {
  return (
    <nav className="flex flex-col items-start justify-center gap-[23px] w-full">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <item.icon className="w-5 h-5 flex-shrink-0" />
          <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            {item.text}
          </span>
        </button>
      ))}
    </nav>
  );
};
