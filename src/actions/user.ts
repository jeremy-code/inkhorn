"use server";

import { cache } from "react";
import { notFound } from "next/navigation";

import type { User } from "@/interfaces/database";
import { auth } from "@/lib/auth/config";
import { db } from "@/lib/db/drizzle";

export const getUser = cache(async (): Promise<User> => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) notFound();

  const { id: userId } = session.user;

  const user = await db.query.users.findFirst({ where: (u, { eq }) => eq(u.id, userId) });
  if (!user) notFound();

  return user;
});
