"use server";

import { signIn, signOut } from "@/lib/auth/config";

export const signInAction = async () => {
  await signIn(undefined, {
    redirectTo: "/app",
  });
};

export const signOutAction = async () => {
  await signOut({
    redirectTo: "/",
  });
};
