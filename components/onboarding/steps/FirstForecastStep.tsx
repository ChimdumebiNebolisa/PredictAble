"use client";

import { Button } from "@/components/shared/Button";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { AmbientHeroBackground } from "@/components/shared/AmbientHeroBackground";
import { MOCK_FORECAST_ITEMS } from "@/lib/mock-data";

type FirstForecastStepProps = {
  onNext: () => void;
  onBack: () => void;
};

export function FirstForecastStep({ onNext, onBack }: FirstForecastStepProps) {
  const topItems = MOCK_FORECAST_ITEMS.slice(0, 2);

  return (
    <AmbientHeroBackground>
      <div className="flex flex-col gap-6 p-6 pb-24">
        <ContentSlab>
          <h2 className="text-lg font-semibold text-dark-text">
            Your day at a glance
          </h2>
          <p className="mt-2 text-sm text-muted-text">
            Here are a couple of spots we’ve flagged. You’ll see the full timeline on Today.
          </p>
        </ContentSlab>
        {topItems.map((item) => (
          <ContentSlab key={item.id}>
            {item.type === "transition" ? (
              <>
                <p className="text-sm font-medium text-dark-text">
                  {item.fromLocation} → {item.toLocation}
                </p>
                <p className="mt-1 text-sm text-muted-text">{item.reason}</p>
                <p className="mt-2 text-sm text-dark-text">
                  <strong>Suggestion:</strong> {item.suggestion}
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium text-dark-text">
                  {item.title} · {item.timeRange}
                </p>
                <p className="mt-1 text-sm text-muted-text">{item.reason}</p>
                <p className="mt-2 text-sm text-dark-text">
                  <strong>Suggestion:</strong> {item.suggestion}
                </p>
              </>
            )}
          </ContentSlab>
        ))}
        <Button onClick={onNext}>Go to Today</Button>
      </div>
    </AmbientHeroBackground>
  );
}
