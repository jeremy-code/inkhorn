"use server";

import { revalidateTag, unstable_cache } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { flatten, safeParse } from "valibot";

import type { StatefulFormAction } from "@/interfaces/actions";
import { courses, db, insertCourseSchema, type InsertCourse } from "@/lib/db";
import { parseFormData } from "@/utils/common";
import { getUser } from "@/actions/user";

// Return the course with the given id
export const getCourse = unstable_cache(
  async (id: number) => {
    const course = await db.query.courses.findFirst({ where: (c, { eq }) => eq(c.id, id) });
    if (!course) notFound();

    return course;
  },
  ["id"]
);

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
  undefined,
  { tags: ["courses"] }
);

export const createCourse: StatefulFormAction<InsertCourse | null> = async (_state, formData) => {
  const user = await getUser();
  if (!user?.id) return { status: "error", error: { user: ["Not authorized"] }, data: null };

  const { success, output, issues } = safeParse(insertCourseSchema, {
    ...parseFormData(formData),
    userId: user.id,
  });

  if (!success) return { status: "error", error: flatten(issues).nested, data: null };

  await db.insert(courses).values(output);

  revalidateTag("courses");

  return { status: "ok", data: output };
};
