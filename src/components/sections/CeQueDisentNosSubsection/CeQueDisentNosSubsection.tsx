import React from "react";
import { Card, CardContent } from "../../ui/card";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";

const testimonials = [
  {
    initial: "M",
    name: "Moussa Kebaili",
    timeAgo: "il y a une semaine",
    rating: 5,
    review:
      "Très bonne expérience. Mr Sebaa est un excellent professionnel. Rapide, efficace, donne de très bons conseils. Rapport qualité/prix parfait. Je recommande SDI Expertise.",
  },
  {
    initial: "M",
    name: "Moussa Kebaili",
    timeAgo: "il y a une semaine",
    rating: 5,
    review:
      "Très bonne expérience. Mr Sebaa est un excellent professionnel. Rapide, efficace, donne de très bons conseils. Rapport qualité/prix parfait. Je recommande SDI Expertise.",
  },
  {
    initial: "M",
    name: "Moussa Kebaili",
    timeAgo: "il y a une semaine",
    rating: 5,
    review:
      "Très bonne expérience. Mr Sebaa est un excellent professionnel. Rapide, efficace, donne de très bons conseils. Rapport qualité/prix parfait. Je recommande SDI Expertise.",
  },
];

export const CeQueDisentNosSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-8 pt-0 pb-[65px] px-4">
      <header className="flex items-center gap-2 w-full">
        <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-2xl tracking-[0] leading-[28.8px] whitespace-nowrap">
          Ce que disent nos clients
        </h2>
      </header>

      <ScrollArea className="w-full">
        <div className="flex items-start gap-4 px-4 py-1">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[257px] h-[148px] rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="flex flex-col items-start gap-2 p-4 h-full">
                <div className="flex items-start gap-2 w-full">
                  <div className="flex flex-col w-[50px] h-[50px] items-center justify-center gap-[5px] p-4 rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff80,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb80] bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(201,173,255,1)_0%,rgba(201,173,255,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <div className="[text-shadow:1px_2px_4px_#0d04151a] [font-family:'DynaPuff',Helvetica] font-bold text-[#8df981] text-3xl tracking-[0] leading-[36.0px] whitespace-nowrap">
                      {testimonial.initial}
                    </div>
                  </div>

                  <div className="flex flex-col h-[37px] items-start flex-1">
                    <div className="inline-flex items-center gap-0.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, starIndex) => (
                          <img
                            key={starIndex}
                            className="w-3 h-3 brightness-0"
                            alt="Star"
                            src="/star.svg"
                          />
                        ),
                      )}
                    </div>

                    <div className="self-stretch [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-lg tracking-[0] leading-[21.6px]">
                      {testimonial.name}
                    </div>

                    <div className="[font-family:'Pecita-Book',Helvetica] font-normal text-[#1c1b1b] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                      {testimonial.timeAgo}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-[5px] flex-1 self-stretch w-full">
                  <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-[10px] tracking-[0] leading-[normal]">
                    {testimonial.review}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
