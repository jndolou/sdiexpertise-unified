import { ChevronDownIcon, ListIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const EnBrefSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-10 pt-[60px] px-4">
      <Card className="w-full rounded-2xl border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-start gap-[15px] p-5">
          <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl tracking-[0] leading-[28.8px]">
            En bref
          </h2>

          <div className="flex flex-col items-start gap-[26px] w-full">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-[20.8px]">
              Cet article vous explique pourquoi le DPE est obligatoire, ce
              qu&apos;il contient, combien il coûte et comment le préparer
              efficacement.
            </p>

            <Button
              variant="outline"
              className="w-full h-auto justify-between items-center gap-2 px-3 py-2 rounded-xl border-[none] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
            >
              <div className="flex items-center gap-2">
                <ListIcon className="w-[17px] h-5" />
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5">
                  Sommaire
                </span>
              </div>
              <ChevronDownIcon className="w-6 h-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
