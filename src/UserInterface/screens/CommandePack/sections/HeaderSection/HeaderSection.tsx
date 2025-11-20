import React from "react";

const scheduleData = [
  {
    label: "Lundi à vendredi",
    time: "8:00 - 19:00",
  },
  {
    label: "Samedi",
    time: "9:00 - 18:00",
  },
];

const contactData = [
  {
    label: "Par téléphone",
    details: ["01 71 68 17 97", "06 79 87 60 08"],
  },
  {
    label: "Par mail",
    details: ["email@entreprise.com"],
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 w-full">
      <h2 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
        Contactez-nous
      </h2>

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex items-start gap-4 w-full">
          {scheduleData.map((schedule, index) => (
            <div
              key={index}
              className={`flex flex-col items-start gap-2 ${
                index === 0 ? "flex-[0_0_auto]" : "flex-1"
              }`}
            >
              <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                {schedule.label}
              </div>
              <div className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)] whitespace-nowrap">
                {schedule.time}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-4">
          {contactData.map((contact, index) => (
            <div key={index} className="flex flex-col items-start gap-2">
              <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)] whitespace-nowrap">
                {contact.label}
              </div>
              {contact.details.map((detail, detailIndex) => (
                <div
                  key={detailIndex}
                  className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)] whitespace-nowrap"
                >
                  {detail}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
