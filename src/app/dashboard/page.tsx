export default function DashboardPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-950 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
              🌿
            </div>
            <span className="font-medium">OurRoots.Africa</span>
          </div>
          <div className="hidden items-center gap-3 text-sm md:flex">
            <div className="rounded-full bg-white/10 px-3 py-1 text-white/80">
              Heritage Seeker • AfroFeast 78
            </div>
            <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
          <aside className="hidden min-h-[calc(100dvh-56px)] border-r border-white/10 bg-teal-950/70 p-4 md:flex md:flex-col">
            <nav className="space-y-2 text-sm">
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="#"
              >
                <svg
                  width="18"
                  height="18"
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
                Home
              </a>
              <a className="flex items-center gap-3 rounded bg-white/10 px-3 py-2" href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20l9-5-9-5-9 5 9 5z" />
                  <path d="M12 12l9-5-9-5-9 5 9 5z" />
                </svg>
                For You
              </a>
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="/journey"
              >
                <svg
                  width="18"
                  height="18"
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
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="#"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Community
              </a>
              <a
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
                href="#"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="6" width="18" height="14" rx="2" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
                Reading List
              </a>
            </nav>
            <div className="mt-3 mb-2 h-px bg-white/10" />
            <div className="space-y-2 text-sm">
              <a
                href="/reading/offline"
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                Help & Support
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </a>
            </div>
          </aside>

          <main className="min-h-[calc(100dvh-56px)] bg-teal-900/40 p-4 md:p-8">
            <h1 className="flex items-center gap-2 text-2xl font-semibold text-white">
              <span>🪶</span> Personalized for You
            </h1>
            <div className="mt-1 text-xs text-white/70">
              Based on: Heritage Seeker • AfroFeast 78 • Reading behavior • Community activity
            </div>

            <section className="mt-6">
              <h2 className="flex items-center gap-2 text-amber-300">
                <span>🔥</span> Trending in Your Journey
              </h2>
              <div className="mt-3 rounded-2xl bg-teal-800/70 p-4 shadow ring-1 ring-black/20">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
                    🎧
                  </span>
                  <div className="flex-1">
                    <div className="text-white">Emotional Healing at Cape Coast</div>
                    <div className="text-xs text-white/70">
                      98% match • 15 min read • Audio available
                    </div>
                    <div className="mt-2 text-xs italic text-white/70">
                      “life‑changing” ✨ 47 community votes
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <a
                    href="/reading"
                    className="inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-teal-900"
                  >
                    Start Reading →
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-6">
              <h2 className="flex items-center gap-2 text-amber-300">
                <span>🟡</span> Because you highlighted "Golden Stool"
              </h2>
              <div className="mt-3 rounded-2xl bg-teal-800/60 p-4 shadow ring-1 ring-black/20">
                <div className="text-white">Sacred Objects & Spiritual Power</div>
                <div className="text-xs text-white/70">
                  92% match • 18 min read • Video included
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Includes rare footage from the Manhyia Palace Museum archives.
                </p>
                <div className="mt-3">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-amber-400/90 px-3 py-2 text-sm font-medium text-teal-900"
                  >
                    Watch & Read →
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-6">
              <h2 className="flex items-center gap-2 text-amber-300">
                <span>⭐</span> Popular with Heritage Seekers
              </h2>
              <div className="mt-3 rounded-2xl bg-teal-800/60 p-4 shadow ring-1 ring-black/20">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded bg-amber-300/20 text-amber-300">
                    📚
                  </span>
                  <div className="flex-1">
                    <div className="text-white">Preparing for Ancestral Encounters</div>
                    <div className="text-xs text-white/70">89% match • 22 min read</div>
                    <div className="mt-2 text-xs italic text-white/70">
                      “helped me process my emotions before my trip.”
                    </div>
                    <div className="mt-3">
                      <button className="rounded-full border border-amber-300/60 px-3 py-1 text-xs text-amber-300">
                        Add to Reading List ✚
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="flex items-center gap-2 text-amber-300">
                <span>🌐</span> External Resources
              </h2>
              <div className="mt-3 space-y-3">
                <div className="rounded-2xl bg-teal-800/60 p-4 shadow ring-1 ring-black/20">
                  <div className="text-white">"Homegoing" by Yaa Gyasi</div>
                  <p className="text-xs text-white/70">
                    A powerful novel exploring similar themes of heritage and separation.
                  </p>
                  <a href="#" className="mt-2 inline-block text-xs text-amber-300">
                    View on Amazon ↗
                  </a>
                </div>
                <div className="rounded-2xl bg-teal-800/60 p-4 shadow ring-1 ring-black/20">
                  <div className="text-white">Ghana's Heritage Tourism Boom</div>
                  <p className="text-xs text-white/70">
                    A recent article from the Afrofeast blog on the rise of heritage travel.
                  </p>
                  <a href="#" className="mt-2 inline-block text-xs text-amber-300">
                    Read External ↗
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="flex items-center gap-2 text-amber-300">
                <span>🎓</span> Academic Deep Dive
              </h2>
              <div className="mt-3 rounded-2xl bg-teal-800/60 p-4 shadow ring-1 ring-black/20">
                <div className="text-white">Trauma & Heritage Tourism: A Case Study</div>
                <p className="text-xs text-white/70">
                  A research paper from the University of Ghana's history department.
                </p>
                <a href="#" className="mt-2 inline-block text-xs text-amber-300">
                  Access PDF ↗
                </a>
              </div>
            </section>

            <div className="mt-10 flex items-center justify-center text-xs text-white/60">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-white/80">
                ⚙ Customize Recommendations
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
