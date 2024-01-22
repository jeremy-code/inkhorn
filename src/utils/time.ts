import { DateTime, Interval } from "luxon";

// Given two ISO strings, return an Interval
export const getInterval = (start: string, end: string) => Interval.fromISO(`${start}/${end}`);

export const mergeIntervals = (...intervals: Interval[]) => {
  const merged = Interval.merge(intervals);

  return merged[0].union(merged.at(-1)!);
};

const TIME_RANGE = "h a";

export const getTimeRange = (...intervals: Interval[]) => {
  const merged = mergeIntervals(...intervals);

  const startHour = merged.start?.hour! - 1;
  const endHour = merged.end?.hour! + 1;

  return Array.from({ length: endHour - startHour + 1 }, (_, i) =>
    DateTime.fromObject({ hour: startHour + i }).toFormat(TIME_RANGE)
  );
};

export const getTimeFromTimeRange = (timeRange: string) =>
  DateTime.fromFormat(timeRange, TIME_RANGE);
