import React from "react";
import { TrustedBySection } from "../../../../components/shared";

const extendedCategories = [
  { value: "industrie", label: "Industrie" },
  { value: "agro", label: "Agro alimentaire" },
  { value: "hotellerie", label: "Hôtellerie" },
  { value: "tertiaire", label: "Tertiaire" },
  { value: "public", label: "Public" },
  { value: "logements", label: "Logements" },
  { value: "commerciaux", label: "Centre commerciaux" },
  { value: "logistiques", label: "Logistiques" },
];

export const IlsNousFontSubsection = (): JSX.Element => {
  return (
    <TrustedBySection
      categories={extendedCategories}
      paddingTop="pt-[60px]"
      paddingBottom="pb-[18px]"
      useToggleGroup={false}
      logoFrameSrc="/frame-133.svg"
    />
  );
};
