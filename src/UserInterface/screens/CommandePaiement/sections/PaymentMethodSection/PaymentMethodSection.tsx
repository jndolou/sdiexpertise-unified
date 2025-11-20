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
  { label: "Prénom*", key: "prenom", type: "text" },
  { label: "Nom*", key: "nom", type: "text" },
  { label: "Email*", key: "email", type: "email" },
  { label: "Téléphone", key: "telephone", type: "tel" },
];

interface PaymentMethodSectionProps {
  formData: {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    consent: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    consent: boolean;
  }>>;
  formErrors: {
    email: string;
    telephone: string;
  };
  setFormErrors: React.Dispatch<React.SetStateAction<{
    email: string;
    telephone: string;
  }>>;
}

export const PaymentMethodSection = ({
  formData,
  setFormData,
  formErrors,
  setFormErrors,
}: PaymentMethodSectionProps): JSX.Element => {

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

    setFormData({ ...formData, telephone: formatted });

    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const cleanValue = formatted.replace(/\s/g, "");

    if (cleanValue && !phoneRegex.test(cleanValue)) {
      setFormErrors({ ...formErrors, telephone: "Format de téléphone invalide" });
    } else {
      setFormErrors({ ...formErrors, telephone: "" });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (value && !emailRegex.test(value)) {
      setFormErrors({ ...formErrors, email: "Format d'email invalide" });
    } else {
      setFormErrors({ ...formErrors, email: "" });
    }
  };

  const handleFieldChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
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
                          value={formData[field.key as keyof typeof formData] as string}
                          onChange={(e) => {
                            if (field.type === "tel") {
                              handlePhoneChange(e);
                            } else if (field.type === "email") {
                              handleEmailChange(e);
                            } else {
                              handleFieldChange(field.key, e.target.value);
                            }
                          }}
                          className="w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 whitespace-nowrap border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {field.type === "tel" && formErrors.telephone && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.telephone}</p>
                )}
                {field.type === "email" && formErrors.email && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex w-[361px] items-center gap-[9px] mt-[-21px]">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
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
