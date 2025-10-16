import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

export default function LoveEventsPage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-semibold">Community Events & Workshops</h1>
            <p className="mt-1 text-[12px] text-[#6B7280]">
              Connect, learn, and grow with the OurRoots community.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Left column: upcoming + past */}
            <div className="md:col-span-2 space-y-6">
              <section>
                <div className="flex items-center gap-2 text-[14px] font-medium text-[#446E69]">
                  📅 Upcoming Events
                </div>

                {[
                  {
                    date: "DEC 15",
                    title: '"Speed Friending" Virtual Event',
                    desc: "Meet fellow heritage travelers in 5‑minute connection rounds.",
                    ctas: ["Register Free", "Add to Calendar"],
                    foot: "7 spots left • 23 registered",
                  },
                  {
                    date: "DEC 22",
                    title: '"Cultural Dating Tips" Workshop',
                    desc: "Led by @MamaEfua & @KwameAccra: Navigate relationships across cultures.",
                    ctas: ["Join Workshop", "Premium Required"],
                    foot: "15 registered",
                  },
                  {
                    date: "JAN 05",
                    title: '"New Year, New Connections" Mixer',
                    desc: "Start the year with meaningful connections and cultural celebration.",
                    ctas: ["Early Bird $5", "Learn More"],
                    foot: "Early bird registration open",
                  },
                ].map((e) => (
                  <div
                    key={e.title}
                    className="mt-3 rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-md bg-white text-[11px] text-[#244848] ring-1 ring-white/30">
                        {e.date}
                      </div>
                      <div className="flex-1">
                        <div className="text-[14px]">{e.title}</div>
                        <div className="mt-1 text-[12px] text-white/80">{e.desc}</div>
                        <div className="mt-3 flex flex-wrap gap-3">
                          {e.ctas.map((c, i) => (
                            <Button
                              key={c}
                              variant={i === 1 ? "secondary" : "primary"}
                              className="px-3 py-1 text-[12px]"
                            >
                              {c}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-white/70">{e.foot}</div>
                    </div>
                  </div>
                ))}
              </section>

              <section>
                <div className="flex items-center gap-2 text-[14px] font-medium text-[#446E69]">
                  🎬 Past Event Recordings
                </div>
                <div className="mt-3 rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                  <div className="text-[14px]">“Building Trust Across Cultures”</div>
                  <div className="mt-1 text-[12px] text-white/80">Nov 28, 2025 • 47 attendees</div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Button className="px-3 py-1 text-[12px]">Watch Recording</Button>
                    <Button variant="secondary" className="px-3 py-1 text-[12px]">
                      Download Notes
                    </Button>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-[12px]">
                      1h 23m recording
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column: history, categories, propose event */}
            <aside className="space-y-4">
              <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Your Event History</div>
                <div className="mt-3 space-y-2 text-[13px]">
                  <div className="flex items-center justify-between">
                    <span>Events attended:</span>
                    <span>3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Average rating given:</span>
                    <span>4.7/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Connections made:</span>
                    <span>8</span>
                  </div>
                  <div className="mt-2 text-[12px] text-white/70">
                    Next recommended: “Cultural Dating Tips”
                  </div>
                </div>
              </section>

              <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Event Categories</div>
                <div className="mt-3 flex flex-wrap gap-2 text-[12px]">
                  {[
                    "Relationship & Dating",
                    "Friendship & Community",
                    "Family Dynamics",
                    "Cross‑Cultural",
                    "Support Groups",
                  ].map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="text-[14px] font-medium">Have an idea for an event?</div>
                <div className="mt-3 space-y-2">
                  <Button className="w-full">Suggest Event Topic</Button>
                  <Button variant="secondary" className="w-full">
                    Host an Event
                  </Button>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
