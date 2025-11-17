import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

const expertiseData = [
  {
    title: "Diagnostics immobiliers",
    description: "Diagnostics techniques complets pour vos transactions immobilières",
    link: "/diagnostics",
  },
  {
    title: "Bureau d'études",
    description: "Études techniques et conseils pour vos projets",
    link: "#",
  },
  {
    title: "Bureau de contrôle",
    description: "Contrôle et vérification de vos projets de construction",
    link: "#",
  },
];

export const NosExpertisesSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-6 pt-[65px] pb-1 px-4 relative">
      <div className="flex flex-col h-[138px] items-center justify-end gap-[13px] px-4 py-0 relative self-stretch w-full overflow-hidden">
        <div className="flex flex-col w-[927px] items-center gap-[13px] px-0 py-[15px] relative flex-[0_0_auto] ml-[-299.00px] mr-[-299.00px] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
          <h2 className="relative w-[361px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Nos expertises
          </h2>

          <img
            className="relative w-[361px] h-[66px]"
            alt="Frame"
            src="/frame-337.svg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 relative">
        {expertiseData.map((expertise, index) => (
          <Card
            key={index}
            className="flex items-start gap-4 p-6 rounded-2xl relative overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <CardContent className="flex flex-col items-start justify-between gap-4 p-0 flex-1">
              <div className="flex flex-col gap-2 w-full">
                <h3 className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-lg tracking-[0] leading-[21.6px]">
                  {expertise.title}
                </h3>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                  {expertise.description}
                </p>
              </div>

              <Link to={expertise.link}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 h-auto p-0 text-[#a97ffb] hover:text-[#9b6ff0] hover:bg-transparent [font-family:'Ubuntu',Helvetica] font-medium text-sm"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
