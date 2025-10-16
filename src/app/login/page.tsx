import {
  MailIcon,
  LockIcon,
  EyeIcon,
  GoogleIcon,
  FacebookIcon,
  PalmLogo,
} from "@/components/icons";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <section className="relative hidden md:flex items-center justify-center text-white overflow-hidden">
        <img
          src="/landingpage.png"
          alt="Heritage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2D5A5A]/60" />
        <div className="z-10 max-w-md text-center px-8">
          <div className="mx-auto mb-7 h-12 w-12 rounded-sm border border-white/20 bg-[#FFF3C4] flex items-center justify-center text-[#2F6C66]">
            <PalmLogo size={20} />
          </div>
          <h1 className="text-3xl font-semibold tracking-wide">OurRoots.Africa</h1>
          <h2 className="mt-6 text-lg font-semibold">Welcome Back</h2>
          <p className="mt-4 text-white/85">
            Continue your Ghana heritage journey with personalized guidance and cultural
            connections.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Cultural Heritage</span>
            <span className="opacity-60">•</span>
            <span>Guided Journeys</span>
            <span className="opacity-60">•</span>
            <span>Expert Support</span>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#F5F6F8]">
        <div className="w-full max-w-[420px] px-6 md:px-8">
          <h2 className="text-center text-[#2F6C66] text-2xl font-semibold">Sign In</h2>
          <p className="mt-2 text-center text-[13px] text-[#8E98A4]">
            Welcome back to your heritage journey
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-[11px] font-semibold text-[#7E8893]">
                Email Address
              </label>
              <div className="mt-2 flex items-center rounded-md border border-[#E5E7EB] bg-white shadow-sm focus-within:border-[#D5DAE0]">
                <span className="px-3 text-[#A2ACB6]">
                  <MailIcon />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2.5 pr-3 outline-none placeholder:text-[#9CA3AF] text-black caret-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#7E8893]">Password</label>
              <div className="mt-2 flex items-center rounded-md border border-[#E5E7EB] bg-white shadow-sm focus-within:border-[#D5DAE0]">
                <span className="px-3 text-[#A2ACB6]">
                  <LockIcon />
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full py-2.5 pr-3 outline-none placeholder:text-[#9CA3AF] text-black caret-black"
                />
                <span className="px-3 text-[#A2ACB6]">
                  <EyeIcon />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[13px]">
              <label className="inline-flex items-center gap-2 text-[#7E8893]">
                <input type="checkbox" className="h-4 w-4 rounded border-[#D5DAE0]" />
                Remember me
              </label>
              <a href="#" className="text-[#F0AE3F]">
                Forgot password?
              </a>
            </div>

            <a
              href="/dashboard/user"
              className="block w-full rounded-md bg-[#F0AE3F] hover:bg-[#E8A63A] py-2.5 text-center text-white font-medium shadow-sm"
            >
              Sign In
            </a>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E7EB]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#F5F6F8] px-4 text-[11px] text-[#9AA5B1]">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white py-2.5 text-sm text-[#111827]"
              >
                <GoogleIcon size={18} />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white py-2.5 text-sm text-[#111827]"
              >
                <FacebookIcon size={18} />
                Facebook
              </button>
            </div>

            <p className="text-center text-[13px] text-[#7E8893]">
              Don't have an account?{" "}
              <a href="/signup" className="text-[#F0AE3F]">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
