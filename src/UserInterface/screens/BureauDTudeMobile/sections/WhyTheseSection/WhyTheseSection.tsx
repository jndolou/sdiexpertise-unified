import React from "react";

export const WhyTheseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[60px] pb-[5px] px-4 relative">
      <div className="flex flex-col items-start gap-8 relative w-full">
        <div className="flex flex-col w-full items-start justify-center gap-[15px] relative">
          <h2 className="relative w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Pourquoi faire appel à un bureau d&apos;études bâtiment et énergie ?
          </h2>

          <p className="relative w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            Au-delà du simple diagnostic, une vision globale, technique et
            réglementaire est indispensable pour prendre les bonnes décisions.
            <br />
            <br />
            Le bureau d&#39;études traduit vos contraintes en solutions
            concrètes, mesurables et finançables.
          </p>
        </div>
      </div>
    </section>
  );
};
