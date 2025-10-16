import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] text-[#244848]">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="mx-auto w-full max-w-6xl px-6 py-6">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Your Heritage Journey Library</h1>
              <p className="mt-1 text-sm text-[#6B7280]">
                Explore curated content to guide your path of discovery.
              </p>
            </div>
            <a
              className="rounded-full bg-[#F4B942] px-4 py-2 text-[#1E332F]"
              href="/library/offline"
            >
              Manage Content →
            </a>
          </header>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Left column */}
            <div className="md:col-span-2 space-y-6">
              {/* Progress card */}
              <section className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <div className="font-medium">📊 Your Progress</div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span>Stage 1: Emotional Preparation</span>
                  <span className="text-[#6B7280]">80% Complete</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-[#E5E7EB]">
                  <div className="h-2 w-4/5 rounded-full bg-[#F4B942]" />
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span>Stage 2: Cultural Intelligence</span>
                  <span className="text-[#6B7280]">40% In Progress</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-[#E5E7EB]">
                  <div className="h-2 w-2/5 rounded-full bg-[#244848]" />
                </div>
                <div className="mt-4 text-right">
                  <a
                    href="/library/progress"
                    className="inline-flex items-center justify-center rounded-full border border-[#244848] px-4 py-2 text-[#244848]"
                  >
                    View Progress →
                  </a>
                </div>
              </section>

              {/* Browse by stage */}
              <section className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <div className="font-medium">📚 Browse by Stage</div>

                <div className="mt-4 rounded-lg border border-[#E5E7EB] p-4">
                  <div className="flex items-center justify-between text-[15px] font-medium">
                    <span>Stage 1: Emotional Preparation</span>
                    <span className="rounded-full bg-[#E8FAD9] px-2 py-0.5 text-[11px] text-[#22A046] ring-1 ring-[#A7E5B6]">
                      Completed
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[14px] text-[#374151]">
                    <li>• Castle Visit Trauma Prep</li>
                    <li>• Emotional Readiness Guide</li>
                    <li>• Community Support Resources</li>
                  </ul>
                </div>

                <div className="mt-4 rounded-lg border border-[#E5E7EB] p-4">
                  <div className="flex items-center justify-between text-[15px] font-medium">
                    <span>Stage 2: Cultural Intelligence</span>
                    <span className="rounded-full bg-[#F5F7F9] px-2 py-0.5 text-[11px] text-[#6B7280] ring-1 ring-[#E5E7EB]">
                      In Progress
                    </span>
                  </div>
                  <div className="mt-3 space-y-2 text-[14px] text-[#374151]">
                    <a
                      href="/reading"
                      className="flex items-center justify-between rounded-md border border-transparent px-2 py-1 hover:bg-[#F5F7F9]"
                    >
                      <span>◉ Asante Governance Systems</span>
                      <span className="rounded-full bg-[#EAF3FF] px-2 py-0.5 text-[11px] text-[#1E40AF] ring-1 ring-[#C7DBFF]">
                        Reading
                      </span>
                    </a>
                    <a
                      href="/reading"
                      className="block rounded-md border border-transparent px-2 py-1 hover:bg-[#F5F7F9]"
                    >
                      ○ Sacred Symbols & Meanings
                    </a>
                    <a
                      href="/reading"
                      className="block rounded-md border border-transparent px-2 py-1 hover:bg-[#F5F7F9]"
                    >
                      ○ Traditional Leadership Roles
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href="/library/export"
                    className="rounded-full border border-[#244848] px-4 py-2 text-[#244848]"
                  >
                    Export Content
                  </a>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <section className="rounded-xl border border-[#E5E7EB] bg-[#244848] p-5 text-white shadow-sm">
                <div className="font-medium">⭐ Recommended for You</div>
                <div className="mt-3 rounded-md bg-white/10 p-4">
                  <div className="text-[14px]">“Sacred Symbols of Asante”</div>
                  <div className="mt-1 text-[12px] text-white/80">Stage 2 • 12 min read</div>
                  <a
                    className="mt-3 inline-block rounded-full bg-[#F4B942] px-4 py-2 text-sm text-[#1E332F]"
                    href="/reading"
                  >
                    Start Reading →
                  </a>
                </div>
              </section>

              <section className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <div className="font-medium">📖 Your Reading Stats</div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[14px] text-[#374151]">
                  <div>Total time (this month)</div>
                  <div className="text-right">4h 23m</div>
                  <div>Articles completed</div>
                  <div className="text-right">8 / 15</div>
                  <div>Engagement score</div>
                  <div className="text-right">87%</div>
                </div>
              </section>

              <section className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <div className="font-medium">⬇ Recently Downloaded</div>
                <ul className="mt-3 space-y-2 text-[14px] text-[#374151]">
                  <li>• Emotional Preparation Guide (2.3 MB)</li>
                  <li>• Community Support Audio (5.1 MB)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
