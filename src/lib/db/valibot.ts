import { createInsertSchema } from "drizzle-valibot";
import type { WeekdayNumbers } from "luxon";
import {
  array,
  hexColor,
  isoTimeSecond,
  maxLength,
  maxValue,
  minLength,
  minValue,
  string,
  transform,
  type Output,
  type SchemaWithTransform,
  type StringSchema,
} from "valibot";

import { courses } from "./schema";

export const insertCourseSchema = createInsertSchema(courses, {
  name: string([minLength(1), maxLength(100)]),
  weekdays: array(
    transform(string([minLength(1)]), (v) => parseInt(v), [
      minValue(1),
      maxValue(7),
      // directly setting schema type as minValue and maxValue can be used on arrays/dates/etc
    ]) as SchemaWithTransform<StringSchema, WeekdayNumbers>,
    [minLength(1), maxLength(7)]
  ),
  startTime: string([isoTimeSecond()]),
  endTime: string([isoTimeSecond()]),
  color: string([hexColor()]),
});

export type InsertCourse = Output<typeof insertCourseSchema>;
