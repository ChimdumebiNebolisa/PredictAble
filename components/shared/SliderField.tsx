"use client";

import { useId } from "react";

type SliderFieldProps = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  /** Step for slider; optional step labels for accessibility (e.g. Low, Moderate, High) */
  step?: number;
  valueLabels?: string[];
};

/**
 * Slider with visible focus. Per guardrails, sliders must have text or stepper fallback -
 * we expose value and optional valueLabels for screen readers; consider StepperRow for full fallback.
 */
export function SliderField({
  label,
  min,
  max,
  value,
  onChange,
  step = 1,
  valueLabels,
}: SliderFieldProps) {
  const id = useId();
  const valueLabel =
    valueLabels && value >= 0 && value < valueLabels.length
      ? valueLabels[value]
      : String(value);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="text-sm font-medium text-dark-text">
          {label}
        </label>
        <span className="text-sm text-muted-text" aria-live="polite">
          {valueLabel}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-3 w-full accent-warm-orange focus:outline-none focus:ring-2 focus:ring-warm-orange focus:ring-offset-2"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={valueLabel}
      />
    </div>
  );
}
