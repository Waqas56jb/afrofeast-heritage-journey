export default function AnalyticsPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-950 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
              🌿
            </div>
            <span className="font-medium">OurRoots.Africa</span>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded bg-white/10 px-3 py-1 text-xs text-white/80">
              Last 30 days ▾
            </button>
            <div className="text-right text-sm">
              <div className="text-white">Ama Serwaa</div>
              <div className="text-white/60">Premium Member</div>
            </div>
            <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
          </div>
        </header>

        <div className="grid grid-cols-[220px_1fr]">
          <aside className="hidden min-h-[calc(100dvh-56px)] border-r border-white/10 bg-teal-950/70 p-4 md:block">
            <nav className="space-y-2 text-sm">
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="/dashboard"
              >
                Dashboard
              </a>
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="/journey"
              >
                Heritage Journey
              </a>
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="#"
              >
                Community Hub
              </a>
              <a
                className="flex items-center gap-3 rounded bg-white/10 px-3 py-2"
                href="/analytics"
              >
                Analytics
              </a>
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="#"
              >
                Resources
              </a>
            </nav>
            <div className="mt-6 space-y-2 text-sm">
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="#"
              >
                Settings
              </a>
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="#"
              >
                Logout
              </a>
            </div>
          </aside>

          <main className="bg-teal-900/40 p-4 md:p-6">
            <div>
              <h1 className="text-2xl font-semibold">Your Reading Analytics</h1>
              <p className="mt-1 text-sm text-white/70">
                An overview of your content engagement and learning progress.
              </p>
            </div>

            <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                ["Total Reading Time", "8h 47m"],
                ["Articles Completed", "15/23"],
                ["Average Session", "24 min"],
                ["Engagement Score", "87%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-black/20">
                  <div className="text-sm text-amber-300">📚 Reading Overview</div>
                  <div className="mt-3 text-xs text-white/60">{label}</div>
                  <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
                </div>
              ))}
            </section>

            <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-black/20 md:col-span-2">
                <div className="text-sm text-amber-300">📈 Reading Patterns</div>
                <div className="mt-4 h-56 rounded-xl bg-teal-900/40" />
              </div>
              <div className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-black/20">
                <div className="text-sm text-amber-300">🏷 Most Engaged Topics</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    ["Emotional healing", 92],
                    ["Traditional governance", 87],
                    ["Sacred symbols", 83],
                    ["Community support", 79],
                    ["Practical travel tips", 71],
                  ].map(([topic, percent]) => (
                    <li key={topic}>
                      <div className="flex items-center justify-between text-white/80">
                        <span>{topic}</span>
                        <span>{percent}%</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded bg-white/10">
                        <div
                          className="h-2 rounded bg-amber-400"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-black/20">
                <div className="text-sm text-amber-300">💬 Community Engagement</div>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>Annotations shared: 12</li>
                  <li>Discussion posts: 8</li>
                  <li>Helpful votes received: 34</li>
                  <li>Community rank: Top 15%</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-black/20">
                <div className="text-sm text-amber-300">🏆 Learning Achievements</div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Consistent Reader",
                    "Deep Thinker",
                    "Community Helper",
                    "Cultural Scholar",
                  ].map((badge) => (
                    <div
                      key={badge}
                      className="rounded-xl bg-teal-900/40 p-4 text-center text-white/80"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-black/20">
                <div className="text-sm text-amber-300">✈ Progress Prediction</div>
                <div className="mt-6 rounded-xl bg-teal-900/40 p-4 text-sm text-white/80">
                  At your current pace, you'll complete Stage 3 practical travel prep soon.
                </div>
              </div>
            </section>

            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="/export"
                className="rounded-full bg-amber-400 px-5 py-3 text-sm font-medium text-teal-900"
              >
                ⬇ Download Report
              </a>
              <button className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80">
                ⭐ Share Achievements
              </button>
            </div>
          </main>
        </div>

        <footer className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
          © 2025 OurRoots.Africa. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
