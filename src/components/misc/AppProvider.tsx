"use client";

import React, { ReactNode } from "react";
import { I18nProvider } from "@react-aria/i18n";
import { ThemeProvider } from "next-themes";

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <I18nProvider>
      <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
    </I18nProvider>
  );
};
