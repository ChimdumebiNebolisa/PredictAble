type RocketSpriteProps = {
  className?: string;
  size?: number;
};

export function RocketSprite({
  className = "",
  size = 56,
}: RocketSpriteProps) {
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
        <linearGradient id="rocket-body" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FFF4BF" />
        </linearGradient>
        <linearGradient id="rocket-flame" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d="M28 8 L32 24 L28 44 L24 24 Z"
        fill="url(#rocket-body)"
        stroke="#F97316"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="18" r="4" fill="#FFF4BF" stroke="#F97316" strokeWidth="1" />
      <path
        d="M 28 48 L 22 32 L 28 28 L 34 32 Z"
        fill="url(#rocket-flame)"
        stroke="#EA580C"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
