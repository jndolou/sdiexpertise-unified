import React from "react";
import { Header } from "../../components/layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ShieldCheckIcon, UsersIcon, AwardIcon, TargetIcon } from "lucide-react";

const valuesData = [
  {
    icon: ShieldCheckIcon,
    title: "Expertise",
    description: "Plus de 15 ans d'expérience dans le diagnostic immobilier",
  },
  {
    icon: UsersIcon,
    title: "Proximité",
    description: "Une équipe à votre écoute et disponible pour vos projets",
  },
  {
    icon: AwardIcon,
    title: "Qualité",
    description: "Des diagnostics certifiés et conformes aux normes en vigueur",
  },
  {
    icon: TargetIcon,
    title: "Réactivité",
    description: "Intervention rapide et devis sous 24h",
  },
];

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Fondateur & Expert",
    image: "/frame-374.png",
  },
  {
    name: "Marie Laurent",
    role: "Responsable Technique",
    image: "/frame-375.png",
  },
  {
    name: "Pierre Martin",
    role: "Expert Diagnostiqueur",
    image: "/frame-376.png",
  },
];

export const AboutPage = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(..//-ville---mobile.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] min-h-screen relative">
      <Header />

      <main className="relative w-full pt-32 pb-32 px-4">
        <div className="flex flex-col w-full items-center gap-8">
          <div className="flex flex-col w-full max-w-[360px] items-start gap-5">
            <h1 className="relative self-stretch font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] text-center tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
              À propos de nous
            </h1>
            <p className="relative self-stretch font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              SDI Expertise est votre partenaire de confiance pour tous vos
              diagnostics immobiliers en Île-de-France.
            </p>
          </div>

          <Card className="w-full max-w-[360px] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(174deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <CardContent className="p-6 flex flex-col gap-4">
              <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
                Notre histoire
              </h2>
              <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                Fondée en 2008, SDI Expertise s'est imposée comme un acteur
                majeur du diagnostic immobilier en Île-de-France. Notre mission
                est d'accompagner propriétaires, acquéreurs et professionnels
                avec des diagnostics fiables et conformes.
              </p>
              <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                Nous intervenons sur l'ensemble de la région parisienne avec une
                équipe de diagnostiqueurs certifiés et expérimentés.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col w-full max-w-[360px] items-start gap-4">
            <h2 className="relative self-stretch font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Nos valeurs
            </h2>

            <div className="grid grid-cols-2 gap-4 w-full">
              {valuesData.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(174deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                  >
                    <CardContent className="flex flex-col items-center gap-3 p-4 text-center">
                      <IconComponent className="w-8 h-8 text-[#5d3ca4]" />
                      <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {value.title}
                      </h3>
                      <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[360px] items-start gap-4">
            <h2 className="relative self-stretch font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] text-center tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Notre équipe
            </h2>

            <div className="flex flex-col gap-4 w-full">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(174deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <CardContent className="flex items-center gap-4 p-4">
                    <img
                      className="w-20 h-20 object-cover rounded-full"
                      alt={member.name}
                      src={member.image}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {member.name}
                      </h3>
                      <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="w-full max-w-[360px] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(174deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_25%,rgba(170,127,251,1)_72%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <CardContent className="p-6 flex flex-col gap-4">
              <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
                Nos certifications
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#aa7ffb]"></div>
                  <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    Certifiés COFRAC
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#aa7ffb]"></div>
                  <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    Assurance RC Professionnelle
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#aa7ffb]"></div>
                  <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    Formation continue obligatoire
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <nav className="flex w-full items-center justify-between rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none fixed bottom-0 left-0 z-50">
        <button className="items-center justify-center gap-1 p-4 flex-1 self-stretch grow flex flex-col relative border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(147deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)_1]">
          <img className="relative w-6 h-6" alt="Site principal" src="/home.svg" />
          <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Site principal
          </span>
        </button>

        <button className="items-center justify-center gap-1 p-4 flex-1 self-stretch grow flex flex-col relative border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(147deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)_1]">
          <img className="relative w-6 h-6" alt="Accès pro" src="/star-19.svg" />
          <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Accès pro
          </span>
        </button>

        <div className="inline-flex flex-col items-center justify-center p-4 relative self-stretch flex-[0_0_auto] border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] [border-image:linear-gradient(147deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)_1]">
          <Button className="h-12 gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] hover:bg-[#faf8fc]">
            <span className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
              Obtenir un devis
            </span>
          </Button>
        </div>
      </nav>
    </div>
  );
};
