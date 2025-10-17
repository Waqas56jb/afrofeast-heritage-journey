"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/navItems";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar on mobile */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-[#E5E7EB]/60 bg-white/90 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 lg:hidden">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="OurRoots.Africa"
            width={28}
            height={28}
            className="rounded bg-[#FFF3C4] ring-1 ring-black/5"
          />
          <span className="text-[15px] font-medium text-[#244848]">OurRoots.Africa</span>
        </div>
        <button
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB] bg-white text-[#244848] shadow-sm active:scale-95"
        >
          {/* Hamburger */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative ml-0 h-full w-[82%] max-w-[320px] translate-x-0 bg-[#2D5A5A] shadow-xl ring-1 ring-black/10">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="OurRoots.Africa"
                  width={28}
                  height={28}
                  className="rounded bg-[#FFF3C4] ring-1 ring-white/20"
                />
                <span className="text-[15px] font-medium text-white/95">OurRoots.Africa</span>
              </div>
              <button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white active:scale-95"
              >
                {/* X icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav className="mt-2 space-y-1 px-2">
              {navItems.map(({ label, href, Icon }) => {
                const isActive = pathname?.startsWith(href);
                return (
                  <Link
                    key={label}
                    href={href as any}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-[16px] transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    } active:scale-[0.98]`}
                  >
                    <Icon size={18} /> {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
