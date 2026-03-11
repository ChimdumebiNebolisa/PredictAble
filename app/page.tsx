import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-semibold text-dark-text">PredictAble</h1>
      <p className="text-center text-muted-text">
        Daily planning assistant for mobility-aware planning.
      </p>
      <div className="flex flex-col gap-3">
        <Link
          href="/onboarding"
          className="rounded-lg bg-warm-orange px-6 py-3 text-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-warm-orange focus:ring-offset-2"
        >
          Start setup
        </Link>
        <Link
          href="/today"
          className="rounded-lg border border-line bg-center px-6 py-3 text-center font-medium text-dark-text"
        >
          Go to Today
        </Link>
      </div>
    </main>
  );
}
