"use client";

import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { toggleGroup } from "styled-system/recipes";

import { createStyleContext } from "@/lib/styled";

const { withProvider, withContext } = createStyleContext(toggleGroup);

const Root = withProvider(styled(ArkToggleGroup.Root), "root");
const Item = withContext(styled(ArkToggleGroup.Item), "item");

export { Item, Root };

export type ToggleGroupProps = HTMLStyledProps<typeof Root>;
export type ToggleGroupItemProps = HTMLStyledProps<typeof Item>;
