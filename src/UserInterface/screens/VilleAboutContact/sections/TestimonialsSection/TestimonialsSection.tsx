import React from "react";
import { TestimonialsSection as SharedTestimonialsSection } from "../../../../components/shared";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <SharedTestimonialsSection
      paddingTop="pt-[60px]"
      paddingBottom="pb-2.5"
      useScrollArea={false}
    />
  );
};
