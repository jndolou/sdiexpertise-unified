import React, { useState } from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";

const summaryData = {
  propertyType: "appartement T2",
  surface: "70m2",
  address: "32 avenue de Générale Michel Bizot",
  constructionPeriod: "avant 1935",
};

const questions = [
  {
    id: "annexes",
    label: "Avez-vous des annexes :",
  },
  {
    id: "copropriete",
    label: "Êtes-vous en copropriété :",
  },
];

export const DiagnosticDetailsSection = (): JSX.Element => {
  const [answers, setAnswers] = useState<Record<string, 'oui' | 'non' | null>>({
    annexes: null,
    copropriete: null,
  });

  const handleCheckboxChange = (questionId: string, value: 'oui' | 'non') => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: prev[questionId] === value ? null : value
    }));
  };

  return (
    <section className="inline-flex flex-col items-start gap-3.5 relative flex-[0_0_auto]">
      <h2 className="relative w-full [font-family:'Ubuntu',Helvetica] font-bold text-dark text-lg tracking-[0] leading-[21.6px]">
        Récapitulatif :
      </h2>

      <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
        <p className="relative w-full [font-family:'Open_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[20.4px]">
          <span className="text-[#1c1b1b]">Vous louer un </span>
          <span className="text-[#5d3ca4]">{summaryData.propertyType}</span>
          <span className="text-[#1c1b1b]"> de </span>
          <span className="text-[#5d3ca4]">{summaryData.surface}</span>
          <span className="text-[#1c1b1b]">, au </span>
          <span className="text-[#5d3ca4]">{summaryData.address}</span>
          <span className="text-[#1c1b1b]">, construit </span>
          <span className="text-[#5d3ca4]">
            {summaryData.constructionPeriod}
          </span>
          <span className="text-[#1c1b1b]">.</span>
        </p>
      </div>

      <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
        {questions.map((question) => (
          <div
            key={question.id}
            className="flex w-full items-center gap-5 relative"
          >
            <div className="relative flex-1 [font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px]">
              {question.label}
            </div>

            <div className="flex items-center gap-[9px] relative">
              <Checkbox
                id={`${question.id}-oui`}
                checked={answers[question.id] === 'oui'}
                onCheckedChange={() => handleCheckboxChange(question.id, 'oui')}
                className="w-2.5 h-2.5 border-[#5d3ca4] data-[state=checked]:bg-[#5d3ca4] data-[state=checked]:border-[#5d3ca4]"
              />
              <Label
                htmlFor={`${question.id}-oui`}
                className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px] whitespace-nowrap cursor-pointer"
              >
                Oui
              </Label>
            </div>

            <div className="flex items-center gap-[9px] relative">
              <Checkbox
                id={`${question.id}-non`}
                checked={answers[question.id] === 'non'}
                onCheckedChange={() => handleCheckboxChange(question.id, 'non')}
                className="w-2.5 h-2.5 border-[#5d3ca4] data-[state=checked]:bg-[#5d3ca4] data-[state=checked]:border-[#5d3ca4]"
              />
              <Label
                htmlFor={`${question.id}-non`}
                className="[font-family:'Open_Sans',Helvetica] font-normal text-[#1c1b1b] text-sm tracking-[0] leading-[18.2px] whitespace-nowrap cursor-pointer"
              >
                Non
              </Label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
