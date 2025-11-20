import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    icon: "/group.png",
    text: "Intervention rapide",
    iconWidth: "w-[31.69px]",
    iconHeight: "h-[27px]",
    paddingLeft: "pl-0",
  },
  {
    icon: "/group-1.png",
    text: "Fiable",
    iconWidth: "w-[23px]",
    iconHeight: "h-[29px]",
    paddingLeft: "pl-[7px]",
  },
  {
    icon: "/vector.svg",
    text: "Au meilleur prix",
    iconWidth: "w-[21px]",
    iconHeight: "h-[27px]",
    paddingLeft: "pl-2",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-10 pt-[60px] pb-0 px-4">
      <Card className="w-full border-0 shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-5 px-5 py-0 rounded-2xl">
          <div className="flex flex-col w-full items-start gap-[15px]">
            <h2 className="w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl tracking-[0] leading-[28.8px]">
              En tant que vendeur...
            </h2>

            <div className="inline-flex flex-col items-start gap-[26px]">
              <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-[20.8px]">
                Vous avez besoin de diagnostics précis, conformes et livrés
                rapidement pour sécuriser vos transactions et optimiser vos
                opérations. <br />
                Notre expertise vous garantit des rapports fiables et adaptés à
                vos besoins.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-[30px]">
            <div className="flex flex-col items-start justify-center gap-[9px] w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-[7px] ${feature.paddingLeft} pr-3.5 py-0 w-full`}
                >
                  <img
                    className={`${feature.iconWidth} ${feature.iconHeight}`}
                    alt={feature.text}
                    src={feature.icon}
                  />
                  <div className="[font-family:'Open_Sans',Helvetica] font-normal text-dark text-base tracking-[0] leading-[19.2px]">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
