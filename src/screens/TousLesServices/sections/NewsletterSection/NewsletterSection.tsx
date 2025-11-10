import { MailIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

export const NewsletterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-8 pt-0 pb-[33px] px-4 relative">
      <Card className="flex flex-col w-full items-start relative border border-solid border-[#aa7ffb] rounded-2xl overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
        <CardContent className="flex flex-col items-start gap-4 w-full p-4">
          <h2 className="relative self-stretch mt-[-0.50px] font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Inscrivez-vous à notre newsletter !
          </h2>

          <Badge className="flex w-full h-8 items-center gap-2.5 px-[13px] py-0 bg-lila rounded-[9px] hover:bg-lila">
            <span className="relative w-full h-2 [font-family:'Ubuntu',Helvetica] font-normal text-xs tracking-[0] leading-3 whitespace-nowrap">
              <span className="font-medium text-[#1c1b1b] leading-[21px]">
                10%*
              </span>
              <span className="font-medium text-[#7e3287] leading-[21px]">
                {" "}
                pour vous, des (bons) conseils et des promos !
              </span>
            </span>
          </Badge>

          <div className="inline-flex items-center gap-[13px] relative flex-[0_0_auto]">
            <Checkbox className="w-[17px] h-[17px] bg-white rounded border border-solid border-[#ebdcfb]" />
            <label className="relative w-[299px] mt-[-1.00px] font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
              J&#39;accepte d&#39;être recontacté.e et je consens au traitement
              de mes données personnelles
            </label>
          </div>

          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-0.5 relative flex-1 grow">
              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-2 pl-3 pr-2 py-0 relative self-stretch w-full flex-[0_0_auto] rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="inline-flex h-11 items-center px-0 py-4 relative flex-[0_0_auto]">
                    <MailIcon className="w-6 h-6 text-[#1c1b1b80]" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Entrez votre adresse email"
                    className="flex-col h-11 justify-center px-0 py-1.5 flex-1 grow rounded overflow-hidden border-0 bg-transparent font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[#1c1b1b80] text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>

            <Button className="relative flex-[0_0_auto] h-auto p-0 bg-transparent hover:bg-transparent border-0">
              <img
                className="relative flex-[0_0_auto] h-[71.73px] mt-[-8.94px] mb-[-14.80px] mr-[-11.87px]"
                alt="Bouton"
                src="/bouton-2.svg"
              />
            </Button>
          </div>

          <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-3">
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-2-mobile-line-height)] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)]">
              Votre adresse email sera{" "}
            </span>
            <span className="text-[#1c1b1b] leading-[15.6px]">
              uniquement util
            </span>
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-2-mobile-line-height)] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)]">
              isée pour vous envoyer nos newsletters. Vous pourrez vous
              désabonner via le lien intégré dans la newsletter.{" "}
            </span>
            <span className="text-[#5d3ca4] leading-[var(--paragraphe-2-mobile-line-height)] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)]">
              En savoir plus sur la gestion de vos données et vos droits.
            </span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
