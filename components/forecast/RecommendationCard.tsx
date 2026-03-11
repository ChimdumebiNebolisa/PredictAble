"use client";

import Link from "next/link";
import { Card } from "@/components/shared/Card";
import type { ForecastItem } from "@/lib/constants/types";

type RecommendationCardProps = {
  item: ForecastItem;
};

const severityLabelClass: Record<string, string> = {
  Low: "bg-center border-line text-muted-text",
  Moderate: "border-accent-yellow/60 bg-halo-soft/50 text-dark-text",
  High: "border-warm-orange/60 bg-halo-soft/70 text-dark-text",
};

export function RecommendationCard({ item }: RecommendationCardProps) {
  const severity = item.expectedDifficulty;
  const title =
    item.type === "transition"
      ? `${item.fromLocation} → ${item.toLocation}`
      : item.title;
  const subtitle = item.type === "transition" ? item.usualTime : item.timeRange;

  return (
    <Link href={`/recommendation/${item.id}`} className="block">
      <Card
        className={`border ${severityLabelClass[severity] ?? severityLabelClass.Low}`}
      >
        <p className="text-xs font-medium uppercase tracking-wide opacity-80">
          {item.type === "transition" ? "Transition" : "Time window"} · {severity}
        </p>
        <h3 className="mt-1 font-semibold text-dark-text">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-text">{subtitle}</p>
        )}
        <p className="mt-2 text-sm text-dark-text">
          <strong>Suggestion:</strong> {item.suggestion}
        </p>
      </Card>
    </Link>
  );
}
