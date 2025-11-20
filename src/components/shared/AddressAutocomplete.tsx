import { SearchIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "../ui/input";

interface AddressSuggestion {
  label: string;
  city?: string;
  postcode?: string;
  context?: string;
  coordinates?: [number, number];
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string, suggestion?: AddressSuggestion) => void;
  onSelect?: (suggestion: AddressSuggestion) => void;
  placeholder?: string;
  className?: string;
}

export const AddressAutocomplete = ({
  value,
  onChange,
  onSelect,
  placeholder = "Code postal ou adresse",
  className = "",
}: AddressAutocompleteProps): JSX.Element => {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (value.length < 3) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(value)}&limit=5`
        );
        const data = await response.json();

        const formattedSuggestions: AddressSuggestion[] = data.features.map(
          (feature: any) => ({
            label: feature.properties.label,
            city: feature.properties.city,
            postcode: feature.properties.postcode,
            context: feature.properties.context,
            coordinates: feature.geometry.coordinates,
          })
        );

        setSuggestions(formattedSuggestions);
        setShowSuggestions(true);
        setActiveSuggestionIndex(-1);
      } catch (error) {
        console.error("Erreur lors de la recherche d'adresses:", error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion: AddressSuggestion) => {
    onChange(suggestion.label, suggestion);
    setShowSuggestions(false);
    if (onSelect) {
      onSelect(suggestion);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[activeSuggestionIndex]);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="flex items-center gap-2 pl-3 pr-2 py-0 w-full h-11 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
        <SearchIcon className="w-6 h-6 text-dark z-10" />
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`flex-1 h-auto border-0 bg-transparent px-0 py-1.5 [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-5 placeholder:text-[#1c1b1b80] focus-visible:ring-0 focus-visible:ring-offset-0 z-10 ${className}`}
          autoComplete="off"
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-2 z-50 rounded-xl overflow-hidden border-[none] shadow-lg backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.9)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <ul className="max-h-[300px] overflow-y-auto z-10 relative">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  index === activeSuggestionIndex
                    ? "bg-[#7e328733]"
                    : "hover:bg-[#7e328719]"
                } ${index < suggestions.length - 1 ? "border-b border-[#1c1b1b1a]" : ""}`}
              >
                <div className="flex flex-col gap-0.5">
                  <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1c1b1b] text-sm tracking-[0] leading-[18px]">
                    {suggestion.label}
                  </p>
                  {suggestion.context && (
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-xs tracking-[0] leading-4">
                      {suggestion.context}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isLoading && value.length >= 3 && (
        <div className="absolute w-full mt-2 z-50 rounded-xl overflow-hidden border-[none] shadow-lg backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.9)_100%)]">
          <div className="px-4 py-3">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5">
              Recherche en cours...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
