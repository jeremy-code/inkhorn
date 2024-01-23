import { DateTime, Info, InfoUnitOptions, Interval, WeekdayNumbers } from "luxon";

export const { TIME_SIMPLE } = DateTime;
export const TIME_NARROW = "h a";

// Given two ISO strings, return an Interval
export const getInterval = (start: string, end: string) => Interval.fromISO(`${start}/${end}`);

// indexed by 1-7, starting with Monday, based on ISO 8601
// is own function, since the isoIndex and array index may get confusing
export const getWeekday = (isoIndex: number, ...rest: Parameters<typeof Info.weekdays>) =>
  Info.weekdays(...rest)[isoIndex - 1];

// Given an array of either weekday numbers or weekday names (sorted by ISO index 1-7 or Mon - Sun),
// return a new array such that the array is sorted by the start of the week (Sunday in the US).
export const sortWeekdays = <T extends string | WeekdayNumbers>(weekdays: T[]) => {
  const start = Info.getStartOfWeek();

  return [...weekdays.slice(start - 1), ...weekdays.slice(0, start - 1)];
};

// Return an array of the weekday indices, starting with Monday (1) and ending with Sunday (7)
export const getWeekdaysIndex = (opts?: InfoUnitOptions) =>
  Info.weekdays(undefined, opts).map((_, i) => (i + 1) as WeekdayNumbers);

/**
 * Given an array of intervals, return an array of hours from the start to the end
 * of the intervals, padded by an hour on each side.
 *
 * @param {Interval} intervals
 * @returns {string[]}
 */
export const getTimeRange = (intervals: Interval[]) => {
  // merge overlapping intervals, and combine the first and last interval to
  // get the full range
  const merged = Interval.merge(intervals);
  const combinedInterval = merged[0].union(merged.at(-1)!);

  if (!combinedInterval.isValid) throw new Error("Invalid interval");

  // pad by an hour on each side
  const startHour = combinedInterval.start.hour - 1;
  const endHour = combinedInterval.end.hour + 1;

  // create an array of hours from the start to the end of format "h a" (7 am)
  return Array.from({ length: endHour - startHour + 1 }, (_, i) =>
    DateTime.fromObject({ hour: startHour + i }).toFormat(TIME_NARROW)
  );
};
