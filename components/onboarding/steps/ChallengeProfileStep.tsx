"use client";

import { Button } from "@/components/shared/Button";
import { Chip } from "@/components/shared/Chip";
import { ContentSlab } from "@/components/shared/ContentSlab";
import type { OnboardingState } from "../OnboardingFlow";

const BARRIER_OPTIONS = [
  { id: "stairs", label: "Stairs" },
  { id: "long_corridors", label: "Long corridors" },
  { id: "crowds", label: "Crowds" },
  { id: "elevator_uncertainty", label: "Elevator uncertainty" },
  { id: "parking_distance", label: "Parking distance" },
  { id: "construction_detour", label: "Construction or detours" },
] as const;

type ChallengeProfileStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

export function ChallengeProfileStep({
  state,
  updateState,
  onNext,
  onBack,
}: ChallengeProfileStepProps) {
  const toggleBarrier = (id: string) => {
    const next = state.barriers.includes(id)
      ? state.barriers.filter((b) => b !== id)
      : [...state.barriers, id];
    updateState({ barriers: next });
  };

  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          What gets in the way?
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          Select any that affect your movement. This helps us flag harder transitions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {BARRIER_OPTIONS.map(({ id, label }) => (
            <Chip
              key={id}
              selected={state.barriers.includes(id)}
              onToggle={() => toggleBarrier(id)}
              role="checkbox"
            >
              {label}
            </Chip>
          ))}
        </div>
      </ContentSlab>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
