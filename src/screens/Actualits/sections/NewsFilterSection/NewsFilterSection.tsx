import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const NewsFilterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 pt-8 pb-0 px-4 w-full">
      <div className="flex flex-col w-full items-start gap-[35px]">
        <div className="flex items-center justify-between gap-[35px] w-full">
          <h1 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-[32px] tracking-[0] leading-[38.4px]">
            Actualités
          </h1>

          <Button
            variant="ghost"
            className="h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]"
          >
            <img className="w-[19.06px] h-3.5" alt="Union" src="/union.svg" />
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
              Filtrer
            </span>
          </Button>
        </div>

        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="flex flex-col w-full items-start gap-0.5">
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="w-full rounded-xl border-[none] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="flex items-center gap-2 pl-3 pr-2 py-0 h-11">
                    <div className="flex items-center h-11 py-4">
                      <SearchIcon className="w-6 h-6 text-[#1c1b1b]" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Cherchez un mot-clé, ou filtrez par projet"
                      className="flex-1 h-11 px-0 py-1.5 border-0 bg-transparent [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5 placeholder:text-[#1c1b1b80] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
