# BUILD_STATUS.md

## Current state

- **Current milestone:** 5 – Polish (complete)
- **Current checkpoint:** All milestones complete
- **Repo state:** Full prototype: onboarding, Today, Timeline, Recommendation Detail, Quick Check-In, Schedule, Profile, Preferences. Deterministic forecast rules; mock data; token-driven UI.

## Completed checkpoints

### Milestone 1
- [x] 1.1: project boots cleanly and routes are organized — Build and lint pass; routes: /, /onboarding, /today, /timeline, /schedule, /profile, /preferences, /recommendation/[id].
- [x] 1.2: tokens exist and are used by shared components — CSS vars + Tailwind extend (color, radius, shadow, spacing); AppShell, TopNav, BottomNav, ProgressHeader, ContentSlab, AmbientHeroBackground use token classes; Today page uses AppShell.
- [x] 1.3: core primitives render consistently — Button, Card, Chip, Input, SliderField, ToggleRow use tokens; Card and button-style link on Today.
- [x] 1.4: mock data file covers profile, transitions, day schedule, forecast items — lib/constants/types.ts, lib/mock-data/index.ts with MOCK_PROFILE, MOCK_TRANSITIONS, MOCK_SCHEDULE, MOCK_FORECAST_ITEMS.
- [x] 1.5: deterministic forecast rule helpers — lib/forecast-rules: transition-score, time-utils, recommendations, build-forecast; computeTransitionFrictionScore, buildAllForecasts; reason/suggestion/action from rules.
- [x] 1.6: reduced motion and visible focus — globals.css prefers-reduced-motion; all primitives use focus-visible:outline/ring.

## Remaining checkpoints

### Milestone 1
- (all complete)

### Milestone 2
- [x] 2.1: progress header works across onboarding steps — ProgressHeader on steps 1–7; OnboardingFlow with 8 steps; step state and navigation.
- [x] 2.2–2.7: One primary CTA per screen; manual setup recommended; sync skippable; state in React; First Forecast uses MOCK_FORECAST_ITEMS; copy plain and non-medical.

### Milestone 3
- [x] 3.1: Today Dashboard order correct — summary card, top 2 RecommendationCards, TimelinePreview, quick check-in link.
- [x] 3.2: dashboard only shows top 2 recommendations — slice(0,2).
- [x] 3.3: timeline distinguishes transitions from time windows — Timeline page has separate Transitions and Time windows sections; TimelinePreview shows type markers.
- [x] 3.4: recommendation detail uses Summary / Why / Suggested adjustment — recommendation/[id] page.
- [x] 3.5: quick check-in — /today/check-in with sliders/chips, saves to localStorage; navigates to Today.
- [x] 3.6: severity labels — expectedDifficulty shown on cards and timeline; not color-only.
- [x] 3.7: empty states — TimelinePreview and Timeline show empty copy when no items.

### Milestone 4
- [x] 4.1: Schedule — event list, transition list, Edit, Add transition; route difficulty shown.
- [x] 4.2: Profile — barriers, difficult times, common routes, edit controls; link to Schedule and Preferences.
- [x] 4.3: Preferences — support style, reduced motion toggle, connected sources (calendar sync).
- [x] 4.4: Reduced motion in globals; accessibility options in Preferences.
- [x] 4.5: Schedule/Profile/Preferences use same tokens and copy tone as Today/Timeline.

### Milestone 5 (Polish)
- [x] 5.1: Critical text on solid ContentSlab/center; gradients only in AmbientHeroBackground behind content.
- [x] 5.2: Single Card/ContentSlab pattern; RecommendationCard consistent.
- [x] 5.3: All recommendation cards use Suggestion / Why / Action (detail page and mock data).
- [x] 5.4: Bottom nav (Today, Timeline, Schedule, Profile); back links where needed.
- [x] 5.5: Reduced motion in globals.css; focus states on all interactive elements.
- [x] 5.6: Mobile-first; no enterprise dashboard layout.
- [x] 5.7: Placeholder text removed from live screens; empty states are actionable.

## Assumptions

- Next.js 14+ with App Router, TypeScript, Tailwind CSS per SPEC.
- No backend; localStorage for prototype continuity.

## Blockers

- None.

## Files created/updated

- app: layout, page (home), onboarding, today, today/check-in, timeline, schedule, profile, preferences, recommendation/[id]
- components: app-shell, nav (TopNav, BottomNav), onboarding (ProgressHeader, OnboardingFlow, steps/*), shared (Button, Card, Chip, ContentSlab, AmbientHeroBackground, Input, SliderField, ToggleRow), forecast (RecommendationCard, TimelinePreview)
- lib: constants (types, onboarding-steps), mock-data, forecast-rules (time-utils, transition-score, recommendations, build-forecast)
- styles: globals.css (tokens, reduced motion, focus)
- tailwind.config.ts, .eslintrc.json

## Validation results

- npm run build: pass
- npm run lint: pass
- npx tsc --noEmit: pass

## Notes

- All milestones 1–5 implemented per SPEC, MILESTONES, GUARDRAILS. Onboarding end-to-end; Today with summary, top 2 recommendations, timeline preview, quick check-in; Timeline with transitions/time windows; Recommendation detail (Summary / Why / Action); Quick check-in saves to localStorage; Schedule and Profile show mock data with edit entry points; Preferences has support style, reduced motion, connected sources.
