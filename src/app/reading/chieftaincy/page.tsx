import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PageNavArrows from "@/components/PageNavArrows";

export default function ChieftaincyReadingPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] text-[#244848]">
      <div className="flex">
        <Sidebar />
        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          {/* Breadcrumbs */}
          <div className="text-[12px] text-[#6B7280]">
            Stage 2: Understanding The Culture <span className="mx-1">›</span> The Role of
            Chieftaincy
          </div>

          {/* Top-right arrows */}
          <div className="relative">
            <div className="absolute right-4 top-0 -translate-y-1/2">
              <PageNavArrows prevHref={undefined} nextHref="/reading/annotate" />
            </div>
          </div>
          <h1 className="mt-2 text-3xl font-semibold">
            The Enduring Significance of Chieftaincy in Ghana
          </h1>

          {/* Intro */}
          <p className="mt-3 max-w-4xl text-[15px] leading-7 text-[#4B5563]">
            In modern Ghana, the institution of chieftaincy remains a vital and respected pillar of
            society, coexisting with the democratic state. Chiefs are not merely symbolic
            figures—they are custodians of tradition, land, and local governance. They serve as
            community leaders, mediators in disputes, and catalysts for development. Their authority
            is rooted in lineage and communal trust, forming a framework for social cohesion that
            has endured for centuries.
          </p>

          {/* Image */}
          <div className="mt-8 overflow-hidden rounded-xl shadow">
            <Image
              src="/man.png"
              alt="Chiefs"
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Body */}
          <div className="mt-6 space-y-6 max-w-4xl text-[15px] leading-7 text-[#4B5563]">
            <p>
              The relationship between a chief and their people is deeply symbiotic. The community
              looks to the chief for guidance and justice, while the chief’s legitimacy is sustained
              by service to the people—stewarding land, protecting sacred traditions, and upholding
              customary law.
            </p>
            <p>
              For the diaspora, engaging with local chiefs and queen mothers can be a powerful and
              transformative part of a heritage journey. It is an opportunity to receive a
              traditional blessing, learn oral histories passed down through generations, and gain a
              profound sense of belonging.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
