export default function ResultsPage() {
  return (
    <div className="min-h-[100dvh] bg-[radial-gradient(ellipse_at_center,_#e8ecea,_#e8ecea)] p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center gap-3 text-teal-900">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
            🌿
          </div>
          <span className="font-medium">OurRoots.Africa</span>
        </div>

        <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-black/5 md:p-10">
          <h1 className="text-center text-2xl font-semibold text-teal-900">
            Your Afrofeast Score™
          </h1>

          <div className="mt-6 flex items-center justify-center">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-teal-800 text-5xl font-semibold text-amber-300 shadow-inner">
              <span>78</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-semibold text-amber-600">You are a Heritage Seeker</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
              Your journey focuses on deep ancestral connection and emotional healing through
              trauma-informed heritage experiences.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-3 text-sm text-gray-600">Your Personalized 6-Stage Journey:</p>
            <ul className="space-y-2">
              <li className="flex items-center justify-between rounded-lg bg-white p-3 text-sm shadow-sm ring-1 ring-amber-200">
                <div className="flex items-center gap-2 text-teal-900">
                  <span>🏅</span>
                  <span>Stage 1: Emotional Preparation</span>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                  FREE
                </span>
              </li>
              {[
                "Stage 2: Cultural Intelligence",
                "Stage 3: Practical Preparation",
                "Stage 4: Immersive Experience",
                "Stage 5: Integration & Reflection",
                "Stage 6: Ongoing Connection",
              ].map((label) => (
                <li
                  key={label}
                  className="flex items-center justify-between rounded-lg bg-white p-3 text-sm text-gray-500 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>{label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href="/signup"
              className="flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-teal-900 shadow hover:bg-amber-300"
            >
              Unlock Full Journey - $29/month →
            </a>
            <a
              href="/signup"
              className="block w-full rounded-full border-2 border-teal-800 px-6 py-3 text-center text-teal-800"
            >
              Start Free Preview
            </a>
          </div>
        </div>

        <footer className="mx-auto mt-10 max-w-xl text-center text-xs text-teal-900/70">
          © 2025 OurRoots.Africa. All rights reserved.
          <br />
          Your Guided Journey to Ghanaian Heritage.
        </footer>
      </div>
    </div>
  );
}
