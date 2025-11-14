import React from "react";
import { DiagnosticsSection } from "../../../../components/shared";

const diagnosticsData = [
  {
    image: "/frame-403-5.svg",
    badge: "Nouveau",
    title: "Assistance technique pour la mise en conformité",
    description:
      "Bénéficiez d'une assistance technique fiable pour la mise en conformité de vos biens...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-7.svg",
    badge: "Nouveau",
    title: "Contrôles spécifiques, pollution des sols, PMR...",
    description:
      "Effectuez des contrôles spécifiques adaptés à vos besoins pour garantir la...",
    price: "à partir de 300€",
  },
  {
    image: "/frame-403-2.svg",
    badge: "Nouveau",
    title: "Suivi et veille réglementaire personnalisée",
    description:
      "Profitez d'un suivi et d'une veille réglementaire personnalisée pour rester...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-4.svg",
    badge: "Nouveau",
    title: "État des lieux locatif détaillé",
    description:
      "Réalisez des états des lieux complets et détaillés pour sécuriser chaque location...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-3.svg",
    badge: "Nouveau",
    title: "Diagnostics Vente & Location",
    description:
      "Assurez des transactions réglementaires grâce à des diagnostics complets : DPE...",
    price: "à partir de 100€",
  },
  {
    image: "/frame-403-6.svg",
    badge: "Nouveau",
    title: "Suivi et veille réglementaire personnalisée",
    description:
      "Profitez d'un suivi et d'une veille réglementaire personnalisée pour rester conforme en toute...",
    price: "à partir de 100€",
  },
];

export const NosSubsection = (): JSX.Element => {
  return (
    <DiagnosticsSection
      diagnostics={diagnosticsData}
      paddingTop="py-[65px]"
      subtitleHighlight="sereines"
    />
  );
};
