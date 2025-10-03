export default function LoveHubPage() {
  return (
    <div className="min-h-[100dvh] bg-gray-100">
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
              href="/"
              className="flex items-center gap-2 opacity-80 hover:text-amber-300"
              title="Home"
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
              Home
            </a>
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
              href="/love-hub"
              className="flex items-center gap-2 border-b-2 border-amber-300 pb-1"
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
              href="#"
              className="flex items-center gap-2 opacity-80 hover:text-amber-300"
              title="Directory"
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
                <path d="M4 19h16" />
                <rect x="4" y="3" width="16" height="16" rx="2" />
                <path d="M8 7h8" />
                <path d="M8 11h8" />
                <path d="M8 15h5" />
              </svg>
              Directory
            </a>
            <button aria-label="Notifications" className="opacity-80 hover:text-amber-300">
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
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 5-3 7h18c0-2-3 0-3-7" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-teal-900">
            Love Hub - Building Connections <span className="text-rose-500">❤️</span>
          </h1>
          <div className="mt-1 flex items-center gap-6 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2">
              <span className="text-emerald-600">👥</span> 234 active members
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-emerald-600">●</span> 12 online now
            </span>
          </div>
        </div>

        <section className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
          {[
            ["Start Discussion", "🗣"],
            ["Find Members", "🧑‍🤝‍🧑"],
            ["Community Events", "📅"],
            ["Get Advice", "📍"],
          ].map(([label, icon]) =>
            label === "Start Discussion" ? (
              <a
                key={label}
                href="/love-hub/discussion"
                className="rounded-xl bg-white p-4 text-left shadow ring-1 ring-black/10 hover:shadow-md"
              >
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/30 text-teal-900">
                  {icon}
                </div>
                <div className="font-medium text-teal-900">{label}</div>
              </a>
            ) : (
              <button
                key={label}
                className="rounded-xl bg-white p-4 text-left shadow ring-1 ring-black/10 hover:shadow-md"
              >
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/30 text-teal-900">
                  {icon}
                </div>
                <div className="font-medium text-teal-900">{label}</div>
              </button>
            ),
          )}
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            {[
              {
                title: "Dating across cultures - Ghana/US",
                replies: 47,
                author: "@AmaraJ",
                excerpt: "Latest: “Family acceptance is key, we had to navigate that carefully...”",
              },
              {
                title: "Building friendships in Accra",
                replies: 23,
                author: "@KwameGH",
                excerpt:
                  "Latest: “Definitely try the cultural centers and local art galleries. Great vibe.”",
              },
            ].map((t) => (
              <article
                key={t.title}
                className="rounded-2xl bg-white p-4 shadow ring-1 ring-black/10"
              >
                <div className="text-teal-900">{t.title}</div>
                <div className="mt-1 text-xs text-gray-500">
                  💬 {t.replies} replies • Started by {t.author}
                </div>
                <div className="mt-3 rounded bg-gray-100 p-3 text-xs text-gray-600">
                  {t.excerpt} • 2h ago
                </div>
                <div className="mt-3">
                  <button className="w-full rounded bg-teal-900 py-2 text-sm font-medium text-white">
                    Join Discussion →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-5">
            <section className="rounded-2xl bg-teal-900 p-4 text-white shadow ring-1 ring-black/20">
              <div className="font-medium">Featured Members</div>
              <div className="mt-3 space-y-3">
                {[
                  ["@MamaEfua", "Cultural Consultant"],
                  ["@KofiAccra", "Local Guide"],
                ].map(([handle, role]) => (
                  <div key={handle} className="rounded-xl bg-white/10 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white/30" />
                      <div>
                        <div className="text-white">{handle}</div>
                        <div className="text-xs text-white/70">{role}</div>
                      </div>
                    </div>
                    <a href="#" className="mt-2 inline-block text-sm text-amber-300">
                      Connect →
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-white p-4 shadow ring-1 ring-black/10">
              <div className="font-medium text-teal-900">Upcoming Events</div>
              <ul className="mt-3 space-y-3 text-sm text-gray-700">
                <li>
                  <div className="text-xs text-gray-500">DEC 15</div>
                  “Speed Friending” Virtual Event
                  <div className="text-xs text-gray-500">Online Meetup</div>
                </li>
                <li>
                  <div className="text-xs text-gray-500">DEC 22</div>
                  “Cultural Dating Tips” Workshop
                  <div className="text-xs text-gray-500">Expert Session</div>
                </li>
                <li>
                  <div className="text-xs text-gray-500">JAN 05</div>
                  “New Year, New Connections” Mixer
                  <div className="text-xs text-gray-500">Accra Social Event</div>
                </li>
              </ul>
            </section>

            <section className="rounded-2xl bg-white p-4 shadow ring-1 ring-black/10">
              <div className="font-medium text-teal-900">Community Guidelines</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Respect cultural differences</li>
                <li>No inappropriate content</li>
                <li>Support, don't judge</li>
                <li>Protect privacy</li>
              </ul>
            </section>
          </aside>
        </section>
      </main>

      <footer className="bg-teal-900 py-6 text-center text-xs text-white/70">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
