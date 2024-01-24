"use client";

import type { ComponentProps } from "react";
import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { combobox } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(combobox);

const Root = withProvider(styled(ArkCombobox.Root), "root");
const ClearTrigger = withContext(styled(ArkCombobox.ClearTrigger), "clearTrigger");
const Content = withContext(styled(ArkCombobox.Content), "content");
const Control = withContext(styled(ArkCombobox.Control), "control");
const Input = withContext(styled(ArkCombobox.Input), "input");
const Item = withContext(styled(ArkCombobox.Item), "item");
const ItemGroup = withContext(styled(ArkCombobox.ItemGroup), "itemGroup");
const ItemGroupLabel = withContext(styled(ArkCombobox.ItemGroupLabel), "itemGroupLabel");
const ItemIndicator = withContext(styled(ArkCombobox.ItemIndicator), "itemIndicator");
const ItemText = withContext(styled(ArkCombobox.ItemText), "itemText");
const Label = withContext(styled(ArkCombobox.Label), "label");
const Positioner = withContext(styled(ArkCombobox.Positioner), "positioner");
const Trigger = withContext(styled(ArkCombobox.Trigger), "trigger");

export {
  ClearTrigger,
  Content,
  Control,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
};

export type ComboboxProps = ComponentProps<typeof Root>;
export type ComboboxClearTriggerProps = ComponentProps<typeof ClearTrigger>;
export type ComboboxContentProps = ComponentProps<typeof Content>;
export type ComboboxControlProps = ComponentProps<typeof Control>;
export type ComboboxInputProps = ComponentProps<typeof Input>;
export type ComboboxItemProps = ComponentProps<typeof Item>;
export type ComboboxItemGroupProps = ComponentProps<typeof ItemGroup>;
export type ComboboxItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export type ComboboxItemIndicatorProps = ComponentProps<typeof ItemIndicator>;
export type ComboboxItemTextProps = ComponentProps<typeof ItemText>;
export type ComboboxLabelProps = ComponentProps<typeof Label>;
export type ComboboxPositionerProps = ComponentProps<typeof Positioner>;
export type ComboboxTriggerProps = ComponentProps<typeof Trigger>;
