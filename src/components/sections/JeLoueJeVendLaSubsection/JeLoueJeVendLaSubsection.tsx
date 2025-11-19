import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { ScrollArea } from "../../ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../ui/toggle-group";

const navigationTabs = [
  { value: "loue", label: "Je loue" },
  { value: "vends", label: "Je vends" },
  { value: "carte", label: "À la carte" },
];

const propertyTypes = [
  { value: "appartement", label: "Appartement" },
  { value: "maison", label: "Maison" },
  { value: "autre", label: "Autre" },
];

const servicesQuickAccess = [
  { label: "DPE", link: "/diagnostics" },
  { label: "DTG", link: "/diagnostics" },
  { label: "Amiante", link: "/diagnostics" },
  { label: "Audit énergétique", link: "/diagnostics" },
  { label: "Électricité", link: "/diagnostics" },
];

const servicesByCategory = [
  {
    category: "Diagnostics essentiels",
    items: [
      { label: "DPE", link: "/diagnostics" },
      { label: "Amiante", link: "/diagnostics" },
      { label: "Plomb", link: "/diagnostics" },
      { label: "Électricité", link: "/diagnostics" },
      { label: "Gaz", link: "/diagnostics" },
      { label: "ERP", link: "/diagnostics" },
    ],
  },
  {
    category: "Copropriétés et locaux commerciaux",
    items: [
      { label: "Diagnostic technique amiante", link: "/diagnostics" },
      { label: "Dossier amiante parties privatives", link: "/diagnostics" },
      { label: "DTG", link: "/diagnostics" },
    ],
  },
  {
    category: "Avant travaux ou démolition",
    items: [
      { label: "Amiante Bâtiment", link: "/diagnostics" },
      { label: "Plomb Bâtiment", link: "/diagnostics" },
      { label: "Désamiantage", link: "/diagnostics" },
    ],
  },
  {
    category: "Rénovation énergétique",
    items: [
      { label: "Audit énergétique", link: "/diagnostics" },
      { label: "DPE collectif", link: "/diagnostics" },
      { label: "Étude thermique", link: "/diagnostics" },
    ],
  },
  {
    category: "Santé et sécurité",
    items: [
      { label: "Mérules", link: "/diagnostics" },
      { label: "Termites", link: "/diagnostics" },
      { label: "Radon", link: "/diagnostics" },
    ],
  },
];

export const JeLoueJeVendLaSubsection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("loue");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const filterServices = (query: string) => {
    if (!query) return servicesByCategory;

    const lowerQuery = query.toLowerCase();
    return servicesByCategory
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.label.toLowerCase().includes(lowerQuery)
        ),
      }))
      .filter((category) => category.items.length > 0);
  };

  const filteredServices = filterServices(searchQuery);

  return (
    <section className="flex flex-col w-full items-start gap-2.5 pt-[65px] pb-[55px] px-[18px] relative">
      <div className="flex flex-col items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex w-full items-center gap-8 bg-transparent h-auto p-0 border-none">
            {navigationTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`w-fit font-medium text-lg text-center leading-[normal] whitespace-nowrap [font-family:'Ubuntu',Helvetica] tracking-[0] data-[state=active]:text-[#1c1b1b] data-[state=active]:underline data-[state=inactive]:text-[#5d3ca4] data-[state=inactive]:no-underline bg-transparent shadow-none border-none p-0 h-auto`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {activeTab !== "carte" ? (
          <div className="flex flex-col items-center justify-center gap-5 pt-[30px] pb-[25px] px-5 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="inline-flex flex-col items-center justify-center gap-[17px] relative flex-[0_0_auto]">
            <div className="flex flex-col w-full items-start gap-[13px] relative flex-[0_0_auto]">
              <ToggleGroup
                type="single"
                defaultValue="maison"
                className="flex w-full items-start flex-wrap gap-[15px] relative flex-[0_0_auto] z-[1]"
              >
                {propertyTypes.map((type) => (
                  <ToggleGroupItem
                    key={type.value}
                    value={type.value}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-3 relative rounded-lg overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none data-[state=on]:bg-[linear-gradient(0deg,rgba(193,160,255,1)_0%,rgba(193,160,255,1)_100%)] data-[state=off]:bg-[linear-gradient(138deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] h-auto`}
                  >
                    <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#1c1b1b] text-sm text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      {type.label}
                    </span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto] z-0">
                <div className="flex items-start gap-2 pl-3 pr-2 py-0 relative self-stretch w-full flex-[0_0_auto] rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="inline-flex h-11 items-center px-0 py-4 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6 mt-[-6.00px] mb-[-6.00px]"
                      alt="Left icon"
                      src="/left-icon.svg"
                    />
                  </div>

                  <Input
                    placeholder="Ville, code postal..."
                    className="flex-col h-11 justify-center px-0 py-1.5 flex-1 grow rounded overflow-hidden border-none bg-transparent shadow-none [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5 placeholder:text-[#1c1b1b80] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <p className="relative w-fit [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-[10px] tracking-[0] leading-5 whitespace-nowrap">
                  * uniquement en Île de France (75, 77, 78, 91, 92, 93, 94, 95)
                </p>
              </div>
            </div>

            <Button asChild className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 relative hover:bg-[#faf8fc] hover:opacity-90">
              <Link to="/commande">
                <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                  Démarrer
                </span>
              </Link>
            </Button>
          </div>
        </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-5 pt-[30px] pb-[25px] px-5 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto] w-full">
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-2 pl-4 pr-2 py-0 relative self-stretch w-full flex-[0_0_auto] rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer">
                    <SearchIcon className="w-6 h-6 text-[#1c1b1b80]" />
                    <Input
                      placeholder="Chercher un service"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsPopoverOpen(true)}
                      className="flex-col h-11 justify-center px-0 py-1.5 flex-1 grow rounded overflow-hidden border-none bg-transparent shadow-none [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-base tracking-[0] leading-5 placeholder:text-[#1c1b1b80] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[calc(100vw-40px)] max-w-[355px] p-0 bg-[#ffffff1a] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] rounded-2xl border-[none] shadow-[0px_1.85px_1.85px_#fffdfd33,inset_0px_-1.85px_1.85px_#ffffff33] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(103deg,rgba(255,255,255,1)_1%,rgba(170,127,251,1)_24%,rgba(170,127,251,1)_71%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                  align="start"
                  side="bottom"
                  sideOffset={8}
                >
                  <ScrollArea className="max-h-[400px] rounded-2xl">
                    <div className="flex flex-col gap-4 p-4">
                      {filteredServices.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="flex flex-col gap-2">
                          <h3 className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-xs tracking-[0] leading-[normal]">
                            {category.category}
                          </h3>
                          <div className="flex flex-col gap-2">
                            {category.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={item.link}
                                onClick={() => setIsPopoverOpen(false)}
                                className="[font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[normal] hover:text-[#5d3ca4] transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </PopoverContent>
              </Popover>

              <div className="flex flex-wrap items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {servicesQuickAccess.map((service, index) => (
                  <Button
                    key={index}
                    asChild
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#ffffff1a] rounded-[62px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_0.85px_0.85px_#ffffff,inset_-1.13e-16px_-0.85px_0.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[62px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto hover:bg-[#ffffff2a]"
                  >
                    <Link to={service.link}>
                      <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-medium text-[#5d3ca4] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                        {service.label}
                      </span>
                      <ArrowRightIcon className="w-5 h-5 text-[#5d3ca4]" />
                    </Link>
                  </Button>
                ))}
              </div>

              <Button asChild className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#faf8fc] rounded-[62px] overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb,3.63e-16px_2.93px_11.87px_#33333324] h-12 relative hover:bg-[#faf8fc] hover:opacity-90 mt-4">
                <Link to="/pro">
                  <span className="relative w-fit [font-family:'Ubuntu',Helvetica] font-bold text-[#1c1b1b] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
                    Découvrir l'univers pro
                  </span>
                  <ArrowRightIcon className="w-5 h-5 text-[#1c1b1b]" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
