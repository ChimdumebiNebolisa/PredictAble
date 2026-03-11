/**
 * Build full forecast objects (transition and time window) with deterministic
 * reason, suggestion, and action. "Why" references actual inputs/rules per GUARDRAILS.
 */

import type {
  TransitionInput,
  TransitionForecast,
  TimeWindowForecast,
  ForecastItem,
  FrictionScore,
  UserProfile,
  ScheduleEvent,
} from "@/lib/constants/types";
import { frictionToSeverity } from "@/lib/constants/types";
import { computeTransitionFrictionScore, type TransitionScoringInput } from "./transition-score";
import {
  rankRecommendationTypes,
  getSuggestionCopy,
  getActionCopy,
} from "./recommendations";
import type { RecommendationType } from "./recommendations";
import { parseTimeToMinutes } from "./time-utils";

export type BuildForecastInput = {
  transitions: TransitionInput[];
  profile: UserProfile;
  daily: { currentStrain: FrictionScore; movementDifficultyToday: "low" | "medium" | "high" };
  schedule: ScheduleEvent[];
};

function buildTransitionReason(input: TransitionScoringInput, score: FrictionScore): string {
  const parts: string[] = [];
  const { transition, daily } = input;
  if (transition.routeDifficulty === "high") parts.push("High route difficulty");
  else if (transition.routeDifficulty === "medium") parts.push("Medium route difficulty");
  if (daily.currentStrain >= 4) parts.push("high strain today");
  else if (daily.currentStrain === 3) parts.push("moderate strain today");
  if (score >= 4) parts.push("Several factors together may make this transition harder.");
  else if (score === 3) parts.push("A few factors may make this transition moderately harder.");
  return parts.length ? parts.join(". ") + "." : "This transition may need extra planning.";
}

function pickRecommendationType(
  score: FrictionScore,
  profile: UserProfile
): RecommendationType {
  const ranked = rankRecommendationTypes(profile.supportPreferences);
  if (score >= 4) return ranked[0] ?? "leave_earlier";
  if (score === 3) return ranked[1] ?? "add_buffer_time";
  return "add_buffer_time";
}

export function buildTransitionForecasts(input: BuildForecastInput): TransitionForecast[] {
  const { transitions, profile, daily, schedule } = input;
  const result: TransitionForecast[] = [];

  for (const transition of transitions) {
    const scoringInput: TransitionScoringInput = {
      transition,
      profile,
      daily: {
        currentStrain: daily.currentStrain,
        movementDifficultyToday: daily.movementDifficultyToday,
      },
      schedule,
      allTransitions: transitions,
    };
    const score = computeTransitionFrictionScore(scoringInput);
    const severity = frictionToSeverity(score);
    const recType = pickRecommendationType(score, profile);

    result.push({
      id: `fc-${transition.id}`,
      type: "transition",
      fromLocation: transition.fromLocation,
      toLocation: transition.toLocation,
      usualTime: transition.usualTime,
      estimatedDurationMinutes: transition.estimatedDurationMinutes,
      bufferBeforeMinutes: 5,
      bufferAfterMinutes: 10,
      expectedDifficulty: severity,
      internalFrictionScore: score,
      reason: buildTransitionReason(scoringInput, score),
      suggestion: getSuggestionCopy(recType),
      action: getActionCopy(recType),
    });
  }

  return result;
}

/**
 * Create time window forecasts when 2+ moderate/high transitions cluster in 90 min,
 * or back-to-back schedule with limited recovery. Simple deterministic rule.
 */
export function buildTimeWindowForecasts(
  transitionForecasts: TransitionForecast[],
  schedule: ScheduleEvent[],
  profile: UserProfile
): TimeWindowForecast[] {
  const windows: TimeWindowForecast[] = [];
  const moderateOrHigh = transitionForecasts.filter(
    (t) => t.internalFrictionScore >= 3
  );
  if (moderateOrHigh.length < 2) return windows;

  const sorted = [...moderateOrHigh].sort(
    (a, b) => parseTimeToMinutes(a.usualTime) - parseTimeToMinutes(b.usualTime)
  );
  for (let i = 0; i < sorted.length - 1; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    const startMin = parseTimeToMinutes(a.usualTime);
    const endMin = parseTimeToMinutes(b.usualTime) + b.estimatedDurationMinutes;
    if (endMin - startMin <= 90) {
      const maxScore = Math.max(a.internalFrictionScore, b.internalFrictionScore) as FrictionScore;
      const recType: RecommendationType = "add_recovery_gap";
      windows.push({
        id: `fc-w-${i}`,
        type: "time_window",
        title: "Clustered transitions",
        timeRange: `${minutesToTimeLabel(startMin)} to ${minutesToTimeLabel(endMin)}`,
        expectedDifficulty: frictionToSeverity(maxScore),
        internalFrictionScore: maxScore,
        reason:
          "Two or more movement-heavy transitions are close together with limited recovery time.",
        suggestion: getSuggestionCopy(recType),
        action: getActionCopy(recType),
      });
      break;
    }
  }
  return windows;
}

function minutesToTimeLabel(min: number): string {
  const h = Math.floor(min / 60) % 24;
  const m = min % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
}

/**
 * Full forecast list: transitions first, then time windows. Deterministic.
 */
export function buildAllForecasts(input: BuildForecastInput): ForecastItem[] {
  const transitionForecasts = buildTransitionForecasts(input);
  const timeWindowForecasts = buildTimeWindowForecasts(
    transitionForecasts,
    input.schedule,
    input.profile
  );
  return [...transitionForecasts, ...timeWindowForecasts];
}
