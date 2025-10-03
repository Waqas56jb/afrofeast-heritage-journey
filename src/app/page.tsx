import Hero from "@/features/landing/Hero";
import HowItWorks from "@/features/landing/HowItWorks";
import Guides from "@/features/landing/Guides";
import WhatsAppCTA from "@/features/landing/WhatsAppCTA";
import Pricing from "@/features/landing/Pricing";

export default function Page() {
  return (
    <main className="min-h-screen bg-teal-900 text-white">
      <Hero />
      <HowItWorks />
      <Guides />
      <WhatsAppCTA />
      <Pricing />
    </main>
  );
}
