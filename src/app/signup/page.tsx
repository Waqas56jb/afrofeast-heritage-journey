import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="min-h-[100dvh] bg-gray-100 p-4 md:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 md:grid-cols-2">
        <div className="relative hidden md:block">
          <Image src="/landing.jpeg" alt="Heritage bridge" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.55))]" />
          <div className="relative flex h-full flex-col justify-between p-8 text-white/90">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-400 text-teal-900">
                🌿
              </div>
              <span className="font-medium">OurRoots.Africa</span>
            </div>
            <div className="pb-10">
              <h2 className="text-2xl font-semibold">Embank on a Journey of Discovery.</h2>
              <p className="mt-3 max-w-md text-white/80">
                Connect with your heritage, explore the vibrant culture of Ghana, and uncover the
                stories that shape who you are.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-10">
          <h1 className="text-2xl font-semibold text-teal-900">Create Your Heritage Account</h1>
          <p className="mt-1 text-teal-900/70">Start your personalized journey today.</p>

          <form className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-teal-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-teal-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="tel"
              placeholder="Phone (WhatsApp)"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-teal-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <div>
              <div className="flex items-center justify-between">
                <select className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-teal-900 focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option>Ghana</option>
                  <option>Nigeria</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <p className="mt-1 text-xs text-gray-500">For PPP pricing adjustment</p>
            </div>

            <fieldset className="mt-4 space-y-2">
              <legend className="mb-1 text-sm text-gray-600">Heritage Connection</legend>
              {[
                "Ghanaian diaspora",
                "African American",
                "Caribbean heritage",
                "Cultural enthusiast",
              ].map((label) => (
                <label key={label} className="flex items-center gap-3 text-sm text-teal-900">
                  <input type="radio" name="heritage" className="h-4 w-4" />
                  <span>{label}</span>
                </label>
              ))}
              <div className="flex items-center gap-3 text-sm text-teal-900">
                <input type="radio" name="heritage" className="h-4 w-4" />
                <input
                  type="text"
                  placeholder="Other"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
            </fieldset>

            <label className="mt-2 flex items-center gap-3 text-sm text-teal-900">
              <input type="checkbox" className="h-4 w-4" /> I agree to Terms & Cultural Guidelines
            </label>
            <label className="-mt-2 flex items-center gap-3 text-sm text-teal-900">
              <input type="checkbox" className="h-4 w-4" /> I consent to Traditional Knowledge Board
              content sharing protocols
            </label>

            <a
              href="/dashboard"
              className="mt-2 flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-teal-900 shadow hover:bg-amber-300"
            >
              Create Account & Start Journey →
            </a>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              🧡 Your pricing: $9/month (Ghana rate) — Upgrade anytime to premium features
            </div>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
