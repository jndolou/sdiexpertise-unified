import React, { useState } from "react";
import { ArrowLeft, Search, Plus } from "lucide-react";

interface ServicesMenuProps {
  onBack: () => void;
}

const serviceCategories = [
  {
    name: "Diagnostics immobiliers",
    services: [
      "Diagnostic amiante",
      "Diagnostic plomb",
      "Diagnostic électricité",
      "Diagnostic gaz",
      "État des risques et pollutions",
      "Diagnostic termites",
    ],
  },
  {
    name: "Performance énergétique",
    services: [
      "DPE (Diagnostic de Performance Énergétique)",
      "Audit énergétique",
      "Étude thermique",
    ],
  },
  {
    name: "Bureau d'études",
    services: [
      "Étude de sol G1",
      "Étude de sol G2",
      "Mission SPS",
      "Étude structure",
    ],
  },
  {
    name: "Contrôle technique",
    services: [
      "Mission L",
      "Mission VISA",
      "Mission DET",
    ],
  },
  {
    name: "Accompagnement",
    services: [
      "Assistance à maîtrise d'ouvrage",
      "Coordination de chantier",
      "Conseil en rénovation",
    ],
  },
  {
    name: "Aides et primes",
    services: [
      "MaPrimeRénov'",
      "CEE (Certificats d'Économie d'Énergie)",
      "Éco-PTZ",
    ],
  },
];

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onBack }) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const filteredCategories = serviceCategories.map((category) => ({
    ...category,
    services: category.services.filter((service) =>
      service.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) =>
    searchQuery === "" ||
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.services.length > 0
  );

  return (
    <div className="flex flex-col h-full bg-white rounded-3xl">
      <div className="flex items-center gap-3 p-6 pb-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f3f1f7] transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-[#1c1b1b]" />
        </button>
        <h2 className="font-[Ubuntu] font-bold text-[#1c1b1b] text-xl">
          Tous les services
        </h2>
      </div>

      <div className="px-6 pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
          <input
            type="text"
            placeholder="Chercher un service"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-2xl bg-[#f3f1f7] border-none outline-none font-[Ubuntu] text-[#999999] text-sm placeholder:text-[#999999]"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6">
        <h3 className="font-[Ubuntu] font-bold text-[#1c1b1b] text-base mb-3">
          Voir tous les services
        </h3>

        <div className="flex flex-col gap-2">
          {filteredCategories.map((category) => (
            <div key={category.name}>
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between h-14 px-4 rounded-xl hover:bg-[#f3f1f7] transition-colors"
              >
                <span className="font-[Ubuntu] font-medium text-[#1c1b1b] text-base">
                  {category.name}
                </span>
                <Plus
                  className={`w-5 h-5 text-[#1c1b1b] transition-transform duration-200 ${
                    expandedCategories.has(category.name) ? "rotate-45" : ""
                  }`}
                />
              </button>

              {expandedCategories.has(category.name) && (
                <div className="ml-4 mt-1 mb-2 flex flex-col gap-1">
                  {category.services.map((service) => (
                    <button
                      key={service}
                      className="w-full text-left h-10 px-4 rounded-lg hover:bg-[#f3f1f7] transition-colors"
                    >
                      <span className="font-[Ubuntu] font-normal text-[#666666] text-sm">
                        {service}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
