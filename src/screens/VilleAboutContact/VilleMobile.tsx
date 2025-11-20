import React from "react";
import { Button } from "../../components/ui/button";
import { AssuranceElementsSection } from "./sections/AssuranceElementsSection";
import { ExploreParisSection } from "./sections/ExploreParisSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationTabBarSection } from "./sections/NavigationTabBarSection";
import { NewsSection } from "./sections/NewsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { PartnerSection } from "./sections/PartnerSection";
import { QuoteSection } from "./sections/QuoteSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const decorativeShapes = [
  {
    className: "ml-[88px] w-[64.75px] h-[138.35px] mt-[3.8px]",
    src: "/forme-d-corative-4.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[396.0px] w-[84.96px] h-[112.52px] mt-[156.1px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[88px] w-[58.11px] h-[83.36px] mt-[154.6px]",
    src: "/forme-d-corative-6.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[394.0px] w-[86.96px] h-[112.52px] mt-[243.6px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[88px] w-[56.75px] h-[138.35px] mt-[191.1px]",
    src: "/forme-d-corative-4.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[416.0px] w-[64.96px] h-[112.52px] mt-[318.1px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[88px] w-[56.11px] h-[83.36px] mt-[232.6px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[406.2px] w-[74.75px] h-[138.35px] mt-[528.1px]",
    src: "/forme-d-corative-4.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[88px] w-[56.11px] h-[83.36px] mt-[302.1px]",
    src: "/forme-d-corative-8.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[407.0px] w-[73.96px] h-[112.52px] mt-[288.6px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    className: "ml-[88px] w-[54.75px] h-[138.35px] mt-[635.1px]",
    src: "/forme-d-corative-4.svg",
    alt: "Forme dcorative",
  },
];

const headerIcons = [
  {
    src: "/person-1.svg",
    alt: "Person",
    className:
      "flex w-10 h-10 items-center justify-center p-2 relative rounded-[62px] overflow-hidden",
  },
  {
    src: "/cart-1.svg",
    alt: "Cart",
    className:
      "flex w-10 h-10 items-center justify-center p-2 relative rounded-[62px] overflow-hidden",
  },
];

export const VilleMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_150%] w-full min-w-[393px] relative">
      <div className="absolute top-[187px] left-[-88px] w-[549px] flex flex-col pointer-events-none">
        {decorativeShapes.map((shape, index) => (
          <img
            key={`decorative-shape-${index}`}
            className={shape.className}
            alt={shape.alt}
            src={shape.src}
          />
        ))}
      </div>

      <header className="flex w-[395px] items-center justify-between pt-[50px] pb-4 px-4 fixed top-0 left-0 z-50 rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-[170px] h-8 object-cover"
            alt="Logo horizontal"
            src="/logo-horizontal-condense--violet-fonce--2x-1.png"
          />
        </div>

        <nav className="flex items-center justify-end gap-2 relative flex-1 grow">
          {headerIcons.map((icon, index) => (
            <Button
              key={`header-icon-${index}`}
              variant="ghost"
              size="icon"
              className={icon.className}
            >
              <img className="relative w-5 h-5" alt={icon.alt} src={icon.src} />
            </Button>
          ))}

          <Button
            variant="ghost"
            size="icon"
            className="flex w-12 h-12 items-center justify-center p-2 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb]"
          >
            <img
              className="relative w-6 h-6"
              alt="Ellipsis horizontal"
              src="/ellipsis-horizontal.svg"
            />
          </Button>
        </nav>
      </header>

      <main className="relative w-full">
        <HeroSection />
        <ExploreParisSection />
        <AssuranceElementsSection />
        <PartnerSection />
        <ServicesSection />
        <QuoteSection />
        <NewsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <FooterSection />
      </main>

      <NavigationTabBarSection />
    </div>
  );
};
