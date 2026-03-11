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
          <stop offset="100%" stopColor="#F97316" />
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
      <path d="M6 22 L50 22" stroke="#F97316" strokeWidth="1.5" />
      <path d="M20 10 L20 22 M36 10 L36 22" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 32 L38 42" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="32" r="2" fill="#EA580C" />
      <circle cx="38" cy="42" r="2" fill="#EA580C" />
    </svg>
  );
}
