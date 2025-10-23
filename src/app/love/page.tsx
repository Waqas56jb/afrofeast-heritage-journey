"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/Button";

export default function LoveHubPage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          {/* Header */}
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold">
                Love Hub - Building Connections <span className="ml-1">❤️</span>
              </h1>
              <div className="mt-1 flex items-center gap-4 text-[12px] text-[#577F7A]">
                <span>👥 234 active members</span>
                <span>•</span>
                <span>🟢 12 online now</span>
              </div>
            </div>
          </header>

          {/* Tabs */}
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            <a
              href="/love"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#F4B942] px-4 py-3 text-[#1E332F] shadow-sm ring-1 ring-[#E8D29B]"
            >
              <span>💬</span>
              <span>Discussions</span>
            </a>
            <a
              href="/love/members"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-[#244848] shadow-sm ring-1 ring-[#E5E7EB]"
            >
              <span>👥</span>
              <span>Find Members</span>
            </a>
            <a
              href="/love/events"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-[#244848] shadow-sm ring-1 ring-[#E5E7EB]"
            >
              <span>📅</span>
              <span>Community Events</span>
            </a>
            <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-[#244848] shadow-sm ring-1 ring-[#E5E7EB]">
              <span>💡</span>
              <span>Get Advice</span>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Left: trending discussions */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-[14px] font-medium text-[#446E69]">Trending Discussions</div>

              {[
                {
                  title: "Dating across cultures - Ghana/US",
                  meta: "47 replies • Started by @AmaraJ",
                  latest:
                    'Latest: "Family acceptance is key, we had to navigate that carefully…" – 2h ago',
                },
                {
                  title: "Building friendships in Accra",
                  meta: "23 replies • Started by @KwameGH",
                  latest:
                    'Latest: "Definitely try the cultural centers and local art galleries. Great vibe." – 4h ago',
                },
              ].map((d) => (
                <section
                  key={d.title}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]"
                >
                  <div className="text-[15px] font-medium">{d.title}</div>
                  <div className="mt-1 flex items-center gap-3 text-[12px] text-[#6B7280]">
                    <span>🧵 {d.meta}</span>
                  </div>
                  <div className="mt-3 rounded-md bg-[#F5F7F9] p-3 text-[12px] text-[#4B5563]">
                    {d.latest}
                  </div>
                  <div className="mt-3">
                    <a href="/love/discussions/dating" className="block">
                      <Button
                        className="w-full bg-white text-[#244848] ring-1 ring-[#E5E7EB] hover:bg-[#F7F9F9]"
                        rightIcon={<span>↗</span>}
                      >
                        Join Discussion
                      </Button>
                    </a>
                  </div>
                </section>
              ))}
            </div>

            {/* Right: featured members, events, guidelines */}
            <aside className="space-y-4">
              <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] ring-1 ring-black/10">
                <div className="text-[14px]">Featured Members</div>
                {[
                  { name: "@MamaEfua", role: "Cultural Consultant" },
                  { name: "@KofiAccra", role: "Local Guide" },
                ].map((m) => (
                  <div key={m.name} className="mt-3 rounded-lg bg-white/10 p-3">
                    <div className="text-[13px]">{m.name}</div>
                    <div className="text-[12px] text-white/80">{m.role}</div>
                    <a href="#" className="mt-1 inline-block text-[12px] text-[#EBC76D]">
                      Connect →
                    </a>
                  </div>
                ))}
              </section>

              <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="text-[14px] font-medium">Upcoming Events</div>
                <div className="mt-3 space-y-3 text-[13px] text-[#374151]">
                  {[
                    {
                      date: "DEC 15",
                      title: '"Speed Friending" Virtual Event',
                      sub: "Online Meetup",
                    },
                    {
                      date: "DEC 22",
                      title: '"Cultural Dating Tips" Workshop',
                      sub: "Expert Session",
                    },
                    {
                      date: "JAN 05",
                      title: '"New Year, New Connections" Mixer',
                      sub: "Accra Social Event",
                    },
                  ].map((e) => (
                    <div
                      key={e.title}
                      className="flex items-start gap-3 rounded-lg bg-[#F5F7F9] p-3"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-md bg-white text-[10px] text-[#244848] ring-1 ring-[#E5E7EB]">
                        {e.date}
                      </div>
                      <div>
                        <div>{e.title}</div>
                        <div className="text-[12px] text-[#6B7280]">{e.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="text-[14px] font-medium">Community Guidelines</div>
                <ul className="mt-3 space-y-2 text-[13px] text-[#374151]">
                  <li>• Respect cultural differences</li>
                  <li>• No inappropriate content</li>
                  <li>• Support, don’t judge</li>
                  <li>• Protect privacy</li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
