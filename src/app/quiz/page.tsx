"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  TargetIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@/components/icons";

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
  const [direction, setDirection] = useState(1);

  const question = QUESTIONS[step];
  const total = QUESTIONS.length;
  const progress = ((step + 1) / total) * 100;

  function goBack() {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
    setSelected(answers[step - 1] !== -1 ? answers[step - 1] : null);
  }

  function continueNext() {
    if (selected == null) return;
    setDirection(1);
    const nextAnswers = [...answers];
    nextAnswers[step] = selected;
    setAnswers(nextAnswers);

    if (step < total - 1) {
      setStep((s) => s + 1);
      setSelected(null);
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
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2F6C66] to-[#2A685F] p-4 md:p-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={goBack}
            className="mb-6 text-white hover:bg-white/10"
            leftIcon={<ArrowLeftIcon size={16} />}
          >
            Back
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card variant="elevated" className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-[#2F4F4F]">
                <TargetIcon size={24} className="text-[#F4B942]" />
                Travel DNA Quiz™
              </CardTitle>
              <div className="mt-4 space-y-2">
                <div className="text-sm text-[#6B7280]">
                  Question {step + 1} of {total}
                </div>
                <div className="flex justify-center gap-2">
                  {Array.from({ length: total }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        i <= step ? "bg-[#F4B942]" : "bg-[#E4E9EE]"
                      }`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: i <= step ? 1.2 : 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
                <div className="w-full bg-[#E4E9EE] rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#F4B942] to-[#E8A63A] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="min-h-[300px]"
                >
                  <motion.h2
                    className="text-center text-xl font-semibold text-[#2F4F4F] md:text-2xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {question.title}
                  </motion.h2>

                  <div className="space-y-4">
                    {question.options.map((opt, idx) => (
                      <motion.label
                        key={idx}
                        className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-all duration-200 hover:shadow-md ${
                          selected === idx
                            ? "border-[#F4B942] bg-[#FFF8EA] shadow-md"
                            : "border-[#E6EBEF] bg-white hover:bg-[#FAFCFD] hover:border-[#F4B942]/50"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                              selected === idx
                                ? "border-[#F4B942] bg-[#F4B942]"
                                : "border-[#C9D3DA]"
                            }`}
                          >
                            {selected === idx && (
                              <CheckCircleIcon size={12} className="text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-[#2F3A4A] leading-relaxed">
                              {opt.label}
                            </div>
                            {opt.hint && (
                              <div className="mt-2 text-xs text-[#8EA0AF] flex items-center gap-1">
                                <SparklesIcon size={12} />
                                {opt.hint}
                              </div>
                            )}
                          </div>
                        </div>
                        <input
                          type="radio"
                          name={`q-${step}`}
                          className="sr-only"
                          checked={selected === idx}
                          onChange={() => setSelected(idx)}
                        />
                      </motion.label>
                    ))}
                  </div>

                  <motion.div
                    className="mt-8 rounded-xl bg-gradient-to-r from-[#F5F7F9] to-[#F0F4F8] p-4 text-sm text-[#6B7280]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <ClockIcon size={16} className="text-[#F4B942]" />
                      <span className="font-medium">
                        Your answer helps us understand your primary motivation and assign the right
                        cultural guide.
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </CardContent>

            <div className="flex items-center justify-between border-t border-[#EDF1F3] px-6 py-4">
              <div className="text-xs text-[#9AA5B1]">
                {step + 1} of {total} questions
              </div>
              <Button
                onClick={continueNext}
                disabled={selected == null}
                variant={selected == null ? "outline" : "premium"}
                size="lg"
                rightIcon={<ArrowRightIcon size={16} />}
                className="min-w-[120px]"
              >
                {step === total - 1 ? "Complete Quiz" : "Continue"}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
