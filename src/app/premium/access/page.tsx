export default function PremiumAccessPage() {
  return (
    <div className="min-h-[100dvh] bg-teal-950 text-white">
      <header className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
            🌿
          </div>
          <span className="font-medium">OurRoots.Africa</span>
        </div>
        <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full object-cover" />
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-12">
        <div className="rounded-3xl bg-teal-900/70 p-6 shadow-2xl ring-1 ring-black/30 md:p-8">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-xl bg-black/40" />
            <h1 className="mt-4 text-center text-3xl font-semibold text-amber-300">
              Premium Content Access
            </h1>
            <p className="mt-2 text-center text-sm text-white/80">
              You've reached your free content limit. Unlock your full heritage journey.
            </p>
          </div>

          <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-teal-800/70 p-4 ring-1 ring-black/20">
              <div className="text-emerald-300">Free Content Accessed</div>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                {[
                  "Travel DNA Quiz & AfroFeast Score",
                  "Stage 1: Emotional Preparation (complete)",
                  "3 community discussion previews",
                  "Basic service provider directory",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span>✅</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-teal-800/70 p-4 ring-1 ring-black/20">
              <div className="text-amber-300">Premium Content Awaiting</div>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                {[
                  "Stage 2–6: Complete Heritage Journey",
                  "Full Love Hub community access",
                  "Advanced annotation & export tools",
                  "Offline content access",
                  "Personalized service recommendations",
                  "Priority cultural consultant support",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span>⭐</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-teal-800/70 p-4 ring-1 ring-black/20">
              <div className="text-white/90">Pricing (PPP Adjusted)</div>
              <div className="mt-2 text-sm text-white/70">Ghana Rate</div>
              <div className="mt-1 text-3xl font-semibold text-white">
                $9 <span className="text-xs font-normal text-white/70">/ month</span>
              </div>
              <div className="mt-3 text-xs text-white/70">Standard Rate $29 / month</div>
              <ul className="mt-3 space-y-1 text-xs text-white/70">
                <li>✓ 7-day free trial included</li>
                <li>✓ Cancel any time, no commitment</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-teal-800/70 p-4 ring-1 ring-black/20">
              <div className="text-white/90">What You Get Immediately:</div>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                {[
                  "Unlock “Sacred Symbols & Meanings”",
                  "Join 234 active Love Hub members",
                  "Access cultural guide directory",
                  "Download content for offline reading",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span>📦</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="mt-6 text-center text-xs text-white/70">Payment Options</div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
            <span>📱 Mobile Money (MTN/Vodafone)</span>
            <span>💳 Credit/Debit Card</span>
            <span>🏦 Bank Transfer (Ghana)</span>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <button className="w-full rounded-full bg-amber-400 px-6 py-3 text-sm font-medium text-teal-900 md:w-auto">
              Start 7-Day Free Trial →
            </button>
            <button className="w-full rounded-full bg-white/10 px-6 py-3 text-sm text-white md:w-auto">
              Continue with Free Content
            </button>
          </div>
          <div className="mt-3 text-center text-[11px] text-white/50">
            Secure payment • Cancel any time • 30 day money-back guarantee
          </div>
        </div>
      </main>
    </div>
  );
}
