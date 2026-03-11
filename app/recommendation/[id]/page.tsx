import Link from "next/link";
import { AppShell } from "@/components/app-shell/AppShell";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { Button } from "@/components/shared/Button";
import { MOCK_FORECAST_ITEMS } from "@/lib/mock-data";

type Props = { params: { id: string } };

export default function RecommendationDetailPage({ params }: Props) {
  const item = MOCK_FORECAST_ITEMS.find((f) => f.id === params.id);

  if (!item) {
    return (
      <AppShell showTopNav={true} showBottomNav={true} title="Recommendation">
        <div className="p-6">
          <p className="text-muted-text">Recommendation not found.</p>
          <Link href="/today" className="mt-4 inline-block">
            <Button variant="secondary">Back to Today</Button>
          </Link>
        </div>
      </AppShell>
    );
  }

  const summary =
    item.type === "transition"
      ? `${item.fromLocation} → ${item.toLocation} at ${item.usualTime}`
      : `${item.title}, ${item.timeRange}`;

  return (
    <AppShell
      showTopNav={true}
      showBottomNav={true}
      title="Recommendation"
      backHref="/today"
    >
      <div className="flex flex-col gap-6 p-[var(--spacing-page)] pb-24">
        <ContentSlab>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">
            {item.type === "transition" ? "Transition" : "Time window"} ·{" "}
            {item.expectedDifficulty}
          </p>
          <h1 className="mt-1 text-xl font-semibold text-dark-text">
            {summary}
          </h1>
        </ContentSlab>

        <ContentSlab>
          <h2 className="text-sm font-semibold text-dark-text">
            Why this was flagged
          </h2>
          <p className="mt-2 text-muted-text">{item.reason}</p>
        </ContentSlab>

        <ContentSlab>
          <h2 className="text-sm font-semibold text-dark-text">
            Suggested adjustment
          </h2>
          <p className="mt-2 text-dark-text">
            <strong>Suggestion:</strong> {item.suggestion}
          </p>
          <p className="mt-2 text-dark-text">
            <strong>Action:</strong> {item.action}
          </p>
        </ContentSlab>

        <Link href="/today">
          <Button variant="secondary">Back to Today</Button>
        </Link>
      </div>
    </AppShell>
  );
}
