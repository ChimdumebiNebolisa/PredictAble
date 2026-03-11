"use client";

import { useId } from "react";

type ToggleRowProps = {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function ToggleRow({
  label,
  description,
  checked,
  onChange,
  disabled = false,
}: ToggleRowProps) {
  const id = useId();

  return (
    <div className="flex min-h-touch items-center justify-between gap-4 py-2">
      <div className="flex-1">
        <label
          htmlFor={id}
          className="text-sm font-medium text-dark-text cursor-pointer"
        >
          {label}
        </label>
        {description ? (
          <p className="mt-0.5 text-sm text-muted-text">{description}</p>
        ) : null}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative h-8 w-14 shrink-0 rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2 ${
          checked ? "border-warm-orange bg-warm-orange" : "border-line bg-line"
        } ${disabled ? "opacity-50" : ""}`}
      >
        <span
          className={`absolute top-1 block h-5 w-5 rounded-full bg-center shadow-slab transition-transform ${
            checked ? "left-8" : "left-1"
          }`}
          aria-hidden
        />
      </button>
    </div>
  );
}
