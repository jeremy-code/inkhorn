import type { Interval, WeekdayNumbers } from "luxon";

export type Event = {
  name: string;
  interval: Interval;
  weekdays: WeekdayNumbers[];
};
