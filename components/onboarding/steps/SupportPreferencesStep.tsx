"use client";

import { Button } from "@/components/shared/Button";
import { Chip } from "@/components/shared/Chip";
import { ContentSlab } from "@/components/shared/ContentSlab";
import type { OnboardingState } from "../OnboardingFlow";

const SUPPORT_OPTIONS = [
  { id: "leave_earlier", label: "Leave earlier" },
  { id: "buffer_time", label: "Add buffer time" },
  { id: "lower_strain_timing", label: "Lower-strain timing" },
  { id: "recovery_gap", label: "Recovery gap" },
  { id: "short_suggestions", label: "Keep suggestions short" },
  { id: "reduce_route_complexity", label: "Simplify route when possible" },
] as const;

type SupportPreferencesStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

export function SupportPreferencesStep({
  state,
  updateState,
  onNext,
  onBack,
}: SupportPreferencesStepProps) {
  const toggle = (id: string) => {
    const next = state.supportPreferences.includes(id)
      ? state.supportPreferences.filter((s) => s !== id)
      : [...state.supportPreferences, id];
    updateState({ supportPreferences: next });
  };

  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          How we suggest changes
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          We will rank recommendations by these when several options fit. You can change this in Preferences.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SUPPORT_OPTIONS.map(({ id, label }) => (
            <Chip
              key={id}
              selected={state.supportPreferences.includes(id)}
              onToggle={() => toggle(id)}
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
