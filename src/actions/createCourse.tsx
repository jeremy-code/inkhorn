"use server";

import { getUser } from "@/actions";
import { courses, db } from "@/lib";

const DAY_PREFIX = "day-of-the-week";

const createCourse = async (formData: FormData) => {
  const user = await getUser();
  if (!user?.id) return null;

  const name = formData.get("name") as string;
  if (!name) return null;

  const daysOfTheWeek = Array.from(formData.entries())
    .filter(([key, value]) => key.startsWith(DAY_PREFIX) && value === "on")
    .map(([key]) => key.slice(DAY_PREFIX.length + 1));

  if (!daysOfTheWeek.length) return null;

  return db.insert(courses).values({
    name,
    daysOfTheWeek,
    userId: user.id,
  });
};
export default createCourse;
