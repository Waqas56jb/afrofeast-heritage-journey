"use client";
import { useState } from "react";

type Method = "card" | "mobile" | "paypal";

export default function PremiumPage() {
  const [method, setMethod] = useState<Method>("card");

  return (
    <div className="min-h-[100dvh] bg-teal-900 p-4 text-white md:p-8">
      <header className="mx-auto mb-6 flex max-w-4xl items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
          🌿
        </div>
        <span>OurRoots.Africa</span>
      </header>

      <div className="mx-auto max-w-3xl rounded-3xl bg-teal-800/70 p-6 shadow-2xl ring-1 ring-black/20 md:p-8">
        <h1 className="text-center text-2xl font-semibold text-amber-300">
          Unlock Your Complete Heritage Journey
        </h1>
        <p className="mt-2 text-center text-white/80">
          Gain full access to our platform and connect deeper with your roots.
        </p>

        <div className="mt-6 rounded-2xl bg-teal-900/50 p-4">
          <h3 className="mb-3 text-sm text-white/70">
            ⭐ Premium Features <span className="text-white/50">($29/month)</span>
          </h3>
          <ul className="space-y-2 text-white/90">
            {[
              "Complete 6-stage heritage journey",
              "Love Hub community access",
              "Service provider directory",
              "Advanced content annotations",
              "Offline content access",
              "Priority cultural consultant support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5">✔</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-2 items-center gap-4 rounded-2xl border border-white/10 p-4">
          <div>
            <div className="text-xs text-white/70">Your Location</div>
            <div className="text-white">Ghana</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/70">Your Price (PPP adjusted)</div>
            <div className="font-semibold text-amber-300">$9/month</div>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-3 text-sm text-white/80">Payment Method</div>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setMethod("card")}
              className={`rounded-xl px-4 py-3 text-sm ${
                method === "card"
                  ? "border-2 border-amber-300 bg-teal-900/60 text-white"
                  : "border border-white/20 bg-teal-900/40 text-white/80"
              }`}
            >
              Credit/Debit Card
            </button>
            <button
              onClick={() => setMethod("mobile")}
              className={`rounded-xl px-4 py-3 text-sm ${
                method === "mobile"
                  ? "border-2 border-amber-300 bg-teal-900/60 text-white"
                  : "border border-white/20 bg-teal-900/40 text-white/80"
              }`}
            >
              Mobile Money
            </button>
            <button
              onClick={() => setMethod("paypal")}
              className={`rounded-xl px-4 py-3 text-sm ${
                method === "paypal"
                  ? "border-2 border-amber-300 bg-teal-900/60 text-white"
                  : "border border-white/20 bg-teal-900/40 text-white/80"
              }`}
            >
              PayPal
            </button>
          </div>

          {method === "card" && (
            <div className="mt-4 space-y-3">
              <input
                placeholder="Card Number"
                className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="MM/YY"
                  className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  placeholder="CVV"
                  className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <input
                placeholder="Name on Card"
                className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          )}

          {method === "mobile" && (
            <div className="mt-4 space-y-3">
              <input
                placeholder="Mobile Number"
                className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
              />
              <select className="w-full rounded-xl border border-white/20 bg-teal-900/40 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-amber-400">
                <option value="mtn">MTN</option>
                <option value="vodafone">Vodafone</option>
                <option value="airteltigo">AirtelTigo</option>
              </select>
              <p className="text-xs text-white/70">
                You will be prompted to approve the payment on your phone.
              </p>
            </div>
          )}

          {method === "paypal" && (
            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  placeholder="Card Number (linked to PayPal)"
                  className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400 md:col-span-2"
                />
                <input
                  placeholder="MM/YY"
                  className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  placeholder="CVV"
                  className="rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <input
                placeholder="Name on Card"
                className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400"
              />
              <p className="text-xs text-white/70">
                We’ll validate the card and confirm with PayPal in the next step.
              </p>
            </div>
          )}

          <label className="mt-4 flex items-center gap-2 text-sm text-white/80">
            <input type="checkbox" className="h-4 w-4" /> I agree to monthly billing
          </label>
          <label className="-mt-1 flex items-center gap-2 text-sm text-white/80">
            <input type="checkbox" className="h-4 w-4" /> Cancel anytime, no commitment
          </label>

          <a
            href="/premium/success"
            className="mt-5 block w-full rounded-full bg-amber-400 px-6 py-3 text-center font-medium text-teal-900 shadow hover:bg-amber-300"
          >
            Start Premium Journey - $9/month →
          </a>

          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-white/70">
            <span>🔒 Secure payment via Stripe</span>
            <span>•</span>
            <span>7-day free trial included</span>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-10 max-w-4xl text-center text-xs text-white/60">
        © 2025 OurRoots.Africa. All rights reserved.
      </footer>
    </div>
  );
}
