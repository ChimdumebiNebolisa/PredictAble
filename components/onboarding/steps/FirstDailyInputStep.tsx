"use client";

import { Button } from "@/components/shared/Button";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { Chip } from "@/components/shared/Chip";
import type { OnboardingState } from "../OnboardingFlow";

type FirstDailyInputStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

const STRAIN_OPTIONS: { value: number; label: string }[] = [
  { value: 0, label: "Low" },
  { value: 1, label: "Moderate" },
  { value: 2, label: "High" },
];

export function FirstDailyInputStep({
  state,
  updateState,
  onNext,
  onBack,
}: FirstDailyInputStepProps) {
  const strainValue = Math.min(2, Math.max(0, state.currentStrain));
  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          How are you today?
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          This helps us adjust today’s forecast. You can update it anytime with Quick check-in.
        </p>
        <p className="mt-4 text-sm text-muted-text">Current strain</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {STRAIN_OPTIONS.map(({ value, label }) => (
            <Chip
              key={value}
              selected={strainValue === value}
              onToggle={() => updateState({ currentStrain: value })}
              role="radio"
              aria-checked={strainValue === value}
            >
              {label}
            </Chip>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-text">Movement difficulty today</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {(["low", "medium", "high"] as const).map((level) => (
            <Chip
              key={level}
              selected={state.movementDifficulty === level}
              onToggle={() => updateState({ movementDifficulty: level })}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Chip>
          ))}
        </div>
      </ContentSlab>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>See your forecast</Button>
      </div>
    </div>
  );
}
