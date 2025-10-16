import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function ReadingPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] text-[#244848]">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="mx-auto w-full max-w-4xl px-6 py-10">
          {/* Header card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB]">
            {/* Title row */}
            <h1 className="text-3xl font-semibold text-[#244848]">
              Understanding Asante Governance Systems
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px] text-[#6B7280]">
              <span>←</span>
              <span>→</span>
              <span>Aa</span>
              <span>+</span>
              <span>•</span>
              <span>12 min read</span>
              <span className="rounded-full bg-[#EAF3FF] px-2 py-0.5 text-[#1E40AF]">Stage 2</span>
              <span>🔊 Audio available</span>
            </div>

            {/* Audio CTA */}
            <div className="mt-5 rounded-lg border border-[#E5E7EB] bg-[#F5F7F9] p-4 text-[13px] text-[#374151]">
              <button className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B942] text-[#1E332F]">
                ▶
              </button>
              <span className="font-medium">Listen to this section</span>
              <span className="ml-2 text-[#6B7280]">Narrated by Elder Nana Yaa</span>
            </div>

            {/* Paragraph */}
            <p className="mt-5 text-[15px] leading-7 text-[#374151]">
              The Asante political system represents one of Africa’s most sophisticated governance
              structures, built on principles of checks and balances that predate Western democratic
              concepts by centuries.
            </p>

            {/* Quote */}
            <div className="mt-5 rounded-md border-l-4 border-[#F4B942] bg-[#FFFBEA] p-4 text-[14px] text-[#6B4F00]">
              <em>
                “The Golden Stool (Sika Dwa Kofi) serves not just as a symbol of authority, but as
                the spiritual embodiment of the Asante nation’s soul.”
              </em>
            </div>

            {/* Note */}
            <div className="mt-4 rounded-md border border-[#CFE5FF] bg-[#F4F9FF] p-4 text-[14px] text-[#1F3B66]">
              <div className="font-medium">Your Note:</div>
              <div className="mt-1 text-[#30578D]">
                “This connects to my family stories about respect for traditional authority – need
                to ask grandmother more.”
              </div>
            </div>

            {/* Body paragraph */}
            <p className="mt-5 text-[15px] leading-7 text-[#374151]">
              The Asantehene, while holding supreme authority, operates within a complex web of
              traditional checks and balances involving the Queen Mother (Asantehemaa), the council
              of paramount chiefs (Asantemanhyiamu), and various other state functionaries. This
              decentralized yet unified structure ensured stability and collective decision‑making.
            </p>

            {/* Cultural Context Box */}
            <div className="mt-5 rounded-lg border border-[#E5E7EB] bg-[#F7FAF9] p-4">
              <div className="flex items-center gap-2 text-[#2A685F]">
                <span>📦</span>
                <span className="font-medium">Cultural Context Box</span>
              </div>
              <p className="mt-2 text-[14px] text-[#374151]">
                This governance system influenced diaspora community organization in the Americas.
                Many African American churches and civic groups adopted similar council structures,
                reflecting a retained cultural memory of consensus‑based leadership.
              </p>
            </div>

            {/* Progress */}
            <div className="mt-6 text-[12px] text-[#6B7280]">Progress: 80% complete</div>
            <div className="mt-1 h-2 w-full rounded-full bg-[#E5E7EB]">
              <div className="h-2 w-4/5 rounded-full bg-[#F4B942]" />
            </div>
            <div className="mt-1 text-right text-[12px] text-[#6B7280]">3 min remaining</div>

            {/* Related content */}
            <div className="mt-6">
              <div className="text-[15px] font-medium">Related Content</div>
              <ul className="mt-3 space-y-2 text-[14px] text-[#374151]">
                <li>↗ Traditional Leadership in Modern Ghana</li>
                <li>↗ Sacred Symbols & Their Meanings</li>
                <li>↗ Community Decision‑Making Processes</li>
              </ul>
            </div>

            {/* Footer actions */}
            <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center">
              <button className="w-full rounded-full bg-[#2A685F] px-5 py-2 text-white md:w-56">
                Discuss with Community
              </button>
              <a
                href="/quiz/start"
                className="w-full rounded-full bg-[#F4B942] px-5 py-2 text-center text-[#1E332F] md:w-40"
              >
                Quiz Yourself
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
