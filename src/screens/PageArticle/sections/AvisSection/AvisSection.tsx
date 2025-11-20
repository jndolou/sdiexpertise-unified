import React from "react";
import { Button } from "../../../../components/ui/button";

const reactionButtons = [
  {
    icon: "/group.png",
    label: "J'aime",
    count: 34,
    iconWidth: "w-[17.16px]",
    iconHeight: "h-[16.01px]",
    iconMarginTop: "mt-[-2.50px]",
  },
  {
    icon: "/group-1.png",
    label: "Bravo",
    count: 12,
    iconWidth: "w-[19.37px]",
    iconHeight: "h-[18px]",
    iconMarginTop: "mt-[-3.50px]",
  },
  {
    icon: "/vector.svg",
    label: "Instructif",
    count: 4,
    iconWidth: "w-[18px]",
    iconHeight: "h-[18px]",
    iconMarginTop: "mt-[-3.50px]",
  },
];

export const AvisSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-5 pt-[65px] pb-[45px] px-4">
      <div className="flex items-start gap-2.5 w-full">
        <div className="flex flex-col w-full items-start gap-8">
          <div className="inline-flex flex-col items-start gap-6">
            <div className="inline-flex flex-col items-start gap-2">
              <h2 id="avis" className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
                Qu&apos;avez-vous pensé de cet article ?
              </h2>

              <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
                  Votre avis nous{" "}
                </span>
                <span className="font-paragraphe-1 text-[#7e3287] text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)]">
                  intéresse
                </span>
                <span className="text-[#7e3287] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
                  {" "}
                  !
                </span>
              </p>
            </div>

            <div className="flex w-full items-start gap-3 flex-wrap">
              {reactionButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="inline-flex flex-col h-auto items-center justify-center gap-[5px] px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0edf4]"
                >
                  <img
                    className={`${button.iconWidth} ${button.iconHeight} ${button.iconMarginTop}`}
                    alt={button.label}
                    src={button.icon}
                  />
                  <span className="mb-[-1.50px] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
                    {button.label} • {button.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img className="w-full" alt="Divider" src="/frame-570.svg" />
    </section>
  );
};
