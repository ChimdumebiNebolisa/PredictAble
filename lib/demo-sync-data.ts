/**
 * Demo sync data for the workflow showcase.
 * Campus-day persona (Jordan-style). No real data — options only.
 */

export type DemoCalendarEvent = {
  id: string;
  time: string;
  title: string;
  location: string;
};

export type DemoActivity = {
  label: string;
  value: string;
  unit?: string;
};

export type DemoPattern = {
  id: string;
  text: string;
};

export type DemoPlace = {
  id: string;
  name: string;
};

export type DemoRoughScheduleBlock = {
  id: string;
  label: string;
};

/** Today's events (3–5 fake calendar items) */
export const DEMO_CALENDAR_EVENTS: DemoCalendarEvent[] = [
  { id: "e1", time: "9:30 AM", title: "Advising check-in", location: "Student Center" },
  { id: "e2", time: "11:00 AM", title: "Class", location: "Academic Building" },
  { id: "e3", time: "2:00 PM", title: "Study session", location: "Library" },
  { id: "e4", time: "4:45 PM", title: "Group meeting", location: "Residence Hall" },
];

/** Recent activity (Health/Fit style) */
export const DEMO_ACTIVITY: DemoActivity[] = [
  { label: "Steps", value: "4,200", unit: "today" },
  { label: "Active minutes", value: "28", unit: "min" },
  { label: "Flights climbed", value: "3", unit: "" },
];

/** This week's pattern */
export const DEMO_PATTERNS: DemoPattern[] = [
  { id: "p1", text: "More movement 9 AM–12 PM, less 2–5 PM" },
  { id: "p2", text: "Heavier days: Tuesday, Thursday" },
];

/** Places you go often */
export const DEMO_PLACES: DemoPlace[] = [
  { id: "pl1", name: "Student Center" },
  { id: "pl2", name: "Library" },
  { id: "pl3", name: "Academic Building" },
  { id: "pl4", name: "Residence Hall" },
];

/** Rough schedule (time blocks only) */
export const DEMO_ROUGH_SCHEDULE: DemoRoughScheduleBlock[] = [
  { id: "rs1", label: "Morning on campus" },
  { id: "rs2", label: "12–2 free" },
  { id: "rs3", label: "Afternoon meetings" },
];

/** Flagged windows for Refine step */
export const DEMO_FLAGGED_WINDOWS = {
  timeWindows: "10:30 AM–12:00 PM and 4:00–5:15 PM",
  heavierDays: "Tuesday and Thursday",
};

/** Barrier options (chips). Other → fixed sub-options. */
export const DEMO_BARRIER_OPTIONS = [
  { id: "stairs", label: "Stairs" },
  { id: "long_corridors", label: "Long corridors" },
  { id: "crowds", label: "Crowds" },
  { id: "elevator_uncertainty", label: "Elevator uncertainty" },
  { id: "other", label: "Other" },
] as const;

export const DEMO_OTHER_BARRIER_OPTIONS = [
  { id: "construction", label: "Construction" },
  { id: "weather", label: "Weather" },
  { id: "parking", label: "Parking" },
];

/** "Anything else we should factor in?" options */
export const DEMO_FACTOR_OPTIONS = [
  { id: "route_difficulty", label: "Route difficulty" },
  { id: "recovery_preference", label: "Recovery preference" },
  { id: "time_pressure", label: "Time pressure" },
] as const;
