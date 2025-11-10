import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const categories = [
  { id: 1, label: "Diagnostics immobiliers", selected: false },
  { id: 2, label: "Bureau d'études", selected: true },
  { id: 3, label: "Contrôles techniques", selected: false },
];

const packs = [
  { id: 1, label: "Location", selected: false },
  { id: 2, label: "Vente", selected: true },
  { id: 3, label: "Rénovation", selected: false },
  { id: 4, label: "Copropriété", selected: false },
  { id: 5, label: "Immeuble", selected: false },
  { id: 6, label: "Démolition", selected: false },
];

const services = [
  {
    id: 1,
    image: "/frame-403-1.svg",
    tag: "Pack Vente",
    title: "DPE (Diagnostic de performance énergétique)",
    description: "Obligatoire pour la vente.\nRapport valable 10 ans.",
    price: "Dès 90€ TTC",
    buttonIcon: "/bouton-1.svg",
  },
  {
    id: 2,
    image: "/frame-403.svg",
    tag: "Pack Vente",
    title: "Diagnostic électricité",
    description: "Obligatoire pour la vente.\nRapport valable 15 ans.",
    price: "Dès 100€ TTC",
    buttonIcon: "/bouton.svg",
  },
];

export const FilterSection = (): JSX.Element => {
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((cat) => cat.selected),
  );
  const [selectedPacks, setSelectedPacks] = useState(
    packs.map((pack) => pack.selected),
  );

  const toggleCategory = (index: number) => {
    const newSelected = [...selectedCategories];
    newSelected[index] = !newSelected[index];
    setSelectedCategories(newSelected);
  };

  const togglePack = (index: number) => {
    const newSelected = [...selectedPacks];
    newSelected[index] = !newSelected[index];
    setSelectedPacks(newSelected);
  };

  return (
    <section className="flex flex-col items-start gap-10 pt-[124px] px-4">
      <div className="flex flex-col items-start gap-10">
        <div className="flex flex-col items-start justify-center gap-[25px]">
          <h2 className="w-[358px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-2xl tracking-[0] leading-[28.8px]">
            Affinez vos recherches
          </h2>

          <div className="flex flex-col items-start gap-2.5">
            <h3 className="w-[358px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
              Catégories
            </h3>

            <div className="flex flex-col w-[360px] items-start gap-2.5">
              <div className="flex items-center gap-[15px] flex-wrap">
                {categories.map((category, index) => (
                  <Button
                    key={category.id}
                    onClick={() => toggleCategory(index)}
                    variant="ghost"
                    className={`h-auto px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                      selectedCategories[index]
                        ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                        : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                    }`}
                  >
                    <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      {category.label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-2.5">
          <h3 className="w-[358px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
            Packs
          </h3>

          <div className="flex w-[657px] items-center gap-[15px] flex-wrap">
            {packs.map((pack, index) => (
              <Button
                key={pack.id}
                onClick={() => togglePack(index)}
                variant="ghost"
                className={`h-auto px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${
                  selectedPacks[index]
                    ? "bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)]"
                    : "bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
                }`}
              >
                <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {pack.label}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[455px] items-start gap-8">
        <div className="flex flex-col w-[360px] items-start justify-center gap-[5px]">
          <h3 className="w-[317px] [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
            Bureau d&apos;étude x Pack Vente
          </h3>

          <p className="w-[317px] [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-xs tracking-[0] leading-[15.6px]">
            2 services trouvés
          </p>
        </div>

        <div className="flex items-start gap-[15px]">
          {services.map((service) => (
            <Card
              key={service.id}
              className="w-[222px] p-4 bg-[#ffffff1a] rounded-2xl overflow-hidden border-[none] shadow-[inset_0px_1.85px_1.85px_#ffffff,inset_0px_-1.85px_1.85px_#ececec] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(163deg,rgba(255,255,255,1)_0%,rgba(170,127,251,1)_26%,rgba(170,127,251,1)_74%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <CardContent className="flex flex-col items-start gap-[15px] p-0">
                <img
                  className="w-full"
                  alt="Service illustration"
                  src={service.image}
                />

                <div className="flex flex-col w-[188px] items-start gap-2 rounded-2xl">
                  <Badge className="h-[18px] px-1.5 py-1.5 bg-violet-clair rounded-[62px] overflow-hidden shadow-[inset_-1.13e-16px_-1.85px_1.85px_#a171ff] hover:bg-violet-clair">
                    <span className="font-tags-mobile font-[number:var(--tags-mobile-font-weight)] text-[#f3f1f5] text-[length:var(--tags-mobile-font-size)] tracking-[var(--tags-mobile-letter-spacing)] leading-[var(--tags-mobile-line-height)] [font-style:var(--tags-mobile-font-style)]">
                      {service.tag}
                    </span>
                  </Badge>

                  <div className="flex flex-col items-start gap-[13px]">
                    <div className="flex flex-col items-start gap-2">
                      <h4 className="w-[188px] font-titre-3 font-[number:var(--titre-3-font-weight)] text-dark text-[length:var(--titre-3-font-size)] tracking-[var(--titre-3-letter-spacing)] leading-[var(--titre-3-line-height)] [font-style:var(--titre-3-font-style)]">
                        {service.title}
                      </h4>

                      <p className="w-[188px] font-paragraphe-2-mobile font-[number:var(--paragraphe-2-mobile-font-weight)] text-dark text-[length:var(--paragraphe-2-mobile-font-size)] tracking-[var(--paragraphe-2-mobile-letter-spacing)] leading-[var(--paragraphe-2-mobile-line-height)] [font-style:var(--paragraphe-2-mobile-font-style)] whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-[13px]">
                      <div className="flex w-[188px] h-[17px] items-center gap-2">
                        <span className="w-[132px] [font-family:'Pecita-Book',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[16.8px]">
                          {service.price}
                        </span>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <Button
                          variant="ghost"
                          className="h-12 px-4 py-3 rounded-[62px] overflow-hidden border-[none] shadow-[0px_-1.85px_1.85px_#ececec,inset_0px_1.85px_1.85px_#ffffff] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(169deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_36%,rgba(170,127,251,1)_68%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                        >
                          <span className="[font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                            En savoir plus
                          </span>
                        </Button>

                        <img
                          className="flex-[0_0_auto]"
                          alt="Button icon"
                          src={service.buttonIcon}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
