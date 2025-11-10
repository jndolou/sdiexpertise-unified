import React from "react";

export const WhyThisSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 py-[60px] px-4 w-full">
      <div className="flex flex-col items-start justify-center gap-[15px] w-full">
        <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
          Pourquoi ces diagnostics sont cruciaux pour votre <br />
          patrimoine ?
        </h2>

        <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
          Que vous soyez propriétaire, bailleur ou syndic, les diagnostics
          immobiliers ne sont pas une formalité. Ils engagent votre
          responsabilité, conditionnent vos ventes ou locations, et révèlent
          l&apos;état technique réel de vos biens.
          <br />
          <br />
          Avec des exigences en constante évolution, mieux vaut être bien
          accompagné.
        </p>
      </div>
    </section>
  );
};
