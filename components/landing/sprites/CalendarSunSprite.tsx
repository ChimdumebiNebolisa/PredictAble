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
        <linearGradient
          id="cal-sun-bg"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFF4BF" />
          <stop offset="50%" stopColor="#FFEF99" />
          <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>
        <radialGradient id="cal-sun-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="70%" stopColor="#FACC15" stopOpacity={0.6} />
          <stop offset="100%" stopColor="#F97316" stopOpacity={0.3} />
        </radialGradient>
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
      <rect x="28" y="8" width="24" height="12" rx="4" fill="#F97316" />
      <circle cx="40" cy="42" r="14" fill="url(#cal-sun-center)" />
      <circle cx="40" cy="42" r="8" fill="#FFFDF7" />
      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 40 + 10 * Math.cos(rad);
        const y1 = 42 + 10 * Math.sin(rad);
        const x2 = 40 + 16 * Math.cos(rad);
        const y2 = 42 + 16 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#F97316"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      {/* Calendar lines */}
      <line x1="20" y1="32" x2="60" y2="32" stroke="#EA580C" strokeWidth="1" opacity={0.6} />
      <line x1="26" y1="48" x2="54" y2="48" stroke="#EA580C" strokeWidth="1" opacity={0.4} />
    </svg>
  );
}
