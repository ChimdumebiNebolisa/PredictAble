type PathAdaptSpriteProps = {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
};

export function PathAdaptSprite({
  className = "",
  size = 48,
  style,
}: PathAdaptSpriteProps) {
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
        <linearGradient id="path-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4BF" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <path
        d="M8 40 L24 8 L40 40"
        stroke="url(#path-fill)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24" cy="8" r="4" fill="#FACC15" stroke="#F97316" strokeWidth="1.5" />
      <circle cx="8" cy="40" r="4" fill="url(#path-fill)" stroke="#F97316" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="4" fill="url(#path-fill)" stroke="#F97316" strokeWidth="1.5" />
    </svg>
  );
}
