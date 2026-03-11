type IconProps = {
  className?: string;
  size?: number;
};

export function ClipboardIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect x="6" y="4" width="12" height="16" rx="2" fill="#FFF4BF" stroke="#F97316" strokeWidth="1.5" />
      <path d="M8 4 L8 2 M16 4 L16 2 M9 10 L15 10 M9 14 L15 14" stroke="#F97316" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function HeartPulseIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M12 6 C10 4 7 5 6 8 C5 11 8 14 12 18 C16 14 19 11 18 8 C17 5 14 4 12 6 Z"
        fill="#FFF4BF"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 12 L11 15 L16 10" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BranchArrowIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path d="M12 4 L12 12 M12 12 L8 16 M12 12 L16 16" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 20 L18 20" stroke="#FFF4BF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="4" r="2" fill="#FACC15" stroke="#F97316" strokeWidth="1" />
    </svg>
  );
}

export function LightbulbIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M12 2 C8 2 5 5 5 9 C5 11 6 13 8 14 L8 18 L16 18 L16 14 C18 13 19 11 19 9 C19 5 16 2 12 2 Z"
        fill="#FFF4BF"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 22 L15 22" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SliderIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect x="4" y="6" width="16" height="4" rx="2" fill="#FFF4BF" stroke="#F97316" strokeWidth="1" />
      <rect x="6" y="14" width="12" height="4" rx="2" fill="#FFF4BF" stroke="#F97316" strokeWidth="1" />
      <circle cx="8" cy="8" r="2" fill="#F97316" />
      <circle cx="16" cy="16" r="2" fill="#F97316" />
    </svg>
  );
}

export function TimelineBarsIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect x="4" y="14" width="4" height="6" rx="1" fill="#FFF4BF" stroke="#F97316" strokeWidth="1" />
      <rect x="10" y="8" width="4" height="12" rx="1" fill="#FFF4BF" stroke="#F97316" strokeWidth="1" />
      <rect x="16" y="6" width="4" height="14" rx="1" fill="#FFF4BF" stroke="#F97316" strokeWidth="1" />
    </svg>
  );
}
