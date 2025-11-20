import React from "react";

const contentBlocks = [
  {
    id: "ptz-definition",
    title: "Le prêt à taux zéro, qu'est-ce que c'est ?",
    content: `Le prêt à taux zéro, ou PTZ, est un dispositif gouvernemental visant à faciliter l'accession à la propriété pour les ménages aux revenus modestes. En essence, le PTZ est un prêt accordé par l'État, exempt de tout taux d'intérêt. Concrètement, les emprunteurs ne remboursent que le montant initial emprunté, sans frais d'intérêt supplémentaires.

Il convient de souligner que l'éligibilité au PTZ n'est pas universelle et dépend de critères spécifiques. Des éléments tels que la composition du foyer, la localisation géographique du logement à acquérir, ainsi que le niveau de revenus, sont des facteurs déterminants pour bénéficier de ce prêt avantageux. 

Les personnes qui n'ont pas été propriétaires de leur résidence principale au cours des 2 dernières années précédant leur demande peuvent actuellement bénéficier du PTZ. Il peut financer jusqu'à 40 % du montant total de l'achat immobilier et doit obligatoirement être couplé à une assurance emprunteur. Ces conditions précises soulignent l'orientation du PTZ vers un soutien ciblé aux primo-accédants, renforçant ainsi son rôle dans la promotion de l'accession à la propriété.`,
  },
  {
    id: "ptz-2024",
    title: "PTZ 2024, un total revirement",
    content: `Le prêt à taux zéro, ou PTZ, est un dispositif gouvernemental visant à faciliter l'accession à la propriété pour les ménages aux revenus modestes. En essence, le PTZ est un prêt accordé par l'État, exempt de tout taux d'intérêt. Concrètement, les emprunteurs ne remboursent que le montant initial emprunté, sans frais d'intérêt supplémentaires.

Il convient de souligner que l'éligibilité au PTZ n'est pas universelle et dépend de critères spécifiques. Des éléments tels que la composition du foyer, la localisation géographique du logement à acquérir, ainsi que le niveau de revenus, sont des facteurs déterminants pour bénéficier de ce prêt avantageux.`,
  },
];

export const ContenuWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[30px] pt-[65px] px-4">
      <div className="flex flex-col w-full max-w-[361px] items-start gap-[33px]">
        {contentBlocks.map((block, index) => (
          <article
            key={index}
            className="flex flex-col items-start gap-7 w-full"
          >
            <h2 id={block.id} className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              {block.title}
            </h2>

            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] whitespace-pre-line">
              {block.content}
            </p>
          </article>
        ))}
      </div>

      <figure className="flex flex-col w-full max-w-[271px] items-start gap-2.5">
        <img
          className="w-full h-auto rounded-[34px] object-cover"
          alt="Polygon"
          src="/polygon-4.png"
        />
      </figure>
    </section>
  );
};
