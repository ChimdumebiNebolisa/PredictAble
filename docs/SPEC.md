# SPEC.md

# PredictAble

## Product Summary

PredictAble is an accessibility-first daily planning assistant for people with mobility limitations. It helps users anticipate difficult parts of the day before barriers interfere with movement, independence, or routine.

The product is centered on two forecast units:

1. difficult time windows
2. movement-heavy transitions between places

PredictAble is not:
- a diagnosis tool
- a clinical tool
- a biometrics-heavy health platform
- a generic productivity app
- a generic AI assistant
- a general wellness dashboard

The product promise is simple:

**Help users plan around barriers before they happen.**

---

## Product Goals

### Primary goal
Help users feel more prepared, less rushed, and more in control of movement-heavy parts of the day.

### User outcome
A user should be able to open the app and quickly understand:
- what parts of today may be harder than usual
- why they are being flagged
- what practical action to take

### MVP success criteria
The prototype succeeds if a user can:
- set up a baseline profile manually
- enter today-specific strain and schedule context
- receive believable transition and time-window forecasts
- understand each forecast without medical jargon
- take one clear action from a recommendation
- update the day through a quick check-in

---

## Primary User

A person with mobility limitations who wants help anticipating physically difficult parts of the day so they can reduce strain, preserve independence, and plan more confidently.

### Likely needs
- predictable movement planning
- practical adjustments, not vague encouragement
- calm, readable interfaces
- low cognitive load
- control over whether to sync anything
- support that respects independence

---

## Core Use Cases

- identify movement-heavy transitions before they become stressful
- flag difficult time windows caused by route difficulty, back-to-back movement, or limited recovery time
- suggest practical plan changes such as leaving earlier, adding buffer time, shifting tasks, or using a lower-strain timing
- update the day’s forecast through quick check-ins
- manually add or edit transitions that matter even if they are not on a calendar

---

## Non-Goals

- diagnosis
- treatment recommendations
- wellness hype
- “optimize your performance” framing
- biometric overreach
- cognitive performance language
- productivity scoring
- enterprise analytics
- fake AI sophistication
- chat-first assistant behavior
- social features
- gamification

---

## Platform Decisions

### Primary target
Mobile-first responsive web app

### First design viewport
390x844

### Secondary support
- small tablet
- desktop web

### Density target
Calm, moderately sparse, readable

The interface should not feel empty, but it must avoid dashboard overload.

---

## Navigation Model

### Onboarding
Linear step flow with progress header.

### Main app
Bottom navigation with four primary destinations:
- Today
- Timeline
- Schedule
- Profile

### Preferences
Accessible from Profile as a nested screen.

### Recommendation Detail
Opens as a full screen detail page on mobile.

### Quick Check-In
Opens as a bottom sheet or full-screen panel on mobile depending on space.

---

## Information Architecture

### Onboarding screens
1. Welcome
2. Challenge Profile
3. Setup Method
4. Manual Setup
5. Optional Sync
6. Support Preferences
7. First Daily Input
8. First Forecast

### Main app screens
9. Today Dashboard
10. Timeline View
11. Recommendation Detail
12. Quick Check-In
13. Schedule
14. Profile
15. Preferences

---

## Design Direction

PredictAble should feel like a calm forecasting field inside a warm ambient sun.

### Visual metaphor
- center white = clarity, safety, readable content
- soft yellow halo = guidance, awareness, anticipation
- warm orange perimeter = environmental friction, effort, uncertainty

### Colors
- center white: `#FFFDF7`
- soft yellow halo: `#FFF4BF`
- secondary halo option: `#FFEF99`
- accent yellow: `#FACC15`
- warm orange: `#F97316`
- deep orange edge: `#EA580C`
- dark text: `#1F2937`
- muted text: `#4B5563`
- line/border soft neutral: `#E5E7EB`

### Surface strategy
- glass effects only on Welcome and First Forecast
- solid warm surfaces everywhere else
- gradients live in background layers only
- critical text must always sit on solid or near-solid surfaces
- the app must never become mostly orange

### Typography
- large clean sans serif
- high contrast
- short copy blocks
- clear hierarchy
- minimal clutter

### Motion
- subtle only
- support reduced motion
- no decorative motion that delays comprehension

---

## Accessibility Requirements

This product is accessibility-first in interaction, not just tone.

### Required rules
- minimum AA contrast for all text and controls
- large touch targets for all interactive elements
- visible keyboard focus states
- reduced motion support
- no color-only meaning
- sliders must have text or stepper fallback
- all icons must have text labels or accessible names
- timeline severity must be readable through labels, layout, and iconography, not hue alone
- interactive cards must remain usable on keyboard
- body copy should stay readable at larger text sizes
- no drag-only interactions
- primary actions should remain reachable without precision tapping

---

## Voice and Copy System

### Voice
- calm
- plain
- direct
- warm but restrained
- accessibility-first
- practical

### Never say
- optimize your performance
- human potential
- neural systems
- precision forecasting
- real-time analysis
- premium tools
- join thousands
- enterprise insights
- cognitive load engine
- AI-powered life optimization

### Copy rules
- short sentences
- no hype
- no fake certainty
- no medical claims
- no motivational filler
- every recommendation should sound useful in one read

---

## Forecast Model

PredictAble uses two forecast objects.

### 1. Transition Forecast
Represents a movement-heavy shift between places.

Fields:
- id
- type = transition
- fromLocation
- toLocation
- usualTime
- estimatedDurationMinutes
- bufferBeforeMinutes
- bufferAfterMinutes
- expectedDifficulty
- internalFrictionScore
- reason
- suggestion
- action

### 2. Time Window Forecast
Represents a block of time likely to feel harder because of clustered movement, limited recovery, or route uncertainty.

Fields:
- id
- type = time_window
- title
- timeRange
- expectedDifficulty
- internalFrictionScore
- reason
- suggestion
- action

---

## Severity Model

### User-facing levels
- Low
- Moderate
- High

### Internal friction score
1 to 5

### Mapping
- 1 to 2 = Low
- 3 = Moderate
- 4 to 5 = High

### Visual treatment
- Low should feel calm and informative
- Moderate should stand out without alarm
- High should clearly rise above surrounding items

---

## Forecast Inputs

### Manual-first inputs
- accessibility profile
- common movement barriers
- typical transitions
- route difficulties
- typical difficult times
- daily schedule or commitments
- current strain level
- movement difficulty today
- optional notes such as construction, elevator issues, weather, crowds

### Optional later inputs
- calendar sync
- imported time and location data
- limited activity context if it directly improves daily planning

### Explicit limits
The app must not imply diagnosis or medical certainty from these inputs.

---

## Forecast Rules

These rules must be deterministic and understandable. No fake ML language.

### Transition friction factors
Each transition gets a base friction score from 1 to 5.

#### Base contributors
- route difficulty
- current strain
- time pressure
- recovery availability
- known barriers
- schedule clustering

#### Scoring rules
Start at 1.

Add 1 if route difficulty is marked medium.
Add 2 if route difficulty is marked high.

Add 1 if the user reports moderate strain today.
Add 2 if the user reports high strain today.

Add 1 if there is less than 15 minutes between arrival and the next required movement.
Add 1 if there is less than 10 minutes departure buffer before the transition.

Add 1 if the transition includes known unstable barriers:
- elevator uncertainty
- stairs
- long corridor
- crowding
- parking distance
- construction detour

Add 1 if another movement-heavy transition happens within 60 minutes before or after.

Cap at 5.

### Time window rules
A difficult time window should be created when any of the following are true:
- two or more moderate or high-friction transitions are clustered within a 90-minute period
- the user has back-to-back appointments with limited recovery time
- a known difficult period overlaps with heavy movement demand
- today-specific notes introduce uncertainty around a time block

### Recommendation selection rules
Recommendation type should be chosen from:
- leave earlier
- add buffer time
- shift nonessential task
- use lower-strain timing
- add recovery gap
- simplify route
- review alternative path
- reduce movement during this block

### Personalization rule
Support preferences influence recommendation ranking, not forecast severity.

Example:
If the user prefers earlier departure over shifting tasks, “leave earlier” should rank higher when both are valid.

### Recommendation format
Every recommendation must use:

- Suggestion
- Why
- Action

Example:
- Suggestion: Leave 10 minutes earlier
- Why: Back-to-back movement and a high-friction route may make this transition harder
- Action: Move departure earlier and add a short recovery buffer before the next activity

---

## Demo User and Seed Data

### Demo user
Name: Jordan
Mobility context:
- walking long distances is difficult
- stairs are unreliable
- elevator availability matters
- crowd-heavy routes increase strain
- late afternoon movement is often harder

### Baseline profile
- barriers: stairs, long corridors, crowds, elevator uncertainty
- typical hard times: 2:30 PM to 5:30 PM
- route difficulties: medium to high on campus transitions
- pace of day: prefers steady spacing, not back-to-back activity
- support preferences: earlier departure, buffer time, recovery gaps, short suggestions

### Sample transitions
1. Residence Hall to Student Center, 9:10 AM, medium route difficulty
2. Student Center to Academic Building, 10:45 AM, high route difficulty
3. Academic Building to Library, 1:50 PM, medium route difficulty
4. Library to Residence Hall, 4:20 PM, high route difficulty

### Sample day schedule
- 9:30 AM advising check-in
- 11:00 AM class
- 2:00 PM study session
- 4:45 PM group meeting

### Sample forecast items
- Transition: Student Center to Academic Building, High
- Time Window: 10:30 AM to 12:00 PM, Moderate
- Transition: Library to Residence Hall, High
- Time Window: 4:00 PM to 5:15 PM, High

---

## Screen Specifications

## 1. Welcome

### Purpose
Introduce the product clearly and calmly.

### Required elements
- atmospheric background
- readable content slab
- one primary CTA
- one secondary CTA
- one forecast mockup
- two floating forecast chips
- no stock photography

### Primary action
Start setup

### Secondary action
See how it works

---

## 2. Challenge Profile

### Purpose
Capture relevant mobility barriers.

### Required elements
- multi-select cards
- progress header
- short explanatory text
- clear continue button

### Data captured
- selected barriers
- optional “other” text

---

## 3. Setup Method

### Purpose
Let users choose setup mode.

### Required elements
- manual setup card
- optional sync card
- manual path visually recommended
- sync clearly framed as optional

### Copy requirement
Manual setup must feel complete, not second best.

---

## 4. Manual Setup

### Purpose
Capture baseline routine and transition difficulty.

### Required elements
- typical difficult times
- routine notes
- common transitions
- route difficulty fields
- support explanation in plain language

### Interaction model
Short stacked sections, not long dense forms.

---

## 5. Optional Sync

### Purpose
Offer helpful import, not dependence.

### Required elements
- calendar import option
- explanation of what sync brings in
- obvious skip action

### Explicit limitations
Sync may import:
- event title
- time
- location

Sync must not imply:
- diagnosis
- automatic understanding of physical condition
- invisible health inference

---

## 6. Support Preferences

### Purpose
Let users choose preferred planning help.

### Required elements
- chip-based multi-select options
- short descriptions
- continue CTA

### Supported preference options
- leave earlier
- add buffer time
- lower-strain timing
- recovery gap
- keep suggestions short
- reduce route complexity when possible

---

## 7. First Daily Input

### Purpose
Collect today-specific context.

### Required elements
- current strain field
- today’s movement difficulty field
- today’s appointments summary
- difficult trip notes
- optional text area

### Interaction pattern
Fast, calm, low-friction entry

---

## 8. First Forecast

### Purpose
Show the product payoff immediately.

### Required elements
- slightly more atmospheric treatment than core app
- daily summary at top
- short timeline underneath
- recommendation cards below
- one clear CTA into Today Dashboard

---

## 9. Today Dashboard

### Purpose
Daily home screen

### Required order
1. daily summary
2. key recommendations
3. timeline
4. quick check-in shortcut

### Display limits
- one summary card
- top 2 recommendations only
- full timeline preview
- one persistent quick check-in entry point

---

## 10. Timeline View

### Purpose
Provide a detailed map of the day.

### Required elements
- ordered time blocks
- transition markers
- time window markers
- expand or tap states
- clear severity labels

### Behavior
Transitions and windows must be easy to scan separately.

---

## 11. Recommendation Detail

### Structure
- Summary
- Why this was flagged
- Suggested adjustment

### Restriction
Must stay within mobility-aware daily planning. No wellness coaching drift.

---

## 12. Quick Check-In

### Required elements
- sliders or stepped controls
- chip selections
- optional text field
- save action

### Purpose
Update forecast logic with today-specific changes.

---

## 13. Schedule

### Purpose
Manage events and transitions.

### Required elements
- event list
- transition list
- edit actions
- add new transition
- note route difficulty

---

## 14. Profile

### Purpose
Manage baseline setup.

### Required elements
- barriers
- difficult times
- common routes
- support style
- edit controls

---

## 15. Preferences

### Purpose
Manage settings that affect support style and product behavior.

### Required elements
- support style
- notifications
- connected sources
- reduced motion toggle
- text size preference if included

---

## State Coverage

Required UI states:
- no schedule yet
- no transitions yet
- no forecast available
- forecast available and manageable
- moderate concern day
- high concern day
- sync skipped
- sync connected
- check-in saved
- not enough information to forecast confidently

### Empty state behavior
Empty states should guide the next useful action without sounding promotional.

---

## Implementation Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- component primitives built in-app or with lightweight utility wrappers
- local mock data first
- local persistence with localStorage for prototype continuity
- optional React context or lightweight store for app state
- no backend required for MVP prototype
- no real third-party integrations before UX is stable

---

## Suggested File Structure

/app
- /(onboarding)
- /today
- /timeline
- /schedule
- /profile
- /preferences
- /recommendation/[id]

/components
- app-shell
- nav
- cards
- timeline
- forms
- forecast
- onboarding
- shared

/lib
- mock-data
- forecast-rules
- copy
- constants
- utils

/styles
- tokens
- globals

---

## Shared Components

Must exist before broad screen duplication:
- AppShell
- TopNav
- BottomNav
- ProgressHeader
- ContentSlab
- AmbientHeroBackground
- ForecastCard
- RecommendationCard
- TransitionCard
- TimelineRow
- ChipSelector
- ToggleRow
- SliderField
- EmptyState
- SectionHeader

---

## Engineering Rules

- shared components before duplicated screen layouts
- tokens before ad hoc styles
- centralized mock data
- forecast rules isolated from UI components
- copy constants centralized for consistency
- no premature API wiring
- no fake backend complexity
- no random generated forecast content without deterministic rules

---

## Acceptance Criteria

The prototype is acceptable when:
- onboarding works end to end
- mock forecast output feels grounded and understandable
- the user can inspect at least one transition and one time window in detail
- quick check-in updates forecast state visibly
- UI remains readable and calm across all primary screens
- no screen drifts into generic SaaS, wellness app, or AI-assistant language