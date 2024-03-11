"use server";

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

import type { User } from "@/interfaces/database";
import { auth } from "@/lib/auth/config";
import { db } from "@/lib/db/drizzle";

export const getUser = async (): Promise<User> => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) notFound();

  return unstable_cache(
    async (userId: string) => {
      const user = await db.query.users.findFirst({ where: (u, { eq }) => eq(u.id, userId) });
      if (!user) notFound();

      return user;
    },
    ["userId"]
  )(session.user.id);
};
