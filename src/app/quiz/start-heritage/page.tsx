import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, WhatsappIcon } from "@/components/icons";

export default function HeritageStartPage() {
  return (
    <main className="min-h-screen relative bg-[#2D5A5A] text-white">
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        quality={100}
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[#2D5A5A]/60" />

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
          <ArrowLeftIcon /> <span className="text-sm">Back</span>
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

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-6 text-center md:pt-10">
        <div className="text-[#F4B942] font-semibold">Travel DNA Quiz™</div>
        <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
          Discover your heritage journey path
        </h1>

        <div className="mt-8 rounded-2xl bg-white text-left text-[#374151] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]">
          <div className="p-6 md:p-8">
            <h2 className="flex items-center gap-3 text-lg font-semibold text-[#2F3A4A]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#E9F0ED] text-[#2D5A5A]">
                🏛️
              </span>
              Your Heritage Seeker Assessment
            </h2>
            <p className="mt-2 text-[13px] text-[#6B7280]">
              This 3-minute quiz will help us understand your motivations, emotional readiness, and
              preferred guidance style to create your personalized heritage journey.
            </p>

            {/* What you'll get */}
            <div className="mt-6">
              <div className="text-sm font-semibold text-[#2F3A4A]">What you'll get:</div>
              <ul className="mt-3 space-y-2 text-[13px] text-[#4B5563]">
                <li>⭐ Your unique Afrofeast Score (0-100)</li>
                <li>⭐ Personalized heritage explorer persona</li>
                <li>⭐ 6-stage journey plan</li>
                <li>⭐ Cultural consultant matching</li>
                <li>⭐ WhatsApp guidance setup</li>
              </ul>
            </div>

            {/* Assessment details */}
            <div className="mt-6 rounded-xl bg-[#F5F7F9] p-4 text-[13px] text-[#4B5563]">
              <div className="grid gap-3 md:grid-cols-2">
                <div>▦ 5 core questions</div>
                <div>◈ Culturally sensitive approach</div>
                <div>⏱ 2–3 minutes to complete</div>
                <div>🧠 Trauma‑informed design</div>
                <div>🔒 Privacy protected</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="text-[13px] text-[#6B7280]">
                Ready to discover your heritage journey path?
              </div>
              <div className="mt-4 flex flex-col items-center justify-center gap-3 md:flex-row">
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center rounded-full bg-[#F4B942] px-6 py-3 text-[#1E332F] font-medium shadow-sm"
                >
                  Begin Assessment
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#D6DEE2] px-6 py-3 text-[#374151]"
                >
                  Learn More About Quiz
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-b-2xl border-t border-[#E5E7EB] bg-white/90 p-4 text-[12px] text-[#6B7280]">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E9F0ED]">
              <WhatsappIcon size={14} />
            </span>
            Your privacy is protected. All responses are confidential and used only to enhance your
            cultural journey experience.
          </div>
        </div>
      </section>
    </main>
  );
}
