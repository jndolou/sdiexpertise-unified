import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

interface ConfirmationSectionProps {
  formData: {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    consent: boolean;
  };
  formErrors: {
    email: string;
    telephone: string;
  };
}

export const ConfirmationSection = ({
  formData,
  formErrors,
}: ConfirmationSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("onsite");
  const [validationError, setValidationError] = useState("");

  const paymentOptions = [
    { value: "card", label: "Carte bancaire" },
    { value: "onsite", label: "Paiement sur place" },
    { value: "transfer", label: "Paiement par virement bancaire" },
  ];

  const handleSubmit = () => {
    if (!formData.prenom.trim()) {
      setValidationError("Le prénom est obligatoire");
      return;
    }

    if (!formData.nom.trim()) {
      setValidationError("Le nom est obligatoire");
      return;
    }

    if (!formData.email.trim()) {
      setValidationError("L'email est obligatoire");
      return;
    }

    if (formErrors.email) {
      setValidationError("Veuillez corriger le format de l'email");
      return;
    }

    if (formErrors.telephone) {
      setValidationError("Veuillez corriger le format du téléphone");
      return;
    }

    if (!formData.consent) {
      setValidationError("Vous devez accepter d'être recontacté");
      return;
    }

    setValidationError("");
    navigate('/rendez-vous');
  };

  return (
    <section className="inline-flex flex-col items-end gap-6 relative">
      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[29px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
            <h2 className="relative w-[361px] mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
              Choisissez votre préférence de paiement
            </h2>

            <div className="flex flex-col w-[361px] items-start gap-[15px] relative flex-[0_0_auto]">
              <p className="relative w-[325px] mt-[-1.00px] z-[1] [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px]">
                Comment souhaitez-vous payer ?
              </p>

              <div className="flex flex-col items-start gap-2.5 self-stretch w-full z-0 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] z-0">
                  <Button
                    variant="ghost"
                    className={`h-auto inline-flex items-center justify-center gap-2 px-4 py-3 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] relative flex-[0_0_auto] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                      paymentMethod === "card"
                        ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                        : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <span className="relative w-fit mt-[-0.50px] [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      Carte bancaire
                    </span>
                  </Button>

                  <Button
                    variant="ghost"
                    className={`h-auto mt-[-1.00px] mr-[-1.00px] inline-flex items-center justify-center gap-2 px-4 py-3 relative flex-[0_0_auto] mb-[-1.00px] rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                      paymentMethod === "onsite"
                        ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                        : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                    }`}
                    onClick={() => setPaymentMethod("onsite")}
                  >
                    <span className="relative w-fit mt-[-0.50px] [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      Paiement sur place
                    </span>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className={`h-auto ml-[-1.00px] z-[-1] inline-flex items-center justify-center gap-2 px-4 py-3 relative flex-[0_0_auto] mb-[-1.00px] rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                    paymentMethod === "transfer"
                      ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                      : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                  }`}
                  onClick={() => setPaymentMethod("transfer")}
                >
                  <span className="relative w-fit mt-[-0.50px] [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Paiement par virement bancaire
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <h3 className="relative w-[361px] mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
              Payer sur place le jour du rendez-vous :
            </h3>

            <p className="relative w-[361px] [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[20.4px]">
              Vous payez directement le jour de l&apos;intervention, par carte
              bancaire, chèque ou espèces auprès de notre technicien. Aucun
              paiement en ligne n&apos;est requis à cette étape
            </p>
          </div>
        </div>
      </div>

      {validationError && (
        <p className="text-sm text-red-500 font-medium">{validationError}</p>
      )}

      <Button
        onClick={handleSubmit}
        className="h-auto flex w-56 items-center justify-center gap-2 px-4 py-3 relative bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
        <span className="relative w-[159px] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
          Prendre rendez-vous
        </span>

        <img
          className="relative w-6 h-6"
          alt="Arrow forward"
          src="/arrow-forward.svg"
        />
      </Button>
    </section>
  );
};
