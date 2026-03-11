/**
 * Onboarding step order. Matches SPEC Information Architecture.
 */

export const ONBOARDING_STEP_COUNT = 8;

export const ONBOARDING_STEPS = [
  "welcome",
  "challenge_profile",
  "setup_method",
  "manual_setup",
  "optional_sync",
  "support_preferences",
  "first_daily_input",
  "first_forecast",
] as const;

export type OnboardingStepId = (typeof ONBOARDING_STEPS)[number];
