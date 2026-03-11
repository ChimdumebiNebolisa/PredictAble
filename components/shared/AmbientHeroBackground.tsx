import { ReactNode } from "react";

type AmbientHeroBackgroundProps = {
  children: ReactNode;
  /** Optional className for the inner content wrapper */
  className?: string;
};

/**
 * Atmospheric background for Welcome and First Forecast only.
 * Glass effects allowed here per GUARDRAILS.
 */
export function AmbientHeroBackground({
  children,
  className = "",
}: AmbientHeroBackgroundProps) {
  return (
    <div
      className="relative min-h-screen bg-center"
      aria-hidden="false"
    >
      {/* Warm gradient layers - background only, no critical text on gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-halo-soft), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, var(--color-halo-secondary), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 20% 90%, var(--color-warm-orange), transparent 55%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
