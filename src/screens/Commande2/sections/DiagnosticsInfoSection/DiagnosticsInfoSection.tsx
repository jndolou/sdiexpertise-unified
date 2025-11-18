import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const progressSteps = [
  { label: "Infos\nlogement", active: true },
  { label: "Coordonnées", active: true },
  { label: "Rendez-vous", active: true },
  { label: "Paiement", active: false },
];

const standardSlots = [
  { time: "9h - 11h", selected: true },
  { time: "11 - 13h", selected: false },
  { time: "15 - 17h", selected: false },
];

const expressSlots = [
  { time: "7h - 9h", selected: false },
  { time: "17h 30 - 20h", selected: false },
];

export const DiagnosticsInfoSection = (): JSX.Element => {
  const [selectedStandardSlot, setSelectedStandardSlot] = useState("9h - 11h");
  const [selectedExpressSlot, setSelectedExpressSlot] = useState<string | null>(
    null,
  );
  const [expressReportChecked, setExpressReportChecked] = useState(false);

  return (
    <section className="flex flex-col w-full items-center gap-[9px] px-4 py-8 rounded-2xl overflow-hidden">
      <div className="flex flex-col items-start gap-[30px] w-full max-w-[361px]">
        <div className="flex flex-col items-end gap-[23px] w-full">
          <div className="flex flex-col items-start gap-[22px] w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-end gap-[21px] w-full">
                <div className="flex flex-wrap items-start gap-[12px_10px] w-full">
                  <nav className="inline-flex items-start gap-[9px]">
                    {progressSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`relative w-fit h-[27px] mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-xs tracking-[0] leading-[13.8px] whitespace-pre-line ${
                          step.active ? "text-[#1c1b1b]" : "text-[#a6a6a7]"
                        }`}
                      >
                        {step.label}
                      </div>
                    ))}
                  </nav>

                  <div className="flex flex-col w-full h-1.5 items-start gap-2.5 bg-[#ede4ff] border-[0.5px] border-solid border-[#875fda]">
                    <div className="relative w-[79%] h-1.5 bg-[#875fda]" />
                  </div>
                </div>
              </div>

              <h2 className="w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
                Votre rendez-vous :
              </h2>

              <div className="inline-flex flex-col items-end gap-[13px]">
                <div className="w-full gap-1.5 flex flex-col items-start">
                  <label className="w-full mt-[-1.00px] z-[1] [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                    Sélectionnez une date
                  </label>

                  <Select defaultValue="jeudi-8-juillet">
                    <SelectTrigger className="w-full h-11 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                      <SelectValue placeholder="Jeudi 8 juillet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jeudi-8-juillet">
                        Jeudi 8 juillet
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-end gap-[83px]">
            <div className="flex flex-col w-full items-start gap-[27px]">
              <div className="inline-flex flex-col items-start gap-4">
                <h2 className="w-full mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
                  Choisissez un créneau :
                </h2>

                <div className="inline-flex items-start gap-1.5">
                  <div className="flex flex-col w-[177px] items-start gap-[13px]">
                    <div className="gap-[9px] w-full flex flex-col items-start">
                      <div className="w-full z-[3] mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                        Créneaux standard
                      </div>

                      {standardSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className={`w-full h-11 justify-center rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                            selectedStandardSlot === slot.time
                              ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                              : "bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
                          }`}
                          onClick={() => {
                            setSelectedStandardSlot(slot.time);
                            setSelectedExpressSlot(null);
                          }}
                        >
                          <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm tracking-[0] leading-5">
                            {slot.time}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col w-[177px] items-start gap-[9px]">
                    <div className="flex w-full items-start gap-[3px]">
                      <span className="w-[126px] mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                        Créneaux express
                      </span>

                      <Badge className="h-[18px] gap-[5px] p-1.5 bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff]">
                        <span className="mt-[-3.50px] mb-[-1.50px] font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] leading-[var(--tags-mobile-line-height)] tracking-[var(--tags-mobile-letter-spacing)] whitespace-nowrap [font-style:var(--tags-mobile-font-style)]">
                          + 25€
                        </span>
                      </Badge>
                    </div>

                    <div className="gap-1.5 w-full flex flex-col items-start">
                      {expressSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full h-11 justify-center rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                          onClick={() => {
                            setSelectedExpressSlot(slot.time);
                            setSelectedStandardSlot("");
                          }}
                        >
                          <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-center text-sm tracking-[0] leading-5">
                            {slot.time}
                          </span>
                        </Button>
                      ))}

                      <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]">
                        Des créneaux réservés à nos clients express pour aller
                        plus vite, tôt le matin ou en soirée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full items-start justify-center gap-[15px] pl-[19px] pr-2.5 py-2.5 bg-[#efe7ff] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <div className="flex flex-col items-start gap-[3px] w-full">
                  <div className="flex items-center gap-2.5 w-full">
                    <Checkbox
                      id="express-report"
                      checked={expressReportChecked}
                      onCheckedChange={(checked) =>
                        setExpressReportChecked(checked as boolean)
                      }
                      className="w-2.5 h-2.5 border border-solid border-[#5d3ca4]"
                    />

                    <label
                      htmlFor="express-report"
                      className="flex-1 [font-family:'Ubuntu',Helvetica] font-bold text-base tracking-[0] leading-[19.2px] cursor-pointer"
                    >
                      <span className="text-black">
                        Je veux mon rapport sous 24h (option express){" "}
                      </span>
                      <span className="text-[#5d3ca4]">-</span>
                      <span className="text-black">&nbsp;</span>
                      <span className="text-[#5d3ca4]">50€</span>
                    </label>
                  </div>

                  <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px]">
                    Gagnez du temps, le rapport vous est envoyé par email
                    sécurisé le jour même de l&#39;intervention.
                  </p>
                </div>
              </div>
            </div>

            <Button className="h-12 gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0eef2]">
              <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                Payer et confirmer
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
