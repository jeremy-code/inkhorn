"use server";

import { cache } from "react";
import { unstable_cache } from "next/cache";
import { eq } from "drizzle-orm";
import { flatten, safeParse } from "valibot";

import { getUser } from "@/actions/user";
import type { StatefulFormAction } from "@/interfaces";
import { courses, db, insertCourseSchema, type InsertCourse } from "@/lib";

export const getCourse = cache(async (id: string) => {
  const course = await db.query.courses.findFirst({
    where: (c, { eq }) => eq(c.id, id),
  });

  if (!course) throw new Error("Course not found");

  return course;
});

export const getCourses = unstable_cache(async () => {
  const user = await getUser();
  if (!user?.id) return [];

  return await db.query.courses.findMany({
    where: (c, { eq }) => eq(c.userId, user.id),
  });
}, ["courses"]);

export const deleteCourse = async (id: string) => {
  await db.delete(courses).where(eq(courses.id, id));
};

const DAY_PREFIX = "day-of-the-week";

/**
 * Given a FormData object, parse it into a course object.
 *
 */
const parseCourse = (formData: FormData) => {
  // Convert the FormData object into a plain object (value is a string and not FormDataEntryValue)
  const course = Object.fromEntries(Array.from(formData).map(([k, v]) => [k, v.toString()]));

  // Get all the days of the week that are checked
  // a bit complicated because using checkboxes with name "day-of-the-week-day"
  const daysOfTheWeek = Object.keys(course)
    .filter((key) => key.startsWith(DAY_PREFIX) && course[key] === "on")
    .map((key) => key.slice(DAY_PREFIX.length + 1));

  return { ...course, daysOfTheWeek };
};

export const createCourse: StatefulFormAction<InsertCourse | null> = async (_state, formData) => {
  const user = await getUser();
  if (!user?.id) return { status: "error", error: { user: ["Not authorized"] }, data: null };

  const response = safeParse(insertCourseSchema, {
    ...parseCourse(formData),
    userId: user.id,
  });

  if (!response.success)
    return { status: "error", error: flatten(response.issues).nested, data: null };

  await db.insert(courses).values(response.output);

  return {
    status: "ok",
    data: response.output,
  };
};
