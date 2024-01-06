"use server";

import { revalidateTag, unstable_cache } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { flatten, safeParse } from "valibot";

import { getUser } from "@/actions/user";
import type { StatefulFormAction } from "@/interfaces/actions";
import { courses, db, insertCourseSchema, type InsertCourse } from "@/lib/db";
import { parseCourse } from "@/utils/course";

// Return the course with the given id
export const getCourse = async (id: number) => {
  const course = await db.query.courses.findFirst({ where: (c, { eq }) => eq(c.id, id) });
  if (!course) notFound();

  return course;
};

// Delete the course with the given id
export const deleteCourse = async (id: number) => {
  await db.delete(courses).where(eq(courses.id, id));
  revalidateTag("courses");
  // necessary because if in intercepted route or current page, may break
  redirect("/courses");
};

// Return all the courses of the current user
export const getCourses = unstable_cache(
  async () => {
    const user = await getUser();

    return await db.query.courses.findMany({ where: (c, { eq }) => eq(c.userId, user.id) });
  },
  ["courses"],
  { tags: ["courses"] }
);

export const createCourse: StatefulFormAction<InsertCourse | null> = async (_state, formData) => {
  const user = await getUser();
  if (!user?.id) return { status: "error", error: { user: ["Not authorized"] }, data: null };

  const response = safeParse(insertCourseSchema, { ...parseCourse(formData), userId: user.id });

  if (!response.success)
    return { status: "error", error: flatten(response.issues).nested, data: null };

  await db.insert(courses).values(response.output);

  revalidateTag("courses");

  return { status: "ok", data: response.output };
};
