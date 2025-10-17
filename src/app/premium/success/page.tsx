import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { WhatsappIcon } from "@/components/icons";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function PremiumSuccessPage() {
  return (
    <main className="min-h-screen bg-[#244848] text-white">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
        <Link
          href="/dashboard/user"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white"
        >
          <AiOutlineArrowLeft size={16} /> <span className="text-sm">Back</span>
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
        <div className="rounded-2xl bg-[#2D5A5A]/85 p-8 shadow-[0_50px_140px_-35px_rgba(0,0,0,0.7)] ring-1 ring-black/10">
          <div className="mx-auto mb-4 grid place-items-center">
            <div className="h-10 w-10 rounded bg-black/30" />
          </div>
          <h1 className="text-center text-[28px] font-semibold text-[#F4B942]">
            Welcome to Premium!
          </h1>
          <p className="mt-1 text-center text-white/80">
            Your journey into the heart of Ghana has begun.
          </p>

          {/* Payment confirmation */}
          <div className="mt-6 rounded-lg bg-[#1F4441]/70 p-4 ring-1 ring-white/10">
            <div className="text-white/90">Payment Successful</div>
            <div className="mt-2 text-[13px] text-white/70">$9.00 charged to • • • • 4242</div>
            <div className="text-[13px] text-white/70">Next billing: December 30, 2025</div>
          </div>

          <div className="mt-8 text-center text-[#EBC76D]">Your Premium Journey Unlocked:</div>

          {/* Items */}
          <div className="mt-4 space-y-3">
            {[
              {
                title: "Stage 2: Cultural Intelligence",
                sub: '"Understanding Asante Governance"',
                cta: "Start Reading",
              },
              {
                title: "Love Hub Community",
                sub: '"Join 234 heritage travelers"',
                cta: "Enter Community",
              },
              {
                title: "Service Provider Directory",
                sub: '"Find cultural guides in Ghana"',
                cta: "Browse Services",
              },
            ].map((row) => (
              <div
                key={row.title}
                className="flex items-center justify-between rounded-lg bg-white/5 p-4"
              >
                <div>
                  <div className="text-[13px] text-white/90">{row.title}</div>
                  <div className="text-[12px] text-white/60">{row.sub}</div>
                </div>
                <a
                  href={
                    row.cta.includes("Reading")
                      ? "/man.png"
                      : row.cta.includes("Community")
                        ? "/community"
                        : "/services"
                  }
                >
                  <Button rightIcon={<span>→</span>}>{row.cta}</Button>
                </a>
              </div>
            ))}
          </div>

          {/* WhatsApp connect */}
          <div className="mt-8 text-center text-white/80">WhatsApp Setup:</div>
          <div className="mt-3 grid place-items-center">
            <button className="inline-flex items-center gap-2 rounded-lg border border-[#22C55E]/40 bg-white/5 px-5 py-3 text-white">
              <WhatsappIcon size={18} /> Connect with Mama Efua
            </button>
            <div className="mt-2 text-[12px] text-[#6BE187]">
              Your cultural consultant is ready!
            </div>
          </div>

          <div className="mt-6 text-center text-[12px] text-white/70">
            A detailed receipt has been sent to your email.
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
