"use client";

import { Button } from "@/components/shared/Button";
import { Chip } from "@/components/shared/Chip";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { DEMO_FLAGGED_WINDOWS, DEMO_CALENDAR_EVENTS } from "@/lib/demo-sync-data";
import type { OnboardingState } from "../OnboardingFlow";

const morningEvent = DEMO_CALENDAR_EVENTS.find((e) => e.location === "Academic Building");
const afternoonEvent = DEMO_CALENDAR_EVENTS.find((e) => e.location === "Residence Hall");
const TIME_WINDOW_EVENT_CONTEXT =
  morningEvent && afternoonEvent
    ? `${morningEvent.title} at ${morningEvent.time} in ${morningEvent.location} and ${afternoonEvent.title} at ${afternoonEvent.time} in ${afternoonEvent.location}`
    : "your calendar events in these windows";

type RefineStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

export function RefineStep({
  state,
  updateState,
  onNext,
  onBack,
}: RefineStepProps) {
  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          We’ve flagged a few windows
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          Confirm if these match your experience so we can tune your plan.
        </p>
      </ContentSlab>
      <ContentSlab className="space-y-4">
        <div>
          <p className="text-sm font-medium text-dark-text">
            We’ve flagged {DEMO_FLAGGED_WINDOWS.timeWindows} as harder. Accurate?
          </p>
          <p className="mt-1 text-xs text-muted-text">
            (This covers your {TIME_WINDOW_EVENT_CONTEXT}.)
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Chip
              selected={state.refineTimeWindows === true}
              onToggle={() => updateState({ refineTimeWindows: true })}
              role="radio"
              aria-checked={state.refineTimeWindows === true}
            >
              Yes
            </Chip>
            <Chip
              selected={state.refineTimeWindows === false}
              onToggle={() => updateState({ refineTimeWindows: false })}
              role="radio"
              aria-checked={state.refineTimeWindows === false}
            >
              Not quite
            </Chip>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-dark-text">
            We’ve marked {DEMO_FLAGGED_WINDOWS.heavierDays} as heavier days. Does that match?
          </p>
          <p className="mt-1 text-xs text-muted-text">
            (We use this to weight recommendations on those days.)
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Chip
              selected={state.refineHeavierDays === true}
              onToggle={() => updateState({ refineHeavierDays: true })}
              role="radio"
              aria-checked={state.refineHeavierDays === true}
            >
              Yes
            </Chip>
            <Chip
              selected={state.refineHeavierDays === false}
              onToggle={() => updateState({ refineHeavierDays: false })}
              role="radio"
              aria-checked={state.refineHeavierDays === false}
            >
              Not quite
            </Chip>
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
