"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/Button";

export default function BookExperiencePage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-4xl px-6 py-8">
          <div className="text-[12px] text-[#6B7280]">← Back</div>
          <div className="mt-1 text-center text-[12px] text-[#6B7280]">Book Experience</div>
          <h1 className="mt-1 text-center text-2xl font-semibold">
            Castle Visit Preparation with Mama Efua Asante
          </h1>

          {/* Provider Details */}
          <section className="mt-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
            <div className="text-[14px] font-medium">Provider Details</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#E6EFEA]" />
              <div>
                <div className="text-[14px] font-semibold">Mama Efua Asante</div>
                <div className="text-[12px] text-[#6B7280]">
                  ⭐ 4.9/5.0 (127 reviews) · ✅ Verified Guide
                </div>
                <div className="text-[12px] text-[#6B7280]">
                  Specializes in heritage healing & trauma‑informed care. Response time: Usually
                  within 30 minutes
                </div>
              </div>
            </div>
          </section>

          {/* Experience Details */}
          <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
            <div className="text-[14px] font-medium">Experience Details</div>
            <div className="mt-3 grid grid-cols-1 gap-2 text-[13px] text-[#374151]">
              <div>
                <b>Service:</b> Castle Visit Preparation
              </div>
              <div>
                <b>Duration:</b> 2–3 hours (flexible based on your needs)
              </div>
              <div>
                <b>Format:</b> WhatsApp guidance + optional video call
              </div>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 text-[13px] text-[#374151] md:grid-cols-2">
              <div>• Emotional preparation & grounding</div>
              <div>• Trauma‑informed historical context</div>
              <div>• Ancestral blessing ceremony</div>
              <div>• Post‑visit integration support</div>
              <div>• Crisis support availability</div>
              <div>• Cultural consultant WhatsApp access</div>
            </div>
          </section>

          {/* Booking Information */}
          <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
            <div className="text-[14px] font-medium">Booking Information</div>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div>
                <div className="text-[12px] text-[#6B7280]">Preferred Date</div>
                <input
                  className="mt-1 w-full rounded-md border border-[#E5E7EB] p-2"
                  defaultValue="November 10, 2025"
                />
              </div>
              <div>
                <div className="text-[12px] text-[#6B7280]">Preferred Time</div>
                <input
                  className="mt-1 w-full rounded-md border border-[#E5E7EB] p-2"
                  defaultValue="2:00 PM GMT"
                />
              </div>
              <div>
                <div className="text-[12px] text-[#6B7280]">Timezone</div>
                <input
                  className="mt-1 w-full rounded-md border border-[#E5E7EB] p-2"
                  defaultValue="Central Time (Chicago)"
                />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-[12px] text-[#6B7280]">
                Special Requests or Concerns (Optional)
              </div>
              <textarea
                className="mt-1 w-full rounded-md border border-[#E5E7EB] p-2"
                rows={4}
                defaultValue={
                  "I’m feeling particularly anxious about visiting the dungeons at the castle. Could we spend some extra time on grounding techniques beforehand? I also have a question about my specific Akan ancestry if that’s something you can help with."
                }
              />
              <div className="mt-1 text-right text-[11px] text-[#9CA3AF]">234/500</div>
            </div>
          </section>

          {/* Pricing & Payment */}
          <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
            <div className="text-[14px] font-medium">Pricing & Payment</div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-[13px] md:grid-cols-4">
              <div className="col-span-2 md:col-span-3">
                <div className="flex items-center justify-between">
                  <span>Base Price:</span>
                  <span>$89.00 USD</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span>Platform Fee (10%):</span>
                  <span>$8.90 USD</span>
                </div>
                <div className="mt-2 flex items-center justify-between font-semibold">
                  <span>Total:</span>
                  <span>$97.90 USD</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-[12px] text-[#6B7280]">Payment Method:</div>
                <div className="mt-2 space-y-2">
                  {["Credit/Debit Card", "PayPal", "Bank Transfer"].map((m, i) => (
                    <label
                      key={m}
                      className={`flex items-center justify-between rounded-md border p-2 ${i === 0 ? "border-[#2D5A5A] ring-1 ring-[#2D5A5A]" : "border-[#E5E7EB]"}`}
                    >
                      <span>
                        <input type="radio" name="pay" defaultChecked={i === 0} className="mr-2" />
                        {m}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer actions */}
          <div className="sticky bottom-4 mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
            <label className="flex items-center gap-2 text-[12px]">
              <input type="checkbox" /> I agree to the Terms of Service and understand the cultural
              sensitivity guidelines.
            </label>
            <div className="flex w-full max-w-2xl items-center justify-center gap-3 md:justify-between">
              <Button className="w-full md:w-auto">Send Booking Request</Button>
              <Button variant="secondary" className="w-full md:w-auto">
                Message Provider First
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
