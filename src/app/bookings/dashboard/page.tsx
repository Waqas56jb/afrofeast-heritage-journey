import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

export default function ProviderDashboardPage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Welcome, Amara! 👋</h1>
              <div className="mt-1 text-[12px] text-[#6B7280]">
                Cultural Guide · Accra, Ghana · ⭐9.5
              </div>
            </div>
            <a href="/bookings/guides">
              <Button>Find Cultural Guides</Button>
            </a>
          </header>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Stats cards */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-[14px] font-medium text-[#446E69]">This Month’s Overview</div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { title: "Earnings", value: "$1,247", sub: "↑ 23% from last month" },
                  { title: "Bookings", value: "23", sub: "18 completed, 5 upcoming" },
                  { title: "Rating", value: "4.9 / 5", sub: "from 47 reviews" },
                  { title: "New Clients", value: "12", sub: "heritage travelers" },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]"
                  >
                    <div className="text-[12px] text-[#6B7280]">{c.title}</div>
                    <div className="mt-2 text-xl">{c.value}</div>
                    <div className="text-[11px] text-[#9CA3AF]">{c.sub}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="text-[14px] font-medium text-[#446E69]">Recent Activity</div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB] flex items-center justify-between">
                  <div className="text-[13px]">
                    <b>New booking:</b> Amara Johnson{" "}
                    <div className="text-[#6B7280] text-[12px]">
                      “Castle visit emotional support” · Dec 20, 2025 · $75
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="px-3 py-1 text-[12px]">Accept</Button>
                    <Button variant="secondary" className="px-3 py-1 text-[12px]">
                      Decline
                    </Button>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB] flex items-center justify-between">
                  <div className="text-[13px]">
                    <b>New review from Marcus Thompson</b>
                    <div className="text-[#6B7280] text-[12px]">
                      “Abena’s guidance was life‑changing…” · ★★★★★ · 2 hours ago
                    </div>
                  </div>
                  <Button variant="secondary" className="px-3 py-1 text-[12px]">
                    View Full
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
                  <div className="text-[14px]">Quick Actions</div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-[13px]">
                    {["Manage Calendar", "Client Messages", "View Earnings", "Read Reviews"].map(
                      (a) => (
                        <button
                          key={a}
                          className="rounded-lg bg-[#F6F8F8] p-3 text-left ring-1 ring-[#E5E7EB]"
                        >
                          {a}
                        </button>
                      ),
                    )}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
                  <div className="text-[14px]">Platform Updates</div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] text-[#374151]">
                    <li>New Traditional Knowledge Board guidelines</li>
                    <li>Holiday booking surge expected Dec 15–31</li>
                    <li>Cultural sensitivity training available</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right rail */}
            <aside className="space-y-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="text-[14px]">Today’s Schedule</div>
                <div className="mt-3 space-y-3 text-[13px]">
                  <div className="rounded-lg bg-[#F6F8F8] p-3 ring-1 ring-[#E5E7EB]">
                    <div className="text-[#374151]">10:00 AM · WhatsApp consultation</div>
                    <div className="text-[#6B7280]">Client: Sarah Williams (Heritage Seeker)</div>
                    <div className="mt-2 flex gap-2">
                      <Button className="px-3 py-1 text-[12px]">Start Session</Button>
                      <Button variant="secondary" className="px-3 py-1 text-[12px]">
                        View Notes
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#F6F8F8] p-3 ring-1 ring-[#E5E7EB]">
                    <div className="text-[#374151]">2:00 PM · Cape Coast Castle tour</div>
                    <div className="text-[#6B7280]">
                      Client: Johnson family (4 people) · First heritage visit
                    </div>
                    <div className="mt-2 flex gap-2">
                      <Button variant="secondary" className="px-3 py-1 text-[12px]">
                        View Details
                      </Button>
                      <Button variant="secondary" className="px-3 py-1 text-[12px]">
                        Contact Client
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Cultural Guide Connection</div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20" />
                  <div>
                    <div className="text-[13px]">Mama Efua Asante</div>
                    <div className="text-[12px] text-white/80">Your Cultural Consultant</div>
                  </div>
                </div>
                <p className="mt-3 text-[13px]">“Akwaaba, Amara! Ready for your castle visit?”</p>
                <div className="mt-3">
                  <Button className="w-full">Reply on WhatsApp</Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
