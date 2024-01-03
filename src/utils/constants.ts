export const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

export const daysOfTheWeek = days.map((day) => ({
  abbr: day.toUpperCase()[0],
  value: day,
}));

export const DAY_PREFIX = "day-of-the-week";

export const NAV_ITEMS = [
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Notes",
    href: "/notes",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
];
