export default function OfflineContentManagerPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-950">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
            🌿
          </div>
          <span className="font-medium">OurRoots.Africa</span>
        </div>
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <span>←</span> Back to Dashboard
          <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
        </a>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-16">
        <div className="mt-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/10 md:p-6">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-2 text-xl font-semibold text-teal-900 md:text-2xl">
              <span>🪫</span> Offline Content Manager
            </h1>
          </div>
          <div className="my-4 h-px bg-gray-200" />

          <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-gray-100 p-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span>📶</span> <strong>Status</strong>
              </div>
              <div className="mt-1 text-gray-600">Connected to WiFi</div>
            </div>
            <div className="rounded-xl bg-gray-100 p-3 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>💾</span> <strong>Storage Used</strong>
                </div>
                <div className="text-xs text-gray-500">127 MB / 500 MB</div>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 w-[25%] rounded-full bg-amber-400" />
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-teal-900">Downloaded Content</h2>
            <div className="mt-3 space-y-3">
              <div className="rounded-xl border border-emerald-300/60 bg-white p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-teal-900">
                      <span className="text-emerald-600">●</span>
                      <strong>Stage 1: Complete Package</strong>
                      <span className="text-xs text-gray-500">(45 MB)</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-600">
                      8 articles • audio narrations
                      <br />
                      Community discussion highlights
                      <br />
                      Emergency support protocols
                    </div>
                  </div>
                  <a href="#" className="text-sm text-gray-600">
                    Manage →
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-blue-300/60 bg-white p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-teal-900">
                      <span className="text-blue-600">◌</span>
                      <strong>Stage 2: Partial Download</strong>
                      <span className="text-xs text-gray-500">(23 MB)</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-600">
                      4/8 articles downloaded
                      <br />
                      <a className="text-blue-600" href="#">
                        Audio files pending
                      </a>
                    </div>
                  </div>
                  <button className="rounded-full bg-amber-400 px-3 py-2 text-sm font-medium text-teal-900">
                    Complete Download ⬇
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-teal-900">Recommended for Offline</h2>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-amber-300/60 bg-white p-4">
                <div className="text-sm font-medium text-teal-900">
                  🏰 Castle Visit Preparation Guide
                </div>
                <p className="mt-1 text-xs text-gray-600">
                  Essential for your upcoming trip to the historic coastal forts.
                </p>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
                  <span>12 MB (text + audio + images)</span>
                  <a href="#" className="text-gray-700">
                    Download ⬇
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-amber-300/60 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-teal-900">
                  <span>❤️</span> Crisis Support Resources
                </div>
                <p className="mt-1 text-xs text-gray-600">
                  Emergency emotional support content and breathing exercises.
                </p>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
                  <span>
                    8 MB (text + exercises){" "}
                    <span className="ml-2 inline-block rounded-full bg-rose-100 px-2 py-0.5 text-rose-600">
                      Recommended
                    </span>
                  </span>
                  <a href="#" className="text-gray-700">
                    Download ⬇
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="font-medium text-teal-900">Download Settings</div>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {[
                  "Auto-download on WiFi",
                  "Include audio narrations",
                  "Download community discussions",
                  "Emergency content priority",
                ].map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="font-medium text-teal-900">Sync Status</div>
              <ul className="mt-2 space-y-1 text-xs text-gray-700">
                <li>Last sync: 2 hours ago</li>
                <li>Pending uploads: 3 annotations</li>
                <li>Pending downloads: 2 articles</li>
              </ul>
            </div>
          </section>

          <div className="mt-6 flex items-center justify-between">
            <a href="#" className="text-sm text-gray-600">
              Manage Storage
            </a>
            <button className="inline-flex items-center gap-2 rounded-full bg-teal-900 px-4 py-2 text-sm text-white">
              ⟳ Sync Now
            </button>
          </div>
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
