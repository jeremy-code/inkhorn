"use server";

import { cache } from "react";

import { auth, db } from "@/lib";

const getUser = cache(async () => {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, session.user!.id),
    with: {
      courses: true,
    },
  });
});

export default getUser;
