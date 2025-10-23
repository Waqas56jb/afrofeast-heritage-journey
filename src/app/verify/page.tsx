import { ArrowLeftIcon, ClockIcon } from "@/components/icons";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-[#2F6C66] flex items-center justify-center p-6 relative">
      {/* Top-left logo */}
      <div className="absolute top-6 left-6 flex items-center gap-3 text-white">
        <a href="/dashboard" className="flex items-center gap-3">
          <ArrowLeftIcon className="-ml-1 mr-1 text-white/90" />
          <div className="h-8 w-8 rounded-sm border border-white/30 bg-[#FFF3C4] flex items-center justify-center text-[#2F6C66] text-sm">
            🌴
          </div>
          <span className="text-white/95 font-medium">OurRoots.Africa</span>
        </a>
      </div>
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="mx-auto rounded-xl bg-white p-8 md:p-10 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)]">
          <div className="mx-auto -mt-14 mb-4 hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF3C4] shadow-md text-[#D9A23C] text-2xl">
            📨
          </div>
          <h1 className="text-center text-2xl font-semibold text-[#2F4F4F]">Check Your Email</h1>
          <p className="mt-3 text-center text-[13px] leading-6 text-[#74808B]">
            We’ve sent a verification link to:
            <br />
            <span className="font-medium text-[#2F6C66]">amara.johnson@email.com</span>
          </p>
          <p className="mt-4 text-center text-[13px] leading-6 text-[#74808B]">
            Please click the link in your email to verify your account and continue your heritage
            journey.
          </p>

          {/* WhatsApp note */}
          <div className="mt-6 rounded-md border border-[#F5E2B9] bg-[#FFF9E9] p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[#E4B248]">🟡</span>
              <div>
                <div className="font-semibold text-[13px] text-[#2F4F4F]">WhatsApp Setup Ready</div>
                <p className="mt-1 text-[12px] leading-5 text-[#74808B]">
                  Once verified, we'll help you connect with your cultural consultant via WhatsApp
                  for personalized guidance. Make sure WhatsApp is installed on your phone.
                </p>
              </div>
            </div>
          </div>

          {/* Help section */}
          <div className="mt-6 border-t border-[#E8EBEE] pt-6 text-[13px]">
            <div className="font-semibold text-[#394652]">Didn't receive the email?</div>
            <p className="mt-2 text-[#74808B]">Check your spam/junk folder.</p>
            <p className="mt-1 text-[#74808B]">
              Make sure <span className="font-medium text-[#2F6C66]">amara.johnson@email.com</span>{" "}
              is correct.
            </p>
            <a href="#" className="mt-2 inline-block text-[#E79441]">
              Resend verification email
            </a>

            <div className="mt-5 flex items-center gap-4 text-[#8DA0AE] text-[13px]">
              <a href="#" className="hover:underline">
                Change email address
              </a>
              <span className="text-[#D0D7DD]">|</span>
              <a href="#" className="hover:underline">
                Contact support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="mx-auto mt-6 rounded-xl border border-[#406E69] bg-[#2E605B]/40 p-4 text-[13px] text-[#D8E6E4]">
          <div className="flex items-start gap-3">
            <ClockIcon className="mt-0.5" />
            <div>
              <div className="font-medium">Verification expires in 24 hours</div>
              <div className="text-[#BFD1CF]">For security, please verify your email soon.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
