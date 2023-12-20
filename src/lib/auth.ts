import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { prisma } from "@/lib/database";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    // Add the user id from the database to the session's user object
    async session({ session, user }) {
      if (session && session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});

export const signInAction = async () => {
  "use server";
  await signIn(undefined, {
    redirectTo: "/app",
  });
};

export const signOutAction = async () => {
  "use server";
  await signOut();
};
