import React from "react";
import { Button } from "../../components/ui/button";
import { DiagnosticResultsSection } from "./sections/DiagnosticResultsSection";
import { ProjectTypeSelectorSection } from "./sections/ProjectTypeSelectorSection";

export const Commande = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(..//commande-1.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-[844px] relative">
      <img
        className="absolute top-[195px] left-0 w-[393px] h-[649px]"
        alt="Formes dcoratives"
        src="/formes-d-coratives.png"
      />

      <header className="flex w-[395px] items-center justify-between pt-[50px] pb-4 px-4 fixed -top-px -left-px rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none z-50">
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
            className="w-10 h-10 rounded-[62px] p-2"
          >
            <img
              className="relative w-5 h-5"
              alt="Person"
              src="/person-1.svg"
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-[62px] p-2"
          >
            <img className="relative w-5 h-5" alt="Cart" src="/cart-1.svg" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-[#faf8fc] rounded-[62px] p-2 shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb]"
          >
            <img
              className="relative w-6 h-6"
              alt="Ellipsis horizontal"
              src="/ellipsis-horizontal.svg"
            />
          </Button>
        </div>
      </header>

      <main className="relative w-full pt-[100px]">
        <DiagnosticResultsSection />
        <ProjectTypeSelectorSection />
      </main>

      <footer className="flex flex-col w-[395px] items-start gap-12 pt-12 pb-32 px-8 relative mt-12 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[219px] h-[60px] object-cover"
            alt="Logo principal"
            src="/logo-principal-violet-7c5ed6-2x-1.png"
          />
        </div>
      </footer>
    </div>
  );
};
