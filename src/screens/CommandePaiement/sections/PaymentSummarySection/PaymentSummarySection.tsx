import { ShoppingCartIcon, UserIcon } from "lucide-react";
import React from "react";

const navigationItems = [
  {
    icon: UserIcon,
    label: "Mon Espace",
  },
  {
    icon: ShoppingCartIcon,
    label: "Mon Panier",
  },
];

export const PaymentSummarySection = (): JSX.Element => {
  return (
    <nav className="flex items-start justify-between w-full">
      {navigationItems.map((item, index) => (
        <button
          key={index}
          className="inline-flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <item.icon className="w-4 h-4" />
          <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] whitespace-nowrap [font-style:var(--titre-3-font-style)]">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
