import {
  ChevronRightIcon,
  MoreHorizontalIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Header } from "../../components/layout";
import { FooterSection } from "./sections/FooterSection";
import { NavigationTabBarSection } from "./sections/NavigationTabBarSection";
import { NewsFilterSection } from "./sections/NewsFilterSection";
import { NewsForYouSection } from "./sections/NewsForYouSection";
import { NewsHighlightsSection } from "./sections/NewsHighlightsSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { ResourcesSection } from "./sections/ResourcesSection";

const decorativeShapes = [
  {
    top: "top-[599px]",
    left: "left-[75px]",
    width: "w-[47px]",
    height: "h-[113px]",
    src: "/forme-d-corative-1.svg",
  },
  {
    top: "top-1",
    left: "left-96",
    width: "w-[84px]",
    height: "h-[138px]",
    src: "/forme-d-corative-2.svg",
  },
  {
    top: "top-[1075px]",
    left: "left-[377px]",
    width: "w-[91px]",
    height: "h-[143px]",
    src: "/forme-d-corative-10.svg",
  },
  {
    top: "top-[2042px]",
    left: "left-[402px]",
    width: "w-[66px]",
    height: "h-[83px]",
    src: "/forme-d-corative-6.svg",
  },
  {
    top: "top-[1494px]",
    left: "left-[75px]",
    width: "w-[53px]",
    height: "h-[113px]",
    src: "/forme-d-corative-1.svg",
  },
  {
    top: "top-[2348px]",
    left: "left-[75px]",
    width: "w-[91px]",
    height: "h-[138px]",
    src: "/forme-d-corative-2.svg",
  },
];

const paginationNumbers = [
  { number: "1", active: true },
  { number: "2", active: false },
  { number: "3", active: false },
  { number: "5", active: false },
];

export const Actualits = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(..//-actualit-s.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-[4370px] relative pb-[100px]">
      <div className="absolute top-[232px] left-[-75px] w-[527px] h-[8142px]">
        {decorativeShapes.map((shape, index) => (
          <img
            key={`decorative-shape-${index}`}
            className={`absolute ${shape.top} ${shape.left} ${shape.width} ${shape.height}`}
            alt="Forme dcorative"
            src={shape.src}
          />
        ))}

        <img
          className="absolute top-[-11630px] left-[-1955px] w-[120px] h-[121px]"
          alt="Forme dcorative"
          src="/forme-d-corative.svg"
        />

        <img
          className="absolute top-[-11630px] left-[-1955px] w-[120px] h-[121px]"
          alt="Forme dcorative"
          src="/forme-d-corative.svg"
        />

        <img
          className="absolute top-[-11630px] left-[-1955px] w-[153px] h-[146px]"
          alt="Forme dcorative"
          src="/forme-d-corative-2.svg"
        />

        <img
          className="absolute top-[-11630px] left-[-1955px] w-[88px] h-[88px]"
          alt="Forme dcorative"
          src="/forme-d-corative-3.svg"
        />

        <img
          className="absolute top-[-11630px] left-[-1955px] w-[120px] h-[121px]"
          alt="Forme dcorative"
          src="/forme-d-corative-1.svg"
        />
      </div>

      <Header />

      <div className="pt-[110px]">
        <NewsFilterSection />
      </div>
      <NewsHighlightsSection />
      <NewsForYouSection />

      <div className="flex flex-wrap w-[141px] items-center justify-center gap-[9px_20px] absolute top-[2145px] left-[236px]">
        <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
          {paginationNumbers.map((item, index) => (
            <div
              key={`pagination-${index}`}
              className={`${
                item.active ? "text-dark" : "text-[#989898]"
              } relative w-[7px] mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-xs tracking-[0] leading-[14.4px]`}
            >
              {item.number}
            </div>
          ))}

          <div className="inline-flex h-2.5 items-end gap-[3px] relative flex-[0_0_auto]">
            <div className="relative w-0.5 h-0.5 bg-[#1c1b1b] rounded-[1px]" />
            <div className="relative w-0.5 h-0.5 bg-[#1c1b1b] rounded-[1px]" />
            <div className="relative w-0.5 h-0.5 bg-[#1c1b1b] rounded-[1px]" />
          </div>
        </div>

        <ChevronRightIcon className="relative w-2 h-2" />
      </div>

      <ResourcesSection />
      <NewsletterSubscriptionSection />
      <FooterSection />
      <NavigationTabBarSection />
    </div>
  );
};
