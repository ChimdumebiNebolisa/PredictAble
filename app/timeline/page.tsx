import Link from "next/link";
import { AppShell } from "@/components/app-shell/AppShell";
import { MOCK_FORECAST_ITEMS } from "@/lib/mock-data";

export default function TimelinePage() {
  const transitions = MOCK_FORECAST_ITEMS.filter(
    (i) => i.type === "transition"
  );
  const timeWindows = MOCK_FORECAST_ITEMS.filter(
    (i) => i.type === "time_window"
  );

  return (
    <AppShell showTopNav={true} showBottomNav={true} title="Timeline">
      <div className="flex flex-col gap-6 p-[var(--spacing-page)] pb-24">
        <section aria-label="Transitions">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Transitions
          </h2>
          <ul className="mt-2 space-y-2">
            {transitions.length === 0 ? (
              <li className="rounded-token border border-line bg-center p-4 text-sm text-muted-text">
                No transitions today.
              </li>
            ) : (
              transitions.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/recommendation/${item.id}`}
                    className="flex items-center gap-3 rounded-token border border-line bg-center p-3 text-left focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
                  >
                    <span className="text-lg text-muted-text" aria-hidden>→</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-dark-text">
                        {item.fromLocation} → {item.toLocation}
                      </p>
                      <p className="text-sm text-muted-text">
                        {item.usualTime} · {item.expectedDifficulty}
                      </p>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </section>

        <section aria-label="Time windows">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-text">
            Time windows
          </h2>
          <ul className="mt-2 space-y-2">
            {timeWindows.length === 0 ? (
              <li className="rounded-token border border-line bg-center p-4 text-sm text-muted-text">
                No difficult time windows today.
              </li>
            ) : (
              timeWindows.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/recommendation/${item.id}`}
                    className="flex items-center gap-3 rounded-token border border-line bg-center p-3 text-left focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
                  >
                    <span className="text-lg text-muted-text" aria-hidden>▢</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-dark-text">{item.title}</p>
                      <p className="text-sm text-muted-text">
                        {item.timeRange} · {item.expectedDifficulty}
                      </p>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </section>

        <Link
          href="/today"
          className="text-center text-sm font-medium text-warm-orange focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
        >
          Back to Today
        </Link>
      </div>
    </AppShell>
  );
}
