import { ShoppingCartIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const ActionButtonsSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState<'commander' | 'telecharger' | null>(null);

  const handleCommanderClick = () => {
    setSelectedAction('commander');
    navigate('/commande-paiement');
  };

  const handleTelechargerClick = () => {
    setSelectedAction('telecharger');
  };

  return (
    <section className="flex w-full items-center justify-between gap-4">
      <Button
        onClick={handleCommanderClick}
        className={`flex-1 h-12 flex items-center justify-center gap-2 px-4 py-3 rounded-[62px] [font-family:'Ubuntu',Helvetica] font-bold text-base transition-all ${
          selectedAction === 'commander'
            ? 'bg-[#5d3ca4] text-white shadow-[0px_4px_12px_rgba(93,60,164,0.4)]'
            : 'bg-[#faf8fc] text-[#1c1b1b] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f5f3f7]'
        }`}
      >
        <ShoppingCartIcon className="w-[17.92px] h-[15.21px]" />
        Commander
      </Button>

      <Button
        variant="outline"
        onClick={handleTelechargerClick}
        className={`flex-1 h-12 flex items-center justify-center gap-2 px-4 py-3 rounded-[62px] border-[none] [font-family:'Ubuntu',Helvetica] font-medium text-base relative transition-all ${
          selectedAction === 'telecharger'
            ? 'bg-[#5d3ca4] text-white shadow-[0px_4px_12px_rgba(93,60,164,0.4)]'
            : 'shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[\'\'] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)] text-[#5d3ca4]'
        }`}
      >
        Télécharger le devis
      </Button>
    </section>
  );
};
