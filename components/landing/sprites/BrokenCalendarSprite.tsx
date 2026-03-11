type BrokenCalendarSpriteProps = {
  className?: string;
  size?: number;
};

export function BrokenCalendarSprite({
  className = "",
  size = 56,
}: BrokenCalendarSpriteProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="broken-cal-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4BF" />
          <stop offset="100%" stopColor="#FFEF99" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="10"
        width="44"
        height="40"
        rx="8"
        fill="url(#broken-cal-bg)"
        stroke="#F97316"
        strokeWidth="2"
      />
      <rect x="18" y="6" width="20" height="10" rx="3" fill="#F97316" />
      {/* Crack / zigzag through calendar */}
      <path
        d="M 14 22 L 20 28 L 16 34 L 28 38 L 38 30 L 42 22"
        stroke="#EA580C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Calendar grid lines (broken feel) */}
      <line x1="14" y1="26" x2="38" y2="26" stroke="#F97316" strokeWidth="1" opacity={0.5} />
      <line x1="26" y1="22" x2="26" y2="42" stroke="#F97316" strokeWidth="1" opacity={0.5} />
    </svg>
  );
}
