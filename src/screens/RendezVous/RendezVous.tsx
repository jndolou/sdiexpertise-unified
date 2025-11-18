import { MoreHorizontalIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { AppointmentConfirmationSection } from "./sections/AppointmentConfirmationSection";
import { DateSelectionSection } from "./sections/DateSelectionSection";
import { DiagnosticsSection } from "./sections/DiagnosticsSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PaymentOptionsSection } from "./sections/PaymentOptionsSection";
import { ProgressIndicatorSection } from "./sections/ProgressIndicatorSection";
import { UserInfoSection } from "./sections/UserInfoSection";

export const RendezVous = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(..//commande-9.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-screen flex flex-col relative">
      <header className="flex z-[4] w-full items-center justify-between pt-[50px] pb-4 px-4 fixed top-0 left-0 rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-[170px] h-8 object-cover"
            alt="Logo horizontal"
            src="/logo-horizontal-condense--violet-fonce--2x-1.png"
          />
        </div>

        <div className="flex items-center justify-end gap-2 relative flex-1 grow">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-[62px]"
          >
            <UserIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-[62px]"
          >
            <ShoppingCartIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-[#faf8fc] rounded-[62px] shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb]"
          >
            <MoreHorizontalIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>

      <main className="flex flex-col w-full pt-[110px]">
        <DiagnosticsSection />

        <footer className="flex w-full relative flex-col items-start gap-12 pt-12 pb-32 px-8 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[219px] h-[60px] object-cover"
              alt="Logo principal"
              src="/logo-principal-violet-7c5ed6-2x-1.png"
            />
          </div>

          <AppointmentConfirmationSection />
          <NavigationSection />
          <UserInfoSection />
          <DateSelectionSection />
          <ProgressIndicatorSection />
          <PaymentOptionsSection />
        </footer>
      </main>
    </div>
  );
};
