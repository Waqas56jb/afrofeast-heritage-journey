import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

export default function AnalyticsDashboardPage() {
  return (
    <main className="min-h-screen bg-[#E9EFEE] text-[#244848]">
      <div className="flex">
        <Sidebar />
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Your Reading Analytics</h1>
              <p className="mt-1 text-[12px] text-[#6B7280]">
                An overview of your content engagement and learning progress.
              </p>
            </div>
            <Button variant="secondary" className="rounded-lg px-3 py-1.5 text-[12px]">
              Last 30 days ▾
            </Button>
          </div>

          {/* Reading Overview */}
          <section className="mt-6 rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
            <div className="text-[14px]">📚 Reading Overview</div>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-4">
              {[
                {
                  label: "Total Reading Time",
                  value: "8h 47m",
                },
                {
                  label: "Articles Completed",
                  value: "15/23",
                },
                {
                  label: "Average Session",
                  value: "24 min",
                },
                {
                  label: "Engagement Score",
                  value: "87%",
                  sub: "Excellent",
                },
              ].map((c) => (
                <div key={c.label} className="rounded-xl bg-[#244F4C] p-4">
                  <div className="text-[12px] text-[#CFE1DD]">{c.label}</div>
                  <div className="mt-2 text-xl">{c.value}</div>
                  {c.sub && <div className="text-[12px] text-[#A8E5D9]">{c.sub}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* Patterns + Most Engaged */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm md:col-span-2">
              <div className="text-[14px]">🧭 Reading Patterns</div>
              <div className="mt-3 h-56 rounded-lg bg-[#244F4C]" />
            </section>
            <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
              <div className="text-[14px]">🏷 Most Engaged Topics</div>
              <div className="mt-3 space-y-3 text-[13px]">
                {[
                  "Emotional healing",
                  "Traditional governance",
                  "Sacred symbols",
                  "Community support",
                  "Practical travel tips",
                ].map((t, i) => (
                  <div key={t}>
                    <div className="flex items-center justify-between">
                      <span>
                        {i + 1}. {t}
                      </span>
                      <span className="text-[#CFE1DD]">{[92, 87, 83, 79, 71][i]}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-[#244F4C]">
                      <div
                        style={{ width: `${[92, 87, 83, 79, 71][i]}%` }}
                        className="h-2 rounded-full bg-[#F0B741]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
              <div className="text-[14px]">💬 Community Engagement</div>
              <div className="mt-3 space-y-2 text-[13px] text-[#CFE1DD]">
                <div>
                  ✎ Annotations shared: <span className="text-white">12</span>
                </div>
                <div>
                  ☑ Discussion posts: <span className="text-white">8</span>
                </div>
                <div>
                  👍 Helpful votes received: <span className="text-white">34</span>
                </div>
                <div>
                  📊 Community rank: <span className="text-white">Top 15%</span>
                </div>
              </div>
            </section>
            <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
              <div className="text-[14px]">🏆 Learning Achievements</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-[13px]">
                {["Consistent Reader", "Deep Thinker", "Community Helper", "Cultural Scholar"].map(
                  (a) => (
                    <div key={a} className="rounded-lg bg-[#244F4C] p-3">
                      {a}
                    </div>
                  ),
                )}
              </div>
            </section>
            <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
              <div className="text-[14px]">🛫 Progress Prediction</div>
              <p className="mt-3 text-[13px] text-[#CFE1DD]">
                At your current pace, you’ll complete Stage 2 in 8 days and be ready for your Ghana
                trip preparation by January 15.
              </p>
            </section>
          </div>

          {/* Footer actions */}
          <div className="mt-6 rounded-2xl bg-[#2D5A5A] p-5 text-center shadow-sm">
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
              <Button className="w-full md:w-56" rightIcon={<span>↓</span>}>
                Download Report
              </Button>
              <Button variant="secondary" className="w-full md:w-56">
                Share Achievements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
