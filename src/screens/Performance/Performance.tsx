import {
  ChevronRightIcon,
  DollarSignIcon,
  HomeIcon,
  MenuIcon,
  ShoppingCartIcon,
  StarIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { Header } from "../../components/layout";
import { BottomNavigation, GoogleRating, ExpertiseSection } from "../../components/shared";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

const decorativeShapes = [
  {
    top: "top-[-3908px]",
    left: "left-[-182px]",
    src: "/forme-d-corative-1.svg",
  },
  {
    top: "top-[-3478px]",
    left: "left-[157px]",
    src: "/forme-d-corative-1.svg",
  },
  {
    top: "top-[-2487px]",
    left: "left-[157px]",
    src: "/forme-d-corative-1.svg",
  },
  { top: "-top-14", left: "left-[157px]", src: "/forme-d-corative-1.svg" },
  {
    top: "top-[-3959px]",
    left: "left-[147px]",
    src: "/forme-d-corative-6.svg",
  },
  { top: "top-[-2918px]", left: "left-[-182px]", src: "/forme-d-corative.svg" },
  { top: "top-[-1296px]", left: "left-[125px]", src: "/forme-d-corative.svg" },
  { top: "top-[547px]", left: "left-[-182px]", src: "/forme-d-corative.svg" },
  {
    top: "top-[-2094px]",
    left: "left-[-182px]",
    src: "/forme-d-corative-3.svg",
  },
  {
    top: "top-[-624px]",
    left: "left-[-182px]",
    src: "/forme-d-corative-2.svg",
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

const contactInfo = {
  phones: ["01 71 68 17 97", "06 79 87 60 08"],
  email: "email@entreprise.com",
};

const legalLinks = ["Mentions légales", "Cookies", "CGV"];

const benefitCards = [
  {
    icon: "/vector.svg",
    title: "Réduction des consommations",
    description: "Moins d'énergie, c'est moins de charges.",
    highlight:
      "Le DPE identifie les sources de déperdition pour agir efficacement.",
  },
  {
    icon: "/vector-5.svg",
    title: "Impact sur la valeur du bien",
    description:
      "Un bon classement énergétique améliore l'attractivité et le prix de vente ou de location.",
    highlight: "C'est un levier concret de valorisation patrimoniale.",
  },
  {
    icon: "/frame-357-1.svg",
    title: "Risques de gel de location",
    description:
      "Depuis 2023, certaines étiquettes F et G sont interdites à la location.",
    highlight:
      "Anticiper, c'est éviter la vacance locative et la non-conformité.",
  },
  {
    icon: "/frame-357.svg",
    title: "Aides à la rénovation énergétique",
    description:
      "Des dispositif (CEE, MaPrimeRénov', TVA réduite...) existent pour financer vos travaux.",
    highlight: "Nous vous aidons à les mobiliser efficacement.",
  },
];

const steps = [
  {
    number: "1.",
    title: "Analyse réglementaire & DPE",
    description:
      "DPE réglementaire selon méthode 3CL 2021, évaluation des émissions, et recommandations techniques.",
  },
  {
    number: "2.",
    title: "Identification des leviers d'amélioration",
    description:
      "Simulations thermiques, repérage des gisements d'économie, croisement avec les aides existantes.",
  },
  {
    number: "3.",
    title: "Plan d'action hiérarchisé",
    description:
      "Priorisation des travaux selon coût, impact énergétique, et contraintes du bâti (logements anciens, copropriété...).",
  },
  {
    number: "4.",
    title: "Suivi, financement et valorisation",
    description:
      "Accompagnement dans le montage des dossiers CEE, MaPrimeRénov' ou modulations d'obligation (cas tertiaire).",
  },
];

const valuePoints = [
  "Diagnostics DPE 3CL conformes à la norme 2021",
  "Ingénierie thermique et juridique combinée",
  "Approche contextualisée (bâti ancien, collectif, tertiaire)",
  "Des gains énergétiques mesurés et valorisables",
];

const resources = [
  {
    icon: "/vector-2.svg",
    title: 'Livre blanc "DPE 2025"',
    description: "Comprendre la réforme et les implications pour les bailleurs",
    buttonText: "Télécharger",
  },
  {
    icon: "/vector.svg",
    title: "Étude : bâtiments construits avant 1975",
    description: "Les leviers de performance thermique sur le bâtiment ancien",
    buttonText: "Lire l'étude",
  },
  {
    icon: "/vector-4.svg",
    title: 'Replay "Passoires énergétique : que faire ?"',
    description: "Témoignages +analyse réglementaire",
    buttonText: "Voir le replay",
  },
  {
    icon: "/vector-3.svg",
    title: 'Calculateur "Étiquette cible"',
    description: "Estimer le gain potentiel d'un projet de rénovation",
    buttonText: "Utiliser",
  },
];

export const Performance = (): JSX.Element => {
  return (
    <div className="overflow-hidden [background:url(/grid.jpeg)_center_/_180%] w-full min-w-[393px] min-h-screen relative">
      <div className="absolute top-0 left-0 w-px h-px pointer-events-none">
        {decorativeShapes.map((shape, index) => (
          <img
            key={`shape-${index}`}
            className={`absolute ${shape.top} ${shape.left} w-auto h-auto`}
            alt=""
            src={shape.src}
          />
        ))}
      </div>

      <Header />

      <main className="flex flex-col gap-8 pt-[120px] pb-32 px-4">
        <section className="flex flex-col gap-[39px]">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5">
              <h1 className="font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
                Performance énergétique : analysez, agissez, valorisez
              </h1>
            </div>

            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Maîtrisez vos obligations liées au DPE et à la rénovation
              énergétique. Identifiez les leviers de performance et accédez à un
              accompagnement complet, de l'audit au financemnt
            </p>

            <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
              Estimer la performance de votre bien
            </Button>
          </div>

          <GoogleRating variant="card" />
        </section>

        <Card className="border border-solid border-[#479053] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
          <CardContent className="p-4 flex flex-col gap-4">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Inscrivez-vous à notre newsletter !
            </h2>

            <div className="flex items-center gap-2.5 px-[13px] py-0 bg-[#c6e7d2] rounded-[9px]">
              <p className="[font-family:'Ubuntu',Helvetica] text-xs">
                <span className="font-medium text-[#1c1b1b] leading-[21px]">
                  10%*
                </span>
                <span className="font-medium text-[#479053] leading-[21px]">
                  {" "}
                  pour vous, des (bons) conseils et des promos !
                </span>
              </p>
            </div>

            <div className="flex items-center gap-[13px]">
              <Checkbox className="bg-white border border-solid border-[#ebdcfb]" />
              <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                J'accepte d'être recontacté.e et je consens au traitement de mes
                données personnelles
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex-1">
                <div className="flex items-start gap-2 pl-3 pr-2 py-0 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(71,144,83,1)_37%,rgba(71,144,83,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <img
                    className="w-[24.25px] h-6"
                    alt="Left icon"
                    src="/left-icon.svg"
                  />
                  <div className="flex-1 py-1.5">
                    <Input
                      placeholder="Entrez votre adresse email"
                      className="border-0 bg-transparent p-0 font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[#1c1b1b80] text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]"
                    />
                  </div>
                </div>
              </div>
              <img className="h-[71.73px]" alt="Bouton" src="/bouton.svg" />
            </div>

            <p className="[font-family:'Open_Sans',Helvetica] text-xs">
              <span className="text-[#1c1b1b] leading-[var(--paragraphe-2-mobile-line-height)] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)]">
                Votre adresse email sera uniquement utilisée pour vous envoyer
                nos newsletters. Vous pourrez vous désabonner via le lien
                intégré dans la newsletter.{" "}
              </span>
              <span className="text-[#479053] leading-[var(--paragraphe-2-mobile-line-height)] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)]">
                En savoir plus sur la gestion de vos données et vos droits.
              </span>
            </p>
          </CardContent>
        </Card>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Pourquoi la performance énergétique est devenue incontournable ?
            </h2>

            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Le DPE ne se limite plus à une étiquette. Il conditionne la
              location, la vente, l'accès aux aides et même la valeur de votre
              <br />
              bien.
              <br />
              <br />
              Anticipez les échéances, évitez les passoires thermiques, et
              engagez une stratégie énergétique claire et efficace.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-3.5">
          {benefitCards.map((card, index) => (
            <Card
              key={index}
              className="relative bg-[#ffffff1a] border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(71,144,83,1)_24%,rgba(71,144,83,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="pt-[30px] pb-[25px] px-5 flex flex-col gap-5">
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                    {card.title}
                  </h3>

                  <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {card.description}
                  </p>

                  <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#479053] text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {card.highlight}
                  </p>
                </div>
              </CardContent>

              <div className="absolute top-[-39px] left-[-37px] w-[74px] h-[78px] flex items-center justify-center">
                <img
                  className="absolute inset-0 w-full h-full"
                  alt="Polygon"
                  src="/polygon-7.svg"
                />
                <img
                  className="relative w-6 h-6 z-10"
                  alt="Icon"
                  src={card.icon}
                />
              </div>
            </Card>
          ))}
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Notre accompagnement en
              <br />4 étapes
            </h2>

            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Une méthodologie claire pour améliorer vos étiquettes
            </p>

            <div className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(71,144,83,1)_37%,rgba(71,144,83,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex items-center justify-center p-2 rounded-2xl border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(71,144,83,1)_37%,rgba(71,144,83,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                      <span className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[length:var(--titre-2-mobile-font-size)] leading-[var(--titre-2-mobile-line-height)] text-dark tracking-[var(--titre-2-mobile-letter-spacing)] [font-style:var(--titre-2-mobile-font-style)]">
                        {step.number}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col gap-1">
                      <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {step.title}
                      </h3>

                      <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-end">
              <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
                Demander une simulation énergétique
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
              Prendre rendez-vous avec un expert
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Notre valeur ajoutée
            </h2>

            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              <span className="text-[#1c1b1b]">Notre savoir-faire, votre </span>
              <span className="text-[#479053]">tranquillité</span>
              <span className="text-[#0c26a6]">.</span>
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[9px]">
                {valuePoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[7px] pr-3.5"
                  >
                    <img
                      className="w-[19px] h-[19px]"
                      alt="Checkmark"
                      src="/checkmark.svg"
                    />
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-dark text-base tracking-[0] leading-[19.2px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ExpertiseSection titleOnly />
          </div>
        </section>

        <section className="flex flex-col gap-[17px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Guide, livre blanc, outils... <br />
              nos ressources à votre disposition
            </h2>

            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Nos contenus pour passer à l'action
            </p>
          </div>

          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-[#ffffff1a] border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(71,144,83,1)_26%,rgba(71,144,83,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="px-4 py-3 flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[13px]">
                  <img
                    className="w-auto h-auto"
                    alt="Vector"
                    src={resource.icon}
                  />

                  <div className="flex flex-col gap-[17px]">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                          {resource.title}
                        </h3>
                      </div>

                      <div className="flex flex-col gap-2">
                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-[19.2px]">
                          {resource.description}
                        </p>
                      </div>
                    </div>

                    <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
                      {resource.buttonText}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <Card className="bg-[#ffffff1a] border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(71,144,83,1)_24%,rgba(71,144,83,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="px-5 py-[25px] flex flex-col gap-5">
            <div className="flex flex-col gap-[26px]">
              <div className="flex flex-col gap-[17px]">
                <h2 className="[font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl text-center tracking-[0] leading-[28.8px]">
                  Transformez la contrainte réglementaire en opportunité
                  énergétique
                </h2>

                <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                  Un bon DPE, c'est plus de sérénité pour vendre, louer ou
                  rénover. Et avec un bon accompagnement, c'est aussi des
                  économies concrètes et un bâti valorisé.
                </p>
              </div>

              <div className="flex flex-col items-center gap-[5px]">
                <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base text-center">
                  Télécharger notre kit <br />
                  "Performance énergétique"
                </Button>

                <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-[#479053] text-[length:var(--paragraphe-2-mobile-font-size)] text-center tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                  Guide + simulateur + check-list
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="flex flex-col items-start gap-12 pt-12 pb-32 px-8 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <img
          className="w-[219px] h-[60px] object-cover"
          alt="Logo principal"
          src="/logo-principal-violet-7c5ed6-2x-1.png"
        />

        <nav className="flex flex-col gap-6 w-full">
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-1.5 flex-1">
                <span className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  {link.label}
                </span>
              </div>
              {link.hasChevron && <ChevronRightIcon className="w-4 h-4" />}
            </div>
          ))}
        </nav>

        <div className="flex items-start justify-between w-full">
          <div className="flex items-center gap-1">
            <UserIcon className="w-4 h-4" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Mon Espace
            </span>
          </div>

          <div className="flex items-center gap-1">
            <ShoppingCartIcon className="w-4 h-4" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Mon Panier
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[15px]">
          <Button className="h-auto px-4 py-3 rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base">
            Contactez-nous
          </Button>

          <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base">
            Obtenir un devis
          </Button>
        </div>

        <div className="flex flex-col gap-[23px] w-full">
          <div className="flex items-center gap-1.5">
            <ZapIcon className="w-5 h-5" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Simuler mon DPE
            </span>
          </div>

          <div className="flex items-start gap-2">
            <DollarSignIcon className="w-5 h-5" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Estimer la valeur de mon bien
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            Contactez-nous
          </h3>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              {contactSchedule.map((schedule, index) => (
                <div key={index} className="flex flex-col gap-2 flex-1">
                  <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                    {schedule.day}
                  </p>
                  <p className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]">
                    {schedule.hours}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-2">
                <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  Par téléphone
                </p>
                {contactInfo.phones.map((phone, index) => (
                  <p
                    key={index}
                    className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]"
                  >
                    {phone}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  Par mail
                </p>
                <p className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]">
                  {contactInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-start justify-center gap-4 w-full">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm">
                    |
                  </span>
                )}
                <span className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  {link}
                </span>
              </React.Fragment>
            ))}
          </div>

          <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
            ©2025 SDIExpertise®
          </p>
        </div>
      </footer>

      <BottomNavigation />
    </div>
  );
};
