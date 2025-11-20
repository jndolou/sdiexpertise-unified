import React from "react";

const features = [
  "Techniciens certifiés selon l'arrêté du 24/12/2021 (plomb, amiante, énergie, etc.)",
  "Plateforme de suivi intuitive et sécurisée",
  "Un interlocuteur unique du diagnostic à la mise en conformité",
  "Conformité légale garantie pour toutes vos opérations",
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 pt-[60px] pb-[15px] px-4 relative rounded-2xl">
      <div className="inline-flex flex-col items-start gap-[18px] relative w-full max-w-[361px]">
        <div className="flex flex-col w-full items-center justify-center gap-[15px] relative">
          <h2 className="relative self-stretch font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Ce qui fait la différence
          </h2>

          <p className="relative self-stretch font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              Notre savoir-faire, votre{" "}
            </span>
            <span className="font-paragraphe-1 text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)]">
              tranquillité
            </span>
            <span className="leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              {" "}
              : des diagnostics fiables, clairs et conformes.
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full items-start gap-10 relative">
          <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full">
            <div className="flex flex-col w-full items-start justify-center gap-[9px] relative">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[7px] pl-0 pr-3.5 py-0 relative self-stretch w-full"
                >
                  <img
                    className="relative w-[19px] h-[19px] flex-shrink-0"
                    alt="Checkmark"
                    src="/checkmark.svg"
                    style={{ filter: 'brightness(0) saturate(100%) invert(46%) sepia(47%) saturate(1254%) hue-rotate(236deg) brightness(91%) contrast(89%)' }}
                  />
                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-dark text-base tracking-[0] leading-[19.2px]">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-[25px] relative w-full">
            <h2 className="relative w-full mt-[-1.00px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Une expertise reconnue
            </h2>

            <img
              className="relative w-full max-w-[377px] h-[66px]"
              alt="Frame"
              src="/frame-337.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
