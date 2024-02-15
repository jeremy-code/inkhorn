import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
// Providers
import Discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { db } from "@/lib/db/drizzle";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub, Discord, Google],
  callbacks: {
    // Add the User ID from the database to the session's user object
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
