import { ArrowRightIcon, MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";
import { Input } from "../../ui/input";

export const NewsletterSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-8 pt-0 pb-[33px] px-4">
      <div className="flex flex-col w-full items-start">
        <Card className="w-full border border-solid border-[#aa7ffb] rounded-2xl overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
          <CardContent className="items-start gap-4 p-4 flex flex-col">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Inscrivez-vous à notre newsletter !
            </h2>

            <div className="flex w-full h-8 items-center justify-center gap-2.5 px-[13px] py-0 bg-lila rounded-[9px]">
              <p className="flex items-center justify-center [font-family:'Ubuntu',Helvetica] font-normal text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="font-medium text-[#1c1b1b]">
                  10%*
                </span>
                <span className="font-medium text-[#7e3287]">
                  {" "}
                  pour vous, des (bons) conseils et des promos !
                </span>
              </p>
            </div>

            <div className="inline-flex items-center gap-[13px]">
              <Checkbox className="w-[17px] h-[17px] bg-white rounded border border-solid border-[#ebdcfb]" />
              <label className="w-[299px] font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                J&#39;accepte d&#39;être recontacté.e et je consens au
                traitement de mes données personnelles
              </label>
            </div>

            <div className="flex items-center gap-2.5 w-full">
              <div className="flex flex-col items-start gap-0.5 flex-1">
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex items-start gap-2 pl-3 pr-2 py-0 w-full rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
                    <div className="inline-flex h-11 items-center px-0 py-4">
                      <MailIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-col h-11 justify-center px-0 py-1.5 flex-1 rounded overflow-hidden flex items-start">
                      <Input
                        type="email"
                        placeholder="Entrez votre adresse email"
                        className="w-full border-0 bg-transparent font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[#1c1b1b80] text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button
                className="h-12 w-12 p-0 rounded-full bg-[#aa7ffb] hover:bg-[#9966ea]"
                size="icon"
              >
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </Button>
            </div>

            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-xs tracking-[0] leading-3">
              <span className="text-[#1c1b1b] leading-[var(--paragraphe-2-mobile-line-height)] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)]">
                Votre adresse email sera uniquement utilisée pour vous envoyer
                nos newsletters. Vous pourrez vous désabonner via le lien
                intégré dans la newsletter.{" "}
              </span>
              <span className="text-[#5d3ca4] leading-[var(--paragraphe-2-mobile-line-height)] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)]">
                En savoir plus sur la gestion de vos données et vos droits.
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
