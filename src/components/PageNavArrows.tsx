import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
type Href = string;
type Props = {
  prevHref?: Href;
  nextHref?: Href;
  className?: string;
};

export default function PageNavArrows({ prevHref, nextHref, className }: Props) {
  return (
    <div className={`pointer-events-auto flex items-center gap-2 ${className ?? ""}`}>
      {prevHref ? (
        <a
          href={prevHref}
          aria-label="Previous"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#244848] shadow-sm transition hover:-translate-x-0.5 hover:bg-[#F5F7F9] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40"
        >
          <ArrowLeftIcon size={16} />
        </a>
      ) : (
        <button
          aria-label="Previous (disabled)"
          className="inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-[#E5E7EB] bg-white/70 text-[#9CA3AF]"
          disabled
        >
          <ArrowLeftIcon size={16} />
        </button>
      )}

      {nextHref ? (
        <a
          href={nextHref}
          aria-label="Next"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-sm transition hover:translate-x-0.5 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40"
        >
          <ArrowRightIcon size={16} />
        </a>
      ) : (
        <button
          aria-label="Next (disabled)"
          className="inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full bg-[#22C55E]/30 text-white/70"
          disabled
        >
          <ArrowRightIcon size={16} />
        </button>
      )}
    </div>
  );
}
