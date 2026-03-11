/**
 * Deterministic transition friction scoring. SPEC: start at 1, add for factors, cap at 5.
 */

import type {
  FrictionScore,
  TransitionInput,
  ScheduleEvent,
  UserProfile,
  DailyContext,
} from "@/lib/constants/types";
import { parseTimeToMinutes, minutesBetween } from "./time-utils";

export type TransitionScoringInput = {
  transition: TransitionInput;
  profile: UserProfile;
  daily: DailyContext;
  schedule: ScheduleEvent[];
  allTransitions: TransitionInput[];
};

/** Known unstable barriers that add +1 when present on the transition. */
const UNSTABLE_BARRIERS = [
  "elevator_uncertainty",
  "stairs",
  "long_corridors",
  "crowds",
  "parking_distance",
  "construction_detour",
] as const;

function hasUnstableBarrier(
  transition: TransitionInput,
  profileBarriers: string[]
): boolean {
  const barriers = transition.barriers ?? [];
  const combined = Array.from(new Set([...barriers, ...profileBarriers]));
  return UNSTABLE_BARRIERS.some((b) => combined.includes(b));
}

/** Returns true if another transition is within 60 minutes before or after this one. */
function hasNearbyTransition(
  transition: TransitionInput,
  allTransitions: TransitionInput[]
): boolean {
  const start = parseTimeToMinutes(transition.usualTime);
  const end = start + transition.estimatedDurationMinutes;
  for (const t of allTransitions) {
    if (t.id === transition.id) continue;
    const tStart = parseTimeToMinutes(t.usualTime);
    const tEnd = tStart + t.estimatedDurationMinutes;
    if (tStart <= end + 60 && tEnd >= start - 60) return true;
  }
  return false;
}

/** Minutes from transition arrival until next schedule event. */
function minutesToNextEvent(
  transition: TransitionInput,
  schedule: ScheduleEvent[]
): number | null {
  const arrival = parseTimeToMinutes(transition.usualTime) + transition.estimatedDurationMinutes;
  const atLocation = transition.toLocation;
  let minGap: number | null = null;
  for (const e of schedule) {
    const eventStart = parseTimeToMinutes(e.time);
    if (eventStart < arrival) continue;
    const gap = minutesBetween(arrival, eventStart);
    if (minGap === null || gap < minGap) minGap = gap;
  }
  return minGap;
}

/** Minutes before this transition that user is "free" (no prior event at fromLocation right before). */
function departureBufferMinutes(
  transition: TransitionInput,
  schedule: ScheduleEvent[]
): number {
  const dep = parseTimeToMinutes(transition.usualTime);
  let buffer = dep;
  for (const e of schedule) {
    const eventEnd = parseTimeToMinutes(e.time) + 60;
    if (eventEnd <= dep && dep - eventEnd < buffer) buffer = dep - eventEnd;
  }
  return buffer;
}

/**
 * Compute internal friction score (1–5) for a transition. Deterministic.
 */
export function computeTransitionFrictionScore(input: TransitionScoringInput): FrictionScore {
  const { transition, profile, daily, schedule, allTransitions } = input;
  let score = 1;

  if (transition.routeDifficulty === "medium") score += 1;
  if (transition.routeDifficulty === "high") score += 2;

  if (daily.currentStrain === 3) score += 1;
  if (daily.currentStrain >= 4) score += 2;

  const toNext = minutesToNextEvent(transition, schedule);
  if (toNext !== null && toNext < 15) score += 1;

  const buf = departureBufferMinutes(transition, schedule);
  if (buf < 10) score += 1;

  if (hasUnstableBarrier(transition, profile.barriers)) score += 1;
  if (hasNearbyTransition(transition, allTransitions)) score += 1;

  const capped = Math.min(5, Math.max(1, score)) as FrictionScore;
  return capped;
}
