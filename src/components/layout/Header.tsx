import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { SideMenu } from "./SideMenu";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex w-full items-center justify-between pt-[50px] pb-4 px-4 fixed top-0 left-0 z-50 rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <Link to="/">
            <img
              className="relative w-[170px] h-8 object-cover"
              alt="Logo horizontal"
              src="/logo copy copy.png"
            />
          </Link>
        </div>

        <nav className="flex items-center justify-end gap-2 relative flex-1 grow">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-2 rounded-[62px]"
          >
            <img className="relative w-5 h-5" alt="Person" src="/person.svg" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-2 rounded-[62px]"
          >
            <img className="relative w-5 h-5" alt="Cart" src="/cart.svg" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 p-2 bg-[#faf8fc] rounded-[62px] shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb]"
            onClick={() => setIsMenuOpen(true)}
          >
            <img
              className="relative w-6 h-6"
              alt="Ellipsis horizontal"
              src="/ellipsis-horizontal.svg"
            />
          </Button>
        </nav>
      </header>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
