import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";

const progressSteps = [
  { id: 1, label: "Infos\nlogement", active: false },
  { id: 2, label: "Coordonnées", active: false },
  { id: 3, label: "Rendez-vous", active: true },
  { id: 4, label: "Paiement", active: false, disabled: true },
];

const footerLinks = [
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
    type: "Par téléphone",
    details: ["01 71 68 17 97", "06 79 87 60 08"],
  },
  {
    type: "Par mail",
    details: ["email@entreprise.com"],
  },
];

const legalLinks = ["Mentions légales", "Cookies", "CGV"];

const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

const calendarDates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
];

export const Commande3 = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(10);
  const [expressOption, setExpressOption] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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
        <div className="flex flex-col items-start gap-[30px] w-full max-w-md">
          <div className="flex flex-col items-end gap-[23px] w-full">
            <div className="flex flex-col items-start gap-[22px] w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-end gap-[21px] w-full">
                  <div className="flex flex-wrap items-start gap-[12px_10px] w-full">
                    <div className="inline-flex items-start gap-[9px]">
                      {progressSteps.map((step) => (
                        <div
                          key={step.id}
                          className={`[font-family:'Ubuntu',Helvetica] font-bold text-xs tracking-[0] leading-[13.8px] whitespace-pre-line ${
                            step.disabled
                              ? "text-[#a6a6a7]"
                              : step.active
                                ? "text-[#1c1c1c]"
                                : "text-[#1c1b1b]"
                          }`}
                        >
                          {step.label}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col w-full h-[10px] items-start gap-2.5 bg-[#ede4ff] border-[0.5px] border-solid border-[#875fda] rounded">
                      <div className="bg-[#875fda] w-[75%] h-full rounded" />
                    </div>
                  </div>
                </div>

                <h1 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
                  Votre rendez-vous :
                </h1>

                <div className="inline-flex flex-col items-end gap-[13px] w-full">
                  <div className="flex flex-col items-start gap-1.5 w-full relative">
                    <label className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                      Sélectionnez une date
                    </label>

                    <button
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                      className="relative flex items-center justify-between w-full h-11 px-3 py-2 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:pointer-events-none text-[#1c1b1b] text-sm z-10"
                    >
                      <span className="relative z-10">Jeudi 8 juillet</span>
                      <svg
                        className="relative z-10 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isCalendarOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-50 flex flex-col items-center gap-4 w-full p-4 rounded-xl border border-solid border-[#aa7ffb] bg-white shadow-lg backdrop-blur-[15px]">
                    <div className="flex items-center justify-between w-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto p-0"
                      >
                        <ChevronLeftIcon className="w-6 h-6" />
                      </Button>
                      <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px]">
                        Juillet 2025
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto p-0"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </Button>
                    </div>

                    <div className="w-full">
                      <div className="grid grid-cols-7 gap-2 mb-2">
                        {weekDays.map((day, index) => (
                          <div
                            key={index}
                            className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-[11px] tracking-[0] leading-[14.3px] text-center"
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-2">
                        {calendarDates.map((date) => (
                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`[font-family:'Open_Sans',Helvetica] font-normal text-sm tracking-[0] leading-[18.2px] text-center p-2 rounded-[7px] ${
                              selectedDate === date
                                ? "bg-[#c1a0ff] text-[#1c1b1b]"
                                : "text-[#1c1b1b]"
                            }`}
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-col items-end gap-[83px] w-full">
              <div className="flex flex-col items-start gap-[27px] w-full">
                <div className="inline-flex flex-col items-start gap-4 w-full">
                  <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
                    Choisissez un créneaux :
                  </h2>

                  <div className="inline-flex items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start gap-[13px] flex-1">
                      <div className="flex flex-col items-start gap-[9px] w-full">
                        <label className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                          Créneaux standard
                        </label>

                        <div className="flex flex-col items-center justify-center gap-1 w-full">
                          <div className="flex items-center justify-center gap-2 w-full px-3 py-1.5 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                            <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5">
                              9h - 17h
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-[9px] flex-1">
                      <div className="flex items-start gap-[3px]">
                        <label className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                          Créneaux express
                        </label>

                        <div className="inline-flex items-center justify-center gap-[5px] px-1.5 py-1 bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff]">
                          <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] leading-[var(--tags-mobile-line-height)] tracking-[var(--tags-mobile-letter-spacing)] [font-style:var(--tags-mobile-font-style)]">
                            + 25€
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-1.5 w-full">
                        <div className="flex flex-col items-start gap-0.5 w-full">
                          <div className="flex items-start gap-2 w-full px-3 py-1.5 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                            <div className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 text-center">
                              7h - 9h / 17h 30 - 20h
                            </div>
                          </div>
                        </div>

                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                          Des créneaux réservés à nos clients express pour aller
                          plus vite, tôt le matin ou en soirée.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-[15px] w-full px-[19px] py-2.5 bg-[#efe7ff] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="flex flex-col items-start gap-[3px] w-full">
                    <div className="flex items-center gap-2.5 w-full">
                      <Checkbox
                        id="express-option"
                        checked={expressOption}
                        onCheckedChange={(checked) =>
                          setExpressOption(checked as boolean)
                        }
                        className="border border-solid border-[#5d3ca4]"
                      />

                      <label
                        htmlFor="express-option"
                        className="[font-family:'Ubuntu',Helvetica] font-bold text-base tracking-[0] leading-[19.2px] cursor-pointer"
                      >
                        <span className="text-black">
                          Je veux mon rapport sous 24h (option express){" "}
                        </span>
                        <span className="text-[#5d3ca4]">- 50€</span>
                      </label>
                    </div>

                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px]">
                      Gagnez du temps, le rapport vous est envoyé par email
                      sécurisé le jour même de l&apos;intervention.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="inline-flex h-auto items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324]">
                <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                  Payer et confirmer
                </span>
                <ArrowRightIcon className="w-6 h-6" />
              </Button>
            </div>
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
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-1.5 flex-1">
                <div className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  {link.label}
                </div>
              </div>
              {link.hasChevron && <ChevronRightIcon className="w-4 h-4" />}
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
                  <div
                    className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] leading-[var(--paragraphe-2-desktop-line-height)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] whitespace-nowrap [font-style:var(--paragraphe-2-desktop-font-style)]"
                  >
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
                    {method.type}
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
