import {
  ChevronRightIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";

const navigationLinks = [
  { label: "Page principale", hasChevron: false },
  { label: "Accès pro", hasChevron: false },
  { label: "Plan du site", hasChevron: false },
  { label: "Zones d'interventions", hasChevron: true },
  { label: "Tous nos services", hasChevron: true },
  { label: "Ordre de mission", hasChevron: false },
  { label: "Mon projet", hasChevron: false },
  { label: "Ressources", hasChevron: false },
  { label: "Actualités", hasChevron: false },
  { label: "Qui sommes nous ?", hasChevron: false },
];

const legalLinks = [
  { label: "Mentions légales" },
  { label: "Cookies" },
  { label: "CGV" },
];

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start gap-12 pt-12 pb-32 px-8 relative bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[219px] h-[60px] object-cover"
          alt="Logo principal"
          src="/logo_principal.png"
        />
      </div>

      <nav className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {navigationLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] cursor-pointer"
          >
            <div
              className={`flex items-center gap-1.5 relative ${link.hasChevron ? "flex-[0_0_auto]" : "flex-1 grow"}`}
            >
              <div className="relative w-fit mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                {link.label}
              </div>
            </div>

            {link.hasChevron && (
              <ChevronRightIcon className="relative w-4 h-4" />
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <button className="inline-flex flex-[0_0_auto] items-center gap-1 relative cursor-pointer bg-transparent border-none p-0">
          <div className="inline-flex gap-1.5 flex-[0_0_auto] items-center relative">
            <UserIcon className="relative w-4 h-4" />

            <div className="relative w-fit mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] whitespace-nowrap [font-style:var(--titre-3-font-style)]">
              Mon Espace
            </div>
          </div>
        </button>

        <button className="inline-flex flex-[0_0_auto] items-center gap-1 relative cursor-pointer bg-transparent border-none p-0">
          <div className="inline-flex gap-1.5 flex-[0_0_auto] items-center relative">
            <ShoppingCartIcon className="relative w-4 h-4" />

            <div className="relative w-fit mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] whitespace-nowrap [font-style:var(--titre-3-font-style)]">
              Mon Panier
            </div>
          </div>
        </button>
      </div>

      <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
        <Button className="inline-flex items-center justify-center gap-2 px-4 py-3 flex-[0_0_auto] rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] h-12 relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)]">
          <div className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Contactez-nous
          </div>
        </Button>

        <Button className="inline-flex items-center justify-center gap-2 px-4 py-3 flex-[0_0_auto] bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 relative hover:bg-[#f0eef4]">
          <div className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Obtenir un devis
          </div>
        </Button>
      </div>

      <div className="flex flex-col items-start justify-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
        <button className="flex w-[173px] items-center gap-1.5 relative flex-[0_0_auto] cursor-pointer bg-transparent border-none p-0">
          <ZapIcon className="relative w-5 h-5" />

          <div className="flex w-[153px] justify-center mr-[-6.00px] items-center gap-1 relative">
            <div className="flex gap-1 flex-1 grow items-center relative">
              <div className="relative flex-1 mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                Simuler mon DPE
              </div>
            </div>
          </div>
        </button>

        <button className="inline-flex h-6 items-start justify-center gap-2 relative cursor-pointer bg-transparent border-none p-0">
          <DollarSignIcon className="relative w-5 h-5" />

          <div className="flex w-[254px] justify-center items-center gap-1 relative">
            <div className="flex gap-1 flex-1 grow items-center relative">
              <div className="relative flex-1 mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                Estimer la valeur de mon bien
              </div>
            </div>
          </div>
        </button>
      </div>

      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="relative self-stretch mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
          Contactez-nous
        </h3>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                Lundi à vendredi
              </div>

              <div className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[length:var(--paragraphe-2-desktop-font-size)] leading-[var(--paragraphe-2-desktop-line-height)] relative w-fit text-dark tracking-[var(--paragraphe-2-desktop-letter-spacing)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]">
                8:00 - 19:00
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <div className="relative self-stretch mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                Samedi
              </div>

              <div className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[length:var(--paragraphe-2-desktop-font-size)] leading-[var(--paragraphe-2-desktop-line-height)] relative w-fit text-dark tracking-[var(--paragraphe-2-desktop-letter-spacing)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]">
                9:00 - 18:00
              </div>
            </div>
          </div>

          <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                Par téléphone
              </div>

              <a
                href="tel:0171681797"
                className="relative w-fit font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]"
              >
                01 71 68 17 97
              </a>

              <a
                href="tel:0679876008"
                className="relative w-fit font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]"
              >
                06 79 87 60 08
              </a>
            </div>

            <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                Par mail
              </div>

              <a
                href="mailto:email@entreprise.com"
                className="relative w-fit font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]"
              >
                email@entreprise.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          {legalLinks.map((link, index) => (
            <React.Fragment key={index}>
              <button className="inline-flex justify-center flex-[0_0_auto] items-center gap-1 relative cursor-pointer bg-transparent border-none p-0">
                <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                    {link.label}
                  </div>
                </div>
              </button>

              {index < legalLinks.length - 1 && (
                <div className="relative w-fit mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                  |
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="relative self-stretch font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
          ©2025 SDIExpertise®
        </div>
      </div>
    </footer>
  );
};
