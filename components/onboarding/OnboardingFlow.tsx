"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressHeader } from "./ProgressHeader";
import { WelcomeStep } from "./steps/WelcomeStep";
import { SyncCalendarStep } from "./steps/SyncCalendarStep";
import { SyncActivityStep } from "./steps/SyncActivityStep";
import { SyncPatternsStep } from "./steps/SyncPatternsStep";
import { SyncPlacesStep } from "./steps/SyncPlacesStep";
import { SyncRoughScheduleStep } from "./steps/SyncRoughScheduleStep";
import { RefineStep } from "./steps/RefineStep";
import { FillGapsStep } from "./steps/FillGapsStep";
import { SupportPreferencesStep } from "./steps/SupportPreferencesStep";
import { FirstDailyInputStep } from "./steps/FirstDailyInputStep";
import { SummaryStep } from "./steps/SummaryStep";
import { FirstForecastStep } from "./steps/FirstForecastStep";
import { ONBOARDING_STEP_COUNT } from "@/lib/constants/onboarding-steps";
import type { UserProfile } from "@/lib/constants/types";

export type OnboardingState = {
  barriers: string[];
  typicalDifficultTimes: string;
  supportPreferences: string[];
  currentStrain: number;
  movementDifficulty: "low" | "medium" | "high";
  dailyNotes?: string;
  profile: Partial<UserProfile>;
  // Demo confirm (5 buckets)
  confirmCalendar?: boolean;
  confirmActivity?: boolean;
  confirmPatterns?: boolean;
  confirmPlaces?: boolean;
  confirmRoughSchedule?: boolean;
  // Demo refine (flagged windows)
  refineTimeWindows?: boolean;
  refineHeavierDays?: boolean;
  // Fill gaps: "anything else"
  otherFactors: string[];
};

const defaultState: OnboardingState = {
  barriers: [],
  typicalDifficultTimes: "",
  supportPreferences: [],
  currentStrain: 1,
  movementDifficulty: "low",
  profile: {},
  otherFactors: [],
};

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [state, setState] = useState<OnboardingState>(defaultState);

  const currentStep = step + 1;
  const showProgress = step > 0;

  const phaseLabel =
    currentStep >= 2 && currentStep <= 6
      ? "Syncing your data"
      : currentStep >= 7 && currentStep <= 10
        ? "A few quick questions"
        : currentStep >= 11
          ? "Almost there"
          : undefined;

  const goNext = () => {
    if (step < ONBOARDING_STEP_COUNT - 1) {
      setStep(step + 1);
    } else {
      router.push("/today");
    }
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const updateState = (updates: Partial<OnboardingState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="flex min-h-screen flex-col bg-center">
      {showProgress && (
        <ProgressHeader
          currentStep={currentStep}
          totalSteps={ONBOARDING_STEP_COUNT}
          label="Demo progress"
          phaseLabel={phaseLabel}
        />
      )}
      <div className="flex-1">
        {step === 0 && <WelcomeStep onNext={goNext} />}
        {step === 1 && (
          <SyncCalendarStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 2 && (
          <SyncActivityStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 3 && (
          <SyncPatternsStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 4 && (
          <SyncPlacesStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 5 && (
          <SyncRoughScheduleStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 6 && (
          <RefineStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 7 && (
          <FillGapsStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 8 && (
          <SupportPreferencesStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 9 && (
          <FirstDailyInputStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 10 && (
          <SummaryStep state={state} onNext={goNext} onBack={goBack} />
        )}
        {step === 11 && (
          <FirstForecastStep state={state} onNext={goNext} onBack={goBack} />
        )}
      </div>
    </div>
  );
}
