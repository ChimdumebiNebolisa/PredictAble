"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell/AppShell";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { Button } from "@/components/shared/Button";
import { MOCK_PROFILE, MOCK_TRANSITIONS } from "@/lib/mock-data";

const BARRIER_LABELS: Record<string, string> = {
  stairs: "Stairs",
  long_corridors: "Long corridors",
  crowds: "Crowds",
  elevator_uncertainty: "Elevator uncertainty",
  parking_distance: "Parking distance",
  construction_detour: "Construction or detours",
};

export default function ProfilePage() {
  return (
    <AppShell showTopNav={true} showBottomNav={true} title="Profile">
      <div className="flex flex-col gap-6 p-[var(--spacing-page)] pb-24">
        <ContentSlab>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Barriers
          </h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {MOCK_PROFILE.barriers.map((id) => (
              <li key={id}>
                <span className="rounded-token border border-line bg-center px-3 py-1.5 text-sm text-dark-text">
                  {BARRIER_LABELS[id] ?? id}
                </span>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="mt-3">
            Edit barriers
          </Button>
        </ContentSlab>

        <ContentSlab>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Typical difficult times
          </h2>
          <p className="mt-2 text-dark-text">{MOCK_PROFILE.typicalDifficultTimes}</p>
          <Button variant="secondary" className="mt-3">
            Edit times
          </Button>
        </ContentSlab>

        <ContentSlab>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Common routes
          </h2>
          {MOCK_TRANSITIONS.length === 0 ? (
            <p className="mt-2 text-sm text-muted-text">No routes added yet.</p>
          ) : (
            <ul className="mt-2 space-y-1 text-sm text-dark-text">
              {MOCK_TRANSITIONS.map((t) => (
                <li key={t.id}>
                  {t.fromLocation} → {t.toLocation} ({t.routeDifficulty})
                </li>
              ))}
            </ul>
          )}
          <Link href="/schedule" className="mt-3 inline-block">
            <Button variant="secondary">Manage in Schedule</Button>
          </Link>
        </ContentSlab>

        <Link href="/preferences">
          <Button variant="secondary">Support style & preferences</Button>
        </Link>
      </div>
    </AppShell>
  );
}
