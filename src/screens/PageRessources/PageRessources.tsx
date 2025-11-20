import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/layout";
import { BottomNavigation } from "../../components/shared";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

const resourceCards = [
  {
    tag: "Guide",
    title: "Guide du diagnostic électrique",
    description:
      "Tout savoir pour réaliser un diagnostic électrique conforme et sécurisé.",
    date: "25/04/25",
  },
  {
    tag: "Loi",
    title: "Loi Climat et Résilience",
    description:
      "Mesures clés pour améliorer la performance énergétique des logements.",
    date: "25/04/25",
  },
  {
    tag: "Guide",
    title: "Guide du diagnostic électrique",
    description:
      "Tout savoir pour réaliser un diagnostic électrique conforme et sécurisé.",
    date: "25/04/25",
  },
  {
    tag: "Loi",
    title: "Loi Climat et Résilience",
    description:
      "Mesures clés pour améliorer la performance énergétique des logements.",
    date: "25/04/25",
  },
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
  { label: "Par téléphone", values: ["01 71 68 17 97", "06 79 87 60 08"] },
  { label: "Par mail", values: ["email@entreprise.com"] },
];

const legalLinks = ["Mentions légales", "Cookies", "CGV"];

const bottomNavItems = [
  { icon: "/home.svg", label: "Site principal", active: true },
  { icon: "/star.svg", label: "Accès pro", active: false },
];

export const PageRessources = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_150%] w-full min-w-[393px] min-h-screen relative">
      <div className="absolute top-0 left-0 w-px h-px pointer-events-none">
        <img
          className="absolute top-[-4117px] left-[-197px] w-[43px] h-28"
          alt="Forme décorative"
          src="/forme-d-corative-3.svg"
        />
        <img
          className="absolute top-[-3652px] left-[129px] w-[67px] h-[138px]"
          alt="Forme décorative"
          src="/forme-d-corative-4.svg"
        />
        <img
          className="absolute top-[-3094px] left-[-197px] w-[41px] h-[82px]"
          alt="Forme décorative"
          src="/forme-d-corative-8.svg"
        />
        <img
          className="absolute top-[-4162px] left-[29px] w-[167px] h-[200px] rounded-[34px] object-cover"
          alt="Polygon"
          src="/polygon-3.png"
        />
      </div>

      <Header />

      <main className="flex flex-col gap-8 pt-[120px] pb-32 px-4">
        <section className="flex flex-col gap-[27px]">
          <h1 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-[32px] tracking-[0] leading-[38.4px]">
            Ressources &amp; documentation
          </h1>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-[20.8px]">
            Tout ce qu&apos;il faut savoir pour vos projets immobiliers :
            guides, obligations réglementaires, fiches pratiques, et plus
            encore.
          </p>

          <div className="flex flex-col gap-[18px]">
            <div className="relative">
              <Input
                placeholder="Cherchez un guide, une réglementation..."
                className="pl-12 h-auto py-4 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none font-paragraphe-2-desktop text-[#1c1b1b80]"
              />
              <img
                className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6"
                alt="Search"
                src="/left-icon-1.svg"
              />
            </div>

            <div className="flex items-center justify-end">
              <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
                <img
                  className="w-[19.06px] h-3.5 mr-2"
                  alt="Filter"
                  src="/union.svg"
                />
                Filtrer
              </Button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2.5">
          <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl tracking-[0] leading-[28.8px]">
            Résultat (4)
          </h2>
          <p className="font-paragraphe-2-mobile text-[#5d3ca4]">
            Diagnostics immobiliers - Décrets - Après 2020 - Particulier -
            Région Île-De-France - Active actuellement
          </p>

          <ScrollArea className="w-full">
            <div className="flex gap-[15px] pb-4">
              {resourceCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[280px] p-4 bg-[#ffffff1a] rounded-2xl border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <CardContent className="p-0 flex flex-col gap-[15px]">
                    <div className="flex flex-col gap-2">
                      <Badge className="w-fit px-1.5 py-1.5 bg-violet-clair rounded-[62px] shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] font-tags-mobile text-[#f3f1f5] h-auto">
                        {card.tag}
                      </Badge>
                      <h3 className="font-titre-3 text-dark">{card.title}</h3>
                      <p className="font-paragraphe-2-mobile text-dark">
                        {card.description}
                      </p>
                      <div className="flex flex-col gap-3.5">
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-md border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(31,1,66,1)_37%,rgba(30,1,67,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                            <span className="[font-family:'Pecita-Book',Helvetica] font-normal text-dark text-lg tracking-[0] leading-[21.6px]">
                              {card.date}
                            </span>
                          </div>
                        </div>
                        <Button className="h-auto px-4 py-3 rounded-[62px] border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base">
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        <Card className="p-[35px] rounded-2xl border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="p-0 flex flex-col items-center gap-[18px]">
            <div className="flex flex-col items-center gap-[5px]">
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-base tracking-[0] leading-[19.2px]">
                Besoin d&apos;aide ?
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-dark text-base tracking-[0] leading-[19.2px]">
                Nos experts sont là pour vous guider.
              </p>
            </div>
            <Link to="/contact">
              <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
                Parler à un expert
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="p-4 rounded-2xl border border-solid border-[#aa7ffb] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
          <CardContent className="p-0 flex flex-col gap-4">
            <h2 className="font-titre-2-mobile text-dark">
              Inscrivez-vous à notre newsletter !
            </h2>
            <div className="flex items-center gap-2.5 px-[13px] py-2 bg-lila rounded-[9px]">
              <p className="[font-family:'Ubuntu',Helvetica] font-normal text-xs tracking-[0] leading-[21px]">
                <span className="font-medium text-[#1c1b1b]">10%*</span>
                <span className="font-medium text-[#7e3287]">
                  {" "}
                  pour vous, des (bons) conseils et des promos !
                </span>
              </p>
            </div>
            <div className="flex items-start gap-[13px]">
              <Checkbox className="mt-1 bg-white rounded border border-solid border-[#ebdcfb]" />
              <p className="font-paragraphe-2-mobile text-dark">
                J&#39;accepte d&#39;être recontacté.e et je consens au
                traitement de mes données personnelles
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex-1 relative">
                <Input
                  placeholder="Entrez votre adresse email"
                  className="pl-12 h-auto py-4 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none font-paragraphe-2-desktop text-[#1c1b1b80]"
                />
                <img
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6"
                  alt="Email"
                  src="/left-icon.svg"
                />
              </div>
              <Button
                size="icon"
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5d3ca4]"
              >
                <img className="w-6 h-6" alt="Send" src="/bouton.svg" />
              </Button>
            </div>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-xs tracking-[0] leading-3">
              <span className="text-[#1c1b1b] font-paragraphe-2-mobile">
                Votre adresse email sera uniquement utilisée pour vous envoyer
                nos newsletters. Vous pourrez vous désabonner via le lien
                intégré dans la newsletter.{" "}
              </span>
              <span className="text-[#5d3ca4] font-paragraphe-2-mobile">
                En savoir plus sur la gestion de vos données et vos droits.
              </span>
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col gap-12 pt-12 pb-32 px-8 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <img
          className="w-[219px] h-[60px] object-cover"
          alt="Logo principal"
          src="/logo-principal-violet-7c5ed6-2x-1.png"
        />

        <nav className="flex flex-col gap-6">
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="font-parahraphe-3 text-dark">{link.label}</span>
              {link.hasChevron && (
                <img
                  className="w-4 h-4"
                  alt="Chevron"
                  src="/chevron-forward.svg"
                />
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-start justify-between">
          <Button
            variant="ghost"
            className="h-auto p-0 gap-1.5 [font-family:'Ubuntu',Helvetica] font-bold text-dark"
          >
            <img className="w-4 h-4" alt="Person" src="/person.svg" />
            Mon Espace
          </Button>
          <Button
            variant="ghost"
            className="h-auto p-0 gap-1.5 [font-family:'Ubuntu',Helvetica] font-bold text-dark"
          >
            <img className="w-4 h-4" alt="Cart" src="/cart-1.svg" />
            Mon Panier
          </Button>
        </div>

        <div className="flex items-center gap-[15px]">
          <Button className="h-auto px-4 py-3 rounded-[62px] border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base">
            Contactez-nous
          </Button>
          <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
            Obtenir un devis
          </Button>
        </div>

        <div className="flex flex-col gap-[23px]">
          <Button
            variant="ghost"
            className="h-auto p-0 justify-start gap-1.5 font-titre-3 text-dark"
          >
            <img className="w-5 h-5" alt="Flash" src="/flash.svg" />
            Simuler mon DPE
          </Button>
          <Button
            variant="ghost"
            className="h-auto p-0 justify-start gap-1.5 font-titre-3 text-dark"
          >
            <img className="w-5 h-5" alt="Cash" src="/cash.svg" />
            Estimer la valeur de mon bien
          </Button>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="font-titre-3 text-dark">Contactez-nous</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {contactSchedule.map((schedule, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="font-parahraphe-3 text-dark">{schedule.day}</p>
                  <p className="font-paragraphe-2-desktop text-dark">
                    {schedule.hours}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="font-parahraphe-3 text-dark">{method.label}</p>
                  {method.values.map((value, idx) => (
                    <p
                      key={idx}
                      className="font-paragraphe-2-desktop text-dark"
                    >
                      {value}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm">
                    |
                  </span>
                )}
                <button className="font-parahraphe-3 text-dark text-center">
                  {link}
                </button>
              </React.Fragment>
            ))}
          </div>
          <p className="font-parahraphe-3 text-dark text-center">
            ©2025 SDIExpertise®
          </p>
        </div>
      </footer>

      <BottomNavigation />
    </div>
  );
};
