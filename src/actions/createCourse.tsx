"use server";

import { getUser } from "@/actions";
import { courses, db } from "@/lib";

const createCourse = async (data: FormData) => {
  const user = await getUser();
  const name = data.get("name") as string;

  console.log(user, user?.id, name);

  if (!user || !user.id || !name) {
    return null;
  }

  return await db.insert(courses).values({
    name,
    userId: user.id,
  });
};

export default createCourse;
