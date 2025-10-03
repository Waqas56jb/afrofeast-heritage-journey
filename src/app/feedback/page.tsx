export default function FeedbackPage() {
  const rating = Array.from({ length: 11 }).map((_, i) => i);
  return (
    <div className="min-h-[100dvh] bg-teal-900 p-4 text-white md:p-8">
      <header className="mx-auto mb-6 flex max-w-4xl items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
          🌿
        </div>
        <span>OurRoots.Africa</span>
      </header>

      <div className="mx-auto max-w-3xl rounded-3xl bg-teal-800/70 p-6 shadow-2xl ring-1 ring-black/20 md:p-8">
        <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-amber-300/90" />
        <h1 className="text-center text-2xl font-semibold text-amber-300">
          Help Us Improve Your Experience
        </h1>

        <div className="mt-6">
          <p className="text-sm text-white/80">
            How likely are you to recommend OurRoots.Africa to a friend?
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/60">Not Likely</span>
            {rating.map((n) => (
              <button
                key={n}
                className={`h-8 w-8 rounded-full ${n === 8 ? "bg-amber-400 text-teal-900" : "bg-white/10"}`}
              >
                {n}
              </button>
            ))}
            <span className="ml-2 text-white/60">Very Likely</span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-white/80">What's the main reason for your score?</p>
          <textarea
            className="mt-2 w-full rounded-xl bg-teal-900/50 p-4 text-white placeholder-white/50 outline-none ring-1 ring-white/10"
            rows={3}
            defaultValue="The content quality is excellent and culturally authentic. Love the trauma-informed approach to heritage travel."
          />
        </div>

        <div className="mt-6">
          <p className="text-sm text-white/80">Which feature do you find most valuable?</p>
          <div className="mt-2 space-y-2 text-sm">
            {[
              "6-stage heritage journey content",
              "Love Hub community discussions",
              "Cultural consultant WhatsApp support",
              "Service provider marketplace",
              "Afrofeast Score personalization",
            ].map((label, i) => (
              <label key={label} className="flex items-center gap-3">
                <input type="radio" name="valuable" defaultChecked={i === 1} />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-white/80">
            What would make you more likely to continue your subscription?
          </p>
          <div className="mt-2 space-y-2 text-sm">
            {[
              { label: "More interactive content", checked: true },
              { label: "Video content from elders", checked: true },
              { label: "Lower pricing", checked: false },
              { label: "More community events", checked: true },
              { label: "Mobile app", checked: false },
            ].map((item) => (
              <label key={item.label} className="flex items-center gap-3">
                <input type="checkbox" defaultChecked={item.checked} />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/library"
            className="inline-flex items-center rounded-full bg-amber-400 px-6 py-3 font-medium text-teal-900"
          >
            Submit Feedback →
          </a>
          <p className="mt-3 text-xs text-amber-200">
            Thank you! Earn 1 week free premium for your feedback.
          </p>
        </div>
      </div>

      <footer className="mx-auto mt-8 max-w-4xl text-center text-xs text-white/60">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
