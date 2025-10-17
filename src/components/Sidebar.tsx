"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOutIcon } from "@/components/icons";
import { navItems } from "@/components/navItems";

export default function Sidebar() {
  const pathname = usePathname();

  const items = navItems;

  return (
    <aside className="hidden w-64 shrink-0 border-r border-[#E5E7EB]/20 bg-[#2D5A5A] lg:block lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
      <div className="px-6 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="OurRoots.Africa"
            width={36}
            height={36}
            className="rounded-sm bg-[#FFF3C4] ring-1 ring-white/20"
          />
          <div className="text-lg text-white/95">OurRoots.Africa</div>
        </div>
      </div>
      <nav className="mt-4 space-y-2 px-3">
        {items.map(({ label, href, Icon }) => {
          const isActive = pathname?.startsWith(href);
          return (
            <Link
              key={label}
              href={href as any}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-[17px] transition ${
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
      <div className="mt-auto px-6 pb-8 pt-24 text-[#F7F7F7] max-lg:hidden">
        <a
          className="flex items-center gap-2 text-[17px] text-white/80 hover:text-white active:scale-[0.98]"
          href="#"
        >
          <LogOutIcon size={18} /> Logout
        </a>
      </div>
    </aside>
  );
}
