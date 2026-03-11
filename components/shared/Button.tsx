import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Use for link-styled buttons that navigate */
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-warm-orange text-white hover:bg-deep-orange focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2",
  secondary:
    "border border-line bg-center text-dark-text hover:bg-halo-soft focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-dark-text hover:bg-halo-soft focus-visible:ring-2 focus-visible:ring-warm-orange focus-visible:ring-offset-2",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`min-h-touch min-w-[min(100%,theme(spacing.40))] rounded-token px-6 py-3 text-center font-medium transition-colors disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
