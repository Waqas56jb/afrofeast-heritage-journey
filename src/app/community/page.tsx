import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#EEF2F1] text-[#244848]">
      <div className="flex">
        <Sidebar />

        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-[#446E69]">
              <span>🌿</span>
              <h1 className="text-2xl font-semibold">Personalized for You</h1>
            </div>
            <div className="mt-1 text-[12px] text-[#6B7280]">
              Based on: Heritage Seeker · Afrofeast 78 · Reading behavior · Community activity
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {/* Section: Trending in Your Journey */}
            <section>
              <div className="text-[14px] font-medium text-[#446E69]">
                🔥 Trending in Your Journey
              </div>
              <div className="mt-3 rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Emotional Healing at Cape Coast</div>
                <div className="mt-1 text-[12px] text-white/80">
                  98% match · 15 min read · Audio available
                </div>
                <div className="mt-2 text-[12px] text-[#CFE1DD]">
                  “Life‑changing” · 47 community votes
                </div>
                <a href="/reading" className="mt-4 inline-block">
                  <Button rightIcon={<span>→</span>}>Start Reading</Button>
                </a>
              </div>
            </section>

            {/* Section: Because you highlighted */}
            <section>
              <div className="text-[14px] font-medium text-[#446E69]">
                ✍ Because you highlighted "Golden Stool"
              </div>
              <div className="mt-3 rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Sacred Objects & Spiritual Power</div>
                <div className="mt-1 text-[12px] text-white/80">
                  92% match · 18 min read · Video included
                </div>
                <div className="mt-2 text-[12px] text-[#CFE1DD]">
                  Includes rare footage from the Manhyia Palace Museum archives.
                </div>
                <a href="#" className="mt-4 inline-block">
                  <Button variant="secondary" rightIcon={<span>→</span>}>
                    Watch & Read
                  </Button>
                </a>
              </div>
            </section>

            {/* Section: Popular with Heritage Seekers */}
            <section>
              <div className="text-[14px] font-medium text-[#446E69]">
                ⭐ Popular with Heritage Seekers
              </div>
              <div className="mt-3 rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Preparing for Ancestral Encounters</div>
                <div className="mt-1 text-[12px] text-white/80">89% match · 22 min read</div>
                <div className="mt-2 text-[12px] text-[#CFE1DD]">
                  “Helped me process my emotions before my trip.”
                </div>
                <Button variant="secondary" className="mt-4">
                  Add to Reading List +
                </Button>
              </div>
            </section>

            {/* Section: External Resources */}
            <section>
              <div className="text-[14px] font-medium text-[#446E69]">🌐 External Resources</div>
              <div className="mt-3 space-y-3">
                <div className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                  <div className="text-[14px]">“Homegoing” by Yaa Gyasi</div>
                  <div className="mt-1 text-[12px] text-white/80">
                    A powerful novel exploring similar themes of heritage and separation.
                  </div>
                  <a href="#" className="mt-3 inline-block text-[12px] text-[#EBC76D]">
                    View on Amazon ↗
                  </a>
                </div>
                <div className="rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                  <div className="text-[14px]">Ghana’s Heritage Tourism Boom</div>
                  <div className="mt-1 text-[12px] text-white/80">
                    A recent article from the Afrofeast blog on the rise of heritage travel.
                  </div>
                  <a href="#" className="mt-3 inline-block text-[12px] text-[#EBC76D]">
                    Read External ↗
                  </a>
                </div>
              </div>
            </section>

            {/* Section: Academic Deep Dive */}
            <section>
              <div className="text-[14px] font-medium text-[#446E69]">🎓 Academic Deep Dive</div>
              <div className="mt-3 rounded-2xl bg-[#2D5A5A] p-5 text-white shadow-sm">
                <div className="text-[14px]">Trauma & Heritage Tourism: A Case Study</div>
                <div className="mt-1 text-[12px] text-white/80">
                  A research paper from the University of Ghana’s history department.
                </div>
                <a href="#" className="mt-3 inline-block text-[12px] text-[#EBC76D]">
                  Access PDF ↗
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

// duplicate removed
