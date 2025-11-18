import { ShoppingCartIcon, UserIcon, MenuIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderNavSection = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo_horizontal.png"
            alt="SDIExpertise"
            className="h-8"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <UserIcon className="w-5 h-5 text-[#1c1b1b]" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ShoppingCartIcon className="w-5 h-5 text-[#1c1b1b]" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <MenuIcon className="w-5 h-5 text-[#1c1b1b]" />
          </Button>
        </div>
      </nav>
    </header>
  );
};
