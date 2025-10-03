"use client";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 h-[560px] w-full bg-[radial-gradient(ellipse_at_center,rgba(26,95,91,0.9),rgba(6,58,56,0.95))]"
        aria-hidden
      />
      <div className="relative mx-auto flex h-[560px] max-w-5xl flex-col items-center justify-center px-4 text-center">
        <svg
          viewBox="0 0 64 64"
          className="h-16 w-16 text-amber-400"
          fill="currentColor"
          aria-hidden
        >
          <circle cx="32" cy="32" r="30" fill="currentColor" opacity="0.25" />
          <path
            d="M32 10c8 0 14 6 14 14 0 10-8 18-14 18s-14-8-14-18c0-8 6-14 14-14zm0 36c10 0 18 4 18 10H14c0-6 8-10 18-10z"
            fill="currentColor"
          />
        </svg>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
          Your Ghana heritage journey, guided.
        </h1>
        <p className="mt-3 max-w-2xl text-teal-100">
          Take a 5-minute quiz to get your Afrofeast Score™ and a personalized heritage plan, with
          guidance from our cultural consultants on WhatsApp.
        </p>
        <a
          href="/quiz"
          className="mt-6 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-teal-900 shadow hover:bg-amber-300"
        >
          Start the Ghana Quiz
          <span className="ml-2">→</span>
        </a>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-teal-100/90">
          <span>✨ Personalized plans</span>
          <span>✨ Guided trips</span>
          <span>✨ Cultural focus</span>
          <span>✨ Trauma-Informed</span>
        </div>
      </div>
    </section>
  );
}
