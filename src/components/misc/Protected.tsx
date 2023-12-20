"use server";

import React, { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

type ProtectedProps = {
  children: ReactNode;
};

const Protected = async ({ children }: ProtectedProps) => {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/404");
  }

  return <>{children}</>;
};

export default Protected;
