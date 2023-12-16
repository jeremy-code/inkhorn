import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClientSingleton = () => {
  // temporary fix due to Prisma auth adapter type error
  // see https://github.com/nextauthjs/next-auth/issues/9413
  return new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
