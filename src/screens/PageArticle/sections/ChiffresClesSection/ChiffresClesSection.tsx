import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ChiffresClesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 px-4 py-[7px]">
      <Card className="w-full bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(105deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_77%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col items-center gap-5 px-5 py-10">
          <div className="inline-flex flex-col items-center gap-[15px]">
            <img
              className="w-[46.51px] h-[37.8px]"
              alt="Group"
              src="/group-2.png"
            />

            <h3 className="w-full max-w-[317px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl text-center tracking-[0] leading-[28.8px]">
              80 % des logements sont classés D ou moins au DPE.
            </h3>

            <p className="w-full max-w-[325px] [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base text-center tracking-[0] leading-[20.8px]">
              Un mauvais DPE a fait chuter le prix de vente d&apos;un bien de 12
              %.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
