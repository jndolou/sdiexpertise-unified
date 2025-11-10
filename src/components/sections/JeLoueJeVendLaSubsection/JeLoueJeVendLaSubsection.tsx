import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../ui/toggle-group";

const navigationTabs = [
  { value: "loue", label: "Je loue" },
  { value: "vends", label: "Je vends" },
  { value: "carte", label: "À la carte" },
];

const propertyTypes = [
  { value: "appartement", label: "Appartement" },
  { value: "maison", label: "Maison" },
  { value: "autre", label: "Autre" },
];

export const JeLoueJeVendLaSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[65px] pb-[55px] px-[18px] relative">
      <div className="flex flex-col items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
        <Tabs defaultValue="loue" className="w-full">
          <TabsList className="flex w-full items-center gap-8 bg-transparent h-auto p-0 border-none">
            {navigationTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`w-fit font-medium text-lg text-center leading-[normal] whitespace-nowrap [font-family:'Ubuntu',Helvetica] tracking-[0] data-[state=active]:text-[#1c1b1b] data-[state=active]:underline data-[state=inactive]:text-[#5d3ca4] data-[state=inactive]:no-underline bg-transparent shadow-none border-none p-0 h-auto`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex flex-col items-center justify-center gap-5 pt-[30px] pb-[25px] px-5 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="inline-flex flex-col items-center justify-center gap-[17px] relative flex-[0_0_auto]">
            <div className="flex flex-col w-full items-start gap-[13px] relative flex-[0_0_auto]">
              <ToggleGroup
                type="single"
                defaultValue="maison"
                className="flex w-full items-start flex-wrap gap-[15px] relative flex-[0_0_auto] z-[1]"
              >
                {propertyTypes.map((type) => (
                  <ToggleGroupItem
                    key={type.value}
                    value={type.value}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-3 relative rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)] data-[state=off]:bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] h-auto`}
                  >
                    <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      {type.label}
                    </span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] z-0">
                <div className="flex items-start gap-2 pl-3 pr-2 py-0 relative self-stretch w-full flex-[0_0_auto] rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="inline-flex h-11 items-center px-0 py-4 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6 mt-[-6.00px] mb-[-6.00px]"
                      alt="Left icon"
                      src="/left-icon.svg"
                    />
                  </div>

                  <Input
                    placeholder="Ville, code postal..."
                    className="flex-col h-11 justify-center px-0 py-1.5 flex-1 grow rounded overflow-hidden border-none bg-transparent shadow-none [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5 placeholder:text-[#1c1b1b80] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-[10px] tracking-[0] leading-5 whitespace-nowrap">
                  * uniquement en Île de France (75, 77, 78, 91, 92, 93, 94, 95)
                </p>
              </div>
            </div>

            <Button className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 relative hover:bg-[#faf8fc] hover:opacity-90">
              <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Démarrer
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
