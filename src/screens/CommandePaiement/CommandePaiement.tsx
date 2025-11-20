import React from "react";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/layout/Header";
import { AppointmentDetailsSection } from "./sections/AppointmentDetailsSection";
import { ConfirmationSection } from "./sections/ConfirmationSection";
import { PaymentMethodSection } from "./sections/PaymentMethodSection";
import { PaymentOptionsSection } from "./sections/PaymentOptionsSection";
import { PaymentSummarySection } from "./sections/PaymentSummarySection";
import { UserActionSection } from "./sections/UserActionSection";
import { UserCredentialsSection } from "./sections/UserCredentialsSection";
import { UserInfoSection } from "./sections/UserInfoSection";

export const CommandePaiement = (): JSX.Element => {
  return (
    <div className="w-full min-w-[393px] flex flex-col relative [background:url(/grid.jpeg)_center_/_180%]">
      <Header />

      <main className="flex flex-col w-full items-center gap-[9px] px-4 py-8 pt-[130px] z-[2]">
        <PaymentMethodSection />
        <ConfirmationSection />
      </main>
    </div>
  );
};
