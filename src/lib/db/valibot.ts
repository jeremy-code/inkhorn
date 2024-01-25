import { createInsertSchema } from "drizzle-valibot";
import type { WeekdayNumbers } from "luxon";
import {
  array,
  hexColor,
  isoTimeSecond,
  maxLength,
  minLength,
  string,
  transform,
  type Output,
} from "valibot";

import { courses } from "./schema";

// type predicate to check if a number is a weekday number
const isWeekdayNumber = (num: number): num is WeekdayNumbers => num >= 1 && num <= 7;

export const insertCourseSchema = createInsertSchema(courses, {
  name: string([minLength(1), maxLength(100)]),
  startTime: string([isoTimeSecond()]),
  endTime: string([isoTimeSecond()]),
  color: string([hexColor()]),
  weekdays: array(
    transform(
      // transforms string to integer
      transform(string([minLength(1)]), (v) => parseInt(v)),
      // asserts that the integer is a weekday number
      (v) => {
        if (!isWeekdayNumber(v)) {
          throw new Error("Invalid weekday number");
        }
        return v;
      }
    ),
    [(minLength(1), maxLength(7))]
  ),
});

export type InsertCourse = Output<typeof insertCourseSchema>;
