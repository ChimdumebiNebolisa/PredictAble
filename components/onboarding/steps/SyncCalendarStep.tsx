"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/shared/Button";
import { Chip } from "@/components/shared/Chip";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { DEMO_CALENDAR_EVENTS } from "@/lib/demo-sync-data";
import type { OnboardingState } from "../OnboardingFlow";

type SyncCalendarStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

const LOADING_MS = 1200;
const CONNECTED_MS = 1700;

type Phase = "loading" | "connected" | "done";

export function SyncCalendarStep({ state, updateState, onNext, onBack }: SyncCalendarStepProps) {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("connected"), LOADING_MS);
    const t2 = setTimeout(() => setPhase("done"), CONNECTED_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "loading") {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-6">
        <p className="text-muted-text">Connecting to Calendar…</p>
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-line">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-warm-orange" />
        </div>
      </div>
    );
  }

  if (phase === "connected") {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-6">
        <p className="text-sm font-medium text-warm-orange">Connected</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-warm-orange bg-halo-soft" aria-hidden>
          <svg className="h-5 w-5 text-warm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">Calendar</h2>
        <p className="mt-2 text-sm text-muted-text">
          Here’s what we see for today.
        </p>
        <ul className="mt-4 space-y-3" aria-label="Today's events">
          {DEMO_CALENDAR_EVENTS.map((event) => (
            <li
              key={event.id}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm"
            >
              <span className="font-medium text-dark-text">{event.time}</span>
              <span className="text-dark-text">{event.title}</span>
              {event.location && (
                <span className="text-muted-text">· {event.location}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-medium text-dark-text">Does this look right?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Chip
            selected={state.confirmCalendar === true}
            onToggle={() => updateState({ confirmCalendar: true })}
            role="radio"
            aria-checked={state.confirmCalendar === true}
          >
            Yes, looks right
          </Chip>
          <Chip
            selected={state.confirmCalendar === false}
            onToggle={() => updateState({ confirmCalendar: false })}
            role="radio"
            aria-checked={state.confirmCalendar === false}
          >
            Not quite
          </Chip>
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
