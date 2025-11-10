import React from "react";
import { Button } from "../../ui/button";

const tabItems = [
  {
    icon: "/home.svg",
    label: "Site principal",
    isActive: true,
  },
  {
    icon: "/star-16.svg",
    label: "Accès pro",
    isActive: false,
  },
];

export const TabBarSubsection = (): JSX.Element => {
  return (
    <nav className="flex w-full items-center justify-between rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      {tabItems.map((item, index) => (
        <button
          key={index}
          className={`flex flex-col items-center justify-center gap-1 p-4 flex-1 self-stretch grow mt-[-1.00px] ${
            index === 0 ? "ml-[-1.00px]" : "ml-[-2.0px]"
          } border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] ${
            item.isActive
              ? "shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] [border-image:linear-gradient(147deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)_1] bg-[linear-gradient(57deg,rgba(100,255,105,0)_0%,rgba(84,249,100,0.2)_100%),linear-gradient(180deg,rgba(170,127,251,0)_0%,rgba(170,127,251,0.2)_100%),linear-gradient(141deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]"
              : "[border-image:linear-gradient(147deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)_1]"
          }`}
        >
          <img className="w-6 h-6" alt={item.label} src={item.icon} />
          <div
            className={`w-fit ${
              index === 0 ? "ml-[-1.75px]" : ""
            } [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap`}
          >
            {item.label}
          </div>
        </button>
      ))}

      <div className="inline-flex flex-col items-center justify-center p-4 self-stretch flex-[0_0_auto] mt-[-1.00px] ml-[-2.0px] border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(147deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)_1]">
        <Button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 hover:bg-[#f0eef4]">
          <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Obtenir un devis
          </span>
        </Button>
      </div>
    </nav>
  );
};
