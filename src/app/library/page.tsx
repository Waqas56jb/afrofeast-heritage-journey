export default function LibraryPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-950 text-white">
      <div className="grid grid-cols-[220px_1fr_320px]">
        <aside className="hidden min-h-[100dvh] border-r border-white/10 bg-teal-950/70 p-4 md:block">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
              🌿
            </div>
            <span className="font-medium">OurRoots.Africa</span>
          </div>
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
              My Journey
            </a>
            <a className="flex items-center gap-3 rounded bg-white/10 px-3 py-2" href="/library">
              Love Hub
            </a>
            <a
              className="flex items-center gap-3 rounded px-3 py-2 text-white/80 hover:bg-white/5"
              href="/analytics"
            >
              Marketplace
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

        <main className="min-h-[100dvh] bg-teal-900/40 p-4 md:p-8">
          <h1 className="flex items-center gap-2 text-2xl font-semibold text-white">
            <span>💞</span> Connect with Community Members
          </h1>
          <p className="mt-1 text-sm text-white/70">
            Find and build meaningful connections with fellow travelers.
          </p>

          <section className="mt-4 rounded-2xl bg-teal-900/50 p-4">
            <div className="flex items-center gap-3 rounded-full bg-teal-900/70 px-4 py-2 text-white/80">
              <span>🔎</span>
              <input
                className="w-full bg-transparent text-sm outline-none placeholder-white/60"
                placeholder="Find Members e.g., ‘relationship advice’, ‘@username’, ‘Accra’"
              />
            </div>
            <div className="mt-3 text-sm text-white/80">Filters:</div>
            <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-6">
              {["Location: All", "Persona: All"].map((l) => (
                <div key={l} className="rounded-lg bg-teal-900/60 p-2">
                  <div className="text-xs text-white/70">{l.split(":")[0]}</div>
                  <div className="mt-1 flex items-center justify-between rounded bg-teal-900/80 px-2 py-1 text-white/80">
                    {l.split(":")[1] || "All"} <span>▾</span>
                  </div>
                </div>
              ))}
              {["Cultural consultants", "Local guides", "Similar journey stage", "Online now"].map(
                (t, i) => (
                  <label key={t} className="flex items-center gap-2 text-sm text-white/80">
                    <input
                      type="checkbox"
                      defaultChecked={i !== 1}
                      className="h-4 w-4 accent-emerald-500"
                    />
                    {t}
                  </label>
                ),
              )}
            </div>
          </section>

          <section className="mt-6">
            <div className="text-white/90">Suggested Connections</div>
            <div className="mt-3 space-y-4">
              {[
                {
                  handle: "@MarcusATL",
                  role: "Heritage Seeker • Atlanta",
                  note: "“Also navigating cross-cultural dating after my Ghana trip. Happy to share experiences and support each other.”",
                  match: "95% Match",
                  actions: ["Connect", "View Profile", "Send Message"],
                },
                {
                  handle: "@AkosomboQueen",
                  role: "Local Guide • Akosombo",
                  note: "“Ghanaian woman who’s helped many diaspora sisters understand our dating culture. Always happy to share wisdom.”",
                  match: "4.9/5 ⭐ Community Mentor",
                  actions: ["Book Chat", "View Profile", "Connect"],
                },
                {
                  handle: "@JennyToronto",
                  role: "Cultural Explorer",
                  note: "“Canadian-Ghanaian sharing insights on maintaining relationships across continents. Been there, done that.”",
                  match: "88% Match",
                  actions: ["Connect", "View Profile", "Send Message"],
                },
              ].map((m) => (
                <article
                  key={m.handle}
                  className="rounded-2xl bg-teal-800/60 p-4 ring-1 ring-black/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/30" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white">{m.handle}</div>
                          <div className="text-xs text-white/70">{m.role}</div>
                        </div>
                        <div className="text-xs text-white/60">{m.match}</div>
                      </div>
                      <p className="mt-2 text-sm text-white/80">{m.note}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {m.actions.map((a) => (
                          <button
                            key={a}
                            className={`rounded-full px-3 py-1 text-xs ${a === "Connect" || a === "Book Chat" ? "bg-amber-400 text-teal-900" : "border border-white/20 text-white/80"}`}
                          >
                            {a}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <aside className="hidden min-h-[100dvh] border-l border-white/10 bg-teal-950/70 p-4 md:block">
          <section className="rounded-2xl bg-teal-800/70 p-4 ring-1 ring-black/20">
            <div className="font-medium text-white">Your Active Conversations</div>
            <ul className="mt-3 space-y-3 text-sm">
              {["@KwameAccra", "@MamaEfua"].map((h) => (
                <li key={h} className="rounded-xl bg-white/10 p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/30" />
                    <div>
                      <div className="text-white">{h}</div>
                      <div className="text-xs text-white/70">
                        “Thanks for the cultural insights...”
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-4 rounded-2xl bg-teal-800/70 p-4 ring-1 ring-black/20">
            <div className="font-medium text-white">Privacy Settings</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {[
                "Show online status",
                "Allow direct messages",
                "Share location",
                "Show in member directory",
              ].map((t, i) => (
                <li key={t} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked={i !== 2}
                    className="h-4 w-4 accent-emerald-500"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
