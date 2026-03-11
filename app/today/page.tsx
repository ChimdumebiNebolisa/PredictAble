import { AppShell } from "@/components/app-shell/AppShell";
import { Card } from "@/components/shared/Card";
import { RecommendationCard } from "@/components/forecast/RecommendationCard";
import { TimelinePreview } from "@/components/forecast/TimelinePreview";
import Link from "next/link";
import { MOCK_FORECAST_ITEMS } from "@/lib/mock-data";

export default function TodayPage() {
  const topRecommendations = MOCK_FORECAST_ITEMS.slice(0, 2);

  return (
    <AppShell showTopNav={true} showBottomNav={true} title="Today">
      <div className="flex flex-col gap-6 p-[var(--spacing-page)] pb-24">
        <section aria-label="Daily summary">
          <h1 className="text-xl font-semibold text-dark-text">Today</h1>
          <Card className="mt-2">
            <p className="text-sm text-dark-text">
              A few transitions and time windows may need extra planning. Below are the main ones to watch.
            </p>
          </Card>
        </section>

        <section aria-label="Key recommendations">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Top recommendations
          </h2>
          <ul className="mt-2 space-y-3">
            {topRecommendations.map((item) => (
              <li key={item.id}>
                <RecommendationCard item={item} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Timeline">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Timeline
          </h2>
          <div className="mt-2">
            <TimelinePreview items={MOCK_FORECAST_ITEMS} />
          </div>
        </section>

        <section aria-label="Quick check-in">
          <Link
            href="/today/check-in"
            className="inline-flex min-h-touch min-w-[min(100%,theme(spacing.40))] items-center justify-center rounded-token border border-line bg-center px-6 py-3 font-medium text-dark-text focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2 hover:bg-halo-soft"
          >
            Quick check-in
          </Link>
        </section>
      </div>
    </AppShell>
  );
}
