export default function ContentHubPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
            🌿
          </div>
          <span className="font-medium">OurRoots.Africa</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a
            href="/journey"
            className="flex items-center gap-2 opacity-80 hover:text-amber-300"
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
            className="flex items-center gap-2 border-b-2 border-amber-300 pb-1"
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
          <a
            href="#"
            className="flex items-center gap-2 opacity-80 hover:text-amber-300"
            title="Profile"
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            Profile
          </a>
          <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-20">
        <h1 className="mt-2 flex items-center gap-3 text-2xl font-semibold text-white">
          <span>🔎</span> Search Heritage Content
        </h1>

        <div className="mt-4 rounded-full bg-teal-900/50 p-1 pl-4 pr-1">
          <input
            className="w-full rounded-full bg-transparent py-3 text-sm text-white placeholder-white/60 outline-none"
            placeholder="castle emotional preparation"
          />
        </div>

        <section className="mt-4 rounded-2xl bg-teal-900/40 p-4">
          <div className="text-white/90">Filters</div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm md:grid-cols-6">
            {["Stage", "Type", "Length"].map((l) => (
              <div key={l} className="rounded-lg bg-teal-900/60 p-2">
                <div className="text-xs text-white/70">{l}</div>
                <div className="mt-1 flex items-center justify-between rounded bg-teal-900/80 px-2 py-1 text-white/80">
                  All <span>▾</span>
                </div>
              </div>
            ))}
            <label className="flex items-center gap-2 text-white/80">
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-500" />
              Audio available
            </label>
            <label className="flex items-center gap-2 text-white/80">
              <input type="checkbox" className="h-4 w-4 accent-emerald-500" />
              Video content
            </label>
            <label className="flex items-center gap-2 text-white/80">
              <input type="checkbox" className="h-4 w-4 accent-emerald-500" />
              Community favorites
            </label>
            <label className="flex items-center gap-2 text-white/80">
              <input type="checkbox" className="h-4 w-4 accent-emerald-500" />
              Recently added
            </label>
          </div>
        </section>

        <div className="mt-6 text-white/80">Results (12 found)</div>
        <div className="mt-3 space-y-3">
          {[
            {
              title: "Emotional Preparation for Castle Visits",
              badge: "Essential reading",
              votes: 89,
              cta: "Read Now",
            },
            {
              title: "Trauma-Informed Heritage Travel",
              badge: "life-changing perspective",
              votes: 67,
              cta: "Watch & Read",
            },
            {
              title: "Cape Coast Castle: What to Expect",
              badge: "Premium",
              votes: 45,
              cta: "Unlock with Premium",
            },
          ].map((item, idx) => (
            <article key={idx} className="rounded-2xl bg-teal-900/40 p-4 ring-1 ring-black/20">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white">{item.title}</h3>
                  <div className="mt-1 text-xs text-white/70">
                    Stage {idx + 1} • 15–18 min read • Audio available
                  </div>
                  <div className="mt-2 text-xs text-amber-300">
                    “{item.badge}” – {item.votes} votes
                  </div>
                </div>
                {idx === 2 ? (
                  <span className="inline-flex items-center rounded-full bg-amber-300/20 px-2 py-1 text-xs text-amber-300">
                    Premium
                  </span>
                ) : null}
              </div>
              <div className="mt-3">
                <a
                  href={idx === 0 ? "/reading" : "#"}
                  className="inline-flex items-center rounded-full bg-amber-400 px-3 py-2 text-sm font-medium text-teal-900"
                >
                  {item.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="text-white/90">Related Searches</div>
            <ul className="mt-2 space-y-2 text-amber-300 text-sm">
              {[
                "elimna castle preparation",
                "heritage trauma healing",
                "ancestral connection rituals",
                "emotional support during travel",
              ].map((t) => (
                <li key={t}>“{t}”</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white/90">External Resources</div>
            <div className="mt-2 rounded-2xl bg-teal-900/40 p-4 ring-1 ring-black/20">
              <div className="text-white">Healing Historical Trauma</div>
              <div className="text-xs text-white/70">Academic paper • Journal of Heritage</div>
              <a href="#" className="mt-2 inline-block text-sm text-amber-300">
                View PDF ↗
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-teal-900/40 p-4 ring-1 ring-black/20">
          <div className="flex items-center gap-2 text-white/90">
            <span>✨</span> Suggested by AI
          </div>
          <p className="mt-2 text-sm text-white/70">
            Based on your search, you might also be interested in “Community Support Networks” and
            “Breathing Exercises for Anxiety”.
          </p>
        </section>

        <div className="mt-6 flex items-center gap-3">
          <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80">
            💾 Save Search
          </button>
          <button className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-teal-900">
            🔔 Set Alert for New Content
          </button>
        </div>
      </main>

      <footer className="bg-teal-900 py-6 text-center text-xs text-white/70">
        © 2025 OurRoots.Africa. All rights reserved.
        <br />
        Your Guided Journey to Ghanaian Heritage.
      </footer>
    </div>
  );
}
