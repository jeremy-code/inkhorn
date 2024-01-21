import type { Interval } from "luxon";

import { days } from "@/utils/constants";

export type Event = {
  name: string;
  interval: Interval;
  weekdays: Array<(typeof days)[number]>;
};
