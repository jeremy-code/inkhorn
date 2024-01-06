"use server";

import { cache } from "react";
import { notFound } from "next/navigation";

import type { User } from "@/interfaces/database";
import { auth } from "@/lib/auth/config";
import { db } from "@/lib/db/drizzle";

export const getUser = cache(async (): Promise<User> => {
  const session = await auth();

  if (!session || !session.user) notFound();

  const user = await db.query.users.findFirst({ where: (u, { eq }) => eq(u.id, session.user!.id) });
  if (!user) notFound();

  return user;
});
