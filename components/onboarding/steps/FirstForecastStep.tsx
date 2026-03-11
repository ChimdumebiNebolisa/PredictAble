"use client";

import { Button } from "@/components/shared/Button";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { AmbientHeroBackground } from "@/components/shared/AmbientHeroBackground";
import { MOCK_FORECAST_ITEMS } from "@/lib/mock-data";
import { DEMO_CALENDAR_EVENTS } from "@/lib/demo-sync-data";
import type { ForecastItem } from "@/lib/constants/types";
import type { OnboardingState } from "../OnboardingFlow";

type FirstForecastStepProps = {
  state: OnboardingState;
  onNext: () => void;
  onBack: () => void;
};

function getCalendarTagForItem(item: ForecastItem): string | null {
  if (item.type === "transition") {
    const event = DEMO_CALENDAR_EVENTS.find(
      (e) => e.location === item.toLocation
    );
    return event ? `${event.title} at ${event.time}, ${event.location}` : null;
  }
  if (item.type === "time_window") {
    if (item.timeRange.includes("10:30") && item.timeRange.includes("12:00")) {
      const e = DEMO_CALENDAR_EVENTS.find((x) => x.location === "Academic Building");
      return e ? `${e.title} at ${e.time}, ${e.location}` : null;
    }
    if (item.timeRange.includes("4:00") && item.timeRange.includes("5:15")) {
      const e = DEMO_CALENDAR_EVENTS.find((x) => x.location === "Residence Hall");
      return e ? `${e.title} at ${e.time}, ${e.location}` : null;
    }
  }
  return null;
}

export function FirstForecastStep({ state, onNext, onBack }: FirstForecastStepProps) {
  const topItems = MOCK_FORECAST_ITEMS.slice(0, 2);

  return (
    <AmbientHeroBackground>
      <div className="flex flex-col gap-6 p-6 pb-24">
        <ContentSlab>
          <h2 className="text-lg font-semibold text-dark-text">
            Based on your calendar and the windows you confirmed
          </h2>
          <p className="mt-2 text-sm text-muted-text">
            Here are a couple of spots we’ve flagged. You’ll see the full timeline on Today.
          </p>
        </ContentSlab>
        {topItems.map((item) => {
          const calendarTag = getCalendarTagForItem(item);
          return (
            <ContentSlab key={item.id}>
              {calendarTag ? (
                <p className="text-xs text-muted-text italic">
                  From your calendar: {calendarTag}
                </p>
              ) : null}
              {item.type === "transition" ? (
                <>
                  <p className="text-sm font-medium text-dark-text mt-1">
                    {item.fromLocation} → {item.toLocation}
                  </p>
                  <p className="mt-1 text-sm text-muted-text">{item.reason}</p>
                  <p className="mt-2 text-sm text-dark-text">
                    <strong>Suggestion:</strong> {item.suggestion}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium text-dark-text mt-1">
                    {item.title} · {item.timeRange}
                  </p>
                  <p className="mt-1 text-sm text-muted-text">{item.reason}</p>
                  <p className="mt-2 text-sm text-dark-text">
                    <strong>Suggestion:</strong> {item.suggestion}
                  </p>
                </>
              )}
            </ContentSlab>
          );
        })}
        <div className="flex gap-3">
          <Button variant="secondary" onClick={onBack}>
            Back
          </Button>
          <Button onClick={onNext}>Go to Today</Button>
        </div>
      </div>
    </AmbientHeroBackground>
  );
}
