"use client";
import { useState } from "react";

type Option = {
  id: string;
  title: string;
  subtitle: string;
};

type QuizCardProps = {
  question: string;
  step: number;
  total: number;
  options: Option[];
  onContinue?: (selectedId: string | null) => void;
};

export default function QuizCard({ question, step, total, options, onContinue }: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const progress = Math.round((step / total) * 100);

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 md:p-8">
      <header className="mb-4 text-center">
        <p className="text-sm text-teal-700/80">
          Question {step} of {total}
        </p>
        <div className="mt-3 h-1.5 w-full rounded-full bg-gray-200">
          <div className="h-1.5 rounded-full bg-amber-400" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <div className="mt-4 flex items-start justify-center gap-3 text-center md:text-left">
        <span className="hidden text-2xl md:block">⚙️</span>
        <h1 className="text-xl font-semibold text-teal-900 md:text-2xl">{question}</h1>
      </div>

      <div className="mt-6 space-y-4">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className={`w-full rounded-xl border px-4 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-amber-400 md:px-5 ${
              selected === opt.id
                ? "border-amber-300 bg-amber-50"
                : "border-gray-200 bg-white hover:bg-gray-50"
            }`}
            aria-pressed={selected === opt.id}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                  selected === opt.id ? "border-amber-500" : "border-gray-300"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    selected === opt.id ? "bg-amber-500" : "bg-transparent"
                  }`}
                />
              </span>
              <div>
                <div className="font-medium text-teal-900">{opt.title}</div>
                <div className="text-sm text-gray-500">({opt.subtitle})</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={() => onContinue?.(selected)}
          disabled={!selected}
          className={`flex w-full items-center justify-center rounded-full px-6 py-3 text-teal-900 transition ${
            selected ? "bg-amber-400 hover:bg-amber-300" : "bg-gray-200 text-gray-600"
          }`}
        >
          Continue →
        </button>
        <p className="mt-3 text-center text-xs text-gray-500">
          🔒 Unlock your personalized heritage plan with premium access ($29/month)
        </p>
      </div>
    </div>
  );
}
