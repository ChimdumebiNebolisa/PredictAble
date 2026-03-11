type SunCheckSpriteProps = {
  className?: string;
  size?: number;
};

export function SunCheckSprite({
  className = "",
  size = 56,
}: SunCheckSpriteProps) {
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
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="50%" stopColor="#FACC15" stopOpacity={0.9} />
          <stop offset="100%" stopColor="#F97316" stopOpacity={0.5} />
        </radialGradient>
      </defs>
      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 28 + 12 * Math.cos(rad);
        const y1 = 28 + 12 * Math.sin(rad);
        const x2 = 28 + 22 * Math.cos(rad);
        const y2 = 28 + 22 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FACC15"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="28" cy="28" r="14" fill="url(#sun-glow)" stroke="#F97316" strokeWidth="2" />
      <circle cx="28" cy="28" r="8" fill="#FFFDF7" />
      {/* Checkmark */}
      <path
        d="M 22 28 L 26 32 L 34 24"
        stroke="#EA580C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
