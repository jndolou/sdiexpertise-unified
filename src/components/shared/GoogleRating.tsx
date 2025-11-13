import { StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface GoogleRatingProps {
  variant?: "card" | "badge";
  rating?: number;
  className?: string;
}

export const GoogleRating = ({
  variant = "card",
  rating = 4.9,
  className = "",
}: GoogleRatingProps): JSX.Element => {
  const content = (
    <div className="inline-flex flex-col items-start gap-0.5">
      <div className="inline-flex items-center gap-2">
        <div className="inline-flex items-center gap-0.5">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className="relative w-3 h-3 fill-current text-yellow-400"
            />
          ))}
        </div>
        <span className="[font-family:'Ubuntu',Helvetica] font-medium text-xs leading-[14.4px] text-dark tracking-[0] whitespace-nowrap">
          {rating}
        </span>
      </div>
      <p className="self-stretch font-mot-en-valeur-3 font-[number:var(--mot-en-valeur-3-font-weight)] text-dark text-[length:var(--mot-en-valeur-3-font-size)] tracking-[var(--mot-en-valeur-3-letter-spacing)] leading-[var(--mot-en-valeur-3-line-height)] [font-style:var(--mot-en-valeur-3-font-style)]">
        Sur Google
      </p>
    </div>
  );

  if (variant === "badge") {
    return (
      <Badge
        variant="outline"
        className={`inline-flex items-start gap-2 p-4 h-auto rounded-2xl overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none text-dark ${className}`}
      >
        <div className="inline-flex items-center gap-1">{content}</div>
      </Badge>
    );
  }

  return (
    <Card
      className={`inline-flex items-start gap-2 flex-[0_0_auto] rounded-2xl border-[none] flex-col p-4 relative overflow-hidden shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-2xl before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${className}`}
    >
      <CardContent className="inline-flex items-center gap-1 relative flex-[0_0_auto] p-0">
        {content}
      </CardContent>
    </Card>
  );
};
