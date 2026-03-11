"use client";

import { AppShell } from "@/components/app-shell/AppShell";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { MOCK_SCHEDULE, MOCK_TRANSITIONS } from "@/lib/mock-data";

export default function SchedulePage() {
  return (
    <AppShell showTopNav={true} showBottomNav={true} title="Schedule">
      <div className="flex flex-col gap-6 p-[var(--spacing-page)] pb-24">
        <section aria-label="Today's events">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Events
          </h2>
          {MOCK_SCHEDULE.length === 0 ? (
            <p className="mt-2 text-sm text-muted-text">
              No events yet. Add events to see them in your timeline.
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {MOCK_SCHEDULE.map((event) => (
                <li
                  key={event.id}
                  className="flex items-center justify-between rounded-token border border-line bg-center p-3"
                >
                  <div>
                    <p className="font-medium text-dark-text">{event.title}</p>
                    <p className="text-sm text-muted-text">
                      {event.time}
                      {event.location ? ` · ${event.location}` : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="min-h-touch min-w-touch rounded-token text-sm font-medium text-warm-orange focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
                    aria-label={`Edit ${event.title}`}
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-label="Transitions">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Transitions
          </h2>
          {MOCK_TRANSITIONS.length === 0 ? (
            <p className="mt-2 text-sm text-muted-text">
              No transitions yet. Add transitions and note route difficulty to get forecasts.
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {MOCK_TRANSITIONS.map((t) => (
                <li
                  key={t.id}
                  className="flex items-center justify-between rounded-token border border-line bg-center p-3"
                >
                  <div>
                    <p className="font-medium text-dark-text">
                      {t.fromLocation} → {t.toLocation}
                    </p>
                    <p className="text-sm text-muted-text">
                      {t.usualTime} · Route: {t.routeDifficulty}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="min-h-touch min-w-touch rounded-token text-sm font-medium text-warm-orange focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
                    aria-label={`Edit transition ${t.fromLocation} to ${t.toLocation}`}
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            className="mt-3 min-h-touch rounded-token border border-line bg-center px-4 py-2 text-sm font-medium text-dark-text focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2 hover:bg-halo-soft"
          >
            Add transition
          </button>
        </section>
      </div>
    </AppShell>
  );
}
