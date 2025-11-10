import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const resourcesData = [
  {
    id: 1,
    image: "/frame-403-12.svg",
    badge: "Nouveau",
    title: "Le guide pratique du DPE",
    description: "Tout savoir sur le diagnostic de performance énergétique.",
    date: "28 fev. 2025",
  },
  {
    id: 2,
    image: "/frame-403-13.svg",
    badge: "Nouveau",
    title: "Le guide pratique du DPE",
    description: "Tout savoir sur le diagnostic de performance énergétique.",
    date: "28 fev. 2025",
  },
  {
    id: 3,
    image: "/frame-403-4.svg",
    badge: "Nouveau",
    title: "Le guide pratique du DPE",
    description: "Tout savoir sur le diagnostic de performance énergétique.",
    date: "28 fev. 2025",
  },
  {
    id: 4,
    image: "/frame-403-2.svg",
    badge: "Nouveau",
    title: "Le guide pratique du DPE",
    description: "Tout savoir sur le diagnostic de performance énergétique.",
    date: "28 fev. 2025",
  },
];

export const NosSubsection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-[65px] flex flex-col items-start gap-2.5">
      <div className="w-full flex flex-col items-start gap-8">
        <header className="flex flex-col w-full items-start justify-center gap-[15px]">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Nos ressources
          </h2>
        </header>

        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-start gap-[15px] pb-4">
            {resourcesData.map((resource) => (
              <Card
                key={resource.id}
                className="flex-shrink-0 w-[222px] h-[349px] bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(135,94,218,1)_26%,rgba(135,94,218,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="p-4 h-full flex flex-col gap-[15px]">
                  <img
                    className="w-full h-[158px] object-cover"
                    alt="Resource thumbnail"
                    src={resource.image}
                  />

                  <div className="flex flex-col items-start gap-2">
                    <Badge className="h-auto px-1.5 py-1.5 bg-[#a97ffb] rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-[#a97ffb]">
                      <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#f3f1f5] text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {resource.badge}
                      </span>
                    </Badge>

                    <h3 className="w-full [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-lg tracking-[0] leading-[21.6px]">
                      {resource.title}
                    </h3>

                    <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-xs tracking-[0] leading-[normal]">
                      {resource.description}
                    </p>

                    <div className="flex items-center gap-2 w-full">
                      <time className="[font-family:'Pecita-Book',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[normal]">
                        {resource.date}
                      </time>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2.5 w-full">
          <Button className="h-12 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef4]">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              Toutes les ressources
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
