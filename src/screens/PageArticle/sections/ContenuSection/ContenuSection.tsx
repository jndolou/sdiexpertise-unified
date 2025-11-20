import React from "react";
import { Button } from "../../../../components/ui/button";

const contentBlocks = [
  {
    id: "economies-energie",
    title: "Des économies sur vos\nfactures d'énergie",
    description:
      "En identifiant les points faibles de votre habitation, notre diagnostic vous permet de réaliser des économies significatives sur vos dépenses énergétiques.",
    image: "/polygon-3-1.png",
    buttonText: "Faire des économies aujourd'hui",
    imagePosition: "right",
  },
  {
    id: "valoriser-bien",
    title: "Valorisez votre bien immobilier sur le marché",
    description:
      "Un bon DPE augmente l'attractivité de votre bien auprès des acheteurs et locataires potentiels, facilitant ainsi vos transactions immobilières.",
    image: "/polygon-3-2.png",
    buttonText: "J'augmente la valeur de mon bien",
    imagePosition: "left",
  },
];

export const ContenuSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[45px] py-[65px] px-0">
      <div className="flex flex-col items-start gap-[50px] px-4 w-full max-w-[393px]">
        {contentBlocks.map((block, index) => (
          <article
            key={index}
            className="flex flex-col items-start gap-[25px] w-full"
          >
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-start gap-8 w-full">
                <div className="flex flex-col items-start gap-[15px] w-full">
                  <h2 id={block.id} className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)] whitespace-pre-line">
                    {block.title}
                  </h2>
                </div>
              </div>

              <div
                className={`flex items-center justify-center gap-2.5 w-full ${block.imagePosition === "left" ? "flex-row-reverse" : "flex-row"}`}
              >
                <p className="flex-1 font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                  {block.description}
                </p>

                <img
                  className="w-[155.61px] h-[184.19px] rounded-[22px] object-cover flex-shrink-0"
                  alt="Illustration"
                  src={block.image}
                />
              </div>
            </div>

            <div className="flex w-full items-end justify-center">
              <Button
                className="h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] hover:bg-[#f0eef2]"
                variant="ghost"
              >
                {block.buttonText}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
