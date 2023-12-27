"use server";

import { cache } from "react";
import { z } from "zod";

import { getUser } from "@/actions/user";
import type { StatefulFormAction } from "@/interfaces";
import { courses, db } from "@/lib";

export const getCourse = cache(async (id: string) => {
  return await db.query.courses.findFirst({
    where: (c, { eq }) => eq(c.id, id),
  });
});

const DAY_PREFIX = "day-of-the-week";

const courseSchema = z.object({
  name: z.string().min(1).max(255),
  daysOfTheWeek: z.array(z.string()).min(1).max(7),
});

/**
 * Given a FormData object, parse it into a course object.
 *
 */
const parseCourse = (formData: FormData) => {
  const course = Object.fromEntries(
    Array.from(formData).map(([key, value]) => [key, value.toString()])
  );

  const daysOfTheWeek = Object.keys(course)
    .filter((key) => key.startsWith(DAY_PREFIX) && course[key] === "on")
    .map((key) => key.slice(DAY_PREFIX.length + 1));

  return courseSchema.safeParse({ ...course, daysOfTheWeek });
};

type ParsedCourse = z.infer<typeof courseSchema> | null;

export const createCourse: StatefulFormAction<ParsedCourse> = async (_state, formData) => {
  const user = await getUser();
  if (!user?.id) return { status: "error", error: { user: ["Not authorized"] }, data: null };

  const response = parseCourse(formData);

  if (!response.success)
    return { status: "error", error: response.error.flatten().fieldErrors, data: null };

  const { data: course } = response;

  await db.insert(courses).values({
    ...course,
    userId: user.id,
  });

  return {
    status: "ok",
    data: course,
  };
};
