"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Select } from "@/components/ui";
import { useHydrated } from "@/hooks";

export const ToggleDarkMode = () => {
  const { setTheme, theme, themes } = useTheme();
  const hydrated = useHydrated();

  if (!hydrated || !theme) return null;

  return (
    <Select.Root
      items={themes}
      defaultValue={[theme]}
      onValueChange={({ value }) => setTheme(value[0])}
      positioning={{ sameWidth: true }}
      width="2xs"
    >
      <Select.Label>Theme</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a theme" />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup id="theme">
            <Select.ItemGroupLabel htmlFor="theme">Theme</Select.ItemGroupLabel>
            {themes.map((theme) => (
              <Select.Item key={theme} item={theme}>
                <Select.ItemText>{theme}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
