import React from "react";
import { FeaturedArticles } from "../../../../components/shared";

const newsArticles = [
  {
    id: 1,
    backgroundImage: "url(..//frame-374-3.png)",
    tags: ["Vendre", "Plomp"],
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
  {
    id: 2,
    backgroundImage: "url(..//frame-375-3.png)",
    tags: ["Vendre", "Plomp"],
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
  {
    id: 3,
    backgroundImage: "url(..//frame-376.png)",
    tags: ["Immobilier"],
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
];

export const NewsHighlightsSection = (): JSX.Element => {
  return (
    <FeaturedArticles
      title="Les articles à la une"
      subtitle="Nos contenus les plus"
      subtitleHighlight="utiles"
      subtitleEnd="pour bien vendre."
      articles={newsArticles}
      showButton={false}
      paddingTop="pt-16"
      paddingBottom="pb-16"
    />
  );
};
