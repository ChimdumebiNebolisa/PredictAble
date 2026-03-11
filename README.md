# PredictAble

An accessibility-first daily planning assistant for people with mobility limitations. It helps you anticipate difficult parts of the day—movement-heavy transitions and tough time windows—so you can plan around barriers before they happen.

**Product promise:** Help users plan around barriers before they happen.

## What it does

- **Flags difficult time windows** — Blocks of time that may feel harder due to clustered movement, limited recovery, or route uncertainty.
- **Surfaces movement-heavy transitions** — Shifts between places that may need extra time or buffer (e.g. stairs, crowds, long corridors).
- **Suggests practical actions** — Leave earlier, add buffer time, add a recovery gap, and similar adjustments. Every recommendation uses: **Suggestion**, **Why**, and **Action**.
- **Quick check-in** — Update today’s strain and context so the forecast stays relevant.

Forecasts are **deterministic** and based on your profile (barriers, typical difficult times, support preferences), schedule, and today’s context—no vague “AI” language.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Local mock data and `localStorage` for the prototype; no backend required for MVP.

## Getting started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use **Start setup** to go through onboarding, or **Go to Today** to jump to the dashboard.

### Other commands

| Command        | Description              |
|----------------|--------------------------|
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint`  | Run ESLint              |

## Project structure

| Path           | Purpose                                      |
|----------------|----------------------------------------------|
| `app/`         | Routes: onboarding, today, timeline, schedule, profile, preferences, recommendation detail, quick check-in |
| `components/`  | App shell, nav, onboarding steps, shared primitives, forecast cards |
| `lib/`         | Types, mock data (demo user Jordan), deterministic forecast rules |
| `styles/`      | Global tokens (color, spacing, reduced motion), Tailwind |
| `docs/`        | **SPEC.md**, **MILESTONES.md**, **GUARDRAILS.md** (source of truth) |

## Design

- **Primary viewport:** 390×844 (mobile-first).
- **Tokens:** Center white, soft yellow halo, warm orange accent; solid surfaces for text; gradients only in Welcome and First Forecast.
- **Accessibility:** AA contrast, large touch targets, visible focus, reduced-motion support, severity by label and layout (not color alone).

## Docs

- **[SPEC.md](docs/SPEC.md)** — Product definition, screens, forecast model, copy, acceptance criteria.
- **[MILESTONES.md](docs/MILESTONES.md)** — Execution order and checkpoints.
- **[GUARDRAILS.md](docs/GUARDRAILS.md)** — Scope, UX, accessibility, and anti-drift rules.

## License

Private. All rights reserved.
