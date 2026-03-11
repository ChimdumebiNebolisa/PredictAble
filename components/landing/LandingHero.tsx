"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function LandingHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6">
      {/* Animated gradient background */}
      <div
        className="pointer-events-none absolute inset-0 animate-gradient-pulse"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 0%, 
              rgba(255, 255, 255, 0.95) 0%, 
              rgba(255, 244, 191, 0.8) 25%, 
              rgba(250, 204, 21, 0.5) 45%, 
              rgba(249, 115, 22, 0.3) 65%, 
              transparent 85%
            )
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 animate-gradient-drift"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 5%, 
              rgba(255, 255, 255, 0.6) 0%, 
              rgba(255, 239, 153, 0.4) 30%, 
              transparent 60%
            )
          `,
        }}
      />

      {/* Floating orbs behind title */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl animate-orb-float-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[40%] top-[38%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-halo-soft/50 blur-3xl animate-orb-float-2"
        style={{ animationDelay: "-3s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[60%] top-[35%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm-orange/20 blur-3xl animate-orb-float-3"
        style={{ animationDelay: "-6s" }}
        aria-hidden="true"
      />

      {/* Orbs at edges */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-halo-soft/30 blur-3xl animate-orb-float-2"
        style={{ animationDelay: "-2s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-white/30 blur-3xl animate-orb-float-1"
        style={{ animationDelay: "-5s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-warm-orange/15 blur-3xl animate-orb-float-3"
        style={{ animationDelay: "-8s" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6 text-center">
        {/* Title */}
        <h1
          className={`text-4xl font-black tracking-tight text-dark-text sm:text-5xl md:text-6xl transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          PredictAble
        </h1>

        {/* Tagline */}
        <p
          className={`text-base font-light text-muted-text sm:text-lg transition-all duration-1000 ease-out delay-150 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Plan your day around how you move.
        </p>

        {/* Glass buttons */}
        <div
          className={`flex w-full flex-col gap-3 sm:flex-row sm:justify-center transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/onboarding"
            className="group relative min-h-touch rounded-token px-8 py-3 text-center font-medium text-dark-text backdrop-blur-md transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2"
            style={{
              background: "rgba(255, 255, 255, 0.35)",
              boxShadow: "0 4px 24px rgba(249, 115, 22, 0.15)",
            }}
          >
            <span className="relative z-10">Start setup</span>
            <div
              className="absolute inset-0 rounded-token opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              style={{ background: "rgba(255, 255, 255, 0.5)" }}
            />
          </Link>
          <Link
            href="/today"
            className="group relative min-h-touch rounded-token px-8 py-3 text-center font-medium text-dark-text backdrop-blur-md transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 24px rgba(249, 115, 22, 0.1)",
            }}
          >
            <span className="relative z-10">Go to Today</span>
            <div
              className="absolute inset-0 rounded-token opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              style={{ background: "rgba(255, 255, 255, 0.4)" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
