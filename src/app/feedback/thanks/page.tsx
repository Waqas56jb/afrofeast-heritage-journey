export default function FeedbackThanksPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-900 p-4 text-white md:p-8">
      <header className="mx-auto mb-6 flex max-w-4xl items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
          🌿
        </div>
        <span>OurRoots.Africa</span>
      </header>

      <div className="mx-auto max-w-3xl rounded-3xl bg-teal-800/70 p-6 text-center shadow-2xl ring-1 ring-black/20 md:p-10">
        <div className="mx-auto h-14 w-14 rounded-full bg-emerald-400/90" />
        <h1 className="mt-4 text-3xl font-semibold text-amber-300">Thank you for your feedback!</h1>
        <p className="mt-2 text-white/80">
          We appreciate your time. A 1-week premium extension has been applied to your account.
        </p>

        <div className="mt-8">
          <a
            href="/dashboard"
            className="inline-flex items-center rounded-full bg-amber-400 px-6 py-3 font-medium text-teal-900"
          >
            Return to Dashboard →
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-8 max-w-4xl text-center text-xs text-white/60">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
