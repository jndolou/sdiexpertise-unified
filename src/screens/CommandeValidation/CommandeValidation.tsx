import { MoreHorizontalIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/layout/Header";

export const CommandeValidation = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_55%] w-full min-w-[393px] min-h-[836px] relative">
      <Header />

      <main className="flex flex-col items-center gap-[9px] px-4 py-8 pt-[120px]">
        <div className="flex flex-col items-center gap-[30px] w-full max-w-md">
          <Card className="flex flex-col items-center gap-[30px] w-full border border-solid border-[#aa7ffb] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] rounded-xl">
            <CardContent className="flex w-full flex-col items-center justify-center gap-[15px] p-6">
              <h1 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl text-center tracking-[0] leading-[28.8px]">
                Merci ! <br />
                <br />
                Votre commande a bien été enregistrée.
              </h1>

              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-xs text-center tracking-[0] leading-[15.6px]">
                Vous allez recevoir vos accès par mail.
              </p>

              <div className="flex items-center w-full">
                <Card className="flex w-full items-center gap-[7px] bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <CardContent className="flex items-center gap-[9px] w-full p-2.5">
                    <img
                      className="w-[62px] h-[59px]"
                      alt="Frame"
                      src="/frame-403.svg"
                    />

                    <div className="inline-flex items-center gap-[29px]">
                      <div className="flex flex-col items-start justify-center">
                        <div className="[font-family:'Ubuntu',Helvetica] font-normal text-dark text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                          <span className="font-bold">
                            Diagnostic électricité
                            <br />
                          </span>
                          <span className="[font-family:'Pecita-Regular',Helvetica] text-[23px] leading-[26.4px]">
                            300€
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col items-center justify-center gap-3.5 w-full">
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-5">
                  Un spécialiste arrivera le 10/07/2025 - <br />
                  entre 13h et 15h. <br />
                  Il vous appellera avant son arrivée au logement.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-end justify-center gap-[87px] w-full mt-[200px]">
            <Button
              onClick={() => navigate('/')}
              className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324]">
              <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Retour à la page d&apos;accueil
              </span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
