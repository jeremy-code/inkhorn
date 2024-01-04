import React, { type ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/config";

export const Protected = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session || !session.user) redirect("/404");

  return <>{children}</>;
};
