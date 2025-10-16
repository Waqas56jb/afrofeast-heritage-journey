import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

export default function BookingManagementPage() {
  return (
    <main className="min-h-screen bg-[#F2F4F4] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-5xl px-6 py-10">
          <h1 className="text-2xl font-semibold">Booking Management</h1>

          <section className="mt-6 rounded-2xl bg-white p-6 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.25)] ring-1 ring-[#E5E7EB]">
            <div className="grid place-items-center">
              <div className="h-12 w-12 rounded bg-[#F5E2A0]" />
              <h2 className="mt-3 text-xl font-semibold text-center">
                Join OurRoots.Africa Provider Network
              </h2>
              <p className="mt-1 text-center text-[12px] text-[#6B7280]">
                Become a trusted guide for heritage travelers on their journey home.
              </p>
            </div>

            {/* Provider type */}
            <div className="mt-6 text-[13px]">
              <div className="font-medium">Provider Type</div>
              <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
                {[
                  "Cultural Guide",
                  "Tour Operator",
                  "Accommodation",
                  "Transportation",
                  "Traditional Elder",
                  "Legal/immigration",
                ].map((t, i) => (
                  <button
                    key={t}
                    className={`rounded-md px-4 py-2 ring-1 ${i === 0 ? "bg-[#2D5A5A] text-white ring-[#2D5A5A]" : "bg-white text-[#244848] ring-[#E5E7EB]"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Personal information */}
            <div className="mt-6 text-[13px]">
              <div className="font-medium">Personal Information</div>
              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  className="rounded-md border border-[#E5E7EB] p-2"
                  placeholder="Abena Osei"
                />
                <input
                  className="rounded-md border border-[#E5E7EB] p-2"
                  placeholder="abena.osei@email.com"
                />
                <input
                  className="rounded-md border border-[#E5E7EB] p-2"
                  placeholder="+233 24 123 4567"
                />
                <input
                  className="rounded-md border border-[#E5E7EB] p-2"
                  placeholder="Accra, Ghana"
                />
              </div>
            </div>

            {/* Cultural Expertise */}
            <div className="mt-6 text-[13px]">
              <div className="font-medium">Cultural Expertise</div>
              <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
                {[
                  "Asante traditions",
                  "Traditional healing",
                  "Ewe heritage",
                  "Colonial history",
                  "Contemporary culture",
                  "Diaspora support",
                ].map((l, i) => (
                  <label
                    key={l}
                    className="flex items-center gap-2 rounded-md bg-[#F8FAFB] p-2 ring-1 ring-[#E5E7EB]"
                  >
                    <input type="checkbox" defaultChecked={i % 2 === 0} /> {l}
                  </label>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="mt-6 text-[13px]">
              <div className="font-medium">Qualifications</div>
              <input
                className="mt-3 w-full rounded-md border border-[#E5E7EB] p-2"
                placeholder="University of Ghana - Cultural Studies & Tourism Management"
              />
              <textarea
                className="mt-3 w-full rounded-md border border-[#E5E7EB] p-2"
                rows={3}
                placeholder="8 years guiding heritage travelers, specializing in emotional support during castle visits"
              />
            </div>

            {/* Required Documents */}
            <div className="mt-6 text-[13px]">
              <div className="font-medium">Required Documents</div>
              <div className="mt-3 space-y-2">
                {[
                  "Government ID",
                  "Tourism license/certification",
                  "Cultural expertise verification",
                  "Traditional Knowledge Board approval",
                  "Background check consent",
                ].map((d, i) => (
                  <div
                    key={d}
                    className="flex items-center justify-between rounded-md bg-[#F8FAFB] p-2 ring-1 ring-[#E5E7EB]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#34D399]" /> {d}
                    </div>
                    {i === 3 ? (
                      <Button variant="secondary" className="px-3 py-1 text-[12px]">
                        Upload
                      </Button>
                    ) : (
                      <span className="text-[12px] text-[#16A34A]">Uploaded</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-6 text-[13px]">
              <div className="font-medium">Service Pricing (USD)</div>
              <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-5">
                {["$25", "$75", "$150", "$150", "$150"].map((p, i) => (
                  <input
                    key={i}
                    className="rounded-md border border-[#E5E7EB] p-2 text-center"
                    defaultValue={p}
                  />
                ))}
              </div>
            </div>

            {/* Agreements */}
            <div className="mt-6 space-y-2 text-[13px]">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked /> I agree to Traditional Knowledge Board
                oversight and cultural sensitivity guidelines.
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked /> I consent to the 15% platform commission on
                all bookings.
              </label>
            </div>

            <div className="mt-6 grid place-items-center">
              <a href="/bookings/dashboard" className="w-full max-w-sm">
                <Button className="w-full">Submit Application →</Button>
              </a>
              <div className="mt-4 text-center text-[11px] text-[#6B7280]">
                Review process: 3–5 business days
                <br />
                Questions? Contact providers@ourroots.africa
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
