import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const ActionButtonsSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="flex w-full items-center justify-between gap-4">
      <Button
        onClick={() => navigate('/commande-paiement')}
        className="flex-1 h-12 flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f5f3f7] text-[#1c1b1b] [font-family:'Ubuntu',Helvetica] font-bold text-base">
        <ShoppingCartIcon className="w-[17.92px] h-[15.21px]" />
        Commander
      </Button>

      <Button
        variant="outline"
        className="flex-1 h-12 flex items-center justify-center gap-2 px-4 py-3 rounded-[62px] border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)] text-[#5d3ca4] [font-family:'Ubuntu',Helvetica] font-medium text-base relative"
      >
        Télécharger le devis
      </Button>
    </section>
  );
};
