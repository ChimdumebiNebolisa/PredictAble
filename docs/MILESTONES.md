# MILESTONES.md

# PredictAble Milestones

This document defines milestone-level execution with checkpoints. A milestone is not complete until every checkpoint passes.

---

## Milestone 1: Foundation and Product Shell

### Goal
Lock the visual system, app shell, tokens, and forecast structure before building full screens.

### Deliverables
- Next.js app scaffolded
- global tokens for color, type, spacing, radius, shadow
- AppShell
- TopNav and BottomNav
- ProgressHeader
- core button, card, chip, input, slider, toggle styles
- AmbientHeroBackground
- ContentSlab
- seed mock data
- forecast rules utility

### Checkpoints
- checkpoint 1.1: project boots cleanly and routes are organized
- checkpoint 1.2: tokens exist and are used by shared components
- checkpoint 1.3: core primitives render consistently
- checkpoint 1.4: mock data file covers profile, transitions, day schedule, forecast items
- checkpoint 1.5: deterministic forecast rule helpers are implemented
- checkpoint 1.6: reduced motion and visible focus states exist in shared primitives

### Exit criteria
- no screen-specific style hacks are required to render common primitives
- forecast logic is separated from screen code
- the app already feels visually on-brand before real screens are assembled

---

## Milestone 2: Onboarding Flow

### Goal
Build the full onboarding path with stable local state.

### Deliverables
- Welcome
- Challenge Profile
- Setup Method
- Manual Setup
- Optional Sync
- Support Preferences
- First Daily Input
- First Forecast

### Checkpoints
- checkpoint 2.1: progress header works across onboarding steps
- checkpoint 2.2: one primary action is obvious on each screen
- checkpoint 2.3: manual setup path feels complete and recommended
- checkpoint 2.4: sync path is clearly optional and skippable
- checkpoint 2.5: onboarding state persists across steps
- checkpoint 2.6: first forecast uses seeded rules, not random placeholder logic
- checkpoint 2.7: copy stays plain, calm, and non-medical

### Exit criteria
- user can complete onboarding end to end without dead ends
- first forecast screen feels like a believable payoff moment
- no onboarding screen feels cluttered or vague

---

## Milestone 3: Core Daily Loop

### Goal
Build the main daily planning experience.

### Deliverables
- Today Dashboard
- Timeline View
- Recommendation Detail
- Quick Check-In

### Checkpoints
- checkpoint 3.1: Today Dashboard order is correct
- checkpoint 3.2: dashboard only shows top 2 recommendations
- checkpoint 3.3: timeline clearly distinguishes transitions from time windows
- checkpoint 3.4: recommendation detail uses Summary / Why / Suggested adjustment
- checkpoint 3.5: quick check-in updates forecast output visibly
- checkpoint 3.6: severity labels are consistent across all screens
- checkpoint 3.7: empty, manageable, moderate, and high-concern states render properly

### Exit criteria
- user can open the app, understand the day, inspect risk points, and update the forecast
- the core loop works without needing secondary screens

---

## Milestone 4: Secondary Screens

### Goal
Complete supporting surfaces needed for a full prototype walkthrough.

### Deliverables
- Schedule
- Profile
- Preferences

### Checkpoints
- checkpoint 4.1: Schedule supports event and transition editing
- checkpoint 4.2: Profile supports baseline barrier and route editing
- checkpoint 4.3: Preferences supports support style and connected source state
- checkpoint 4.4: reduced motion and other accessibility options are visible where applicable
- checkpoint 4.5: all supporting screens remain visually and verbally aligned with Today and Timeline

### Exit criteria
- product feels complete enough for demo walkthrough
- secondary screens do not look like placeholders or admin leftovers

---

## Milestone 5: Polish and Consistency Pass

### Goal
Make the prototype presentation-ready.

### Deliverables
- responsive cleanup
- focus state pass
- spacing consistency pass
- copy consistency pass
- severity badge consistency pass
- hover and pressed states where relevant
- final guardrail review

### Checkpoints
- checkpoint 5.1: no unreadable text over bright gradients
- checkpoint 5.2: no duplicate card styles competing with each other
- checkpoint 5.3: all recommendation cards use Suggestion / Why / Action
- checkpoint 5.4: bottom navigation and top-level flows feel coherent
- checkpoint 5.5: all major screens pass reduced-motion sanity check
- checkpoint 5.6: desktop expansion does not become enterprise dashboard drift
- checkpoint 5.7: all placeholder text is removed

### Exit criteria
- all screens feel like one product
- no generic template artifacts remain
- prototype is stable enough for demo prep, design critique, or expansion

---

## Milestone Order Rules

These rules are strict:
- do not skip Milestone 1
- do not build main app screens before shared primitives are stable
- do not wire real integrations before Milestone 3 is visually and logically stable
- do not polish individual screens heavily before the core loop exists
- do not add extra features between milestones unless they unblock a checkpoint

---

## Review Questions Per Milestone

At the end of each milestone, verify:
- does this still feel like PredictAble?
- is the product still centered on mobility-aware daily planning?
- are the forecasts understandable without explanation?
- is the UI readable and calm?
- is there one clear next action?
- did anything drift into generic SaaS, wellness, or fake AI language?