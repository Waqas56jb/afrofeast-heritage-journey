"use client";

import { usePathname } from "next/navigation";
import MobileDrawer from "@/components/MobileDrawer";

type Props = {
  children: React.ReactNode;
};

const ROUTES_WITH_SIDEBAR = [
  "/dashboard",
  "/library",
  "/reading",
  "/bookings",
  "/love",
  "/community",
  "/analytics",
];

export default function AppChrome({ children }: Props) {
  const pathname = usePathname() || "/";

  const showDrawer = ROUTES_WITH_SIDEBAR.some((prefix) => pathname.startsWith(prefix));

  return (
    <>
      {showDrawer ? <MobileDrawer /> : null}
      {children}
    </>
  );
}
