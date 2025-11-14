import React, { useState } from "react";
import { Header } from "../../components/layout";
import { Footer } from "../../components/shared";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "lucide-react";

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Téléphone",
    details: ["01 71 68 17 97", "06 79 87 60 08"],
  },
  {
    icon: MailIcon,
    title: "Email",
    details: ["contact@sdiexpertise.com"],
  },
  {
    icon: ClockIcon,
    title: "Horaires",
    details: ["Lun - Ven: 8h - 19h", "Sam: 9h - 18h"],
  },
  {
    icon: MapPinIcon,
    title: "Adresse",
    details: ["Paris et Île-de-France"],
  },
];

export const ContactPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-hidden [background:url(..//-ville---mobile.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-screen relative">
      <Header />

      <main className="relative w-full pt-32 pb-32 px-4">
        <div className="flex flex-col w-full items-center gap-8">
          <div className="flex flex-col w-full max-w-[360px] items-start gap-5">
            <h1 className="relative self-stretch font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] text-center tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
              Contactez-nous
            </h1>
            <p className="relative self-stretch font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Une question ? Un projet ? N'hésitez pas à nous contacter, notre
              équipe vous répondra dans les plus brefs délais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-[360px]">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(174deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <CardContent className="flex flex-col items-center gap-3 p-4">
                    <IconComponent className="w-6 h-6 text-[#5d3ca4]" />
                    <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] text-center tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]"
                      >
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="w-full max-w-[360px] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(174deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    Nom complet
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="h-12 px-4 bg-white/50 rounded-lg border-none shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ebebeb]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="h-12 px-4 bg-white/50 rounded-lg border-none shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ebebeb]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01 23 45 67 89"
                    required
                    className="h-12 px-4 bg-white/50 rounded-lg border-none shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ebebeb]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    required
                    rows={4}
                    className="px-4 py-3 bg-white/50 rounded-lg border-none shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ebebeb] font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)] resize-none focus:outline-none focus:ring-2 focus:ring-[#aa7ffb]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#f0ebf5]"
                >
                  <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                    Envoyer le message
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};
