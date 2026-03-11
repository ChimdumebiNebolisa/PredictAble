"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressHeader } from "./ProgressHeader";
import { WelcomeStep } from "./steps/WelcomeStep";
import { ChallengeProfileStep } from "./steps/ChallengeProfileStep";
import { SetupMethodStep } from "./steps/SetupMethodStep";
import { ManualSetupStep } from "./steps/ManualSetupStep";
import { OptionalSyncStep } from "./steps/OptionalSyncStep";
import { SupportPreferencesStep } from "./steps/SupportPreferencesStep";
import { FirstDailyInputStep } from "./steps/FirstDailyInputStep";
import { FirstForecastStep } from "./steps/FirstForecastStep";
import { ONBOARDING_STEP_COUNT } from "@/lib/constants/onboarding-steps";
import type { OnboardingStepId } from "@/lib/constants/onboarding-steps";
import type { UserProfile } from "@/lib/constants/types";

export type OnboardingState = {
  barriers: string[];
  typicalDifficultTimes: string;
  supportPreferences: string[];
  currentStrain: number;
  movementDifficulty: "low" | "medium" | "high";
  dailyNotes?: string;
  profile: Partial<UserProfile>;
};

const defaultState: OnboardingState = {
  barriers: [],
  typicalDifficultTimes: "",
  supportPreferences: [],
  currentStrain: 1,
  movementDifficulty: "low",
  profile: {},
};

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [state, setState] = useState<OnboardingState>(defaultState);

  const currentStep = step + 1;
  const showProgress = step > 0;

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
          label="Setup progress"
        />
      )}
      <div className="flex-1">
        {step === 0 && (
          <WelcomeStep onNext={goNext} />
        )}
        {step === 1 && (
          <ChallengeProfileStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 2 && (
          <SetupMethodStep onNext={goNext} onBack={goBack} />
        )}
        {step === 3 && (
          <ManualSetupStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 4 && (
          <OptionalSyncStep onNext={goNext} onBack={goBack} />
        )}
        {step === 5 && (
          <SupportPreferencesStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 6 && (
          <FirstDailyInputStep
            state={state}
            updateState={updateState}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 7 && (
          <FirstForecastStep onNext={goNext} onBack={goBack} />
        )}
      </div>
    </div>
  );
}
