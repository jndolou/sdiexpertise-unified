import React, { useState } from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

const steps = [
  { label: "Infos\nlogement", active: true },
  { label: "Coordonnées", active: true },
  { label: "Rendez-vous", active: false },
  { label: "Paiement", active: false },
];

const formFields = [
  { label: "Prénom*", value: "Jean", type: "text" },
  { label: "Nom*", value: "Lebon", type: "text" },
  { label: "Email*", value: "jean.lebon@gmail.com", type: "email" },
  { label: "Téléphone", value: "06 36 96 25 45", type: "tel" },
];

export const PaymentMethodSection = (): JSX.Element => {
  const [phoneValue, setPhoneValue] = useState("06 36 96 25 45");
  const [phoneError, setPhoneError] = useState("");
  const [emailValue, setEmailValue] = useState("jean.lebon@gmail.com");
  const [emailError, setEmailError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    let formatted = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 2 === 0) {
        formatted += " ";
      }
      formatted += value[i];
    }

    setPhoneValue(formatted);

    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const cleanValue = formatted.replace(/\s/g, "");

    if (cleanValue && !phoneRegex.test(cleanValue)) {
      setPhoneError("Format de téléphone invalide");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (value && !emailRegex.test(value)) {
      setEmailError("Format d'email invalide");
    } else {
      setEmailError("");
    }
  };
  return (
    <section className="flex flex-col items-start gap-[25px] w-full">
      <div className="flex flex-col items-end gap-[21px] w-full">
        <div className="flex flex-wrap items-start gap-[12px_10px] w-full">
          <nav className="inline-flex items-start gap-[9px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative w-fit h-[27px] mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-xs tracking-[0] leading-[13.8px] ${
                  step.active ? "text-[#1c1b1b]" : "text-[#979797]"
                } ${index > 1 ? "whitespace-nowrap" : ""}`}
              >
                {step.label}
              </div>
            ))}
          </nav>

          <div className="flex flex-col w-[361px] h-1.5 items-start gap-2.5 bg-[#ede4ff] border-[0.5px] border-solid border-[#875fda]">
            <div className="relative w-[185px] h-1.5 bg-[#875fda]" />
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-start">
        <div className="inline-flex flex-col items-start gap-[5px] h-[34px]">
          <p className="w-[361px] h-8 mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-dark text-xs tracking-[0] leading-[15.6px]">
            <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-xs tracking-[0] leading-[15.6px]">
              Vous avez déjà un compte ?{" "}
            </span>
            <a
              href="https://www.sdiexpertise.fr/commande/identification#"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Connectez-vous
            </a>
          </p>
        </div>

        <div className="flex flex-col w-[361px] items-start gap-[21px] mt-[-3px]">
          {formFields.map((field, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-1.5 w-full"
            >
              <Label
                htmlFor={`field-${index}`}
                className="w-[325px] mt-[-1.00px] z-[1] [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]"
              >
                {field.label}
              </Label>

              <div className="flex flex-col items-start gap-0.5 w-full z-0">
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex items-start gap-2 pl-3 pr-2 py-0 w-full rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
                    <div className="flex-col h-11 justify-center px-0 py-1.5 flex-1 grow rounded overflow-hidden flex items-start">
                      <div className="self-stretch w-full flex items-start">
                        <Input
                          id={`field-${index}`}
                          type={field.type}
                          value={field.type === "tel" ? phoneValue : field.type === "email" ? emailValue : undefined}
                          defaultValue={field.type !== "tel" && field.type !== "email" ? field.value : undefined}
                          onChange={field.type === "tel" ? handlePhoneChange : field.type === "email" ? handleEmailChange : undefined}
                          className="w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 whitespace-nowrap border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {field.type === "tel" && phoneError && (
                  <p className="text-xs text-red-500 mt-1">{phoneError}</p>
                )}
                {field.type === "email" && emailError && (
                  <p className="text-xs text-red-500 mt-1">{emailError}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex w-[361px] items-center gap-[9px] mt-[-21px]">
            <Checkbox
              id="consent"
              className="w-2.5 h-2.5 border border-solid border-[#5d3ca4] rounded-none data-[state=checked]:bg-[#5d3ca4] data-[state=checked]:text-white"
            />
            <Label
              htmlFor="consent"
              className="w-[342px] [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-xs tracking-[0] leading-[15.6px]"
            >
              J&#39;accepte d&#39;être recontacté.e et je consens au traitement
              de mes données personnelles
            </Label>
          </div>
        </div>
      </div>
    </section>
  );
};
