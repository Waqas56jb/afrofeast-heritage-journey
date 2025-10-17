import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function PremiumAccessPage() {
  return (
    <main className="min-h-screen relative bg-[#2D5A5A] text-white">
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        quality={100}
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[#2D5A5A]/70" />

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
        <Link
          href="/quiz/results"
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

      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-4">
        <div className="rounded-2xl bg-[#22524E]/70 p-6 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/10 backdrop-blur-[1px]">
          <h1 className="text-center text-2xl font-semibold text-[#F4B942] md:text-[28px]">
            Unlock Your Complete Heritage Journey
          </h1>
          <p className="mt-2 text-center text-sm text-white/80">
            Gain full access to our platform and connect deeper with your roots.
          </p>

          {/* Features panel */}
          <div className="mt-6 rounded-lg bg-[#1F4441]/70 p-5 ring-1 ring-white/10">
            <div className="text-sm text-white/90">
              ⭐ Premium Features <span className="text-white/60">($29/month)</span>
            </div>
            <ul className="mt-3 space-y-2 text-[13px] text-white/85">
              <li>✓ Complete 6-stage heritage journey</li>
              <li>✓ Love Hub community access</li>
              <li>✓ Service provider directory</li>
              <li>✓ Advanced content annotations</li>
              <li>✓ Offline content access</li>
              <li>✓ Priority cultural consultant support</li>
            </ul>
          </div>

          {/* Location and PPP row */}
          <div className="mt-4 grid grid-cols-2 items-center gap-3 rounded-lg bg-[#1F4441]/70 p-4 text-[13px] ring-1 ring-white/10">
            <div>
              <div className="text-white/70">Your Location</div>
              <div className="text-white">Ghana</div>
            </div>
            <div className="text-right">
              <div className="text-white/70">Your Price (PPP adjusted)</div>
              <div className="text-[#F4B942] font-semibold">$9/month</div>
            </div>
          </div>

          {/* Payment method tabs */}
          <div className="mt-5">
            <div className="text-[13px] text-white/85">Payment Method</div>
            <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3">
              <button className="flex min-h-12 items-center justify-center rounded-md border-2 border-[#F4B942] bg-[#244C47] px-3 py-3 text-center text-sm font-medium text-white leading-tight whitespace-normal break-words">
                Credit/Debit Card
              </button>
              <button className="flex min-h-12 items-center justify-center rounded-md border border-white/20 bg-[#244C47] px-3 py-3 text-center text-sm text-white/85 leading-tight whitespace-normal break-words">
                Mobile Money
              </button>
              <button className="flex min-h-12 items-center justify-center rounded-md border border-white/20 bg-[#244C47] px-3 py-3 text-center text-sm text-white/85 leading-tight whitespace-normal break-words">
                PayPal
              </button>
            </div>
          </div>

          {/* Card form */}
          <form className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="0000-0000-0000-0000"
              className="w-full rounded-md border border-white/20 bg-[#244C47] px-3 py-2 text-white placeholder:text-white/50 outline-none"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full rounded-md border border-white/20 bg-[#244C47] px-3 py-2 text-white placeholder:text-white/50 outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full rounded-md border border-white/20 bg-[#244C47] px-3 py-2 text-white placeholder:text-white/50 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="e.g. Ama Serwaa"
              className="w-full rounded-md border border-white/20 bg-[#244C47] px-3 py-2 text-white placeholder:text-white/50 outline-none"
            />
            <label className="mt-2 flex items-center gap-2 text-[13px] text-white/85">
              <input type="checkbox" className="h-4 w-4" /> I agree to monthly billing
            </label>
            <label className="flex items-center gap-2 text-[13px] text-white/60">
              <input type="checkbox" className="h-4 w-4" /> Cancel anytime, no commitment
            </label>
          </form>

          <Link
            href="/premium/success"
            className="mt-5 block w-full rounded-md bg-[#F4B942] py-3 text-center font-medium text-[#1E332F]"
          >
            Start Premium Journey - $9/month →
          </Link>

          <div className="mt-3 flex items-center justify-center gap-6 text-[12px] text-white/70">
            <span>🔒 Secure payment via Stripe</span>
            <span>🎁 7-day free trial included</span>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-6 text-center text-white/70">
        © 2025 OurRoots.Africa. All rights reserved.
        <div className="text-white/50">Your Guided Journey to Ghanaian Heritage.</div>
      </footer>
    </main>
  );
}
