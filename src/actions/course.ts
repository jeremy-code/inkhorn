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
export const getCourses = async () => {
  const { id: userId } = await getUser();

  return unstable_cache(
    async (userId: string) =>
      await db.query.courses.findMany({ where: (c, { eq }) => eq(c.userId, userId) }),
    ["userId"],
    { tags: ["courses"] }
  )(userId);
};

export const createCourse: StatefulFormAction<InsertCourse | null> = async (_state, formData) => {
  const { id: userId } = await getUser();

  const res = safeParse(insertCourseSchema, { ...parseFormData(formData), userId });
  if (!res.success) return { status: "error", error: flatten(res.issues).nested, data: null };

  await db.insert(courses).values(res.output);

  revalidateTag("courses");

  return { status: "ok", data: res.output };
};
