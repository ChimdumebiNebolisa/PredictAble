"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/app-shell/AppShell";
import { Button } from "@/components/shared/Button";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { SliderField } from "@/components/shared/SliderField";
import { Chip } from "@/components/shared/Chip";

const STRAIN_LABELS = ["Low", "Moderate", "High"];

export default function QuickCheckInPage() {
  const router = useRouter();
  const [strain, setStrain] = useState(1);
  const [movementDifficulty, setMovementDifficulty] = useState<
    "low" | "medium" | "high"
  >("low");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "predictable-checkin",
          JSON.stringify({
            strain,
            movementDifficulty,
            notes,
            at: new Date().toISOString(),
          })
        );
      } catch {
        // ignore
      }
    }
    router.push("/today");
  };

  return (
    <AppShell
      showTopNav={true}
      showBottomNav={false}
      title="Quick check-in"
      backHref="/today"
    >
      <div className="flex flex-col gap-6 p-[var(--spacing-page)] pb-24">
        <ContentSlab>
          <h2 className="text-lg font-semibold text-dark-text">
            Update today’s context
          </h2>
          <p className="mt-2 text-sm text-muted-text">
            This will refresh your forecast. You can check in anytime.
          </p>
          <div className="mt-4">
            <SliderField
              label="Current strain"
              min={0}
              max={2}
              value={strain}
              onChange={setStrain}
              valueLabels={STRAIN_LABELS}
            />
          </div>
          <p className="mt-4 text-sm text-muted-text">
            Movement difficulty today
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {(["low", "medium", "high"] as const).map((level) => (
              <Chip
                key={level}
                selected={movementDifficulty === level}
                onToggle={() => setMovementDifficulty(level)}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Chip>
            ))}
          </div>
          <label className="mt-4 block text-sm font-medium text-dark-text">
            Notes (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. construction on main path, elevator out"
            className="mt-1 min-h-[80px] w-full rounded-token border border-line bg-center px-4 py-2 text-dark-text placeholder:text-muted-text focus:border-warm-orange focus:outline-none focus:ring-2 focus:ring-warm-orange/20"
            aria-label="Optional notes for today"
          />
        </ContentSlab>
        <Button onClick={handleSave}>Save and update forecast</Button>
      </div>
    </AppShell>
  );
}
