import {
  HomeIcon,
  BookOpenIcon,
  HeartIcon,
  CheckSquareIcon,
  CalendarIcon,
  UsersIcon,
  BarChartIcon,
} from "@/components/icons";

export type NavItem = {
  label: string;
  href: string;
  Icon: (props: { size?: number }) => React.ReactNode;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard/user", Icon: HomeIcon },
  { label: "Content Library", href: "/library", Icon: BookOpenIcon },
  { label: "Love Hub", href: "/love", Icon: HeartIcon },
  { label: "Whatsapp", href: "#", Icon: CheckSquareIcon },
  { label: "Bookings", href: "/bookings", Icon: CalendarIcon },
  { label: "Community", href: "/community", Icon: UsersIcon },
  { label: "Analytics", href: "/analytics", Icon: BarChartIcon },
];
