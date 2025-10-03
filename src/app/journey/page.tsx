export default function JourneyPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-900/10">
      <header className="sticky top-0 z-10 w-full bg-teal-900/95 py-3 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
              🌿
            </div>
            <span className="font-medium">OurRoots.Africa</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              href="/journey"
              className="flex items-center gap-2 border-b-2 border-amber-300 pb-1 opacity-100"
              title="My Journey"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7" />
                <path d="M9 22V12h6v10" />
              </svg>
              My Journey
            </a>
            <a
              href="/content-hub"
              className="flex items-center gap-2 opacity-80 hover:text-amber-300"
              title="Content Hub"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Content Hub
            </a>
            <a
              href="/love-hub"
              className="flex items-center gap-2 opacity-80 hover:text-amber-300"
              title="Love Hub"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Love Hub
            </a>
            <a
              href="/analytics"
              className="flex items-center gap-2 opacity-80 hover:text-amber-300"
              title="Marketplace"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2l1 3h10l1-3" />
                <path d="M3 6h18l-2 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 6z" />
                <path d="M16 10a2 2 0 1 1-4 0" />
              </svg>
              Marketplace
            </a>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="ml-2 h-8 w-8 rounded-full object-cover"
            />
          </nav>
        </div>
      </header>

      <main className="mx-auto my-8 max-w-5xl px-4">
        <section className="rounded-3xl bg-teal-900 p-6 text-white shadow-2xl ring-1 ring-black/20 md:p-8">
          <h1 className="text-center text-3xl font-semibold text-amber-300 md:text-4xl">
            Your Heritage Journey Progress
          </h1>
          <p className="mt-1 text-center text-white/80">
            Follow your path to reconnecting with Ghana.
          </p>

          <div className="mt-8 rounded-2xl bg-teal-800/70 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>Overall Progress</span>
              <span className="rounded-full bg-teal-700 px-2 py-0.5 text-amber-300">
                65% Complete
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-teal-700">
              <div className="h-2 w-[65%] rounded-full bg-amber-400" />
            </div>
          </div>

          <h2 className="mt-8 text-lg text-white/90">Stage Breakdown</h2>
          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-teal-700 bg-teal-800/60 p-4 shadow">
              <div className="text-sm text-amber-200">Stage 1: Emotional Preparation</div>
              <div className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
                COMPLETED
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> 8/8 articles
                  • 2h 15m reading time
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Mastery
                  Score: 92%
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-300/30 bg-teal-800/60 p-4 shadow">
              <div className="text-sm text-amber-200">Stage 2: Cultural Intelligence</div>
              <div className="mt-2 inline-block rounded-full bg-amber-200/30 px-2 py-0.5 text-xs text-amber-200 ring-1 ring-amber-300/40">
                IN PROGRESS
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-300" /> 6/8 articles •
                  1h 45m reading time
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-300" /> Current:
                  “Sacred Symbols & Meanings”
                </li>
              </ul>
              <div className="mt-3 h-2 w-full rounded-full bg-teal-700">
                <div className="h-2 w-3/4 rounded-full bg-amber-400" />
              </div>
            </div>
            <div className="rounded-2xl border border-teal-700 bg-teal-800/40 p-4 opacity-60">
              <div className="text-sm text-amber-200">Stage 3: Practical Preparation</div>
              <div className="mt-2 inline-block rounded-full bg-gray-200/20 px-2 py-0.5 text-xs text-white/70 ring-1 ring-white/20">
                LOCKED
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/30" /> 2/8 articles •
                  0h 30m reading time
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/30" /> Unlocks after
                  Stage 2 completion
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-teal-700 md:col-span-2">
              <h3 className="flex items-center gap-2 text-amber-300">
                <span>📊</span> Reading Analytics
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li>• Average session: 23 minutes</li>
                <li>• Engagement rate: 87% (Excellent!)</li>
                <li>• Retention rate: 94% (Outstanding!)</li>
                <li>• Community participation: 78%</li>
              </ul>
            </div>
            <a
              href="/dashboard"
              className="block rounded-2xl bg-teal-800/80 p-4 ring-1 ring-teal-700 transition hover:ring-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <h3 className="flex items-center gap-2 text-amber-300">
                <span>🎯</span> Next Milestone
              </h3>
              <p className="mt-2 text-sm text-white/90">
                Complete Stage 2 to unlock practical preparation content and service provider
                recommendations for your Ghana trip.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-amber-300">
                Go to Dashboard <span>→</span>
              </div>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-teal-700 md:col-span-2">
              <h3 className="flex items-center gap-2 text-amber-300">
                <span>🏆</span> Achievements Unlocked
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li>✔ First Stage Complete</li>
                <li>✔ Community Contributor</li>
                <li>✔ Deep Reader (2h total)</li>
                <li className="opacity-60">□ Cultural Scholar (Complete 3 stages)</li>
              </ul>
            </div>
            <div className="flex flex-col justify-end gap-3 rounded-2xl bg-teal-800/80 p-4 ring-1 ring-teal-700">
              <a
                href="/reading"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 font-medium text-teal-900"
              >
                Continue Reading →
              </a>
              <button className="rounded-full border-2 border-amber-300 px-6 py-3 text-amber-300">
                Share Progress
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-8 bg-teal-900 py-6 text-center text-xs text-white/70">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
