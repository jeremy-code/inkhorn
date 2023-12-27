"use server";

import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/config";

const Protected = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/404");
  }

  return <>{children}</>;
};

export default Protected;
