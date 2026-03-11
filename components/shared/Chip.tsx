"use client";

import { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  selected?: boolean;
  onToggle?: () => void;
  /** For multi-select chip groups */
  role?: "checkbox" | "button";
  className?: string;
};

export function Chip({
  children,
  selected = false,
  onToggle,
  role = "button",
  className = "",
}: ChipProps) {
  const isInteractive = !!onToggle;
  const base =
    "inline-flex min-h-touch items-center rounded-token border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2";
  const selectedClass = selected
    ? "border-warm-orange bg-halo-soft text-dark-text"
    : "border-line bg-center text-dark-text hover:border-warm-orange/50";

  if (isInteractive) {
    return (
      <button
        type="button"
        role={role}
        aria-checked={role === "checkbox" ? selected : undefined}
        onClick={onToggle}
        className={`${base} ${selectedClass} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={`${base} ${selectedClass} ${className}`}
      aria-hidden
    >
      {children}
    </span>
  );
}
