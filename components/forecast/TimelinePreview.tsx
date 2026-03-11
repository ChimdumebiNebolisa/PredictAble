"use client";

import Link from "next/link";
import type { ForecastItem } from "@/lib/constants/types";

type TimelinePreviewProps = {
  items: ForecastItem[];
};

export function TimelinePreview({ items }: TimelinePreviewProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-text">
        No forecast items yet. Add schedule and transitions to see your timeline.
      </p>
    );
  }

  return (
    <ul className="space-y-2" aria-label="Today's forecast timeline">
      {items.slice(0, 5).map((item) => (
        <li key={item.id}>
          <Link
            href={`/recommendation/${item.id}`}
            className="flex items-center gap-3 rounded-token border border-line bg-center px-3 py-2 text-left text-sm focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
          >
            <span
              className="shrink-0 text-xs font-medium text-muted-text"
              aria-hidden
            >
              {item.type === "transition" ? "→" : "▢"}
            </span>
            <span className="min-w-0 flex-1 font-medium text-dark-text">
              {item.type === "transition"
                ? `${item.fromLocation} → ${item.toLocation}`
                : item.title}
            </span>
            <span className="shrink-0 text-xs text-muted-text">
              {item.expectedDifficulty}
            </span>
          </Link>
        </li>
      ))}
      {items.length > 5 && (
        <li>
          <Link
            href="/timeline"
            className="text-sm font-medium text-warm-orange focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
          >
            View full timeline
          </Link>
        </li>
      )}
    </ul>
  );
}
