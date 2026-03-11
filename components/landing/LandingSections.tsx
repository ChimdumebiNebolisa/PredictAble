"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import {
  BrokenCalendarSprite,
  SunCheckSprite,
  RocketSprite,
  ClipboardIcon,
  HeartPulseIcon,
  BranchArrowIcon,
  LightbulbIcon,
  SliderIcon,
  TimelineBarsIcon,
} from "./sprites";

function SectionAccentBar() {
  return (
    <div
      className="mx-auto h-0.5 w-10 rounded-full"
      style={{ background: "linear-gradient(90deg, #F97316, #FACC15)" }}
      aria-hidden
    />
  );
}

function SectionDivider() {
  return (
    <div className="flex justify-center py-4" aria-hidden>
      <div
        className="h-px w-full max-w-[200px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.2), transparent)",
        }}
      />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-dark-text sm:text-2xl">
      {children}
    </h2>
  );
}

function ProblemSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-3">
            <BrokenCalendarSprite size={56} className="animate-sprite-bob-section transition-transform duration-200 hover:scale-110" />
            <SectionAccentBar />
            <SectionHeading>
              Planning your day is hard when your body doesn&apos;t follow the script.
            </SectionHeading>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-4 text-muted-text">
            Energy, pain, and mobility change by the hour, but most planners assume every day is the same.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-2 text-sm text-muted-text/80">
            If you live with variable mobility or a chronic condition, you know the frustration of plans that don&apos;t flex with you.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-3">
            <SunCheckSprite size={56} className="animate-sprite-bob-section transition-transform duration-200 hover:scale-110" />
            <SectionAccentBar />
            <SectionHeading>A planner that adapts to how you feel.</SectionHeading>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-4 text-muted-text">
            PredictAble helps you build a daily plan that respects your body&apos;s rhythms. 
            Check in with how you&apos;re feeling, and get suggestions that actually fit the day ahead.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-3 font-medium text-warm-orange">
            That&apos;s where PredictAble comes in.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

const STEP_ICONS = [ClipboardIcon, HeartPulseIcon, BranchArrowIcon] as const;

function HowItWorksSection() {
  const steps = [
    {
      title: "Plan",
      description: "Set your intentions for the day: tasks, goals, and priorities.",
    },
    {
      title: "Sync",
      description: "Check in with your body. How's your energy? Any pain or stiffness?",
    },
    {
      title: "Adapt",
      description: "Get suggestions that fit the day. Reschedule, simplify, or push through, your call.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-3">
            <SectionAccentBar />
            <SectionHeading>
              <span className="block text-center">How it works</span>
            </SectionHeading>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <ScrollReveal key={step.title} delay={index * 100}>
                <div className="relative overflow-hidden rounded-token border border-line bg-white/60 p-6 text-center shadow-card backdrop-blur-sm">
                  <div
                    className="absolute left-0 right-0 top-0 h-0.5"
                    style={{ background: "linear-gradient(to right, #F97316, #FACC15)" }}
                  />
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-warm-orange/10">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-dark-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const FEATURE_ICONS = [LightbulbIcon, SliderIcon, TimelineBarsIcon] as const;

function FeaturesSection() {
  const features = [
    {
      title: "Mobility-aware suggestions",
      description:
        "Recommendations based on how you're feeling today, not how you felt yesterday.",
    },
    {
      title: "Daily check-in",
      description:
        "A quick way to log energy, pain, and mood so your plan stays in sync.",
    },
    {
      title: "Adaptive timeline",
      description:
        "Your schedule adjusts as the day unfolds. No more rigid, all-or-nothing plans.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-3">
            <SectionAccentBar />
            <SectionHeading>
              <span className="block text-center">Features</span>
            </SectionHeading>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = FEATURE_ICONS[index];
            return (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="rounded-token border border-line border-l-accent-yellow bg-white/60 p-6 shadow-card backdrop-blur-sm" style={{ borderLeftWidth: "3px" }}>
                  <div className="flex items-center gap-2">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-dark-text">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-text">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-3">
            <RocketSprite size={56} className="animate-sprite-bob-section transition-transform duration-200 hover:scale-110" />
            <SectionAccentBar />
            <SectionHeading>Ready to plan your day?</SectionHeading>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-4 text-muted-text">
            Start with a quick setup and see how planning can feel different.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Link
            href="/onboarding"
            className="mt-8 inline-block min-h-touch rounded-token bg-warm-orange px-8 py-3 font-medium text-white transition-colors hover:bg-deep-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2"
          >
            Start setup
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function LandingSections() {
  return (
    <div className="bg-center">
      <ProblemSection />
      <SectionDivider />
      <SolutionSection />
      <SectionDivider />
      <HowItWorksSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <CTASection />
    </div>
  );
}
