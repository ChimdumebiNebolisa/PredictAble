"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

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
          <SectionHeading>
            Planning your day is hard when your body doesn&apos;t follow the script.
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-4 text-muted-text">
            Energy, pain, and mobility change by the hour—but most planners assume every day is the same.
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
          <SectionHeading>A planner that adapts to how you feel.</SectionHeading>
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

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Plan",
      description: "Set your intentions for the day—tasks, goals, and priorities.",
    },
    {
      number: "2",
      title: "Sync",
      description: "Check in with your body. How's your energy? Any pain or stiffness?",
    },
    {
      number: "3",
      title: "Adapt",
      description: "Get suggestions that fit the day. Reschedule, simplify, or push through—your call.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <SectionHeading>
            <span className="block text-center">How it works</span>
          </SectionHeading>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 100}>
              <div className="rounded-token border border-line bg-white/60 p-6 text-center shadow-card backdrop-blur-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-warm-orange/10 text-xl font-bold text-warm-orange">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-dark-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "📊",
      title: "Mobility-aware suggestions",
      description:
        "Recommendations based on how you're feeling today, not how you felt yesterday.",
    },
    {
      icon: "✓",
      title: "Daily check-in",
      description:
        "A quick way to log energy, pain, and mood so your plan stays in sync.",
    },
    {
      icon: "📅",
      title: "Adaptive timeline",
      description:
        "Your schedule adjusts as the day unfolds—no more rigid, all-or-nothing plans.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <SectionHeading>
            <span className="block text-center">Features</span>
          </SectionHeading>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className="rounded-token border border-line bg-white/60 p-6 shadow-card backdrop-blur-sm">
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-dark-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-text">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
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
          <SectionHeading>Ready to plan your day?</SectionHeading>
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
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
