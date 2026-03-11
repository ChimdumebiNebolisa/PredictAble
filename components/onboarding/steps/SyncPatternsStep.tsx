"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/shared/Button";
import { Chip } from "@/components/shared/Chip";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { DEMO_PATTERNS } from "@/lib/demo-sync-data";
import type { OnboardingState } from "../OnboardingFlow";

type SyncPatternsStepProps = {
  state: OnboardingState;
  updateState: (u: Partial<OnboardingState>) => void;
  onNext: () => void;
  onBack: () => void;
};

const LOADING_MS = 1200;
const CONNECTED_MS = 1700;

type Phase = "loading" | "connected" | "done";

export function SyncPatternsStep({ state, updateState, onNext, onBack }: SyncPatternsStepProps) {
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
        <p className="text-muted-text">Connecting to Patterns…</p>
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
        <h2 className="text-lg font-semibold text-dark-text">Patterns</h2>
        <p className="mt-2 text-sm text-muted-text">
          This week’s pattern we’re using.
        </p>
        <ul className="mt-4 space-y-3" aria-label="This week's pattern">
          {DEMO_PATTERNS.map((p) => (
            <li key={p.id} className="text-sm text-dark-text">
              {p.text}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-medium text-dark-text">Does this look right?</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Chip
            selected={state.confirmPatterns === true}
            onToggle={() => updateState({ confirmPatterns: true })}
            role="radio"
            aria-checked={state.confirmPatterns === true}
          >
            Yes, looks right
          </Chip>
          <Chip
            selected={state.confirmPatterns === false}
            onToggle={() => updateState({ confirmPatterns: false })}
            role="radio"
            aria-checked={state.confirmPatterns === false}
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
