"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/Button";

export default function LoveMembersPage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-semibold">Connect with Community Members</h1>
            <p className="mt-1 text-[12px] text-[#6B7280]">
              Find and build meaningful connections with fellow travelers.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            <a
              href="/love"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-[#244848] shadow-sm ring-1 ring-[#E5E7EB]"
            >
              <span>💬</span>
              <span>Discussions</span>
            </a>
            <a
              href="/love/members"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#F4B942] px-4 py-3 text-[#1E332F] shadow-sm ring-1 ring-[#E8D29B]"
            >
              <span>👥</span>
              <span>Find Members</span>
            </a>
            <div className="hidden items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-[#244848] shadow-sm ring-1 ring-[#E5E7EB] md:flex">
              <span>📅</span>
              <span>Community Events</span>
            </div>
            <div className="hidden items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-[#244848] shadow-sm ring-1 ring-[#E5E7EB] md:flex">
              <span>💡</span>
              <span>Get Advice</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Left: search + filters + suggestions */}
            <div className="md:col-span-2 space-y-4">
              <div className="rounded-2xl bg-[#2D5A5A] p-4 text-white shadow-sm">
                <div className="rounded-lg bg-[#244F4C] p-3 text-[13px] text-white/90">
                  Find Members: e.g., "relationship advice", "@username", "Accra"
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-[13px]">
                  <select className="rounded-lg border border-white/20 bg-[#244F4C] p-2 text-white/90">
                    <option>Location: All</option>
                    <option>Accra</option>
                    <option>Kumasi</option>
                  </select>
                  <select className="rounded-lg border border:white/20 bg-[#244F4C] p-2 text-white/90">
                    <option>Persona: All</option>
                    <option>Heritage Seeker</option>
                    <option>Cultural Explorer</option>
                  </select>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-[12px] text-white/90">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" defaultChecked /> Cultural consultants
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" defaultChecked /> Local guides
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" defaultChecked /> Similar journey stage
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" /> Online now
                  </label>
                </div>
              </div>

              <div className="text-[13px] font-medium text-[#446E69]">Suggested Connections</div>

              {[
                {
                  name: "@MarcusATL",
                  tag: "Heritage Seeker · Atlanta",
                  desc: "“Also navigating cross‑cultural dating after my Ghana trip. Happy to share experiences and support each other.”",
                  badges: ["Connect", "View Profile", "Send Message"],
                  match: "95% Match",
                },
                {
                  name: "@AkosomboQueen",
                  tag: "Local Guide · Akosombo",
                  desc: "“Ghanaian woman who’s helped many diaspora sisters understand our dating culture. Always happy to share wisdom.”",
                  badges: ["Book Chat", "View Profile", "Connect"],
                  match: "4.9/5",
                },
                {
                  name: "@JennyToronto",
                  tag: "Cultural Explorer",
                  desc: "“Canadian‑Ghanaian sharing insights on maintaining relationships across continents.”",
                  badges: ["Connect", "View Profile", "Send Message"],
                  match: "88% Match",
                },
              ].map((m) => (
                <section key={m.name} className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[14px] font-medium">{m.name}</div>
                      <div className="text-[12px] text-white/80">{m.tag}</div>
                    </div>
                    <div className="text-[11px] text-white/70">{m.match}</div>
                  </div>
                  <p className="mt-3 rounded-lg bg-white/10 p-3 text-[13px]">{m.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {m.badges.map((b) => (
                      <Button
                        key={b}
                        variant="secondary"
                        className="bg-white text-[#244848] px-3 py-1 text-[12px]"
                      >
                        {b}
                      </Button>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Right: Active conversations + privacy */}
            <aside className="space-y-4">
              <section className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Your Active Conversations</div>
                <div className="mt-3 space-y-2 text-[13px]">
                  {["@KwameAccra", "@MamaEfua"].map((u, i) => (
                    <div
                      key={u}
                      className="flex items-center justify-between rounded-lg bg-white/10 p-3"
                    >
                      <div>{u}</div>
                      <div className="text-[12px] text-white/70">
                        {i === 0 ? "2h ago" : "1d ago"}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl bg:white p-5 shadow-sm ring-1 ring-[#E5E7EB]">
                <div className="text-[14px] font-medium text-[#244848]">Privacy Settings</div>
                <div className="mt-3 space-y-2 text-[13px] text-[#374151]">
                  {[
                    "Show online status",
                    "Allow direct messages",
                    "Share location",
                    "Show in member directory",
                  ].map((p, i) => (
                    <label
                      key={p}
                      className="flex items-center justify-between rounded-lg bg-[#F5F7F9] p-2"
                    >
                      <span>{p}</span>
                      <input type="checkbox" defaultChecked={i < 2} />
                    </label>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
