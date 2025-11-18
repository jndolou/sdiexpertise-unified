import { MoreHorizontalIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navigationLinks = [
  { label: "Page principale" },
  { label: "Accès pro" },
  { label: "Plan du site" },
  { label: "Zones d'interventions", hasChevron: true },
  { label: "Tous nos services", hasChevron: true },
  { label: "Ordre de mission" },
  { label: "Mon projet" },
  { label: "Ressources" },
  { label: "Actualités" },
  { label: "Qui sommes nous ?" },
];

const contactSchedule = [
  { day: "Lundi à vendredi", hours: "8:00 - 19:00" },
  { day: "Samedi", hours: "9:00 - 18:00" },
];

const contactMethods = [
  {
    label: "Par téléphone",
    details: ["01 71 68 17 97", "06 79 87 60 08"],
  },
  {
    label: "Par mail",
    details: ["email@entreprise.com"],
  },
];

const legalLinks = ["Mentions légales", "Cookies", "CGV"];

export const CommandeValidation = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[#f3f1f7] w-full min-w-[393px] min-h-[836px] relative">
      <header className="flex w-full items-center justify-between pt-[50px] pb-4 px-4 fixed top-0 left-0 z-50 rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="inline-flex items-center gap-2">
          <img
            className="w-[170px] h-8 object-cover"
            alt="Logo horizontal"
            src="/logo-horizontal-condense--violet-fonce--2x-1.png"
          />
        </div>

        <div className="flex items-center justify-end gap-2">
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
            <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324]">
              <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                Retour à la page d&apos;accueil
              </span>
            </Button>
          </div>
        </div>
      </main>

      <footer className="flex flex-col w-full items-start gap-12 pt-12 pb-32 px-8 mt-20 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="flex items-center gap-2 w-full">
          <img
            className="w-full max-w-[200px] h-auto object-cover"
            alt="Logo principal"
            src="/logo-principal-violet-7c5ed6-2x-1.png"
          />
        </div>

        <nav className="flex flex-col items-start gap-6 w-full">
          {navigationLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-1.5 flex-1">
                <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  {link.label}
                </div>
              </div>
              {link.hasChevron && (
                <img
                  className="w-4 h-4"
                  alt="Chevron forward"
                  src="/chevron-forward.svg"
                />
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-start justify-between w-full">
          <div className="inline-flex items-center gap-1">
            <UserIcon className="w-5 h-5" />
            <div className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Mon Espace
            </div>
          </div>

          <div className="inline-flex items-center gap-1">
            <ShoppingCartIcon className="w-5 h-5" />
            <div className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Mon Panier
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-[15px]">
          <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px]">
              Contactez-nous
            </span>
          </Button>

          <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324]">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
              Obtenir un devis
            </span>
          </Button>
        </div>

        <div className="flex flex-col items-start justify-center gap-[23px] w-full">
          <div className="flex items-center gap-1.5">
            <img className="w-5 h-5" alt="Flash" src="/flash.svg" />
            <div className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Simuler mon DPE
            </div>
          </div>

          <div className="inline-flex items-start justify-center gap-2">
            <img className="w-5 h-5" alt="Cash" src="/cash.svg" />
            <div className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Estimer la valeur de mon bien
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            Contactez-nous
          </h3>

          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              {contactSchedule.map((schedule, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-start gap-2"
                >
                  <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                    {schedule.day}
                  </div>
                  <div className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] leading-[var(--paragraphe-2-desktop-line-height)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]">
                    {schedule.hours}
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-start gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-start gap-2"
                >
                  <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                    {method.label}
                  </div>
                  {method.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-start justify-center gap-4 w-full">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                    |
                  </div>
                )}
                <div className="inline-flex justify-center items-center gap-1">
                  <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] whitespace-nowrap [font-style:var(--parahraphe-3-font-style)]">
                    {link}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)] w-full">
            ©2025 SDIExpertise®
          </div>
        </div>
      </footer>
    </div>
  );
};
