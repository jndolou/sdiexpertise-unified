import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const regulationsData = [
  {
    icon: "/vector-4.svg",
    polygonBg: "/polygon-7.svg",
    title: "Sécurité des occupants",
    description:
      "Protégez les résidents, les visiteurs et les artisans en identifiant les risques liés à l'amiante, au plomb, au gaz ou àl'électricité. L'amiante, au plomb, au gaz ou à l'électricité.",
    highlight: "Un diagnostic fiable = \nun environnement sûr.",
  },
  {
    icon: "/vector-1.svg",
    polygonBg: "/polygon-7.svg",
    title: "Conformité réglementaires",
    description:
      "Respectez les exigences du Code de la santé publique et du Code de la construction et de l'habitation",
    highlight:
      "Évitez sanctions, litiges et blocages lors de la vente ou de la location.",
  },
  {
    icon: "/frame-357.svg",
    polygonBg: null,
    title: "Valorisation du bien",
    description:
      "Un bien bien diagnostiqué est un bien plus attractif, plus transparent et plus rapidement vendu ou loué.",
    highlight: "Les acheteurs et locataires y voient un gage de sérieux.",
  },
  {
    icon: "/frame-357-1.svg",
    polygonBg: null,
    title: "Anticipation des travaux",
    description:
      "Identifiez les anomalies techniques avant qu'elles ne deviennent des urgences.",
    highlight: "Planifiez sereinement vos rénovations ou mises en conformité.",
  },
];

export const RegulationsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 py-8 px-4">
      <div className="flex flex-col w-full max-w-[357px] items-center gap-3.5">
        {regulationsData.map((item, index) => (
          <div key={index} className="relative w-full">
            <Card className="mt-[59px] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <CardContent className="flex flex-col items-center justify-center gap-5 pt-[30px] pb-[25px] px-5">
                <div className="inline-flex flex-col items-start gap-[15px] w-full max-w-[317px]">
                  <h3 className="w-full font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {item.title}
                  </h3>

                  <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {item.description}
                  </p>

                  <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#7e3287] text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] whitespace-pre-line">
                    {item.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex w-[86px] h-20 items-center justify-center gap-2.5 px-[26px] py-[21px]">
              {item.polygonBg ? (
                <>
                  <img
                    className="absolute top-px left-1.5 w-[74px] h-[78px]"
                    alt="Polygon"
                    src={item.polygonBg}
                  />
                  <img
                    className="relative z-10"
                    style={{
                      width:
                        index === 0 ? "21px" : index === 1 ? "28px" : "auto",
                      height:
                        index === 0 ? "27.56px" : index === 1 ? "28px" : "auto",
                    }}
                    alt="Icon"
                    src={item.icon}
                  />
                </>
              ) : (
                <img className="w-[86px] h-20" alt="Icon" src={item.icon} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
