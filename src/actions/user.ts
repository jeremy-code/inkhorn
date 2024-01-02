"use server";

import { cache } from "react";

import type { User } from "@/interfaces/database";
import { auth } from "@/lib/auth/config";
import { db } from "@/lib/db/drizzle";

export const getUser = cache(async (): Promise<User | null | undefined> => {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, session.user!.id),
  });
});
