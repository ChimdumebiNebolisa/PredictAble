import Link from "next/link";

type TopNavProps = {
  title?: string;
  /** Optional back href for back button */
  backHref?: string;
};

export function TopNav({ title = "PredictAble", backHref }: TopNavProps) {
  return (
    <header
      className="sticky top-0 z-10 flex min-h-touch items-center border-b border-line bg-center px-[var(--spacing-page)] shadow-slab"
      role="banner"
    >
      {backHref ? (
        <Link
          href={backHref}
          className="min-h-touch min-w-touch flex items-center justify-center rounded-token text-dark-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-orange focus-visible:outline-offset-2"
          aria-label="Go back"
        >
          <span className="text-lg" aria-hidden="true">
            ←
          </span>
        </Link>
      ) : null}
      <h1 className="flex-1 text-center text-lg font-semibold text-dark-text">
        {title}
      </h1>
      {backHref ? <span className="min-w-touch" aria-hidden="true" /> : null}
    </header>
  );
}
