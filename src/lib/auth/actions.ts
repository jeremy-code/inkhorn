"use server";

import { redirect } from "next/navigation";

import { auth, signIn, signOut } from "@/lib/auth/config";

export const signInAction = async () => {
  const session = await auth();
  if (session?.user) redirect("/courses");

  await signIn(undefined, {
    redirectTo: "/courses",
  });
};

export const signOutAction = async () => {
  await signOut({
    redirectTo: "/",
  });
};
