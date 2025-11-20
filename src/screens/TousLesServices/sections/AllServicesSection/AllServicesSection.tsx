import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

export const AllServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-8 px-4 py-8 pt-[130px]">
      <div className="flex flex-col w-full items-start gap-[35px]">
        <h1 className="w-full font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
          Tous nos services
        </h1>

        <div className="inline-flex flex-col items-start gap-2.5 w-full">
          <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            Quels services cherchez-vous ?
          </p>

          <div className="flex flex-col w-full items-start gap-0.5">
            <div className="flex flex-col items-start gap-1 w-full">
              <div className="flex items-center gap-2 pl-3 pr-2 py-0 w-full rounded-xl border-[none] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
                <div className="inline-flex h-11 items-center px-0 py-4">
                  <SearchIcon className="w-6 h-6 text-[#1c1b1b80]" />
                </div>

                <div className="flex-col h-11 justify-center px-0 py-1.5 flex-1 grow rounded overflow-hidden flex items-start">
                  <Input
                    type="text"
                    placeholder="Chercher un service"
                    className="w-full border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5 h-auto p-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
