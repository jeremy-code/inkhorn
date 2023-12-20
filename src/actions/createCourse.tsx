"use server";

import { getUser } from "@/actions";
import { prisma } from "@/lib";

const createCourse = async (data: FormData) => {
  const user = await getUser();
  const name = data.get("name") as string;

  if (!user || user.id || !name) {
    return null;
  }

  return await prisma.course.create({
    data: {
      name,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
};

export default createCourse;
