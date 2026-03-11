import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Optional click handler - card becomes interactive */
  onClick?: () => void;
};

export function Card({ children, className = "", onClick }: CardProps) {
  const base =
    "rounded-token border border-line bg-center p-4 shadow-card text-left";
  const interactive = onClick
    ? "cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2 hover:border-warm-orange/30"
    : "";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${interactive} ${className}`}
      >
        {children}
      </button>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}
