export const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

// Utility type to extract the first character of a string type
type FirstChar<T extends string> = T extends `${infer F}${infer _}` ? F : never;

export const daysOfTheWeek = days.map((day) => ({
  abbr: day.toUpperCase()[0] as FirstChar<Uppercase<typeof day>>,
  value: day,
}));

export const DAY_PREFIX = "day-of-the-week";

export const NAV_ITEMS = [
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
] as const;
