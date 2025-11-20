import React from "react";

const features = [
  "Expertise technique certifiée (audit, thermique, DPE, RT/RE2020…)",
  "Conformité aux normes réglementaires (décret tertiaire, Loi Climat…)",
  "Méthodes et outils métiers éprouvés (3CL, TH-BCE, STD…)",
  "Indépendance et objectivité dans nos recommandations",
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 pt-[60px] pb-[15px] px-4 rounded-2xl">
      <div className="inline-flex flex-col items-start gap-[18px] w-full max-w-[361px]">
        <div className="flex flex-col w-full items-center justify-center gap-[15px]">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Nos engagements d&apos;ingénierie
          </h2>

          <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b]">Notre savoir-faire, votre </span>
            <span className="text-[#346ca0]">tranquillité.</span>
          </p>
        </div>

        <div className="flex flex-col w-full items-start gap-10">
          <div className="flex flex-col items-start gap-[30px] w-full">
            <div className="flex flex-col w-full items-start justify-center gap-[9px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-[7px] w-full">
                  <img
                    className="w-[19px] h-[19px] flex-shrink-0 [filter:brightness(0)_saturate(100%)_invert(42%)_sepia(96%)_saturate(376%)_hue-rotate(173deg)_brightness(95%)_contrast(93%)]"
                    alt="Checkmark"
                    src="/checkmark.svg"
                  />
                  <div className="flex-1 [font-family:'Open_Sans',Helvetica] font-normal text-dark text-base tracking-[0] leading-[19.2px]">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-[25px] w-full">
            <h3 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Une expertise reconnue
            </h3>

            <img
              className="w-full max-w-[378px] h-[66px]"
              alt="Frame"
              src="/frame-337.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
