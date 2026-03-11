"use client";

import Link from "next/link";
import { AmbientHeroBackground } from "@/components/shared/AmbientHeroBackground";
import { ContentSlab } from "@/components/shared/ContentSlab";
import { Button } from "@/components/shared/Button";

type WelcomeStepProps = {
  onNext: () => void;
};

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <AmbientHeroBackground>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-12">
        <div className="flex flex-wrap justify-center gap-2">
          <span className="rounded-token border border-line bg-center/90 px-3 py-1.5 text-sm text-dark-text shadow-slab">
            Hard window · 2:30–5:30 PM
          </span>
          <span className="rounded-token border border-line bg-center/90 px-3 py-1.5 text-sm text-dark-text shadow-slab">
            Transition · High
          </span>
        </div>
        <ContentSlab className="max-w-md text-center">
          <h1 className="text-2xl font-semibold text-dark-text">
            PredictAble
          </h1>
          <p className="mt-3 text-muted-text">
            Plan around difficult parts of the day before they happen. We help you spot movement-heavy transitions and tough time windows so you can adjust.
          </p>
          <p className="mt-2 text-xs text-muted-text">
            This is a demo. We’re using sample data, not your real calendar or health.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button onClick={onNext}>See how it works</Button>
            <Link
              href="/today"
              className="min-h-touch flex items-center justify-center rounded-token border border-line bg-center py-3 font-medium text-dark-text focus-visible:outline focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2"
            >
              Go to Today
            </Link>
          </div>
        </ContentSlab>
      </div>
    </AmbientHeroBackground>
  );
}
