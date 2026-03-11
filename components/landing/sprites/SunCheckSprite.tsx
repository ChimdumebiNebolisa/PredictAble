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
        <linearGradient id="sun-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4BF" />
          <stop offset="100%" stopColor="#FACC15" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="14" fill="url(#sun-glow)" stroke="#F97316" strokeWidth="2" />
      <path
        d="M28 10 L28 6 M28 50 L28 46 M16 28 L12 28 M44 28 L48 28 M20 18 L17 15 M36 38 L39 41 M20 38 L17 41 M36 18 L39 15"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 28 L26 32 L34 24"
        stroke="#EA580C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
