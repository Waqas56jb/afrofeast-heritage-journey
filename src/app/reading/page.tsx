export default function ReadingPage() {
  return (
    <div className="min-h-[100dvh] bg-gray-100">
      <header className="sticky top-0 z-10 w-full bg-teal-900/95 py-3 text-white backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
              🌿
            </div>
            <span className="font-medium">OurRoots.Africa</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              href="/journey"
              className="flex items-center gap-2 opacity-90 hover:text-amber-300"
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
              href="#"
              className="flex items-center gap-2 opacity-90 hover:text-amber-300"
              title="Community"
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
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Community
            </a>
            <a
              href="#"
              className="flex items-center gap-2 opacity-90 hover:text-amber-300"
              title="Bookings"
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Bookings
            </a>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="ml-4 h-8 w-8 rounded-full object-cover"
            />
          </nav>
        </div>
      </header>

      <main className="mx-auto my-8 max-w-3xl px-4">
        <article className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5 md:p-8">
          <h1 className="text-3xl font-semibold leading-tight text-gray-800 md:text-4xl">
            Understanding Asante Governance Systems
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="rounded bg-gray-100 px-2 py-1">Aa</span>
              <span className="rounded bg-gray-100 px-2 py-1">+</span>
              <span className="rounded bg-gray-100 px-2 py-1">🔖</span>
            </div>
            <span>12 min read</span>
            <span className="rounded-full bg-gray-100 px-2 py-1">Stage 2</span>
            <span>🔊 Audio available</span>
          </div>

          <div className="mt-5 rounded-xl bg-teal-900/5 p-4 text-sm text-teal-900">
            <div className="font-medium">Listen to this section</div>
            <div className="text-gray-600">Narrated by Elder Nana Yaa</div>
          </div>

          <p className="mt-6 text-gray-700">
            The Asante political system represents one of Africa's most sophisticated governance
            structures, built on principles of checks and balances that predate Western democratic
            concepts by centuries.
          </p>

          <blockquote className="mt-5 rounded-md border-l-4 border-amber-300 bg-amber-50 p-4 text-gray-800">
            “The Golden Stool (Sika Dwa Kofi) serves not just as a symbol of authority, but as
            spiritual embodiment of the Asante nation's soul.”
          </blockquote>

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 text-gray-800">
            <div className="mb-1 font-medium text-blue-800">Your Note:</div>
            <p className="text-blue-900">
              “This connects to my family stories about respect for traditional authority - need to
              ask grandmother more.”
            </p>
          </div>

          <p className="mt-6 text-gray-700">
            The Asantehene, while holding supreme authority, operates within a complex web of
            traditional checks and balances involving the Queen Mother (Asantehemaa), the council of
            paramount chiefs (Asantemanhyiamu), and various other state functionaries. This
            decentralized yet unified structure ensured stability and collective decision-making.
          </p>

          <div className="mt-6 rounded-xl border border-amber-200 bg-teal-900/5 p-4">
            <div className="mb-2 flex items-center gap-2 font-medium text-amber-700">
              <span>📦</span> Cultural Context Box
            </div>
            <p className="text-gray-700">
              This governance system influenced diaspora community organization in the Americas.
              Many African American churches and civic groups adopted similar council structures,
              reflecting a retained cultural memory of consensus-based leadership.
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
              <span>Progress: 80% complete</span>
              <span>⏱ 3 min remaining</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-4/5 rounded-full bg-amber-400" />
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-gray-700">Related Content</h2>
            <ul className="mt-3 space-y-2 text-amber-700">
              <li>➜ Traditional Leadership in Modern Ghana</li>
              <li>➜ Sacred Symbols & Their Meanings</li>
              <li>➜ Community Decision-Making Processes</li>
            </ul>
          </section>

          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-white md:w-auto w-full"
            >
              💬 Discuss with Community
            </a>
            <a
              href="/reading/annotate"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-teal-900 md:w-auto w-full"
            >
              🧠 Quiz Yourself
            </a>
          </div>
        </article>
      </main>

      <footer className="mt-8 bg-teal-900 py-6 text-center text-xs text-white/70">
        © 2025 OurRoots.Africa. All rights reserved.
        <br />
        Your Guided Journey to Ghanaian Heritage.
      </footer>
    </div>
  );
}
