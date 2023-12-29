import { createInsertSchema } from "drizzle-valibot";
import { array, maxLength, minLength, Output, picklist, string } from "valibot";

import { courses } from "./schema";

export const insertCourseSchema = createInsertSchema(courses, {
  name: string([minLength(1), maxLength(255)]),
  daysOfTheWeek: array(
    picklist(["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"]),
    [minLength(1), maxLength(7)]
  ),
});

export type InsertCourse = Output<typeof insertCourseSchema>;
