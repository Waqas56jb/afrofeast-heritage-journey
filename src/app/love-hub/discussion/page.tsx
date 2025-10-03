export default function DiscussionDetailPage() {
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
            <a href="/journey" className="opacity-80 hover:text-amber-300">
              My Journey
            </a>
            <a href="/love-hub" className="border-b-2 border-amber-300 pb-1">
              Love Hub
            </a>
            <a href="/content-hub" className="opacity-80 hover:text-amber-300">
              Directory
            </a>
            <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-16">
        <nav className="pt-4 text-xs text-gray-500">
          Love Hub › Discussions › <span className="text-gray-700">Dating across cultures...</span>
        </nav>

        <h1 className="mt-3 text-2xl font-semibold text-teal-900">
          Dating across cultures - Ghana/US
        </h1>
        <div className="mt-1 text-xs text-gray-500">
          Started by @AmaraJ • 2 days ago • 47 replies
        </div>

        <section className="mt-4 space-y-4">
          {[0, 1, 2, 3].map((idx) => (
            <article key={idx} className="rounded-2xl bg-white p-4 shadow ring-1 ring-black/10">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-300" />
                <div className="flex-1">
                  <div className="text-sm text-teal-900">{idx === 0 ? "@AmaraJ" : "@MamaEfua"}</div>
                  <p className="mt-1 text-sm text-gray-700">
                    {idx === 0
                      ? "I'm planning my heritage trip to Ghana and wondering about dating dynamics. As an African American woman, what should I know about relationships and cultural expectations if I meet someone special there? Any advice from those who've navigated this?"
                      : "Beautiful question! Remember you're connecting with family and community. I'm happy to offer guidance if you'd like deeper support."}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                    <button>↩ Reply</button>
                    <button>👍 Likes</button>
                    <button>↗ Share</button>
                    <span className="ml-auto">{idx === 0 ? "2 days ago" : "1 day ago"}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-4 rounded-2xl bg-white p-4 shadow ring-1 ring-black/10">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-300" />
            <div className="text-sm text-gray-600">Write your reply...</div>
          </div>
          <div className="mt-2 h-24 rounded-lg border border-gray-200 bg-gray-50" />
          <div className="mt-3 flex items-center justify-end gap-3">
            <button className="rounded-full border border-gray-300 px-4 py-2 text-xs text-gray-700">
              Save Draft
            </button>
            <button className="rounded-full bg-amber-400 px-4 py-2 text-xs font-medium text-teal-900">
              Post Reply
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-teal-900 py-6 text-center text-xs text-white/70">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
