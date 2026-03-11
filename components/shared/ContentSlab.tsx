import { ReactNode } from "react";

type ContentSlabProps = {
  children: ReactNode;
  /** Optional className for layout overrides */
  className?: string;
};

/**
 * Readable content area with solid background. Critical text must sit on solid
 * or near-solid surfaces per SPEC.
 */
export function ContentSlab({ children, className = "" }: ContentSlabProps) {
  return (
    <div
      className={`rounded-token bg-center p-[var(--spacing-page)] shadow-slab ${className}`}
    >
      {children}
    </div>
  );
}
