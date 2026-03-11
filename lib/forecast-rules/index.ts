/**
 * Deterministic forecast rules. Isolated from UI per GUARDRAILS.
 * No fake ML language; severity from inspectable rules.
 */

export { computeTransitionFrictionScore } from "./transition-score";
export type { TransitionScoringInput } from "./transition-score";
export { parseTimeToMinutes, minutesBetween } from "./time-utils";
export {
  rankRecommendationTypes,
  getSuggestionCopy,
  getActionCopy,
} from "./recommendations";
export type { RecommendationType } from "./recommendations";
export {
  buildTransitionForecasts,
  buildTimeWindowForecasts,
  buildAllForecasts,
} from "./build-forecast";
export type { BuildForecastInput } from "./build-forecast";
export { frictionToSeverity } from "@/lib/constants/types";
