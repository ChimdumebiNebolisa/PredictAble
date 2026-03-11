"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell/AppShell";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { ToggleRow } from "@/components/shared/ToggleRow";
import { Button } from "@/components/shared/Button";
import { useState } from "react";
import { MOCK_PROFILE } from "@/lib/mock-data";

const SUPPORT_LABELS: Record<string, string> = {
  leave_earlier: "Leave earlier",
  buffer_time: "Add buffer time",
  lower_strain_timing: "Lower-strain timing",
  recovery_gap: "Recovery gap",
  short_suggestions: "Keep suggestions short",
  reduce_route_complexity: "Reduce route complexity",
};

export default function PreferencesPage() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [syncConnected, setSyncConnected] = useState(false);

  return (
    <AppShell
      showTopNav={true}
      showBottomNav={false}
      title="Preferences"
      backHref="/profile"
    >
      <div className="flex flex-col gap-6 p-[var(--spacing-page)] pb-24">
        <ContentSlab>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Support style
          </h2>
          <p className="mt-2 text-sm text-dark-text">
            We rank recommendations by these when several options fit.
          </p>
          <ul className="mt-3 space-y-1 text-sm text-dark-text">
            {MOCK_PROFILE.supportPreferences.map((id) => (
              <li key={id}>{SUPPORT_LABELS[id] ?? id}</li>
            ))}
          </ul>
          <Link href="/profile" className="mt-3 inline-block">
            <Button variant="secondary">Edit in Profile</Button>
          </Link>
        </ContentSlab>

        <ContentSlab>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Accessibility
          </h2>
          <ToggleRow
            label="Reduced motion"
            description="Minimize animations and transitions"
            checked={reducedMotion}
            onChange={setReducedMotion}
          />
        </ContentSlab>

        <ContentSlab>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Connected sources
          </h2>
          <p className="mt-2 text-sm text-muted-text">
            Calendar or other imports. Optional; manual setup is enough.
          </p>
          <ToggleRow
            label="Calendar sync"
            description="Import events (title, time, location only)"
            checked={syncConnected}
            onChange={setSyncConnected}
          />
        </ContentSlab>
      </div>
    </AppShell>
  );
}
