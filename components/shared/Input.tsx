import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const inputId = id ?? `input-${label.replace(/\s/g, "-").toLowerCase()}`;
    return (
      <div className="flex flex-col gap-1">
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-dark-text"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`min-h-touch rounded-token border border-line bg-center px-4 py-2 text-dark-text placeholder:text-muted-text focus:border-warm-orange focus:outline-none focus:ring-2 focus:ring-warm-orange/20 ${error ? "border-deep-orange" : ""} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error ? (
          <p id={`${inputId}-error`} className="text-sm text-deep-orange" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
