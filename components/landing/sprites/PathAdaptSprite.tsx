type PathAdaptSpriteProps = {
  className?: string;
  size?: number;
};

export function PathAdaptSprite({
  className = "",
  size = 48,
}: PathAdaptSpriteProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      {/* Curved path with fork: start left, curve down-right, then fork */}
      <path
        d="M 8 24 Q 24 8 32 24 T 44 28"
        stroke="url(#path-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Fork: upper branch */}
      <path
        d="M 32 24 L 40 16"
        stroke="#F97316"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Fork: lower branch continues */}
      <path
        d="M 32 24 L 44 28"
        stroke="#FACC15"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Small circle at fork point */}
      <circle cx="32" cy="24" r="3" fill="#FFFDF7" stroke="#EA580C" strokeWidth="1.5" />
    </svg>
  );
}
