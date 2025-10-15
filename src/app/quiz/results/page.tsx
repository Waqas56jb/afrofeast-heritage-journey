"use client";

import { useEffect, useState } from "react";

export default function QuizResultsPage() {
  const [score, setScore] = useState<number>(0);
  const [persona, setPersona] = useState<string>("Heritage Seeker");

  useEffect(() => {
    try {
      const s = Number(localStorage.getItem("quizScore") || 0);
      const p = localStorage.getItem("quizPersona") || "Heritage Seeker";
      setScore(s);
      setPersona(p);
    } catch {}
  }, []);

  return (
    <main
      className="min-h-screen bg-repeat text-[#2F4F4F]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(47,108,102,0.06) 1px, rgba(0,0,0,0) 1px)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#2F6C66]">
            <div className="h-8 w-8 rounded-sm border border-[#D5DBDF] bg-[#FFF3C4] flex items-center justify-center">
              🌴
            </div>
            <span>OurRoots.Africa</span>
          </div>
          <a
            href="/login"
            className="rounded-full border border-[#D5DBDF] px-4 py-1.5 text-sm text-[#2F4F4F]"
          >
            Login
          </a>
        </div>

        <div className="mx-auto mt-6 max-w-2xl rounded-2xl bg-white p-8 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.35)]">
          <h1 className="text-center text-2xl font-semibold">Your Afrofeast Score™</h1>
          <div className="mx-auto mt-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#2F6C66] text-4xl text-[#F4B942]">
            {score}
          </div>
          <div className="mt-6 text-center text-[#E0AE4F] font-semibold">You are a {persona}</div>
          <p className="mt-2 text-center text-sm text-[#7D8B96]">
            Your journey focuses on deep ancestral connection and emotional healing through
            trauma‑informed heritage experiences.
          </p>

          <div className="mt-6 rounded-xl border border-[#E7ECEF]">
            <div className="border-b border-[#E7ECEF] px-4 py-3 text-sm text-[#6A7A83]">
              Your Personalized 6-Stage Journey:
            </div>
            {[
              { label: "Stage 1: Emotional Preparation", badge: "FREE" },
              { label: "Stage 2: Cultural Intelligence" },
              { label: "Stage 3: Practical Preparation" },
              { label: "Stage 4: Immersive Experience" },
              { label: "Stage 5: Integration & Reflection" },
              { label: "Stage 6: Ongoing Connection" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex items-center justify-between px-4 py-3 text-sm text-[#6A7A83]"
              >
                <div className="flex items-center gap-2">
                  <span className="opacity-80">{i === 0 ? "🏆" : "🔒"}</span>
                  <span>{s.label}</span>
                </div>
                {s.badge && (
                  <span className="rounded-full bg-[#E8FAD9] px-2 py-0.5 text-[11px] text-[#44A533]">
                    {s.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <a
              href="/signup"
              className="flex-1 rounded-full bg-[#F4B942] px-6 py-3 text-center font-medium text-[#1E332F]"
            >
              Unlock Full Journey – $29/month →
            </a>
            <a
              href="/signup"
              className="flex-1 rounded-full border border-[#2F6C66] px-6 py-3 text-center font-medium text-[#2F6C66]"
            >
              Start Free Preview
            </a>
          </div>
        </div>

        <footer className="mt-10 rounded-t-xl bg-[#0F1B1F] py-6 text-center text-sm text-white/70">
          © 2025 OurRoots.Africa. All rights reserved.
          <div className="mt-1 text-white/50">Your Guided Journey to Ghanaian Heritage.</div>
        </footer>
      </div>
    </main>
  );
}
