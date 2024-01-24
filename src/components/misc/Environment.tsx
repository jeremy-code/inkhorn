"use client";

import React, { useCallback, type ReactNode } from "react";
import { Environment as ArkEnvironment } from "@ark-ui/react";

export const Environment = ({ children }: { children: ReactNode }) => {
  const getRootNode = useCallback(() => document, []);
  return <ArkEnvironment.Root value={getRootNode}>{children}</ArkEnvironment.Root>;
};
