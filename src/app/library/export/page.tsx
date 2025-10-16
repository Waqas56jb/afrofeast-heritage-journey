import Sidebar from "@/components/Sidebar";

export default function ExportLibraryPage() {
  return (
    <main className="min-h-screen bg-[#F2F5F4] text-[#244848]">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          {/* Header */}
          <div className="grid place-items-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E9F0ED] text-[#244848]">
              📄
            </div>
            <h1 className="mt-3 text-3xl font-semibold">Export Your Heritage Journey</h1>
            <p className="mt-1 text-[#6B7280]">
              Save, share, and prepare for your trip with personalized content packages.
            </p>
          </div>

          {/* Export Options */}
          <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <div className="text-[15px] font-medium">Personal Study Guide</div>
              <div className="mt-3 space-y-2 text-[14px] text-[#374151]">
                {[
                  "Your annotations & highlights",
                  "Progress notes & reflections",
                  "Community discussions",
                  "Reading list & recommendations",
                ].map((l) => (
                  <label key={l} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked /> {l}
                  </label>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-[13px]">
                <button className="rounded-lg border border-[#D6DEE2] bg-[#F5F7F9] px-3 py-2">
                  PDF
                </button>
                <button className="rounded-lg border border-[#D6DEE2] bg-[#F5F7F9] px-3 py-2">
                  Word
                </button>
                <button className="rounded-lg border border-[#D6DEE2] bg-[#F5F7F9] px-3 py-2">
                  Markdown
                </button>
              </div>
              <div className="mt-5">
                <button className="w-full rounded-full bg-[#2A685F] px-5 py-2 text-white">
                  Generate Study Guide →
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <div className="text-[15px] font-medium">Trip Preparation Package</div>
              <div className="mt-3 space-y-2 text-[14px] text-[#374151]">
                {[
                  "Essential reading for Ghana trip",
                  "Cultural etiquette guidelines",
                  "Emergency support resources",
                  "Service provider recommendations",
                ].map((l) => (
                  <label key={l} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked /> {l}
                  </label>
                ))}
              </div>
              <div className="mt-9">
                <button className="w-full rounded-full bg-[#2A685F] px-5 py-2 text-white">
                  Create Trip Package →
                </button>
              </div>
            </div>
          </section>

          {/* Sharing Options */}
          <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <div className="text-[15px] font-medium">Share with Community</div>
              <p className="mt-1 text-[13px] text-[#6B7280]">
                Post "My Heritage Journey Insights" with selected highlights and reflections.
              </p>
              <div className="mt-4">
                <button className="w-full rounded-full bg-[#F4B942] px-5 py-2 text-[#1E332F]">
                  Share to Love Hub ♥
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <div className="text-[15px] font-medium">Share with Family/Friends</div>
              <p className="mt-1 text-[13px] text-[#6B7280]">
                “What I’m Learning About Our Heritage” – a curated link for non-members.
              </p>
              <div className="mt-4">
                <button className="w-full rounded-full border border-[#244848] px-5 py-2 text-[#244848]">
                  Generate Share Link →
                </button>
              </div>
            </div>
          </section>

          {/* Limitations & Delivery */}
          <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#F8E6B8] bg-[#FFF8E8] p-5 text-[#7C6223]">
              <div className="text-[15px] font-medium">Export Limitations</div>
              <ul className="mt-3 space-y-1 text-[13px]">
                <li>• Watermarked content (Premium feature)</li>
                <li>• Personal use only (no redistribution)</li>
                <li>• Traditional Knowledge Board restrictions</li>
                <li>• Some content requires attribution</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <div className="text-[15px] font-medium">Delivery Method</div>
              <div className="mt-3 space-y-2 text-[14px] text-[#374151]">
                <label className="flex items-center justify-between gap-3 rounded-lg border border-[#D6DEE2] bg-[#F5F7F9] px-3 py-2">
                  <span className="flex items-center gap-2">
                    <input type="radio" name="delivery" defaultChecked /> Email to:
                    amara.johnson@email.com
                  </span>
                </label>
                <label className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] px-3 py-2">
                  <input type="radio" name="delivery" /> Download directly
                </label>
                <label className="flex items-center gap-2 rounded-lg border border-[#E5E7EB] px-3 py-2">
                  <input type="radio" name="delivery" /> Save to cloud storage
                </label>
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <button className="w-full rounded-full bg-[#F4B942] px-6 py-3 text-[#1E332F] md:w-64">
              Export Now
            </button>
            <button className="w-full rounded-full border border-[#244848] px-6 py-3 text-[#244848] md:w-64">
              Schedule Weekly Export
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
