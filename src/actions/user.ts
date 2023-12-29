"use server";

import { cache } from "react";

import type { User } from "@/interfaces";
import { auth, db } from "@/lib";

export const getUser = cache(async (): Promise<User | null | undefined> => {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, session.user!.id),
  });
});
