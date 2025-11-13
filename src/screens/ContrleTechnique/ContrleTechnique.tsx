import {
  CheckCircleIcon,
  ChevronRightIcon,
  DollarSignIcon,
  HomeIcon,
  MoreHorizontalIcon,
  ShoppingCartIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";
import { Header } from "../../components/layout";
import { GoogleRating } from "../../components/shared";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

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

const benefitCards = [
  {
    icon: "/vector.svg",
    title: "Sécurité structurelle et réglementaire",
    description:
      "Vérifiez la stabilité, la sécurité incendie, l'accessibilité et la conformité de vos ouvrages aux réglementations en vigueur.",
    highlight: "Un projet solide, c'est un projet sécurisé dès sa conception.",
  },
  {
    icon: "/frame-357-1.svg",
    title: "Prévention des malfaçons et non-conformités",
    description:
      "Grâce à des contrôles réguliers sur site, anticipez les erreurs d'exécution, les défauts de pose et les écarts aux plans.",
    highlight: "Moins de réserves, moins de litiges.",
  },
  {
    icon: "/group.png",
    title: "Appui à la conformité documentaire",
    description:
      "Nous auditons vos pièces techniques (plans, CCTP, DOE, notices réglementaires…) pour garantir leur conformité et faciliter les démarches administratives.",
    highlight: "Vos documents, notre vigilance.",
  },
  {
    icon: "/frame-357.svg",
    title: "Maîtrise des risques en phase travaux",
    description:
      "Suivez l'avancement du chantier avec un regard tiers, neutre et technique, pour garantir qualité et conformité jusqu'à la réception.",
    highlight:
      "Un chantier sans surprise, du premier coup de pelle à la remise des clés.",
  },
];

const processSteps = [
  {
    number: "1.",
    title: "Étude des documents de conception",
    description:
      "Analyse des plans, notes de calcul, pièces techniques, conformité aux réglementations (ERP, accessibilité, incendie…).",
  },
  {
    number: "2.",
    title: "Visites de contrôle en phase chantier",
    description:
      "Vérification de la bonne exécution, conformité aux documents approuvés, contrôle des points sensibles.",
  },
  {
    number: "3.",
    title: "Rédaction de rapports techniques",
    description:
      "Avis motivés à chaque phase, liste d'écarts ou réserves, recommandations de mise en conformité.",
  },
  {
    number: "4.",
    title: "Appui à la réception & conformité finale",
    description:
      "Levée des réserves, accompagnement à la déclaration de fin de travaux, coordination avec le maître d'ouvrage et les autorités.",
  },
];

const checklistItems = [
  "Expérience multisites : logement, tertiaire, ERP, industriels",
  "Conformité aux normes (CCH, ERP, RE2020, incendie…)",
  "Indépendance totale des entreprises exécutantes",
  "Un interlocuteur technique expert à chaque phase du projet",
];

const resourceCards = [
  {
    icon: "/vector-4.svg",
    title: 'Guide "Contrôle technique & rénovation"',
    description: "Obligations, bénéfices et exemples d'application",
    buttonText: "Télécharger",
  },
  {
    icon: "/vector-3.svg",
    title: "Étude : bâtiments ERP et conformité",
    description: "Zoom sur les enjeux en établissements recevant du public",
    buttonText: "Lire l'étude",
  },
  {
    icon: "/vector-2.svg",
    title: "Modèle de rapport de contrôle",
    description:
      "Exemple de livrable sur opération de rénovation en copropriété",
    buttonText: "Télécharger",
  },
  {
    icon: "/vector-1.svg",
    title: 'Replay "Sécuriser une opération en 6 points"',
    description: "Vidéo explicative + Q&A en direct",
    buttonText: "Voir le replay",
  },
];

export const ContrleTechnique = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[linear-gradient(0deg,rgba(243,241,247,0.93)_0%,rgba(243,241,247,0.93)_100%)] w-full min-w-[393px] min-h-screen relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          className="absolute top-[-1946px] left-[-206px] w-[60px] h-[86px]"
          alt="Forme décorative"
          src="/forme-d-corative-7.svg"
        />
        <img
          className="absolute top-[-535px] left-[-206px] w-[50px] h-[86px]"
          alt="Forme décorative"
          src="/forme-d-corative-8.svg"
        />
        <img
          className="absolute top-[618px] left-[-206px] w-[50px] h-[86px]"
          alt="Forme décorative"
          src="/forme-d-corative-11.svg"
        />
        <img
          className="absolute top-[-3984px] left-[130px] w-[58px] h-[142px]"
          alt="Forme décorative"
          src="/forme-d-corative-3.svg"
        />
        <img
          className="absolute top-[-2963px] left-[-206px] w-[83px] h-[142px]"
          alt="Forme décorative"
          src="/forme-d-corative-3.svg"
        />
        <img
          className="absolute top-[-1221px] left-[119px] w-[69px] h-[142px]"
          alt="Forme décorative"
          src="/forme-d-corative-3.svg"
        />
        <img
          className="absolute top-[-3861px] left-[-206px] w-[59px] h-[116px]"
          alt="Forme décorative"
          src="/forme-d-corative-1.svg"
        />
        <img
          className="absolute top-[-3518px] left-32 w-[60px] h-[116px]"
          alt="Forme décorative"
          src="/forme-d-corative-1.svg"
        />
        <img
          className="absolute top-[-2330px] left-32 w-[60px] h-[116px]"
          alt="Forme décorative"
          src="/forme-d-corative-1.svg"
        />
        <img
          className="absolute top-[264px] left-32 w-[60px] h-[116px]"
          alt="Forme décorative"
          src="/forme-d-corative-1.svg"
        />
      </div>

      <Header />

      {/* Main Content */}
      <main className="pt-[120px] pb-32 px-4 space-y-8">
        {/* Hero Section */}
        <section className="space-y-7">
          <div className="space-y-5">
            <h1 className="font-titre-1-mobile font-[number:var(--titre-1-mobile-font-weight)] text-dark text-[length:var(--titre-1-mobile-font-size)] tracking-[var(--titre-1-mobile-letter-spacing)] leading-[var(--titre-1-mobile-line-height)] [font-style:var(--titre-1-mobile-font-style)]">
              Contrôle technique bâtiment : sécuriser vos travaux dès la
              conception
            </h1>
            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Protégez vos projets de construction ou de rénovation grâce à un
              contrôle technique rigoureux, objectif et réglementaire à chaque
              étape.
            </p>
            <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] font-bold text-[#1c1b1b] text-base">
              Découvrir nos missions de contrôle
            </Button>
          </div>

          {/* Rating Badge */}
          <GoogleRating variant="card" />
        </section>

        {/* Why Section */}
        <section className="space-y-[15px]">
          <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[#1c1b1b] text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Pourquoi intégrer un contrôle technique à vos travaux ?
          </h2>
          <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            Un projet maîtrisé, c'est un chantier sans mauvaises surprises. Le
            contrôle technique bâtiment vous aide à anticiper les risques,
            éviter les sinistres, sécuriser les autorisations et garantir la
            conformité des ouvrages.
          </p>
        </section>

        {/* Benefits Cards */}
        <section className="space-y-3.5">
          {benefitCards.map((card, index) => (
            <Card
              key={index}
              className="relative bg-[#ffffff1a] border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(224,127,63,1)_24%,rgba(224,127,63,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="p-[30px_20px_25px] space-y-[15px]">
                <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] text-center tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                  {card.title}
                </h3>
                <div className="space-y-4">
                  <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#1c1b1b] text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {card.description}
                  </p>
                  <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[#b55a1e] text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                    {card.highlight}
                  </p>
                </div>
              </CardContent>
              <div className="absolute top-[-39px] left-[-37px] w-[74px] h-[78px]">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  alt="Polygon"
                  src="/polygon-7.svg"
                />
                <img
                  className="absolute top-[25px] left-[26px]"
                  alt="Icon"
                  src={card.icon}
                />
              </div>
            </Card>
          ))}
        </section>

        {/* Process Section */}
        <section className="space-y-8">
          <div className="space-y-[15px]">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Notre intervention en 4 temps
            </h2>
            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              Un accompagnement technique sur tout le cycle du projet
            </p>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(224,127,63,1)_37%,rgba(224,127,63,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-auto h-auto flex items-center justify-center p-2 rounded-2xl border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(224,127,63,1)_37%,rgba(224,127,63,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                        <span className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-[length:var(--titre-2-mobile-font-size)] leading-[var(--titre-2-mobile-line-height)] text-dark tracking-[var(--titre-2-mobile-letter-spacing)] [font-style:var(--titre-2-mobile-font-style)]">
                          {step.number}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                          {step.title}
                        </h3>
                        <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-end">
              <Button
                className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.
85px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] font-bold text-[#1c1b1b] text-base"
              >
                Demander une mission de contrôle
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="space-y-[17px]">
          <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Fiches métiers, exemples de rapports, études de cas
          </h2>

          <div className="space-y-[17px]">
            {resourceCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#ffffff1a] border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(224,127,63,1)_26%,rgba(224,127,63,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="p-[12px_16px] space-y-[13px]">
                  <img className="w-auto h-auto" alt="Vector" src={card.icon} />

                  <div className="space-y-[17px]">
                    <div className="space-y-2.5">
                      <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {card.title}
                      </h3>
                      <p className="font-normal text-[#1c1b1b] text-base leading-[19.2px]">
                        {card.description}
                      </p>
                    </div>

                    <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] font-bold text-[#1c1b1b] text-base">
                      {card.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="space-y-[18px]">
          <div className="space-y-[15px]">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Pourquoi nous confier votre mission de contrôle ?
            </h2>
            <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
              <span className="text-[#1c1b1b]">Notre savoir-faire, votre </span>
              <span className="text-[#b55a1e]">tranquillité.</span>
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-[30px]">
              <div className="space-y-[9px]">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-[7px]">
                    <CheckCircleIcon className="w-[19px] h-[19px] flex-shrink-0 text-dark" />
                    <p className="font-normal text-dark text-base leading-[19.2px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-[25px]">
              <h3 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
                Une expertise reconnue
              </h3>
              <img className="w-full h-auto" alt="Frame" src="/frame-337.svg" />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <Card className="bg-[#ffffff1a] border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(224,127,63,1)_24%,rgba(224,127,63,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="p-[25px_20px] space-y-[26px]">
            <div className="space-y-[17px]">
              <h2 className="font-bold text-dark text-2xl text-center leading-[28.8px]">
                Gagnez en sérénité à chaque étape de votre chantier
              </h2>
              <p className="font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] text-center tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
                Le contrôle technique est bien plus qu'un regard réglementaire.
                Il est votre filet de sécurité, garant de la qualité, de la
                conformité et de la pérennité de vos ouvrages.
              </p>
            </div>

            <div className="space-y-[5px] flex flex-col items-center">
              <Button className="h-auto px-4 py-[15px] bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] font-bold text-[#1c1b1b] text-base text-center">
                Télécharger notre pack
                <br />
                "Contrôle technique travaux"
              </Button>
              <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-[#b55a1e] text-[length:var(--paragraphe-2-mobile-font-size)] text-center tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                Fiche + modèle de mission
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Section */}
        <Card className="border border-solid border-[#e07f3f] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
          <CardContent className="p-4 space-y-4">
            <h2 className="font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
              Inscrivez-vous à notre newsletter !
            </h2>

            <div className="bg-[#ffe5d4] rounded-[9px] px-[13px] py-2">
              <p className="font-medium text-xs">
                <span className="text-[#1c1b1b]">10%*</span>
                <span className="text-[#b55a1e]">
                  {" "}
                  pour vous, des (bons) conseils et des promos !
                </span>
              </p>
            </div>

            <div className="flex items-start gap-[13px]">
              <Checkbox className="mt-1 bg-white border-[#ebdcfb]" />
              <p className="font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)]">
                J'accepte d'être recontacté.e et je consens au traitement de mes
                données personnelles
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex-1 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(224,127,63,1)_37%,rgba(224,127,63,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <div className="flex items-center gap-2 pl-3 pr-2 py-4">
                  <img
                    className="w-[24.25px] h-6"
                    alt="Left icon"
                    src="/left-icon.svg"
                  />
                  <Input
                    placeholder="Entrez votre adresse email"
                    className="border-0 bg-transparent font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-[#1c1b1b80] text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]"
                  />
                </div>
              </div>
              <img className="h-[71.73px]" alt="Bouton" src="/bouton.svg" />
            </div>

            <p className="text-xs">
              <span className="text-[#1c1b1b] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)] leading-[var(--paragraphe-2-mobile-line-height)]">
                Votre adresse email sera uniquement utilisée pour vous envoyer
                nos newsletters. Vous pourrez vous désabonner via le lien
                intégré dans la newsletter.{" "}
              </span>
              <span className="text-[#b55a1e] font-paragraphe-2-mobile [font-style:var(--paragraphe-2-mobile-font-style)] font-[number:var(--paragraphe-2-mobile-font-weight)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] text-[length:var(--paragraphe-2-mobile-font-size)] leading-[var(--paragraphe-2-mobile-line-height)]">
                En savoir plus sur la gestion de vos données et vos droits.
              </span>
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-start gap-12 pt-12 pb-32 px-8 bg-transparent rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <img
          className="w-[219px] h-[60px] object-cover"
          alt="Logo principal"
          src="/logo-principal-violet-7c5ed6-2x-1.png"
        />

        <nav className="flex flex-col items-start gap-6 w-full">
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <span className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                {link.label}
              </span>
              {link.hasChevron && <ChevronRightIcon className="w-4 h-4" />}
            </div>
          ))}
        </nav>

        <div className="flex items-start justify-between w-full">
          <Button
            variant="ghost"
            className="h-auto flex items-center gap-1.5 p-0"
          >
            <UserIcon className="w-4 h-4" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Mon Espace
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center gap-1.5 p-0"
          >
            <ShoppingCartIcon className="w-4 h-4" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Mon Panier
            </span>
          </Button>
        </div>

        <div className="flex items-center gap-[15px]">
          <Button className="h-auto px-4 py-3 rounded-[62px] border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none font-medium text-[#5d3ca4] text-base">
            Contactez-nous
          </Button>

          <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] font-bold text-[#1c1b1b] text-base">
            Obtenir un devis
          </Button>
        </div>

        <div className="flex flex-col items-start gap-[23px] w-full">
          <Button
            variant="ghost"
            className="h-auto flex items-center gap-1.5 p-0"
          >
            <ZapIcon className="w-5 h-5" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Simuler mon DPE
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex items-center gap-1.5 p-0"
          >
            <DollarSignIcon className="w-5 h-5" />
            <span className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
              Estimer la valeur de mon bien
            </span>
          </Button>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <h3 className="font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
            Contactez-nous
          </h3>

          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2">
                <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  Lundi à vendredi
                </p>
                <p className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]">
                  8:00 - 19:00
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 flex-1">
                <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  Samedi
                </p>
                <p className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]">
                  9:00 - 18:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col items-start gap-2">
                <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  Par téléphone
                </p>
                <p className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]">
                  01 71 68 17 97
                </p>
                <p className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]">
                  06 79 87 60 08
                </p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
                  Par mail
                </p>
                <p className="font-paragraphe-2-desktop font-[number:var(--paragraphe-2-desktop-font-weight)] text-dark text-[length:var(--paragraphe-2-desktop-font-size)] tracking-[var(--paragraphe-2-desktop-letter-spacing)] leading-[var(--paragraphe-2-desktop-line-height)] [font-style:var(--paragraphe-2-desktop-font-style)]">
                  email@entreprise.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-start justify-center gap-4 w-full">
            <span className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
              Mentions légales
            </span>
            <span className="font-medium text-[#1c1b1b] text-sm">|</span>
            <span className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
              Cookies
            </span>
            <span className="font-medium text-[#1c1b1b] text-sm">|</span>
            <span className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)]">
              CGV
            </span>
          </div>

          <p className="font-parahraphe-3 font-[number:var(--parahraphe-3-font-weight)] text-dark text-[length:var(--parahraphe-3-font-size)] text-center tracking-[var(--parahraphe-3-letter-spacing)] leading-[var(--parahraphe-3-line-height)] [font-style:var(--parahraphe-3-font-style)] w-full">
            ©2025 SDIExpertise®
          </p>
        </div>
      </footer>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-between fixed left-0 right-0 bottom-0 z-50 rounded-[16px_16px_0px_0px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[16px_16px_0px_0px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <Button
          variant="ghost"
          className="h-auto flex-1 flex flex-col items-center gap-1 p-4 border border-solid border-transparent shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(57deg,rgba(100,255,105,0)_0%,rgba(84,249,100,0.2)_100%),linear-gradient(180deg,rgba(170,127,251,0)_0%,rgba(170,127,251,0.2)_100%),linear-gradient(141deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]"
        >
          <HomeIcon className="w-6 h-6" />
          <span className="font-medium text-[#5d3ca4] text-xs text-center">
            Site principal
          </span>
        </Button>

        <Button
          variant="ghost"
          className="h-auto flex-1 flex flex-col items-center gap-1 p-4 border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]"
        >
          <StarIcon className="w-6 h-6" />
          <span className="font-medium text-[#5d3ca4] text-xs text-center">
            Accès pro
          </span>
        </Button>

        <div className="flex-shrink-0 p-4 border border-solid border-transparent backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]">
          <Button className="h-auto px-4 py-3 bg-[#faf8fc] rounded-[62px] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] font-bold text-[#1c1b1b] text-base">
            Obtenir un devis
          </Button>
        </div>
      </nav>
    </div>
  );
};
