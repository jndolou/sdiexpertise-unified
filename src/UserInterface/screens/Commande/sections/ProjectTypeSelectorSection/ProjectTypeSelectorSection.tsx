import { SearchIcon, Pencil } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Button } from "../../../../components/ui/button";
import { AddressAutocomplete } from "../../../../components/shared/AddressAutocomplete";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const projectTypes = [
  { value: "vendre", label: "Vendre" },
  { value: "louer", label: "Louer" },
  { value: "renover", label: "Rénover" },
  { value: "autre", label: "Autre" },
];

const propertyTypes = [
  { value: "appartement", label: "Appartement" },
  { value: "maison", label: "Maison" },
  { value: "local-commercial", label: "Local commercial" },
  { value: "autre", label: "Autre" },
];

export const ProjectTypeSelectorSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState("louer");
  const [location, setLocation] = useState("32 avenue du Générale Michel Bizot");
  const [selectedPropertyType, setSelectedPropertyType] = useState("appartement");
  const [surface, setSurface] = useState("70 m2");
  const [constructionYear, setConstructionYear] = useState("<1935");

  return (
    <section className="flex flex-col w-full items-start gap-4 relative px-4">
      <div className="flex flex-col items-start gap-[13px] relative w-full">
        <div className="flex flex-col w-full items-start gap-3.5 relative">
          <h2 className="relative self-stretch [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
            Quel est votre projet ?
          </h2>

          <ToggleGroup
            type="single"
            value={selectedProject}
            onValueChange={(value) => {
              if (value) setSelectedProject(value);
            }}
            className="inline-flex items-center gap-2.5 relative flex-wrap"
          >
            {projectTypes.map((type) => (
              <ToggleGroupItem
                key={type.value}
                value={type.value}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)] data-[state=off]:bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto"
              >
                <span className="relative [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {type.label}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="flex flex-col w-full items-start justify-center gap-1.5 relative">
          <Label
            htmlFor="location-input"
            className="relative [font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]"
          >
            Localisation*
          </Label>

          <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full">
              <AddressAutocomplete
                value={location}
                onChange={(value) => setLocation(value)}
                placeholder="Code postal ou adresse"
                onSelect={(suggestion) => {
                  console.log('Adresse sélectionnée:', suggestion);
                }}
              />

              <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-[10px] tracking-[0] leading-5">
                * uniquement en Île de France (75, 77, 78, 91, 92, 93, 94, 95)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-4 relative mt-4">
          <h3 className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-lg tracking-[0] leading-[21.6px]">
            Données détectées de votre bien
          </h3>

          <div className="flex flex-col w-full items-start gap-1.5">
            <ToggleGroup
              type="single"
              value={selectedPropertyType}
              onValueChange={(value) => {
                if (value) setSelectedPropertyType(value);
              }}
              className="items-center justify-center grid grid-cols-2 gap-2 w-full"
            >
              {propertyTypes.map((type) => (
                <ToggleGroupItem
                  key={type.value}
                  value={type.value}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)] data-[state=off]:bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto"
                >
                  <span className="relative [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    {type.label}
                  </span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex flex-col w-full items-start gap-1.5">
            <Label
              htmlFor="property-type-input"
              className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]"
            >
              Type de logement*
            </Label>
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 flex items-center gap-2 pl-3 pr-2 py-0 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <Input
                  id="property-type-input"
                  type="text"
                  value="Appartement : T2"
                  readOnly
                  className="flex-1 h-11 px-0 py-1.5 border-0 bg-transparent [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-lg flex-shrink-0"
              >
                <Pencil className="w-5 h-5 text-[#1c1b1b]" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-1.5">
            <Label
              htmlFor="surface"
              className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]"
            >
              Superficie*
            </Label>
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 flex items-center gap-2 pl-3 pr-2 py-0 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <Input
                  id="surface"
                  type="text"
                  value={surface}
                  onChange={(e) => setSurface(e.target.value)}
                  className="flex-1 h-11 px-0 py-1.5 border-0 bg-transparent [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-lg flex-shrink-0"
              >
                <Pencil className="w-5 h-5 text-[#1c1b1b]" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-1.5">
            <Label
              htmlFor="construction-year"
              className="[font-family:'Open_Sans',Helvetica] font-normal text-[#5d3ca4] text-sm tracking-[0] leading-[18.2px]"
            >
              Année de construction*
            </Label>
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 flex items-center gap-2 pl-3 pr-2 py-0 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <Input
                  id="construction-year"
                  type="text"
                  value={constructionYear}
                  onChange={(e) => setConstructionYear(e.target.value)}
                  className="flex-1 h-11 px-0 py-1.5 border-0 bg-transparent [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-lg flex-shrink-0"
              >
                <Pencil className="w-5 h-5 text-[#1c1b1b]" />
              </Button>
            </div>
          </div>

          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-xs tracking-[0] leading-5">
            Les champs marqués d'un * sont obligatoires.
          </p>

          <div className="flex items-center justify-between w-full p-4 rounded-2xl backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="flex flex-col gap-1 relative z-10">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1c1b1b] text-lg tracking-[0] leading-5">
                Prix : <span className="text-[#7e3287]">300€</span>
              </p>
            </div>
            <Button
              onClick={() => navigate('/commande-pack')}
              className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7e3287] hover:bg-[#6b2b75] text-white [font-family:'Ubuntu',Helvetica] font-medium text-base shadow-[0px_4px_12px_rgba(126,50,135,0.3)]"
            >
              Continuer
              <span className="text-xl leading-none">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
