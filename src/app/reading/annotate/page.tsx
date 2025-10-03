export default function AnnotateReadingPage() {
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
            <a href="#" className="flex items-center gap-2 opacity-90 hover:text-amber-300">
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
              Community Hub
            </a>
            <a href="#" className="flex items-center gap-2 opacity-90 hover:text-amber-300">
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
                <path d="M15 13h6" />
                <path d="M18 10v6" />
              </svg>
              Service Directory
            </a>
            <a href="#" className="flex items-center gap-2 opacity-90 hover:text-amber-300">
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
                <path d="M15 13h6" />
                <path d="M18 10v6" />
              </svg>
              Consultants
            </a>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="ml-4 h-8 w-8 rounded-full object-cover"
            />
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-8">
        <article className="md:col-span-2 rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
          <div className="text-sm text-gray-500">
            Stage 2: Understanding The Culture ›{" "}
            <span className="text-gray-700">The Role of Chieftaincy</span>
          </div>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-gray-800 md:text-4xl">
            The Enduring Significance of Chieftaincy in Ghana
          </h1>
          <p className="mt-3 text-gray-600">
            In modern Ghana, the institution of chieftaincy remains a vital and respected pillar of
            society, coexisting with the democratic state. Chiefs serve as community leaders,
            mediators in disputes, and catalysts for local development. Their authority is rooted in
            tradition, land, and spiritual stewardship.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl">
            <div className="aspect-[16/9] w-full bg-gray-300" />
          </div>

          <p className="mt-6 text-gray-700">
            The relationship between a chief and their people is deeply symbolic. The community
            looks to the chief for guidance and justice, while chiefs are entrusted with managing
            local resources and preserving cultural heritage. Understanding this dynamic is
            essential for anyone seeking to connect with Ghanaian communities in a respectful way.
          </p>

          <p className="mt-6 text-gray-700">
            For the diaspora, engaging with local chiefs and queen mothers can be a powerful and
            transformative part of a heritage journey. It is an opportunity to receive a traditional
            blessing, learn oral histories passed down through generations, and gain a profound
            sense of belonging.
          </p>
        </article>

        <aside className="rounded-2xl bg-teal-900 p-4 text-white shadow ring-1 ring-black/10">
          <h2 className="flex items-center gap-2 text-amber-300">
            <span>🖊</span> Annotation Toolkit
          </h2>

          <section className="mt-4 rounded-xl bg-teal-800/70 p-3">
            <div className="text-sm text-amber-200">Highlight Tools</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              {[
                "Key Concept",
                "Question",
                "Action Item",
                "Personal Connection",
                "Cultural Insight",
                "Important",
              ].map((t) => (
                <button
                  key={t}
                  className="rounded-full bg-teal-900/60 px-2 py-1 text-left text-white/90 ring-1 ring-white/10"
                >
                  {t}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-4 space-y-2">
            <div className="rounded-xl bg-teal-800/70 p-3">
              <div className="text-sm">Text Note</div>
            </div>
            <div className="rounded-xl bg-teal-800/70 p-3">
              <div className="text-sm">Voice Note (2:34 recorded)</div>
            </div>
            <div className="rounded-xl bg-teal-800/70 p-3">
              <div className="text-sm">Question for Consultant</div>
            </div>
            <div className="rounded-xl bg-teal-800/70 p-3">
              <div className="text-sm">Personal Reflection</div>
            </div>
          </section>

          <section className="mt-4 rounded-xl bg-teal-800/70 p-3">
            <div className="text-sm text-amber-200">Voice Note Preview</div>
            <div className="mt-2 rounded-xl bg-teal-900/50 p-3 text-xs text-white/80">
              “This reminds me of how my grandmother talks about respecting elders and ceremony. I
              want to ask Mama Efua about how this applies to...”
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm">
              <button className="rounded bg-emerald-500 px-3 py-1 text-white">▶ Play</button>
              <button className="rounded bg-white/20 px-3 py-1">↗</button>
              <button className="rounded bg-white/20 px-3 py-1">✎</button>
            </div>
          </section>

          <section className="mt-4 rounded-xl bg-teal-800/70 p-3 text-sm">
            <div className="text-amber-200">Smart Connections</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-white/90">
              <li>Your Stage 1 emotional prep notes</li>
              <li>Community discussion: “Traditional vs Modern Leadership”</li>
              <li>Service provider: “Kumasi Palace Cultural Tour”</li>
            </ul>
          </section>
        </aside>
      </main>

      <footer className="mt-8 bg-teal-900 py-6 text-center text-xs text-white/70">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
