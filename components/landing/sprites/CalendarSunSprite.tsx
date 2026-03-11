type CalendarSunSpriteProps = {
  className?: string;
  size?: number;
};

export function CalendarSunSprite({
  className = "",
  size = 80,
}: CalendarSunSpriteProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="cal-sun-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4BF" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="12"
        width="64"
        height="60"
        rx="12"
        fill="url(#cal-sun-bg)"
        stroke="#F97316"
        strokeWidth="2"
      />
      <circle cx="40" cy="32" r="14" fill="#FACC15" stroke="#F97316" strokeWidth="2" />
      <path
        d="M40 18 L40 14 M40 50 L40 46 M24 32 L20 32 M56 32 L60 32 M28 24 L26 20 M52 40 L56 44 M28 40 L26 44 M52 24 L56 20"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
