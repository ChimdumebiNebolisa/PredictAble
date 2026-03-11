/**
 * Centralized mock data for PredictAble prototype.
 * Demo user: Jordan. Aligned with SPEC.md Demo User and Seed Data.
 */

import type {
  UserProfile,
  TransitionInput,
  ScheduleEvent,
  TransitionForecast,
  TimeWindowForecast,
  ForecastItem,
} from "@/lib/constants/types";

export const DEMO_USER_NAME = "Jordan";

export const MOCK_PROFILE: UserProfile = {
  barriers: ["stairs", "long_corridors", "crowds", "elevator_uncertainty"],
  typicalDifficultTimes: "2:30 PM to 5:30 PM",
  supportPreferences: [
    "leave_earlier",
    "buffer_time",
    "recovery_gap",
    "short_suggestions",
  ],
  paceOfDay: "steady",
};

export const MOCK_TRANSITIONS: TransitionInput[] = [
  {
    id: "t1",
    fromLocation: "Residence Hall",
    toLocation: "Student Center",
    usualTime: "9:10",
    estimatedDurationMinutes: 15,
    routeDifficulty: "medium",
  },
  {
    id: "t2",
    fromLocation: "Student Center",
    toLocation: "Academic Building",
    usualTime: "10:45",
    estimatedDurationMinutes: 12,
    routeDifficulty: "high",
  },
  {
    id: "t3",
    fromLocation: "Academic Building",
    toLocation: "Library",
    usualTime: "13:50",
    estimatedDurationMinutes: 10,
    routeDifficulty: "medium",
  },
  {
    id: "t4",
    fromLocation: "Library",
    toLocation: "Residence Hall",
    usualTime: "16:20",
    estimatedDurationMinutes: 18,
    routeDifficulty: "high",
  },
];

export const MOCK_SCHEDULE: ScheduleEvent[] = [
  { id: "e1", title: "Advising check-in", time: "9:30", location: "Student Center" },
  { id: "e2", title: "Class", time: "11:00", location: "Academic Building" },
  { id: "e3", title: "Study session", time: "14:00", location: "Library" },
  { id: "e4", title: "Group meeting", time: "16:45", location: "Residence Hall" },
];

/** Sample forecast items: transitions and time windows (from SPEC sample forecast items). */
export const MOCK_FORECAST_ITEMS: ForecastItem[] = [
  {
    id: "fc-t2",
    type: "transition",
    fromLocation: "Student Center",
    toLocation: "Academic Building",
    usualTime: "10:45 AM",
    estimatedDurationMinutes: 12,
    bufferBeforeMinutes: 5,
    bufferAfterMinutes: 10,
    expectedDifficulty: "High",
    internalFrictionScore: 4,
    reason:
      "High route difficulty and limited recovery before class. Two close transitions in the same hour.",
    suggestion: "Leave 10 minutes earlier",
    action:
      "Move departure earlier and add a short recovery buffer before class.",
  } as TransitionForecast,
  {
    id: "fc-w1",
    type: "time_window",
    title: "Morning transition block",
    timeRange: "10:30 AM to 12:00 PM",
    expectedDifficulty: "Moderate",
    internalFrictionScore: 3,
    reason:
      "Two movement-heavy transitions close together with limited recovery time.",
    suggestion: "Add buffer between Student Center and Academic Building",
    action: "Leave earlier for the second transition and avoid back-to-back movement.",
  } as TimeWindowForecast,
  {
    id: "fc-t4",
    type: "transition",
    fromLocation: "Library",
    toLocation: "Residence Hall",
    usualTime: "4:20 PM",
    estimatedDurationMinutes: 18,
    bufferBeforeMinutes: 5,
    bufferAfterMinutes: 15,
    expectedDifficulty: "High",
    internalFrictionScore: 5,
    reason:
      "High route difficulty, late afternoon timing, and known difficult period overlap.",
    suggestion: "Leave 15 minutes earlier",
    action:
      "Start the transition earlier to reduce time pressure and allow recovery before the group meeting.",
  } as TransitionForecast,
  {
    id: "fc-w2",
    type: "time_window",
    title: "Late afternoon block",
    timeRange: "4:00 PM to 5:15 PM",
    expectedDifficulty: "High",
    internalFrictionScore: 5,
    reason:
      "Clustered transitions in your typical difficult period (2:30–5:30 PM) with limited recovery.",
    suggestion: "Add recovery gap before group meeting",
    action: "Schedule a short break between study and the transition to the meeting.",
  } as TimeWindowForecast,
];
