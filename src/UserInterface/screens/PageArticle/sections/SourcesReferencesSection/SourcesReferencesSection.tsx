import React from "react";

const references = [
  "[1] ADEME – Guide sur la performance énergétique, 2024",
  "[2] Loi Climat et Résilience – Article 158",
  "[3] INSEE – Statistiques logement 2023",
];

export const SourcesReferencesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[23px] pb-[60px] px-4 relative">
      <div className="flex flex-col items-start gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 id="sources" className="relative self-stretch mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
          Sources &amp; références
        </h2>

        <p className="relative self-stretch font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
          {references.map((reference, index) => (
            <React.Fragment key={index}>
              {reference}
              {index < references.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};
