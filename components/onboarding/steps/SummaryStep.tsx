"use client";

import { Button } from "@/components/shared/Button";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { DEMO_CALENDAR_EVENTS } from "@/lib/demo-sync-data";
import type { OnboardingState } from "../OnboardingFlow";

const STRAIN_LABELS = ["Low", "Moderate", "High"];

type SummaryStepProps = {
  state: OnboardingState;
  onNext: () => void;
  onBack: () => void;
};

function formatBarriers(barriers: string[]): string {
  if (barriers.length === 0) return "None selected";
  return barriers
    .map((b) => b.replace(/_/g, " "))
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(", ");
}

function formatStrain(value: number): string {
  return STRAIN_LABELS[Math.min(2, Math.max(0, Math.round(value)))] ?? "Moderate";
}

const SYNCED_LINES = [
  `Calendar: ${DEMO_CALENDAR_EVENTS.length} events`,
  "Activity: steps, active minutes, flights climbed",
  "Patterns: heavier 2–5 PM, Tue/Thu",
  "Places: Student Center, Library, Academic Building, Residence Hall",
  "Rough schedule: Morning on campus, 12–2 free, Afternoon meetings",
];

export function SummaryStep({ state, onNext, onBack }: SummaryStepProps) {
  const movementLabel =
    state.movementDifficulty.charAt(0).toUpperCase() + state.movementDifficulty.slice(1);
  const userToldLines = [
    `Barriers: ${formatBarriers(state.barriers)}`,
    `Today: ${formatStrain(state.currentStrain)} strain, ${movementLabel} movement difficulty`,
  ];

  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          Here’s what we’re using for today’s plan
        </h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-token border border-line/60 bg-center/80 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-text">What we synced</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-text" aria-label="Synced data">
              {SYNCED_LINES.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-token border border-warm-orange/30 bg-halo-soft/50 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-dark-text">What you told us</p>
            <ul className="mt-2 space-y-1 text-sm text-dark-text" aria-label="Your answers">
              {userToldLines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
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
