export default function ExportJourneyPage() {
  return (
    <div className="min-h-[100dvh] bg-gray-50">
      <header className="sticky top-0 z-10 w-full bg-teal-900/95 py-3 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
              🌿
            </div>
            <span className="font-medium">OurRoots.Africa</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="/journey" className="opacity-80 hover:text-amber-300">
              My Journey
            </a>
            <a href="/content-hub" className="opacity-80 hover:text-amber-300">
              Love Hub
            </a>
            <a href="/analytics" className="opacity-80 hover:text-amber-300">
              Marketplace
            </a>
            <a href="#" className="opacity-80 hover:text-amber-300">
              Consultants
            </a>
            <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16">
        <h1 className="mt-8 flex items-center justify-center gap-3 text-3xl font-semibold text-teal-900">
          <span>📄</span> Export Your Heritage Journey
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Save, share, and prepare for your trip with personalized content packages.
        </p>

        <section className="mt-8">
          <div className="text-teal-900">Export Options</div>
          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/10">
              <div className="font-medium text-teal-900">Personal Study Guide</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {[
                  "Your annotations & highlights",
                  "Progress notes & reflections",
                  "Community discussions",
                  "Reading list & recommendations",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-gray-600">Format:</div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                {["PDF", "Word", "Markdown"].map((f) => (
                  <button key={f} className="rounded-full border border-gray-300 px-3 py-1">
                    {f}
                  </button>
                ))}
              </div>
              <button className="mt-4 w-full rounded-full bg-teal-900 py-3 text-sm font-medium text-white">
                Generate Study Guide →
              </button>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/10">
              <div className="font-medium text-teal-900">Trip Preparation Package</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {[
                  "Essential reading for Ghana trip",
                  "Cultural etiquette guidelines",
                  "Emergency support resources",
                  "Service provider recommendations",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-emerald-700 py-3 text-sm font-medium text-white">
                Create Trip Package →
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="text-teal-900">Sharing Options</div>
          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/10">
              <div className="font-medium text-teal-900">Share with Community</div>
              <p className="mt-1 text-sm text-gray-600">
                Post "My Heritage Journey Insights" with selected highlights and reflections.
              </p>
              <button className="mt-3 rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-teal-900">
                Share to Love Hub ♥
              </button>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/10">
              <div className="font-medium text-teal-900">Share with Family/Friends</div>
              <p className="mt-1 text-sm text-gray-600">
                “What I’m Learning About Our Heritage” - a curated link for non-members.
              </p>
              <button className="mt-3 rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-teal-900">
                Generate Share Link 🔗
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-amber-50 p-5 text-sm text-amber-800 ring-1 ring-amber-200">
            <div className="font-medium">Export Limitations</div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Watermarked content (Premium feature)</li>
              <li>Personal use only (no redistribution)</li>
              <li>Traditional Knowledge Board restrictions</li>
              <li>Some content requires attribution</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-black/10">
            <div className="font-medium text-teal-900">Delivery Method</div>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  defaultChecked
                  name="delivery"
                  className="h-4 w-4 accent-emerald-600"
                />{" "}
                Email to: amara.johnson@email.com
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" className="h-4 w-4 accent-emerald-600" />{" "}
                Download directly
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" className="h-4 w-4 accent-emerald-600" /> Save
                to cloud storage
              </label>
            </div>
          </div>
        </section>

        <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <a
            href="/premium/access"
            className="w-full rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-medium text-teal-900 md:w-auto"
          >
            Export Now
          </a>
          <button className="w-full rounded-full bg-teal-900 px-6 py-3 text-sm font-medium text-white md:w-auto">
            Schedule Weekly Export
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
