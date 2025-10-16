import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#244848] text-white">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
        <Link
          href="/dashboard/user"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white"
        >
          <ArrowLeft /> <span className="text-sm">Back</span>
        </Link>
        <div className="ml-4 inline-flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="OurRoots.Africa"
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="text-white/90">OurRoots.Africa</span>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="rounded-2xl bg-[#2D5A5A]/80 p-6 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/10">
          <div className="mx-auto mb-4 grid place-items-center">
            <div className="h-12 w-12 rounded bg-black/30" />
          </div>
          <h1 className="text-center text-[26px] font-semibold text-[#F4B942]">
            Help Us Improve Your Experience
          </h1>

          {/* Likert scale */}
          <div className="mt-6 text-sm text-white/80">
            How likely are you to recommend OurRoots.Africa to a friend?
          </div>
          <div className="mt-2 flex items-center gap-2 text-[13px] text-white/70">
            <span>Not Likely</span>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <button
                key={n}
                className={`h-8 w-8 rounded-full border ${n === 8 ? "bg-[#F4B942] text-[#1E332F] border-transparent" : "border-white/30 text-white"}`}
              >
                {n}
              </button>
            ))}
            <span className="ml-2">Very Likely</span>
          </div>

          {/* Reason */}
          <div className="mt-6 text-sm text-white/80">What's the main reason for your score?</div>
          <textarea
            className="mt-2 w-full rounded-md border border-white/15 bg-white/10 p-3 text-[13px] text-white placeholder:text-white/70 outline-none"
            rows={3}
            placeholder="The content quality is excellent and culturally authentic..."
          />

          {/* Valuable feature */}
          <div className="mt-6 text-sm text-white/80">Which feature do you find most valuable?</div>
          <div className="mt-2 space-y-2 text-[13px] text-white/90">
            {[
              "6-stage heritage journey content",
              "Love Hub community discussions",
              "Cultural consultant WhatsApp support",
              "Service provider marketplace",
              "Afrofeast Score personalization",
            ].map((label, i) => (
              <label key={label} className="flex items-center gap-2">
                <input type="radio" name="valuable" defaultChecked={i === 1} /> {label}
              </label>
            ))}
          </div>

          {/* Continue subscription */}
          <div className="mt-6 text-sm text-white/80">
            What would make you more likely to continue your subscription?
          </div>
          <div className="mt-2 grid grid-cols-1 gap-2 text-[13px] text-white/90 md:grid-cols-2">
            {[
              "More interactive content",
              "Video content from elders",
              "Lower pricing",
              "More community events",
              "Mobile app",
            ].map((label, i) => (
              <label key={label} className="flex items-center gap-2">
                <input type="checkbox" defaultChecked={i === 0 || i === 3} /> {label}
              </label>
            ))}
          </div>

          <div className="mt-8 grid place-items-center">
            <button className="h-11 rounded-full bg-[#F4B942] px-6 text-[#1E332F]">
              Submit Feedback →
            </button>
          </div>

          <div className="mt-4 text-center text-[12px] text-[#EBC76D]">
            Thank you! Earn 1 week free premium for your feedback.
          </div>
        </div>
      </section>

      <footer className="bg-[#17262A] py-8 text-center text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          © 2025 OurRoots.Africa. All rights reserved.
          <div className="mt-1 text-white/50">Your Guided Journey to Ghanaian Heritage.</div>
        </div>
      </footer>
    </main>
  );
}
