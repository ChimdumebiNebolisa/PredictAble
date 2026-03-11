type IconProps = {
  className?: string;
  size?: number;
};

/** Plan step: clipboard/list */
export function ClipboardIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M8 4 H16 L17 6 H7 L8 4 Z M6 6 H18 V20 H6 Z"
        fill="#FFF4BF"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="8" y1="10" x2="16" y2="10" stroke="#EA580C" strokeWidth="1" />
      <line x1="8" y1="14" x2="14" y2="14" stroke="#EA580C" strokeWidth="1" />
    </svg>
  );
}

/** Sync step: heart with pulse */
export function HeartPulseIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 6 C10 3 6 4 5 8 C4 12 12 18 12 18 C12 18 20 12 19 8 C18 4 14 3 12 6 Z"
        fill="#FFF4BF"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M2 14 L5 11 L8 14 L12 10 L16 14 L19 11 L22 14" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Adapt step: branching arrow */
export function BranchArrowIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M12 4 L12 12 L8 16" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 12 L16 8" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 12 L16 16" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="4" r="2" fill="#F97316" />
      <circle cx="8" cy="16" r="2" fill="#F97316" />
      <circle cx="16" cy="8" r="2" fill="#FACC15" />
      <circle cx="16" cy="16" r="2" fill="#FACC15" />
    </svg>
  );
}

/** Feature: suggestion / lightbulb */
export function LightbulbIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 2 C8 2 5 5 5 9 C5 11 6 13 8 14 L8 18 L16 18 L16 14 C18 13 19 11 19 9 C19 5 16 2 12 2 Z"
        fill="#FFF4BF"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="10" y="18" width="4" height="2" rx="1" fill="#FACC15" stroke="#F97316" strokeWidth="1" />
      <path d="M9 10 L11 12 L15 8" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Feature: check-in / slider */
export function SliderIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="4" y="8" width="16" height="4" rx="2" fill="#FFF4BF" stroke="#F97316" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
      <path d="M6 18 L10 14 L14 18 L18 14" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** Feature: timeline / bars */
export function TimelineBarsIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="4" y="14" width="4" height="6" rx="1" fill="#FACC15" stroke="#F97316" strokeWidth="1" />
      <rect x="10" y="10" width="4" height="10" rx="1" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
      <rect x="16" y="6" width="4" height="14" rx="1" fill="#FFF4BF" stroke="#F97316" strokeWidth="1" />
      <path d="M6 12 L10 10 L14 8 L18 6" stroke="#EA580C" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" fill="none" />
    </svg>
  );
}
