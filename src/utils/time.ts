import {
  DateTime,
  Info,
  Interval,
  type DateTimeJSOptions,
  type IntervalMaybeValid,
  type WeekdayNumbers,
} from "luxon";

// ISO 8601 weekday numbers, starting with Monday (1) and ending with Sunday (7)
export const WEEKDAY_NUMBERS: WeekdayNumbers[] = [1, 2, 3, 4, 5, 6, 7];

export const { TIME_SIMPLE } = DateTime;
export const TIME_NARROW = "h a";

// Given two ISO strings, return an Interval
export const getInterval = (start: string, end: string) => Interval.fromISO(`${start}/${end}`);

// Given an ISO weekday number, return the corresponding weekday name
export const getWeekday = (isoIndex: WeekdayNumbers, ...rest: Parameters<typeof Info.weekdays>) =>
  Info.weekdays(...rest)[isoIndex - 1];

/**
 * Reorders an array of weekdays so that it starts from the weekday specified by the start of the week in the given locale.
 *
 * @example
 * ```
 * // Returns [Sun, Mon, Tue, Wed, Thu, Fri, Sat]
 * reorderWeekdaysByStart([Mon, Tue, Wed, Thu, Fri, Sat, Sun], "en-US")
 * ```
 *
 * @typeParam T - The type of the weekday array
 * @param weekdays - The array of weekdays to reorder (e.g. [Mon, Tue, Wed, Thu, Fri, Sat, Sun] or [1, 2, 3, 4, 5, 6, 7])
 * @param input - Optional locale input to determine the start of the week
 * @returns The reordered array of weekdays
 */
export const reorderWeekdaysByStart = <T extends string | WeekdayNumbers>(
  weekdays: T[],
  input?: Info.LocaleInput
): T[] => {
  if (!weekdays.length) return weekdays;
  if (weekdays.length !== 7) throw new Error("Invalid array length");

  const start = Info.getStartOfWeek(input);
  return [...weekdays.slice(start - 1), ...weekdays.slice(0, start - 1)];
};

/**
 * Converts an ISO weekday number where Monday is 1 and Sunday is 7 to a weekday number where the
 * start of the week is 1 and the end of the week is 7.
 *
 * @example
 * ```
 * // Returns 2, since Monday (1) is the 2nd day of the week in the en-US locale
 * getWeekdayOffset(1, { locale: "en-US" })
 * ```
 *
 * @param isoIndex - The ISO weekday index (1 for Monday, 7 for Sunday).
 * @param input - Optional locale input to determine the start of the week.
 * @returns The adjusted weekday index based on the custom start of the week.
 */
export const getWeekdayOffset = (isoIndex: WeekdayNumbers, input?: Info.LocaleInput) =>
  ((isoIndex - Info.getStartOfWeek(input) + 7) % 7) + 1;

/**
 * Returns an array of DateTime objects spaced one hour apart, starting at the start of
 * the given intervals and ending at the rounded-up end hour of the given intervals.
 *
 * @param intervals - The intervals to get the time range of
 * @returns An array of DateTime objects spaced one hour apart
 * @throws If the merged interval is invalid
 */
export const hoursFromIntervals = (intervals: IntervalMaybeValid[], opts?: DateTimeJSOptions) => {
  const merged = intervals.reduce((merged, current) => merged.union(current));
  if (!merged.isValid) throw new Error("Invalid interval");

  const duration = Math.ceil(merged.toDuration("hours").hours);

  // length is duration + 1, since labels are rendered at end of grid, meaning
  // there must be an extra grid row
  return Array.from({ length: duration + 1 }, (_, i) =>
    DateTime.fromObject({ hour: merged.start.hour + i }, opts)
  ).filter((dt): dt is DateTime<true> => dt.isValid);
};
