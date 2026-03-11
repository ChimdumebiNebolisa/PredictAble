# GUARDRAILS.md

# PredictAble Guardrails

These guardrails are strict. If implementation conflicts with them, the implementation must change.

---

## 1. Product Scope Guardrails

- The product must remain about mobility-aware daily planning.
- Forecasting must stay tied to transitions and difficult time windows.
- The app must not drift into diagnosis, treatment, recovery claims, or medical certainty.
- The app must not drift into generic wellness, productivity, or “performance” framing.
- The app must not become a generic assistant or chat interface.
- Manual setup must remain a first-class path, not a fallback path.
- Calendar sync must remain optional and clearly limited.

---

## 2. Forecast Logic Guardrails

- Forecast output must come from deterministic, inspectable rules.
- No fake ML language.
- No invented certainty.
- No random severity assignment.
- Severity must map consistently to Low, Moderate, High.
- Recommendation ranking may be preference-aware, but forecast severity must not be manipulated to feel smart.
- Every recommendation must use:
  - Suggestion
  - Why
  - Action
- “Why” must reference actual inputs or rules, not vague phrasing.

Bad example:
- “AI noticed this period may be tough.”

Good example:
- “Two close transitions and limited recovery time may make this period harder.”

---

## 3. UX Guardrails

- Every screen must have one obvious primary action.
- Dense walls of text are not allowed.
- Important information should appear above the fold when reasonable.
- The dashboard must not become a cluttered analytics surface.
- Recommendation lists must stay short on the dashboard.
- Timeline must remain scannable in one pass.
- Sync must never block forward progress.
- Empty states must guide the next action without marketing language.
- Onboarding should feel finite and calm.

---

## 4. Accessibility Guardrails

- All text and controls must meet readable contrast targets.
- Color alone cannot communicate severity or state.
- Focus states must be clearly visible.
- Touch targets must be comfortably tappable.
- Reduced motion must be supported.
- Sliders must have a text or stepped alternative.
- All icons must have text support or accessible labels.
- Any expandable timeline row must be keyboard-usable.
- The interface must remain legible at larger text sizes.
- Decorative motion must never block task completion.

---

## 5. Visual Guardrails

- No stock photos.
- No fake avatars.
- No fake company footer.
- No testimonial section.
- No generic SaaS hero-features-footer template.
- No enterprise sidebar layout unless explicitly required later.
- No glassmorphism everywhere.
- Glass effects are allowed only in Welcome and First Forecast moments.
- Bright gradients must stay behind surfaces, never behind core body text.
- The UI must not become fully orange.
- Yellow must not carry critical text by itself.
- Cards must remain solid enough for readability.
- Visual atmosphere must support comprehension, not compete with it.

---

## 6. Copy Guardrails

- Copy must be plain, short, and direct.
- No hype.
- No “AI magic” tone.
- No medical language unless clearly descriptive and non-clinical.
- No performance language.
- No futuristic fluff.
- No “join thousands,” “premium tools,” “real-time intelligence,” or similar language.
- Recommendations must sound practical, not inspirational.

Bad example:
- “Unlock a smoother day with intelligent adaptive planning.”

Good example:
- “This part of the afternoon may be harder because two transitions are close together.”

---

## 7. Navigation Guardrails

- Onboarding uses a linear step flow with progress.
- Main app uses bottom navigation for primary destinations.
- Recommendation detail should open as a dedicated detail view on mobile.
- Preferences should not compete as a top-level destination.
- Navigation labels must stay short and clear.

---

## 8. Component Guardrails

- Shared primitives must be built before duplicated layouts.
- All reusable styles should be token-driven.
- Cards, chips, badges, and inputs must use consistent spacing and radius rules.
- Do not create one-off card variants unless they solve a real content difference.
- Forecast cards and recommendation cards must stay visually related.
- Timeline rows must share one stable structure across states.

---

## 9. Engineering Guardrails

- Forecast rules must live outside presentation components.
- Mock data must be centralized.
- Copy constants should be centralized where repetition exists.
- Do not add a backend before the prototype loop is stable.
- Do not wire real calendar sync during MVP UI construction.
- Do not add analytics, auth, notifications, or settings sprawl unless required by a milestone.
- Do not introduce libraries that solve problems the product does not yet have.
- Do not hardcode scattered color values when tokens already exist.

---

## 10. Interaction Guardrails

- Quick check-in must be fast.
- Daily summary must be understandable in seconds.
- Recommendation detail must explain why something was flagged.
- The user must not need to interpret hidden scoring logic to act.
- Expand and collapse behavior should feel stable, not jumpy.
- Motion should never obscure state change.

---

## 11. Demo Guardrails

- Demo data must feel believable.
- Forecasts must match the seeded schedule and barriers.
- High-friction moments must have traceable reasons.
- The app should demonstrate both transition forecasts and time-window forecasts.
- At least one manageable day state and one difficult day state should exist.

---

## 12. Anti-Drift Rules

Reject any screen or feature that causes drift into:
- generic task management
- habit tracking
- mood journaling
- health diagnosis
- biometric dashboards
- enterprise reporting
- AI copilot chat experiences
- motivational wellness branding

If a feature is proposed, ask:
- does this help the user anticipate difficult movement or time friction today?
- does this preserve calm and clarity?
- does this remain understandable without fake intelligence claims?

If the answer is no, do not implement it.

---

## 13. Final Review Checklist

Before accepting any screen, verify:
- does this still feel like PredictAble?
- is this clearly about mobility-aware daily planning?
- is the text readable?
- is there one clear next action?
- are forecasts grounded in visible reasons?
- are recommendation cards using Suggestion / Why / Action?
- did anything drift into generic SaaS, wellness, or fake AI language?
- is the screen calm without being empty?
- does the design still work without relying on color alone?