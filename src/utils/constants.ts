import type { IconProps } from "@/components/misc";

type NavItem = {
  label: string;
  href: string;
  icon: IconProps["name"];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "LayoutGrid",
  },
  {
    label: "Courses",
    href: "/courses",
    icon: "School",
  },
  {
    label: "Schedule",
    href: "/schedule",
    icon: "Calendar",
  },
  {
    label: "Notes",
    href: "/notes",
    icon: "NotebookText",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: "Settings",
  },
];
