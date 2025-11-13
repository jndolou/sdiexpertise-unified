import React from "react";
import { FeaturedArticles } from "../../shared";

export const ActualitsPourLesSubsection = ({
  title = "Articles à la une",
}: {
  title?: string;
}): JSX.Element => {
  return <FeaturedArticles title={title} />;
};
