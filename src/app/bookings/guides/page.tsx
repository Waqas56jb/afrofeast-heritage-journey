import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

export default function CulturalGuidesPage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          <h1 className="text-2xl font-semibold">Find Cultural Guides</h1>
          <p className="mt-1 text-[12px] text-[#6B7280]">
            Discover authentic cultural experiences in Ghana
          </p>

          {/* Search & Filters */}
          <section className="mt-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]">
            <div className="flex items-center justify-between text-[14px] font-medium">
              Search & Filters <div className="text-[12px] font-normal text-[#6B7280]"></div>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <input
                className="flex-1 rounded-md border border-[#E5E7EB] p-2"
                placeholder="e.g., 'Castle visit prep', 'Mama Efua'"
              />
              <Button className="px-4">Search</Button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-6">
              {[
                { label: "Location", def: "Accra" },
                { label: "Experience", def: "Heritage Healing" },
                { label: "Price Range", def: "$50 – $200 USD" },
                { label: "Rating", def: "4.5+ ★" },
                { label: "Language", def: "English" },
                { label: "Availability", def: "This Week" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <select className="w-full rounded-md border border-[#E5E7EB] p-2 text-[13px]">
                    <option>{f.def}</option>
                  </select>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end gap-3 text-[12px]">
              <button className="text-[#6B7280]">Clear All</button>
              <button className="text-[#6B7280]">Save Search</button>
              <Button className="px-4">Apply Filters</Button>
            </div>
          </section>

          {/* Recommended */}
          <div className="mt-8 text-[14px] font-medium text-[#446E69]">
            Recommended for Heritage Seekers
          </div>
          {[
            {
              name: "Mama Efua Asante",
              rating: "4.9/5.0 (127 reviews)",
              location: "Accra",
              languages: "English, Twi, Fante",
              services: [
                { label: "Castle Visit Prep", price: "$89" },
                { label: "Ancestral Blessing", price: "$67" },
                { label: "Heritage Healing Sesh", price: "$45" },
              ],
              chips: ["Heritage Healing", "Castle Tours", "Ancestral Connection"],
            },
            {
              name: "Kofi Adom",
              rating: "4.2/5.0 (88 reviews)",
              location: "Accra",
              languages: "English",
              services: [],
              chips: [],
            },
          ].map((g, idx) => (
            <section
              key={g.name}
              className="mt-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#E5E7EB]"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="md:col-span-1">
                  <div className="h-40 w-full rounded-lg bg-[#E6EFEA]" />
                </div>
                <div className="md:col-span-2">
                  <div className="text-[16px] font-semibold">{g.name}</div>
                  <div className="mt-1 text-[12px] text-[#6B7280]">⭐ {g.rating}</div>
                  <div className="mt-1 text-[12px] text-[#6B7280]">
                    📍 {g.location} · 🌐 {g.languages}
                  </div>
                  <div className="mt-2 text-[12px] text-[#374151]">
                    Specialties: Heritage healing, castle visits, ancestral connection,
                    trauma‑informed guidance.
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-[#F0F5F4] px-3 py-1 text-[11px] text-[#2A5F5B] ring-1 ring-[#DDE6E4]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="text-[12px] text-[#6B7280]">Popular Services</div>
                  <div className="mt-2 space-y-2 text-[12px] text-[#374151]">
                    {g.services.map((s) => (
                      <div key={s.label} className="flex items-center justify-between">
                        <span>{s.label}</span>
                        <span className="text-[#6B7280]">{s.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    <a href="/bookings/experience" className="w-full">
                      <Button className="w-full">Book Now</Button>
                    </a>
                    <Button variant="secondary" className="w-full">
                      View Profile
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-center gap-6 text-[13px] text-[#6B7280]">
            <button>← Previous</button>
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2D5A5A] text-white">
                1
              </span>
              <span>2</span>
              <span>3</span>
              <span>…</span>
              <span>8</span>
            </div>
            <button>Next →</button>
          </div>
        </div>
      </div>
    </main>
  );
}
