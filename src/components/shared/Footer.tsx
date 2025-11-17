import {
  ChevronRightIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface NavigationLink {
  label: string;
  hasChevron: boolean;
}

interface UtilityLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  navigationLinks?: NavigationLink[];
  utilityLinks?: UtilityLink[];
  legalLinks?: string[];
  contactButtonText?: string;
  quoteButtonText?: string;
  contactTitle?: string;
  weekdayHours?: string;
  saturdayHours?: string;
  phoneNumbers?: string[];
  email?: string;
  copyright?: string;
  className?: string;
  paddingBottom?: string;
}

const defaultNavigationLinks: NavigationLink[] = [
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

const defaultUtilityLinks: UtilityLink[] = [
  { icon: ZapIcon, label: "Simuler mon DPE" },
  { icon: DollarSignIcon, label: "Estimer la valeur de mon bien" },
];

const defaultLegalLinks = ["Mentions légales", "Cookies", "CGV"];

export const Footer = ({
  logoSrc = "/logo_principal.png",
  logoAlt = "Logo principal",
  navigationLinks = defaultNavigationLinks,
  utilityLinks = defaultUtilityLinks,
  legalLinks = defaultLegalLinks,
  contactButtonText = "Contactez-nous",
  quoteButtonText = "Obtenir un devis",
  contactTitle = "Contactez-nous",
  weekdayHours = "8:00 - 19:00",
  saturdayHours = "9:00 - 18:00",
  phoneNumbers = ["01 71 68 17 97", "06 79 87 60 08"],
  email = "email@entreprise.com",
  copyright = "©2025 SDIExpertise®",
  className = "",
  paddingBottom = "pb-32",
}: FooterProps): JSX.Element => {
  return (
    <footer
      className={`flex flex-col w-full items-start gap-12 pt-12 ${paddingBottom} px-8 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${className}`}
    >
      <div className="flex items-center gap-2 w-full">
        <img
          className="w-[219px] h-[60px] object-cover"
          alt={logoAlt}
          src={logoSrc}
        />
      </div>

      <nav className="flex flex-col items-start gap-6 w-full">
        {navigationLinks.map((link, index) => {
          const isHomePage = link.label === "Page principale";
          const content = (
            <>
              <div className="flex items-center gap-1.5 flex-1">
                <div className="mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                  {link.label}
                </div>
              </div>
              {link.hasChevron && <ChevronRightIcon className="w-4 h-4" />}
            </>
          );

          if (isHomePage) {
            return (
              <Link
                key={index}
                to="/"
                className="flex items-center justify-between w-full cursor-pointer hover:opacity-80 transition-opacity text-left"
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              key={index}
              className="flex items-center justify-between w-full cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0 text-left"
            >
              {content}
            </button>
          );
        })}
      </nav>

      <div className="flex items-start justify-between w-full">
        <button className="inline-flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0">
          <div className="inline-flex gap-1.5 items-center">
            <UserIcon className="w-4 h-4" />
            <div className="mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] whitespace-nowrap [font-style:var(--titre-3-font-style)]">
              Mon Espace
            </div>
          </div>
        </button>

        <button className="inline-flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0">
          <div className="inline-flex gap-1.5 items-center">
            <ShoppingCartIcon className="w-4 h-4" />
            <div className="mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] whitespace-nowrap [font-style:var(--titre-3-font-style)]">
              Mon Panier
            </div>
          </div>
        </button>
      </div>

      <div className="inline-flex items-center gap-[15px]">
        <Button
          variant="ghost"
          className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:opacity-90"
        >
          <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            {contactButtonText}
          </span>
        </Button>

        <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef4]">
          <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            {quoteButtonText}
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start justify-center gap-[23px] w-full">
        {utilityLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <button
              key={index}
              className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0"
            >
              <IconComponent className="w-5 h-5" />
              <div className="flex justify-center items-center gap-1">
                <div className="flex gap-1 flex-1 items-center">
                  <div className="flex-1 mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {link.label}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-start gap-8 w-full">
        <h3 className="mt-[-1.00px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
          {contactTitle}
        </h3>

        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-start gap-4 w-full">
            <div className="inline-flex flex-col items-start gap-2">
              <div className="mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                Lundi à vendredi
              </div>
              <div className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[length:var(--paragraphe-2-desktop-font-size)] leading-[var(--paragraphe-2-desktop-line-height)] text-dark tracking-[var(--paragraphe-2-desktop-letter-spacing)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]">
                {weekdayHours}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 flex-1">
              <div className="mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                Samedi
              </div>
              <div className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[length:var(--paragraphe-2-desktop-font-size)] leading-[var(--paragraphe-2-desktop-line-height)] text-dark tracking-[var(--paragraphe-2-desktop-letter-spacing)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]">
                {saturdayHours}
              </div>
            </div>
          </div>

          <div className="inline-flex items-start gap-4">
            <div className="inline-flex flex-col items-start gap-2">
              <div className="mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                Par téléphone
              </div>
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)] hover:opacity-80"
                >
                  {phone}
                </a>
              ))}
            </div>

            <div className="inline-flex flex-col items-start gap-2">
              <div className="mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                Par mail
              </div>
              <a
                href={`mailto:${email}`}
                className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)] hover:opacity-80"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex items-start justify-center gap-4 w-full">
          {legalLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                  |
                </div>
              )}
              <button className="inline-flex justify-center items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0">
                <div className="inline-flex items-center gap-1">
                  <div className="mt-[-1.00px] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                    {link}
                  </div>
                </div>
              </button>
            </React.Fragment>
          ))}
        </div>

        <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)] w-full">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
