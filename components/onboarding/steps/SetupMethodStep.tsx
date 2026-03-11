"use client";

import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import { ContentSlab } from "@/components/shared/ContentSlab";

type SetupMethodStepProps = {
  onNext: () => void;
  onBack: () => void;
};

export function SetupMethodStep({ onNext, onBack }: SetupMethodStepProps) {
  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          How do you want to set up?
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          Manual setup is full-featured. Sync is optional and can be added later.
        </p>
      </ContentSlab>
      <Card
        onClick={onNext}
        className="border-warm-orange/50 bg-halo-soft/50"
      >
        <h3 className="font-semibold text-dark-text">Manual setup</h3>
        <p className="mt-1 text-sm text-muted-text">
          Enter your typical barriers, transitions, and schedule. No account or connection needed.
        </p>
      </Card>
      <Card onClick={onNext}>
        <h3 className="font-semibold text-dark-text">Optional sync later</h3>
        <p className="mt-1 text-sm text-muted-text">
          You can add calendar or other sources later from Preferences. Manual is enough to start.
        </p>
      </Card>
      <Button variant="secondary" onClick={onBack}>
        Back
      </Button>
    </div>
  );
}
