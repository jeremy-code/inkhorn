"use server";

import { cache } from "react";

import { db } from "@/lib";

const getCourse = cache(async (id: string) => {
  return await db.query.courses.findFirst({
    where: (c, { eq }) => eq(c.id, id),
  });
});

export default getCourse;
