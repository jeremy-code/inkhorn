import { createInsertSchema } from "drizzle-valibot";
import { array, maxLength, minLength, picklist, string, type Output } from "valibot";

import { days } from "@/utils/constants";
import { courses } from "./schema";

export const insertCourseSchema = createInsertSchema(courses, {
  name: string([minLength(1), maxLength(100)]),
  daysOfTheWeek: array(picklist(days), [minLength(1), maxLength(7)]),
});

export type InsertCourse = Output<typeof insertCourseSchema>;
