import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function UserDashboardPage() {
  return (
    <main className="min-h-screen bg-[#244848] text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1">
          {/* Top bar */}
          <header className="flex items-center justify-end gap-3 px-6 py-4">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-3 py-1.5">
              <Image src="/3.png" alt="avatar" width={28} height={28} className="rounded-full" />
              <span className="text-sm text-white/90">Amara</span>
            </div>
          </header>

          <div className="px-6 pb-20">
            {/* Welcome */}
            <section className="pt-6">
              <h1 className="text-3xl font-semibold text-white/95">Welcome , Amara! 👋</h1>
              <div className="mt-2 flex items-center gap-4 text-sm text-[#E9B448]">
                <span>Heritage Seeker</span>
                <span className="text-white/40">•</span>
                <span className="text-[#9CA3AF]">
                  Afrofeast Score: <span className="text-[#E9B448]">78</span>
                </span>
              </div>
            </section>

            {/* Grid */}
            <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Journey Progress */}
              <div className="md:col-span-2 rounded-xl bg-[#2D5A5A] p-5 ring-1 ring-black/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="text-white/90 font-medium">📍 Your Journey Progress</div>
                <div className="mt-3 text-sm text-white/80">Stage 1: Emotional Preparation</div>
                <div className="mt-1 text-sm text-white/60">
                  Stage 2: Cultural Intelligence <span className="align-middle">🌺</span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                  <div className="h-2 w-1/5 rounded-full bg-[#F4B942]" />
                </div>
                <div className="mt-1 text-right text-xs text-white/70">20% complete</div>
              </div>

              {/* Continue Reading */}
              <div className="rounded-xl bg-[#2D5A5A] p-5 ring-1 ring-black/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="text-white/90 font-medium">📚 Continue Reading</div>
                <div className="mt-3 rounded-lg bg-white/5 p-4">
                  <div className="text-[13px] text-white/90">“Understanding Asante Governance”</div>
                  <div className="mt-1 text-xs text-white/60">15 min read • Stage 2 content</div>
                  <div className="mt-3 inline-flex items-center gap-2 text-[#F4B942]">
                    <span>Unlock with Premium</span> <span>→</span>
                  </div>
                </div>
              </div>

              {/* Cultural Consultant */}
              <div className="md:col-span-2 rounded-xl bg-[#2D5A5A] p-5 ring-1 ring-black/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="text-white/90 font-medium">💬 Your Cultural Consultant</div>
                <div className="mt-4 flex items-center justify-between rounded-lg bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/1.png"
                      alt="consultant"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="text-sm text-white/90">Mama Efua - Accra, Ghana</div>
                      <div className="text-xs text-white/60">
                        “Ready for your castle visit prep?”
                      </div>
                    </div>
                  </div>
                  <button className="rounded-full bg-[#22C55E] px-4 py-2 text-sm text-white">
                    Continue
                  </button>
                </div>
              </div>

              {/* Community Hub */}
              <div className="rounded-xl bg-[#2D5A5A] p-5 ring-1 ring-black/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="text-white/90 font-medium">🧑‍🤝‍🧑 Community Hub</div>
                <div className="mt-3 rounded-lg bg-white/5 p-4">
                  <div className="text-sm text-white/90">Love Hub</div>
                  <div className="mt-1 text-xs text-white/60">
                    “Dating across cultures discussion”
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-[#F4B942]">
                    <span>Join Conversation</span> <span>→</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Upgrade + Feedback */}
            <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="md:col-span-2 rounded-xl bg-[#F4B942] p-6 text-[#1E332F] shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)]">
                <div className="text-lg font-semibold">Unlock Your Full Heritage Journey</div>
                <div className="mt-1 text-sm opacity-80">
                  Access all 6 stages, the Love Hub, and our service directory.
                </div>
                <a
                  href="/premium/access"
                  className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#1E332F] px-5 py-2 text-white"
                >
                  <span>Upgrade to Premium - $29/month</span> <span>→</span>
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="/feedback"
                  className="inline-flex h-[60px] w-[258px] items-center justify-center gap-3 rounded-full border border-[#E5E7EB] bg-[#F4B942] px-6 text-[#1E332F] font-medium shadow-[0_15px_40px_-20px_rgba(0,0,0,0.7)]"
                >
                  Feedback Collection <span>→</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-[#17262A] py-8 text-center text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          © 2025 OurRoots.Africa. All rights reserved.
          <div className="mt-1 text-white/50">Your Guided Journey to Ghanaian Heritage.</div>
        </div>
      </footer>
    </main>
  );
}
