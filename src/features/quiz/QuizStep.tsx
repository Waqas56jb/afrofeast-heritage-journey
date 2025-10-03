"use client";
import { useRouter } from "next/navigation";
import QuizCard from "@/features/quiz/QuizCard";

type Option = {
  id: string;
  title: string;
  subtitle: string;
};

type QuizStepProps = {
  question: string;
  step: number;
  total: number;
  options: Option[];
  nextHref?: string;
};

export default function QuizStep({ question, step, total, options, nextHref }: QuizStepProps) {
  const router = useRouter();

  return (
    <QuizCard
      question={question}
      step={step}
      total={total}
      options={options}
      onContinue={(id) => {
        if (!nextHref) return;
        router.push(nextHref);
      }}
    />
  );
}
