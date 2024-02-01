"use client";

import { useTheme } from "next-themes";

import { IconButton } from "@/components/ui";
import { useMounted } from "@/hooks/useMounted";

export const ToggleDarkMode = () => {
  const mounted = useMounted();
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <IconButton colorPalette="gray" onClick={toggleTheme}>
      {isDark ? "☀️" : "🌙"}
    </IconButton>
  );
};
