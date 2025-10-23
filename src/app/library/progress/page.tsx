"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/Button";

export default function LibraryProgressPage() {
  return (
    <main className="min-h-screen bg-[#F2F5F4] text-[#EBD9A7]">
      <div className="flex">
        <Sidebar />
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="rounded-3xl bg-[#244F4C] p-8 shadow-[0_40px_140px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/10">
            <h1 className="text-center text-3xl font-semibold text-[#F0B741]">
              Your Heritage Journey Progress
            </h1>
            <p className="mt-1 text-center text-sm text-[#CDE1DD]">
              Follow your path to reconnecting with Ghana.
            </p>

            {/* Overall progress */}
            <div className="mt-6 rounded-xl bg-[#2E5F5A] p-4 text-[#CDE1DD]">
              <div className="flex items-center justify-between text-sm">
                <span>Overall Progress</span>
                <span>65% Complete</span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-[#1E3E3A]">
                <div className="h-3 w-[65%] rounded-full bg-[#F0B741]" />
              </div>
            </div>

            {/* Stage breakdown */}
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[#3A6B64] bg-[#2E5F5A] p-4 text-[#E9F4F1]">
                <div className="text-sm">Stage 1: Emotional Preparation</div>
                <div className="mt-1 inline-block rounded-full bg-[#2F6B43] px-2 py-0.5 text-[11px] text-[#BBFFD0] ring-1 ring-[#62C77F]">
                  Completed
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-[#244F4C]">
                  <div className="h-2 w-full rounded-full bg-[#86E3A0]" />
                </div>
                <div className="mt-2 space-y-1 text-[12px] text-[#CDE1DD]">
                  <div>8/8 articles • 2h 15m reading time</div>
                  <div>Mastery Score: 92%</div>
                </div>
              </div>

              <a
                href="/reading"
                className="rounded-xl border border-[#F0B741]/40 bg-[#2E5F5A] p-4 text-[#E9F4F1] ring-1 ring-[#F0B741]/30 block hover:bg-[#2B5753] transition-colors"
              >
                <div className="text-sm">Stage 2: Cultural Intelligence</div>
                <div className="mt-1 inline-block rounded-full bg-[#3A3F24] px-2 py-0.5 text-[11px] text-[#F0B741] ring-1 ring-[#F0B741]/40">
                  In Progress
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-[#244F4C]">
                  <div className="h-2 w-4/6 rounded-full bg-[#F0B741]" />
                </div>
                <div className="mt-2 space-y-1 text-[12px] text-[#CDE1DD]">
                  <div>6/8 articles • 1h 45m reading time</div>
                  <div>Current: "Sacred Symbols & Meanings"</div>
                </div>
              </a>

              <div className="rounded-xl border border-[#3A6B64] bg-[#2E5F5A] p-4 text-[#A0B5B1] opacity-70">
                <div className="text-sm">Stage 3: Practical Preparation</div>
                <div className="mt-1 inline-block rounded-full bg-[#3B4C4A] px-2 py-0.5 text-[11px] text-[#C7D5D2] ring-1 ring-[#506765]">
                  Locked
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-[#244F4C]">
                  <div className="h-2 w-1/4 rounded-full bg-[#C7D5D2]" />
                </div>
                <div className="mt-2 space-y-1 text-[12px]">
                  <div>2/8 articles • 0h 30m reading time</div>
                  <div>Unlocks after Stage 2 completion</div>
                </div>
              </div>
            </div>

            {/* Analytics and Milestone */}
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-[#2E5F5A] p-5 text-[#CDE1DD]">
                <div className="text-[#F0B741]">📘 Reading Analytics</div>
                <ul className="mt-3 space-y-1 text-[13px]">
                  <li>• Average session: 23 minutes</li>
                  <li>• Engagement rate: 87% (Excellent!)</li>
                  <li>• Retention rate: 94% (Outstanding!)</li>
                  <li>• Community participation: 78%</li>
                </ul>
              </div>

              <div className="rounded-xl bg-[#1E3E3A] p-5 text-[#CDE1DD]">
                <div className="text-[#F0B741]">🎯 Next Milestone</div>
                <p className="mt-3 text-[13px]">
                  Complete Stage 2 to unlock practical preparation content and service provider
                  recommendations for your Ghana trip.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 md:flex-row">
                  <a href="/reading" className="w-full md:w-48">
                    <Button className="w-full" rightIcon={<span>→</span>}>
                      Continue Reading
                    </Button>
                  </a>
                  <Button variant="secondary" className="w-full md:w-48">
                    Share Progress
                  </Button>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6 rounded-xl bg-[#2E5F5A] p-5 text-[#CDE1DD]">
              <div className="text-[#F0B741]">🏆 Achievements Unlocked</div>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-[13px] md:grid-cols-2">
                <li>• First Stage Complete</li>
                <li>• Community Contributor</li>
                <li>• Deep Reader (2h total)</li>
                <li>• Cultural Scholar (Complete 3 stages)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
