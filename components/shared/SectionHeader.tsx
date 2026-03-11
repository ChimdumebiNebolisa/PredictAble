import { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <h2
      className={`text-sm font-semibold uppercase tracking-wide text-muted-text ${className}`}
    >
      {children}
    </h2>
  );
}
