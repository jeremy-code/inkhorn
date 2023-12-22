import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { db } from "@/lib";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db),
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
