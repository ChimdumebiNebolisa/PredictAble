type BodyCheckInSpriteProps = {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
};

export function BodyCheckInSprite({
  className = "",
  size = 48,
  style,
}: BodyCheckInSpriteProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <defs>
        <linearGradient id="body-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4BF" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="10" r="6" fill="url(#body-fill)" stroke="#F97316" strokeWidth="1.5" />
      <path
        d="M24 18 L18 34 L24 30 L30 34 Z"
        fill="url(#body-fill)"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 16 C30 12 26 14 24 18 C22 14 18 12 16 16 C14 20 16 24 24 28 C32 24 34 20 32 16 Z"
        fill="#EA580C"
        stroke="#F97316"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
