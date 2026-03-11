/**
 * Recommendation text and type selection. Deterministic; no fake ML.
 * Every recommendation uses Suggestion / Why / Action per GUARDRAILS.
 */

import type { SupportPreferenceId } from "@/lib/constants/types";

export type RecommendationType =
  | "leave_earlier"
  | "add_buffer_time"
  | "shift_nonessential_task"
  | "use_lower_strain_timing"
  | "add_recovery_gap"
  | "simplify_route"
  | "review_alternative_path"
  | "reduce_movement_during_block";

/** Rank recommendation types by user support preferences (ranking only, not severity). */
export function rankRecommendationTypes(
  preferred: SupportPreferenceId[]
): RecommendationType[] {
  const order: RecommendationType[] = [
    "leave_earlier",
    "add_buffer_time",
    "add_recovery_gap",
    "use_lower_strain_timing",
    "shift_nonessential_task",
    "simplify_route",
    "review_alternative_path",
    "reduce_movement_during_block",
  ];
  const prefSet = new Set(preferred);
  return [...order].sort((a, b) => {
    const aMatch = prefMap(a);
    const bMatch = prefMap(b);
    const aPrefer = aMatch !== null && prefSet.has(aMatch);
    const bPrefer = bMatch !== null && prefSet.has(bMatch);
    if (aPrefer && !bPrefer) return -1;
    if (!aPrefer && bPrefer) return 1;
    return 0;
  });
}

function prefMap(t: RecommendationType): SupportPreferenceId | null {
  if (t === "leave_earlier") return "leave_earlier";
  if (t === "add_buffer_time") return "buffer_time";
  if (t === "add_recovery_gap") return "recovery_gap";
  if (t === "use_lower_strain_timing") return "lower_strain_timing";
  return null;
}

export function getSuggestionCopy(type: RecommendationType, context?: string): string {
  const map: Record<RecommendationType, string> = {
    leave_earlier: "Leave 10–15 minutes earlier",
    add_buffer_time: "Add buffer time before and after",
    shift_nonessential_task: "Shift nonessential tasks to another time",
    use_lower_strain_timing: "Use a lower-strain time if possible",
    add_recovery_gap: "Add a short recovery gap before the next activity",
    simplify_route: "Simplify the route or break it into steps",
    review_alternative_path: "Review an alternative path",
    reduce_movement_during_block: "Reduce movement during this block",
  };
  return context ? `${map[type]}. ${context}` : map[type];
}

export function getActionCopy(type: RecommendationType): string {
  const map: Record<RecommendationType, string> = {
    leave_earlier: "Move departure earlier and add a short recovery buffer before the next activity.",
    add_buffer_time: "Schedule extra time so you are not rushed.",
    shift_nonessential_task: "Move optional items to another part of the day.",
    use_lower_strain_timing: "Choose a time when you typically have more energy.",
    add_recovery_gap: "Schedule a short break between activities.",
    simplify_route: "Consider a more direct or less crowded route.",
    review_alternative_path: "Check for elevators, ramps, or less crowded options.",
    reduce_movement_during_block: "Cluster activities or reduce trips during this window.",
  };
  return map[type];
}
