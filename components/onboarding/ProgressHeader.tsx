type ProgressHeaderProps = {
  currentStep: number;
  totalSteps: number;
  /** Optional short label for screen readers */
  label?: string;
};

export function ProgressHeader({
  currentStep,
  totalSteps,
  label = "Progress",
}: ProgressHeaderProps) {
  const percent = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div
      className="px-[var(--spacing-page)] py-4"
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={label}
    >
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-warm-orange transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="sr-only">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}
