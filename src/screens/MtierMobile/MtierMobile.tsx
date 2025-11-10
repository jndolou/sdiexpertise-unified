import React from "react";
import { Header } from "../../components/layout";
import { ActualitsPourLesSubsection } from "./sections/ActualitsPourLesSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeroSectionSubsection } from "./sections/HeroSectionSubsection";
import { IlsNousFontSubsection } from "./sections/IlsNousFontSubsection";
import { NewsletterSubsection } from "./sections/NewsletterSubsection";
import { NosSubsection } from "./sections/NosSubsection";
import { PourquoiCrerUnSubsection } from "./sections/PourquoiCrerUnSubsection";
import { ProgrammePartenaireSubsection } from "./sections/ProgrammePartenaireSubsection";
import { RencontronsNousSubsection } from "./sections/RencontronsNousSubsection";
import { RglementationEtSubsection } from "./sections/RglementationEtSubsection";
import { VotreDevisEnSubsection } from "./sections/VotreDevisEnSubsection";

const decorativeShapes = [
  {
    top: "top-[265px]",
    left: "left-[79px]",
    width: "w-[47px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-8",
    left: "left-[370px]",
    width: "w-[102px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-0.5",
    left: "left-[412px]",
    width: "w-[60px]",
    height: "h-[83px]",
    src: "/forme-d-corative.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[994px]",
    left: "left-[79px]",
    width: "w-16",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[648px]",
    left: "left-[295px]",
    width: "w-[104px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1715px]",
    left: "left-[113px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-14.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[1288px]",
    left: "left-[326px]",
    width: "w-[104px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2356px]",
    left: "left-[79px]",
    width: "w-[91px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[2878px]",
    left: "left-[386px]",
    width: "w-[86px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[3196px]",
    left: "left-[79px]",
    width: "w-[69px]",
    height: "h-[83px]",
    src: "/forme-d-corative-11.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[4307px]",
    left: "left-[79px]",
    width: "w-[62px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[4606px]",
    left: "left-[414px]",
    width: "w-[58px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[5121px]",
    left: "left-[389px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-7.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[5673px]",
    left: "left-[97px]",
    width: "w-[133px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[5624px]",
    left: "left-[163px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-18.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[6188px]",
    left: "left-[386px]",
    width: "w-[86px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[6627px]",
    left: "left-[79px]",
    width: "w-[68px]",
    height: "h-[138px]",
    src: "/forme-d-corative-1.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[7275px]",
    left: "left-[346px]",
    width: "w-[76px]",
    height: "h-[83px]",
    src: "/forme-d-corative-16.svg",
    alt: "Forme dcorative",
  },
  {
    top: "top-[7951px]",
    left: "left-[79px]",
    width: "w-[60px]",
    height: "h-[113px]",
    src: "/forme-d-corative-2.svg",
    alt: "Forme dcorative",
  },
];

export const MtierMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-[9586px] relative">
      <div className="absolute top-[306px] left-[-79px] w-[557px] h-[8068px]">
        {decorativeShapes.map((shape, index) => (
          <img
            key={`decorative-shape-${index}`}
            className={`absolute ${shape.top} ${shape.left} ${shape.width} ${shape.height}`}
            alt={shape.alt}
            src={shape.src}
          />
        ))}
      </div>

      <Header />

      <div className="pt-[106px]">
        <HeroSectionSubsection />
      </div>

      <section className="flex flex-col w-full items-center justify-end gap-[13px] px-4 py-8 overflow-hidden">
        <div className="flex flex-col w-[927px] items-center gap-[13px] px-0 py-[15px] relative flex-[0_0_auto] ml-[-283.00px] mr-[-283.00px] bg-[#ffffff1a] border border-solid border-transparent shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(159deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)_1]">
          <h2 className="relative w-[361px] mt-[-1.00px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Une expertise reconnue
          </h2>

          <img
            className="relative w-[393px] h-[66px]"
            alt="Frame"
            src="/frame-337.svg"
          />
        </div>
      </section>

      <NosSubsection />
      <VotreDevisEnSubsection />
      <IlsNousFontSubsection />
      <RglementationEtSubsection />
      <ActualitsPourLesSubsection />
      <PourquoiCrerUnSubsection />
      <RencontronsNousSubsection />
      <ProgrammePartenaireSubsection />
      <NewsletterSubsection />
      <FooterSubsection />

      <nav className="flex w-[395px] items-center justify-between fixed -left-px -bottom-px rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none z-50">
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center gap-1 p-4 relative flex-1 self-stretch grow mt-[-1.00px] ml-[-1.00px] border border-solid border-transparent shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(147deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)_1] bg-[linear-gradient(57deg,rgba(100,255,105,0)_0%,rgba(84,249,100,0.2)_100%),linear-gradient(180deg,rgba(170,127,251,0)_0%,rgba(170,127,251,0.2)_100%),linear-gradient(141deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] h-auto rounded-none hover:bg-transparent"
        >
          <img className="relative w-6 h-6" alt="Home" src="/home.svg" />

          <span className="relative w-fit ml-[-1.75px] [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Site principal
          </span>
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center gap-1 p-4 relative flex-1 self-stretch grow mt-[-1.00px] ml-[-2.0px] border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(147deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)_1] h-auto rounded-none hover:bg-transparent"
        >
          <img className="relative w-6 h-6" alt="Star" src="/star-3.svg" />

          <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Accès pro
          </span>
        </Button>

        <div className="inline-flex flex-col items-center justify-center p-4 relative self-stretch flex-[0_0_auto] mt-[-1.00px] ml-[-2.0px] border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(147deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)_1]">
          <Button className="inline-flex h-12 items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
            <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              Obtenir un devis
            </span>
          </Button>
        </div>
      </nav>
    </div>
  );
};
