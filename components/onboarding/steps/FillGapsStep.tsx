"use client";

import { useState } from "react";
import { Button } from "@/components/shared/Button";
import { Chip } from "@/components/shared/Chip";
import { ContentSlab } from "@/components/shared/ContentSlab";
import {
  DEMO_BARRIER_OPTIONS,
  DEMO_OTHER_BARRIER_OPTIONS,
  DEMO_FACTOR_OPTIONS,
} from "@/lib/demo-sync-data";
import type { OnboardingState } from "../OnboardingFlow";

type FillGapsStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

export function FillGapsStep({
  state,
  updateState,
  onNext,
  onBack,
}: FillGapsStepProps) {
  const [showOtherBarriers, setShowOtherBarriers] = useState(false);

  const toggleBarrier = (id: string) => {
    if (id === "other") {
      setShowOtherBarriers((prev) => !prev);
      return;
    }
    const next = state.barriers.includes(id)
      ? state.barriers.filter((b) => b !== id)
      : [...state.barriers, id];
    updateState({ barriers: next });
  };

  const toggleOtherBarrier = (id: string) => {
    const next = state.barriers.includes(id)
      ? state.barriers.filter((b) => b !== id)
      : [...state.barriers, id];
    updateState({ barriers: next });
  };

  const toggleFactor = (id: string) => {
    const next = state.otherFactors.includes(id)
      ? state.otherFactors.filter((f) => f !== id)
      : [...state.otherFactors, id];
    updateState({ otherFactors: next });
  };

  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          A few more details
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          We don’t have this from your data. Quick choices so we can plan better.
        </p>
      </ContentSlab>
      <ContentSlab className="space-y-4">
        <div>
          <p className="text-sm font-medium text-dark-text">
            Which of these usually make movement harder?
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {DEMO_BARRIER_OPTIONS.map(({ id, label }) => (
              <Chip
                key={id}
                selected={id === "other" ? showOtherBarriers : state.barriers.includes(id)}
                onToggle={() => toggleBarrier(id)}
                role="checkbox"
                aria-checked={id === "other" ? showOtherBarriers : state.barriers.includes(id)}
              >
                {label}
              </Chip>
            ))}
          </div>
          {showOtherBarriers && (
            <div className="mt-2 flex flex-wrap gap-2 pl-2">
              {DEMO_OTHER_BARRIER_OPTIONS.map(({ id, label }) => (
                <Chip
                  key={id}
                  selected={state.barriers.includes(id)}
                  onToggle={() => toggleOtherBarrier(id)}
                  role="checkbox"
                  aria-checked={state.barriers.includes(id)}
                >
                  {label}
                </Chip>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-dark-text">
            Anything else we should factor in?
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {DEMO_FACTOR_OPTIONS.map(({ id, label }) => (
              <Chip
                key={id}
                selected={state.otherFactors.includes(id)}
                onToggle={() => toggleFactor(id)}
                role="checkbox"
                aria-checked={state.otherFactors.includes(id)}
              >
                {label}
              </Chip>
            ))}
          </div>
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
