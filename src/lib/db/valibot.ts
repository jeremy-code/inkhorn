import { createInsertSchema } from "drizzle-valibot";
import type { WeekdayNumbers } from "luxon";
import {
  array,
  coerce,
  hexColor,
  integer,
  isoTimeSecond,
  maxLength,
  maxValue,
  minLength,
  minValue,
  number,
  string,
  type NumberSchema,
  type Output,
} from "valibot";

import { courses } from "./schema";

export const insertCourseSchema = createInsertSchema(courses, {
  name: string([minLength(1), maxLength(100)]),
  startTime: string([isoTimeSecond()]),
  endTime: string([isoTimeSecond()]),
  color: string([hexColor()]),
  weekdays: array(
    coerce(number([integer(), minValue(1), maxValue(7)]), Number) as NumberSchema<WeekdayNumbers>,
    [(minLength(1), maxLength(7))]
  ),
});

export type InsertCourse = Output<typeof insertCourseSchema>;
