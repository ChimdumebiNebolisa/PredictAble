import { ReactNode } from "react";

type EmptyStateProps = {
  message: string;
  action?: ReactNode;
};

/**
 * Empty state that guides the next action without marketing language. Per GUARDRAILS.
 */
export function EmptyState({ message, action }: EmptyStateProps) {
  return (
    <div className="rounded-token border border-line bg-center p-6 text-center">
      <p className="text-sm text-muted-text">{message}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
