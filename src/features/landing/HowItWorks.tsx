export default function HowItWorks() {
  const steps = [
    { n: 1, t: "Take the Quiz" },
    { n: 2, t: "Get Your Afrofeast Score™" },
    { n: 3, t: "Begin Your Journey" },
  ];

  return (
    <section className="bg-white text-teal-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold">How It Works</h2>
        <div className="mt-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          {steps.map((step, i) => (
            <div key={step.n} className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 font-semibold text-teal-900">
                {step.n}
              </div>
              <p className="whitespace-nowrap text-teal-800">{step.t}</p>
              {i < steps.length - 1 && (
                <svg
                  viewBox="0 0 24 24"
                  className="ml-4 hidden h-6 w-6 text-teal-700 md:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
