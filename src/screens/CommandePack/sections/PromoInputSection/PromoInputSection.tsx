import { ArrowRight } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

export const PromoInputSection = (): JSX.Element => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative flex-1">
        <Input
          placeholder="Code promo :"
          className="h-12 px-4 bg-white border-none rounded-[62px] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] [font-family:'Open_Sans',Helvetica] text-sm text-[#1c1b1b] placeholder:text-[#6a6a6a]"
        />
      </div>
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-[#5d3ca4] hover:bg-[#4d2c94] flex-shrink-0"
      >
        <ArrowRight className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
};
