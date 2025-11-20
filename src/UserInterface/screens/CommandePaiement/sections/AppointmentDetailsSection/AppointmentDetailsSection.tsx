import React from "react";

const footerLinks = [
  { label: "Mentions légales" },
  { label: "Cookies" },
  { label: "CGV" },
];

export const AppointmentDetailsSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-4 w-full">
      <nav className="flex items-center justify-center gap-4">
        {footerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <button className="inline-flex justify-center items-center gap-1">
              <span className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)] whitespace-nowrap">
                {link.label}
              </span>
            </button>
            {index < footerLinks.length - 1 && (
              <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>

      <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
        ©2025 SDIExpertise®
      </p>
    </footer>
  );
};
