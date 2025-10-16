import Sidebar from "@/components/Sidebar";

export default function OfflineContentManagerPage() {
  return (
    <main className="min-h-screen bg-[#EDEFF1] text-[#244848]">
      <div className="flex">
        <Sidebar />
        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          <div className="rounded-2xl bg-white p-6 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.35)]">
            <h1 className="text-xl font-semibold">Offline Content Manager</h1>

            {/* Top status row */}
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm">
                <div className="font-medium">Status</div>
                <div className="mt-1 text-[#6B7280]">Connected to WiFi</div>
              </div>
              <div className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm">
                <div className="font-medium">Storage Used</div>
                <div className="mt-2 h-2 w-full rounded-full bg-[#E5E7EB]">
                  <div className="h-2 w-[25%] rounded-full bg-[#F4B942]" />
                </div>
                <div className="mt-1 text-right text-xs text-[#6B7280]">127 MB / 500 MB</div>
              </div>
            </div>

            {/* Downloaded content */}
            <div className="mt-6 text-sm font-semibold">Downloaded Content</div>
            <div className="mt-3 space-y-3">
              <div className="rounded-lg border border-[#D1E7D8] bg-[#F4FFF7] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[14px] font-medium">
                    Stage 1: Complete Package <span className="text-xs text-[#6B7280]"></span>
                  </div>
                  <a className="text-sm text-[#244848]" href="#">
                    Manage →
                  </a>
                </div>
                <div className="mt-1 text-xs text-[#6B7280]">
                  8 articles • audio narrations • community discussion highlights • emergency
                  support protocols
                </div>
              </div>
              <div className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[14px] font-medium">Stage 2: Partial Download</div>
                  <button className="rounded-full bg-[#F4B942] px-3 py-1 text-xs text-[#1E332F]">
                    Complete Download ↓
                  </button>
                </div>
                <div className="mt-1 text-xs text-[#6B7280]">
                  4/8 articles downloaded • Audio files pending
                </div>
              </div>
            </div>

            {/* Recommended for offline */}
            <div className="mt-6 text-sm font-semibold">Recommended for Offline</div>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4">
                <div className="text-[14px] font-medium">Castle Visit Preparation Guide</div>
                <div className="mt-1 text-xs text-[#6B7280]">
                  Essential for your upcoming trip to the historic coastal forts.
                </div>
                <div className="mt-2 text-xs text-[#6B7280]">12 MB (text + audio + images)</div>
                <a href="#" className="mt-2 inline-block text-sm text-[#244848]">
                  Download ↓
                </a>
              </div>
              <div className="rounded-lg border border-[#F4D6D6] bg-[#FFF7F7] p-4">
                <div className="text-[14px] font-medium">Crisis Support Resources</div>
                <div className="mt-1 text-xs text-[#6B7280]">
                  Emergency emotional support content and breathing exercises.
                </div>
                <div className="mt-2 text-xs text-[#6B7280]">8 MB (text + exercises)</div>
                <a href="#" className="mt-2 inline-block text-sm text-[#244848]">
                  Download ↓
                </a>
              </div>
            </div>

            {/* Settings & sync */}
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4">
                <div className="text-sm font-medium">Download Settings</div>
                <div className="mt-3 space-y-2 text-[14px]">
                  {[
                    "Auto-download on WiFi",
                    "Include audio narrations",
                    "Download community discussions",
                    "Emergency content priority",
                  ].map((l, i) => (
                    <label key={l} className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked={i !== 2 ? true : false} /> {l}
                    </label>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4">
                <div className="text-sm font-medium">Sync Status</div>
                <div className="mt-3 space-y-1 text-[13px] text-[#6B7280]">
                  <div>Last sync: 2 hours ago</div>
                  <div>Pending uploads: 3 annotations</div>
                  <div>Pending downloads: 2 articles</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <a href="#" className="text-sm text-[#6B7280]">
                Manage Storage
              </a>
              <button className="rounded-full bg-[#244848] px-5 py-2 text-sm text-white">
                Sync Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
