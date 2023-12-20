"use server";

import { auth, prisma } from "@/lib";

const getUser = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      courses: true,
    },
  });
};

export default getUser;
