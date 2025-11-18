import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
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

export const ProjectTypeSelectorSection = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState("louer");

  return (
    <section className="flex flex-col w-full items-start gap-4 relative">
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
              <div className="flex items-center gap-2 pl-3 pr-2 py-0 relative self-stretch w-full rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <div className="inline-flex h-11 items-center px-0 py-4 relative">
                  <SearchIcon className="relative w-6 h-6 text-[#1c1b1b]" />
                </div>

                <Input
                  id="location-input"
                  type="text"
                  defaultValue="32 avenue du Générale Michel Bizot"
                  className="flex-1 h-11 px-0 py-1.5 border-0 bg-transparent [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <p className="relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-[10px] tracking-[0] leading-5">
                * uniquement en Île de France (75, 77, 78, 91, 92, 93, 94, 95)
              </p>
            </div>
          </div>
        </div>

        <img
          className="relative self-stretch w-full h-[191px] rounded-[10px] border border-solid border-[#aa7ffb] object-cover"
          alt="Map showing location"
          src="/rectangle-216.png"
        />
      </div>
    </section>
  );
};
