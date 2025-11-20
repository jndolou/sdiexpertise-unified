import { Article } from '../../../Domain/Models';

export const articlesMock: Article[] = [
  {
    id: 1,
    tag: "Immobilier",
    title: "Dernières évolutions réglementaires en diagnostic immobilier",
    excerpt:
      "La gestion des eaux usées évolue avec des réglementations renforcées pour plusieurs...",
    author: "R. Lebon",
    date: "25/04/25",
  },
  {
    id: 2,
    tag: "Immobilier",
    title: "DPE : Nouvelles exigences pour 2025",
    excerpt:
      "Le diagnostic de performance énergétique connaît de nouvelles évolutions importantes...",
    author: "M. Sebaa",
    date: "18/04/25",
  },
  {
    id: 3,
    tag: "Réglementation",
    title: "Amiante et plomb : ce qui change",
    excerpt:
      "Focus sur les nouvelles obligations en matière de diagnostic amiante et plomb...",
    author: "R. Lebon",
    date: "10/04/25",
  },
  {
    id: 4,
    tag: "Expertise",
    title: "L'importance du bureau d'études technique",
    excerpt:
      "Découvrez pourquoi faire appel à un bureau d'études est essentiel pour vos projets...",
    author: "A. Dupont",
    date: "05/04/25",
  },
];
