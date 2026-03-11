"use client";

import { Button } from "@/components/shared/Button";
import { ContentSlab } from "@/components/shared/ContentSlab";

type OptionalSyncStepProps = {
  onNext: () => void;
  onBack: () => void;
};

export function OptionalSyncStep({ onNext, onBack }: OptionalSyncStepProps) {
  return (
    <div className="flex flex-col gap-6 p-6 pb-24">
      <ContentSlab>
        <h2 className="text-lg font-semibold text-dark-text">
          Optional calendar import
        </h2>
        <p className="mt-2 text-sm text-muted-text">
          We can use event titles, times, and locations to suggest transitions. We do not infer health or condition from this.
        </p>
        <p className="mt-2 text-sm text-muted-text">
          You can connect or skip and add later in Preferences.
        </p>
      </ContentSlab>
      <Button variant="secondary" onClick={onNext}>
        Skip for now
      </Button>
      <Button variant="secondary" onClick={onBack}>
        Back
      </Button>
    </div>
  );
}
