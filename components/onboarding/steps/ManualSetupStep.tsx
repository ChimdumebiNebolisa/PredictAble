"use client";

import { Button } from "@/components/shared/Button";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { Input } from "@/components/shared/Input";
import type { OnboardingState } from "../OnboardingFlow";

type ManualSetupStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

export function ManualSetupStep({
  state,
  updateState,
  onNext,
  onBack,
}: ManualSetupStepProps) {
  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          Your typical pattern
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          When do you usually find movement harder? We use this to flag time windows.
        </p>
        <div className="mt-4">
          <Input
            label="Typical difficult times (e.g. 2:30 PM to 5:30 PM)"
            value={state.typicalDifficultTimes}
            onChange={(e) =>
              updateState({ typicalDifficultTimes: e.target.value })
            }
            placeholder="e.g. 2:30 PM to 5:30 PM"
          />
        </div>
        <p className="mt-4 text-sm text-muted-text">
          You can add common transitions and route difficulty in Schedule after setup.
        </p>
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
