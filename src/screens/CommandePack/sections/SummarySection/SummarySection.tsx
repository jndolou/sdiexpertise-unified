import React from "react";

const summaryItems = [
  {
    icon: "/flash.svg",
    alt: "Flash",
    text: "Simuler mon DPE",
  },
  {
    icon: "/cash.svg",
    alt: "Cash",
    text: "Estimer la valeur de mon bien",
  },
];

export const SummarySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center gap-[23px] w-full">
      {summaryItems.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <img className="w-5 h-5" alt={item.alt} src={item.icon} />
          <div className="flex items-center gap-1">
            <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              {item.text}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
};
