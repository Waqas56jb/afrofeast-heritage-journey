"use client";

import { useState } from "react";
import { ArrowLeft } from "@/components/icons";

type Question = {
  title: string;
  subtitle?: string;
  options: { label: string; hint?: string }[];
};

const QUESTIONS: Question[] = [
  {
    title: "What draws you most to exploring your Ghanaian heritage?",
    options: [
      {
        label:
          "Healing ancestral trauma and finding emotional closure through connection to my roots",
        hint: "Heritage Seeker Path",
      },
      {
        label: "Learning traditional practices and connecting with living culture in modern Ghana",
        hint: "Cultural Explorer Path",
      },
      {
        label: "Experiencing Ghana as a curious traveler and learner, open to cultural discovery",
        hint: "Curious Traveller Path",
      },
    ],
  },
  {
    title: "Which kind of experiences excite you the most?",
    options: [
      { label: "Storytelling, archives, and family history" },
      { label: "Art, food, festivals, and living traditions" },
      { label: "Nature, road trips, and new perspectives" },
    ],
  },
  {
    title: "How do you prefer to learn?",
    options: [
      { label: "Guided conversations with cultural mentors" },
      { label: "Hands-on workshops and local activities" },
      { label: "Independent exploration with curated tips" },
    ],
  },
  {
    title: "What pace suits your journey?",
    options: [
      { label: "Reflective and gentle" },
      { label: "Balanced and immersive" },
      { label: "Fast-moving and exploratory" },
    ],
  },
  {
    title: "How do you want to connect with us during your journey?",
    options: [
      { label: "Ongoing WhatsApp check-ins with a consultant" },
      { label: "Occasional guidance and resources" },
      { label: "Self-guided with optional support" },
    ],
  },
];

// Correct option index for each question (0-based)
const CORRECT: number[] = [0, 1, 1, 1, 0];

export default function QuizEntryPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [anim, setAnim] = useState<"idle" | "left" | "right">("idle");

  const question = QUESTIONS[step];
  const total = QUESTIONS.length;

  function goBack() {
    if (step === 0) return;
    setAnim("right");
    setTimeout(() => {
      setStep((s) => s - 1);
      setSelected(null);
      setAnim("idle");
    }, 220);
  }

  function continueNext() {
    if (selected == null) return;
    setAnim("left");
    setTimeout(() => {
      const nextAnswers = [...answers];
      nextAnswers[step] = selected;
      setAnswers(nextAnswers);
      if (step < total - 1) {
        setStep((s) => s + 1);
        setSelected(null);
        setAnim("idle");
      } else {
        const numCorrect = nextAnswers.reduce((acc, a, i) => acc + (a === CORRECT[i] ? 1 : 0), 0);
        const score = numCorrect * 20; // 5 questions, 20 pts each
        const persona =
          nextAnswers[0] === 0
            ? "Heritage Seeker"
            : nextAnswers[0] === 1
              ? "Cultural Explorer"
              : "Curious Traveller";
        try {
          localStorage.setItem("quizScore", String(score));
          localStorage.setItem("quizPersona", persona);
        } catch {}
        window.location.href = "/quiz/results";
      }
    }, 220);
  }

  return (
    <main className="min-h-screen bg-[#2F6C66] p-4 md:p-10">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={goBack}
          className="mb-4 inline-flex items-center gap-2 text-white/90 hover:text-white"
        >
          <ArrowLeft />
          <span className="text-sm">Back</span>
        </button>

        <div className="rounded-2xl bg-white shadow-[0_30px_80px_-25px_rgba(0,0,0,0.5)]">
          <div className="border-b border-[#EDF1F3] py-4 text-center text-sm font-semibold text-[#2F4F4F]">
            Travel DNA Quiz™
          </div>

          <div className="p-6 md:p-8">
            <div className="text-center text-[11px] text-[#9AA5B1]">
              Question {step + 1} of {total}
            </div>
            <div className="mt-2 flex justify-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i <= step ? "bg-[#F0AE3F]" : "bg-[#E4E9EE]"}`}
                />
              ))}
            </div>

            <div className="relative mt-6 h-full min-h-[260px]">
              <div
                className={`transition-all duration-200 will-change-transform ${
                  anim === "left"
                    ? "-translate-x-12 opacity-0"
                    : anim === "right"
                      ? "translate-x-12 opacity-0"
                      : "translate-x-0 opacity-100"
                }`}
              >
                <h2 className="text-center text-xl font-semibold text-[#2F4F4F] md:text-2xl">
                  {question.title}
                </h2>

                <div className="mt-6 space-y-4">
                  {question.options.map((opt, idx) => (
                    <label
                      key={idx}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${selected === idx ? "border-[#F0AE3F] bg-[#FFF8EA]" : "border-[#E6EBEF] bg-white hover:bg-[#FAFCFD]"}`}
                    >
                      <input
                        type="radio"
                        name={`q-${step}`}
                        className="mt-1 h-4 w-4 rounded border-[#C9D3DA]"
                        checked={selected === idx}
                        onChange={() => setSelected(idx)}
                      />
                      <div>
                        <div className="text-[14px] text-[#2F3A4A]">{opt.label}</div>
                        {opt.hint && (
                          <div className="mt-2 text-[12px] text-[#8EA0AF]">→ {opt.hint}</div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-[#F5F7F9] p-3 text-[12px] text-[#8EA0AF]">
                  Your answer helps us understand your primary motivation and assign the right
                  cultural guide.
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-[#EDF1F3] px-6 py-4">
            <button
              onClick={continueNext}
              disabled={selected == null}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm text-white shadow-sm transition ${selected == null ? "bg-[#D5DADF] cursor-not-allowed" : "bg-[#6B7280] hover:bg-[#5B6472]"}`}
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
