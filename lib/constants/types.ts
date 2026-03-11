/**
 * Shared types for PredictAble. Aligned with SPEC forecast model and severity.
 */

export type SeverityLevel = "Low" | "Moderate" | "High";

export type FrictionScore = 1 | 2 | 3 | 4 | 5;

/** User-facing difficulty; maps from internal friction 1–2=Low, 3=Moderate, 4–5=High */
export function frictionToSeverity(score: FrictionScore): SeverityLevel {
  if (score <= 2) return "Low";
  if (score === 3) return "Moderate";
  return "High";
}

export type TransitionForecast = {
  id: string;
  type: "transition";
  fromLocation: string;
  toLocation: string;
  usualTime: string;
  estimatedDurationMinutes: number;
  bufferBeforeMinutes: number;
  bufferAfterMinutes: number;
  expectedDifficulty: SeverityLevel;
  internalFrictionScore: FrictionScore;
  reason: string;
  suggestion: string;
  action: string;
};

export type TimeWindowForecast = {
  id: string;
  type: "time_window";
  title: string;
  timeRange: string;
  expectedDifficulty: SeverityLevel;
  internalFrictionScore: FrictionScore;
  reason: string;
  suggestion: string;
  action: string;
};

export type ForecastItem = TransitionForecast | TimeWindowForecast;

export type BarrierId =
  | "stairs"
  | "long_corridors"
  | "crowds"
  | "elevator_uncertainty"
  | "parking_distance"
  | "construction_detour"
  | "other";

export type RouteDifficulty = "low" | "medium" | "high";

export type ScheduleEvent = {
  id: string;
  title: string;
  time: string; // e.g. "9:30"
  location?: string;
};

/** Raw transition (user-defined or from schedule) before forecast rules */
export type TransitionInput = {
  id: string;
  fromLocation: string;
  toLocation: string;
  usualTime: string; // e.g. "9:10"
  estimatedDurationMinutes: number;
  routeDifficulty: RouteDifficulty;
  barriers?: BarrierId[];
};

export type SupportPreferenceId =
  | "leave_earlier"
  | "buffer_time"
  | "lower_strain_timing"
  | "recovery_gap"
  | "short_suggestions"
  | "reduce_route_complexity";

export type UserProfile = {
  barriers: BarrierId[];
  typicalDifficultTimes: string; // e.g. "2:30 PM to 5:30 PM"
  supportPreferences: SupportPreferenceId[];
  paceOfDay: "steady" | "mixed" | "back_to_back";
};

export type DailyContext = {
  currentStrain: FrictionScore; // 1-5 mapped from user input
  movementDifficultyToday: "low" | "medium" | "high";
  notes?: string;
};
