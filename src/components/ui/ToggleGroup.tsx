"use client";

import type { ComponentProps } from "react";
import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { toggleGroup } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(toggleGroup);

const Root = withProvider(styled(ArkToggleGroup.Root), "root");
const Item = withContext(styled(ArkToggleGroup.Item), "item");

export { Item, Root };

export type ToggleGroupProps = ComponentProps<typeof Root>;
export type ToggleGroupItemProps = ComponentProps<typeof Item>;
