"use server";

import { redirect } from "next/navigation";

import { auth, signIn, signOut } from "@/lib/auth/config";

const SIGN_IN_REDIRECT = "/courses";
const SIGN_OUT_REDIRECT = "/";

export const signInAction = async () => {
  const session = await auth();
  if (session?.user) redirect(SIGN_IN_REDIRECT);

  await signIn(undefined, { redirectTo: SIGN_IN_REDIRECT });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: SIGN_OUT_REDIRECT });
};
