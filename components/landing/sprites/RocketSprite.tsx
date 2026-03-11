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
        <linearGradient id="rocket-body" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <linearGradient id="rocket-flame" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#F97316" stopOpacity={0.6} />
        </linearGradient>
      </defs>
      {/* Flame */}
      <path
        d="M 28 48 L 22 32 L 28 28 L 34 32 Z"
        fill="url(#rocket-flame)"
      />
      <path
        d="M 28 44 L 24 34 L 28 32 L 32 34 Z"
        fill="#FFF4BF"
        opacity={0.8}
      />
      {/* Body */}
      <path
        d="M 28 8 L 36 28 L 28 28 L 20 28 Z"
        fill="url(#rocket-body)"
        stroke="#EA580C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Nose */}
      <circle cx="28" cy="12" r="4" fill="#FFFDF7" stroke="#F97316" strokeWidth="1" />
      {/* Window */}
      <circle cx="28" cy="22" r="3" fill="#FFFDF7" stroke="#FACC15" strokeWidth="1" />
      {/* Fins */}
      <path d="M 20 28 L 14 40 L 20 36 Z" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
      <path d="M 36 28 L 42 40 L 36 36 Z" fill="#F97316" stroke="#EA580C" strokeWidth="1" />
    </svg>
  );
}
