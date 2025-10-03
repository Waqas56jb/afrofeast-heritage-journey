export default function PremiumSuccessPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-900 p-4 text-white md:p-8">
      <header className="mx-auto mb-6 flex max-w-4xl items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
          🌿
        </div>
        <span>OurRoots.Africa</span>
      </header>

      <div className="mx-auto max-w-3xl rounded-3xl bg-teal-800/70 p-6 shadow-2xl ring-1 ring-black/20 md:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-amber-300/90 text-3xl text-teal-900">
          ✨
        </div>
        <h1 className="mt-4 text-center text-3xl font-semibold text-amber-300">
          Welcome to Premium!
        </h1>
        <p className="mt-1 text-center text-white/80">
          Your journey into the heart of Ghana has begun.
        </p>

        <div className="mt-6 rounded-2xl bg-teal-900/50 p-4">
          <div className="flex items-center gap-3 text-white">
            <span>✅</span>
            <div>
              <div>Payment Successful</div>
              <div className="text-sm text-white/70">$9.00 charged to • • • • 4242</div>
              <div className="text-sm text-white/70">Next billing: December 30, 2025</div>
            </div>
          </div>
        </div>

        <h2 className="mt-8 text-center text-amber-200">Your Premium Journey Unlocked:</h2>
        <div className="mt-4 space-y-3">
          {[
            {
              title: "Stage 2: Cultural Intelligence",
              sub: '"Understanding Asante Governance"',
              cta: "Start Reading",
              href: "/feedback",
            },
            {
              title: "Love Hub Community",
              sub: '"Join 234 heritage travelers"',
              cta: "Enter Community",
            },
            {
              title: "Service Provider Directory",
              sub: '"Find cultural guides in Ghana"',
              cta: "Browse Services",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl bg-teal-900/40 p-4"
            >
              <div>
                <div className="text-white/90">{item.title}</div>
                <div className="text-xs text-white/70">{item.sub}</div>
              </div>
              <a
                href={item.href || "#"}
                className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-teal-900"
              >
                {item.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-center">
          <div className="mx-auto flex h-12 w-full max-w-sm items-center justify-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4">
            <span>💬</span>
            <span className="text-white/90">Connect with Mama Efua</span>
          </div>
          <p className="mt-2 text-xs text-white/60">Your cultural consultant is ready!</p>
        </div>

        <p className="mt-6 text-center text-xs text-white/70">
          A detailed receipt has been sent to your email.
        </p>
      </div>

      <footer className="mx-auto mt-8 max-w-4xl text-center text-xs text-white/60">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
