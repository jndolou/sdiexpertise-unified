import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { InteractiveMap } from "../../../../components/shared";

export const ExploreParisSection = (): JSX.Element => {
  const [postalCode, setPostalCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (postalCode.trim()) {
      setSearchQuery(postalCode.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  return (
    <section className="flex flex-col w-full items-start gap-[25px] pt-[60px] pb-0 px-4">
      <div className="inline-flex flex-col items-start gap-5 w-full">
        <div className="inline-flex flex-col items-start gap-[15px] w-full">
          <h2 className="w-full font-titre-2-mobile font-[number:var(--titre-2-mobile-font-weight)] text-dark text-[length:var(--titre-2-mobile-font-size)] tracking-[var(--titre-2-mobile-letter-spacing)] leading-[var(--titre-2-mobile-line-height)] [font-style:var(--titre-2-mobile-font-style)]">
            Explorer Paris par arrondissement
          </h2>

          <p className="w-full font-paragraphe-1 font-[number:var(--paragraphe-1-font-weight)] text-dark text-[length:var(--paragraphe-1-font-size)] tracking-[var(--paragraphe-1-letter-spacing)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)]">
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              Tapez un code postal ou{" "}
            </span>
            <span className="font-paragraphe-1 text-[#7e3287] text-[length:var(--paragraphe-1-font-size)] leading-[var(--paragraphe-1-line-height)] [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)]">
              explorez
            </span>
            <span className="text-[#1c1b1b] leading-[var(--paragraphe-1-line-height)] font-paragraphe-1 [font-style:var(--paragraphe-1-font-style)] font-[number:var(--paragraphe-1-font-weight)] tracking-[var(--paragraphe-1-letter-spacing)] text-[length:var(--paragraphe-1-font-size)]">
              {" "}
              la carte.
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full items-start gap-0.5">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="flex items-center gap-2 pl-3 pr-2 py-0 w-full h-11 rounded-xl border-[none] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
              <SearchIcon className="w-6 h-6 text-dark" />
              <Input
                type="text"
                placeholder="Code postal"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 h-auto border-0 bg-transparent px-0 py-1.5 [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b80] text-sm tracking-[0] leading-5 placeholder:text-[#1c1b1b80] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </div>

      <Card className="w-full h-[232px] rounded-2xl border border-solid border-[#aa7ffb] overflow-hidden bg-cover bg-center bg-no-repeat">
        <CardContent className="p-0 h-full">
          <InteractiveMap searchQuery={searchQuery} />
        </CardContent>
      </Card>
    </section>
  );
};
