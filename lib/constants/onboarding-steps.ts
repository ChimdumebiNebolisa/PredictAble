/**
 * Demo workflow onboarding: Sync first → Questions → Summary → Forecast.
 */

export const ONBOARDING_STEP_COUNT = 12;

export const ONBOARDING_STEPS = [
  "welcome",
  "sync_calendar",
  "sync_activity",
  "sync_patterns",
  "sync_places",
  "sync_rough_schedule",
  "refine",
  "fill_gaps",
  "support_preferences",
  "how_are_you_today",
  "summary",
  "first_forecast",
] as const;

export type OnboardingStepId = (typeof ONBOARDING_STEPS)[number];
