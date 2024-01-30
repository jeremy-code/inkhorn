"use server";

import { db } from "@/lib/db/drizzle";

export const fetchSubjects = async (search: string) => {
  return await db.query.subjects.findMany({
    where: (s, { ilike }) => ilike(s.name, `${search}%`),
  });
};
