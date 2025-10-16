import Image from "next/image";
import { WhatsappIcon, HomeIcon, InfoIcon, UsersIcon, LogInIcon } from "@/components/icons";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#1F5A55] text-white">
      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-10 bg-transparent">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="OurRoots.Africa"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="text-white/95">OurRoots.Africa</span>
          </div>
          <nav className="ml-auto flex items-center text-[13px] text-white/90 translate-x-2">
            <a
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-white/90 hover:bg-white/10"
            >
              <LogInIcon /> Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero background image overlay */}
      <div className="relative">
        <Image
          src="/background.png"
          alt="Hero"
          width={2400}
          height={1200}
          priority
          quality={100}
          className="h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F5A55]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl px-6 text-center">
            <div className="mx-auto mb-5 h-16 w-16 rounded bg-black/40 flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="Logo" width={48} height={48} />
            </div>
            <h1 className="text-4xl font-semibold leading-snug">
              Your Ghana heritage journey, guided.
            </h1>
            <p className="mt-3 text-white/85">
              Take a 5-minute quiz to get your Afrofeast Score™ and a personalized heritage plan,
              with guidance from our cultural consultants on WhatsApp.
            </p>
            <a
              href="/quiz"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F4B942] px-6 py-3 text-[#1E332F] font-medium"
            >
              Start the Ghana Quiz →
            </a>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/85">
              <span>Personalized plans</span>
              <span>•</span>
              <span>Guided trips</span>
              <span>•</span>
              <span>Cultural focus</span>
              <span>•</span>
              <span>Trauma‑informed</span>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="bg-[#EEF2F3] text-[#28433F]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-2xl font-medium">How It Works</h2>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {["Take the Quiz", "Get Your Afrofeast Score™", "Begin Your Journey"].map((t, i) => (
              <div key={t} className="flex flex-col items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0AE3F] text-[#1E332F] font-semibold">
                  {i + 1}
                </div>
                <div>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-[#2A685F] py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-2xl font-medium text-white/95">Meet Your Heritage Guides</h3>
          <p className="mt-2 text-white/80">
            Whatever your connection to Ghana, we have a guided path for you. Which one are you?
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Heritage Seeker", img: "/1.png", href: "/quiz/start-heritage" },
              { title: "Cultural Explorer", img: "/2.png", href: "/quiz/start" },
              { title: "Curious Traveller", img: "/3.png", href: "/quiz/start-curious" },
            ].map(({ title, img, href }) => (
              <div
                key={title}
                className="rounded-xl bg-[#2F6C66] p-6 text-left shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
              >
                <div
                  className="mx-auto -mt-12 mb-4 h-16 w-16 rounded-full border-4 border-[#2F6C66] bg-center bg-cover"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <div className="text-[#E9B448]">{title}</div>
                <p className="mt-2 text-white/85 text-sm">
                  Immerse yourself in the vibrant culture, art, and traditions of Ghana.
                </p>
                <a
                  href={href}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F0AE3F] px-5 py-2 text-[#1E332F]"
                >
                  Start Quiz
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#EEF2F3] text-[#28433F]">
        <div className="mx-auto max-w-6xl items-center gap-10 px-6 py-16 md:flex">
          <div className="flex items-center justify-center md:block">
            <div className="h-20 w-20 rounded-full border-8 border-[#CDE7D9] flex items-center justify-center bg-white">
              <WhatsappIcon size={34} />
            </div>
          </div>
          <div className="mt-6 flex-1 md:mt-0">
            <h3 className="text-2xl font-medium">Real human guidance via WhatsApp</h3>
            <p className="mt-2 text-[#5A6B6A]">
              Our cultural consultants are with you every step of the way, offering personalized
              support and insights throughout your journey.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4 md:mt-0">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#F4B942] px-6 py-3 text-[#1E332F]"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-[#C6D7CF] px-6 py-3 text-[#28433F]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#2A685F] py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-2xl font-medium text-white/95">Simple, Accessible Pricing</h3>
          <p className="mt-2 text-white/80">Fair pricing adjusted for your location.</p>
          <div className="mx-auto mt-8 max-w-md rounded-xl bg-[#2F6C66] p-8 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]">
            <div className="text-sm text-white/70">Starting from</div>
            <div className="mt-2 text-4xl text-[#E9B448]">$9</div>
            <div className="text-white/70">/month</div>
            <div className="mt-2 text-xs text-white/60">
              (Ghana) to $29/month (US/UK) with PPP adjustment
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17262A] py-6 text-center text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          © 2025 OurRoots.Africa. All rights reserved.
          <div className="mt-2 text-white/50">Your Guided Journey to Ghanaian Heritage.</div>
          <div className="mt-3 flex items-center justify-center gap-4">ⓕ ⓧ ⓘ</div>
        </div>
      </footer>
    </main>
  );
}
