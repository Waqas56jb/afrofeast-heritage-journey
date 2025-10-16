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
    <main className="relative min-h-screen text-[#2F4F4F]">
      {/* Background image */}
      <img
        src="/imgage.png"
        alt="Background"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#2F6C66]">
            <img
              src="/logo.png"
              alt="logo"
              className="h-8 w-8 rounded-sm border border-[#E5E7EB] bg-[#FFF3C4]"
            />
            <span>OurRoots.Africa</span>
          </div>
          <a
            href="/login"
            className="rounded-full border border-[#E5E7EB] px-4 py-1.5 text-sm text-[#374151] bg-white/70 backdrop-blur-sm"
          >
            Login
          </a>
        </div>

        <div className="mx-auto mt-6 max-w-[720px] rounded-[18px] bg-white p-8 shadow-[0_50px_120px_-35px_rgba(0,0,0,0.45)] ring-1 ring-[#E5E7EB]">
          <h1 className="text-center text-[22px] font-semibold text-[#244848]">
            Your Afrofeast Score™
          </h1>
          <div className="mx-auto mt-6 grid place-items-center">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 rounded-full bg-[#244848] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.5)]" />
              <div className="absolute inset-2 rounded-full border-2 border-[#F4B942]/70" />
              <div className="relative z-10 flex h-full w-full items-center justify-center text-4xl font-semibold text-[#F4B942]">
                {score}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center font-semibold text-[#F4B942]">You are a {persona}</div>
          <p className="mt-2 text-center text-sm text-[#6B7280]">
            Your journey focuses on deep ancestral connection and emotional healing through
            trauma‑informed heritage experiences.
          </p>

          <div className="mt-6 rounded-xl border border-[#E5E7EB]">
            <div className="border-b border-[#E5E7EB] px-4 py-3 text-sm text-[#6B7280]">
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
                className="flex items-center justify-between px-4 py-3 text-sm text-[#6B7280]"
              >
                <div className="flex items-center gap-2">
                  <span className="opacity-80">{i === 0 ? "🏆" : "🔒"}</span>
                  <span>{s.label}</span>
                </div>
                {s.badge && (
                  <span className="rounded-full bg-[#E8FAD9] px-2 py-0.5 text-[11px] text-[#22A046] ring-1 ring-[#A7E5B6]">
                    {s.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <a
              href="/premium/access"
              className="flex-1 rounded-full bg-[#F4B942] px-6 py-3 text-center font-medium text-[#1E332F] shadow-sm"
            >
              Unlock Full Journey – $29/month →
            </a>
            <a
              href="/signup"
              className="flex-1 rounded-full border border-[#244848] px-6 py-3 text-center font-medium text-[#244848] bg-white"
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
