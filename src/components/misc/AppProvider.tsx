"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>;
};
