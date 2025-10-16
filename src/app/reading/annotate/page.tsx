import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PageNavArrows from "@/components/PageNavArrows";

export default function AnnotatedReadingPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] text-[#244848]">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area with right panel */}
        <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-6">
          {/* Article column */}
          <div className="w-full">
            {/* Top bar: back only */}
            <header className="mb-4 flex items-center justify-end text-[13px] text-[#244848]">
              <PageNavArrows prevHref="/reading/chieftaincy" nextHref={undefined} />
            </header>

            {/* Article card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E5E7EB]">
              <div className="text-[12px] text-[#6B7280]">
                Stage 2: Understanding The Culture <span className="mx-1">›</span> The Role of
                Chieftaincy
              </div>
              <h1 className="mt-2 text-3xl font-semibold">
                The Enduring Significance of Chieftaincy in Ghana
              </h1>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#4B5563]">
                In modern Ghana, the institution of chieftaincy remains a vital and respected pillar
                of society, coexisting with the democratic state. Chiefs are community leaders,
                mediators in disputes, and catalysts for local development.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl shadow">
                <Image
                  src="/man.png"
                  alt="Chiefs"
                  width={1200}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 text-[15px] leading-7 text-[#4B5563]">
                The relationship between a chief and their people is deeply symbiotic...
                Understanding this dynamic is essential for anyone seeking to connect with their
                Ghanaian roots in a grounded and respectful way.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-[#4B5563]">
                For the diaspora, engaging with local chiefs and queen mothers can be a powerful and
                transformative part of a heritage journey.
              </p>
            </div>
          </div>

          {/* Right annotation toolkit panel */}
          <aside className="sticky top-6 hidden w-[360px] shrink-0 self-start rounded-2xl border border-[#2D5A5A]/30 bg-[#2D5A5A] p-5 text-white shadow-sm lg:block">
            <div className="flex items-center gap-2 text-[#F6C56D]">
              <span>✎</span>
              <div className="font-medium">Annotation Toolkit</div>
            </div>

            {/* Highlight tools */}
            <div className="mt-4 text-[13px]">
              <div className="text-white/90">Highlight Tools</div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  "Key Concept",
                  "Personal Connection",
                  "Question",
                  "Cultural Insight",
                  "Action Item",
                  "Important",
                ].map((t) => (
                  <button
                    key={t}
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-left hover:bg-white/15"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Note types */}
            <div className="mt-5 text-[13px]">
              <div className="text-white/90">Note Types</div>
              <div className="mt-2 space-y-2">
                {[
                  "Text Note",
                  "Voice Note (2:34 recorded)",
                  "Question for Consultant",
                  "Personal Reflection",
                ].map((t, i) => (
                  <button
                    key={t}
                    className={`w-full rounded-lg px-3 py-2 text-left ${i === 0 ? "bg-white/10 border border-white/15" : "border border-white/10 bg-transparent"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Voice note preview */}
            <div className="mt-5 text-[13px]">
              <div className="text-white/90">Voice Note Preview</div>
              <div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-3 text-white/90">
                <div className="text-white/80 italic">
                  “This reminds me of how my grandmother always talked about respecting elders...”
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <button className="rounded-full bg-[#F4B942] px-3 py-1 text-[#1E332F]">
                    ▶ Play
                  </button>
                  <button className="rounded-lg border border-white/20 px-2 py-1 text-[12px]">
                    ⤴ Share
                  </button>
                  <button className="rounded-lg border border-white/20 px-2 py-1 text-[12px]">
                    ★ Save
                  </button>
                </div>
              </div>
            </div>

            {/* Smart connections */}
            <div className="mt-5 text-[13px]">
              <div className="text-white/90">Smart Connections</div>
              <div className="mt-2 space-y-2 rounded-lg border border-white/10 bg-white/5 p-3 text-white/80">
                <div>AI detected connections to:</div>
                <div className="rounded bg-white/10 p-2">Your Stage 1 emotional prep notes</div>
                <div className="rounded bg-white/10 p-2">
                  Community discussion: "Traditional vs Modern Leadership"
                </div>
                <div className="rounded bg-white/10 p-2">
                  Service provider: "Kumasi Palace Cultural Tour"
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
