import QuizStep from "@/features/quiz/QuizStep";

export default function QuizPage() {
  const options = [
    {
      id: "seeker",
      title: "Deep ancestral connection and healing",
      subtitle: "Heritage Seeker",
    },
    {
      id: "explorer",
      title: "Cultural immersion and learning",
      subtitle: "Cultural Explorer",
    },
    {
      id: "traveller",
      title: "Personal discovery and adventure",
      subtitle: "Curious Traveller",
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-teal-900 p-4 text-teal-900 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
              🌿
            </div>
            <span className="font-medium">OurRoots.Africa</span>
          </div>
          <div className="hidden text-sm opacity-70 md:block">&nbsp;</div>
        </div>

        <div className="rounded-3xl bg-teal-900/0 p-0 md:p-6">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[560px] max-w-3xl rounded-[20px] bg-black/20 blur-[40px]" />
            <QuizStep
              question="What primarily motivates your Ghana heritage journey?"
              step={1}
              total={5}
              options={options}
              nextHref="/quiz/2"
            />
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-white/60">
          © 2025 OurRoots.Africa. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
