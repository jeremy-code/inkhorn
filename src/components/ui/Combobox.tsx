import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { combobox } from "styled-system/recipes";

import { createStyleContext } from "@/lib/styled";

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

export type ComboboxProps = HTMLStyledProps<typeof Root>;
export type ComboboxClearTriggerProps = HTMLStyledProps<typeof ClearTrigger>;
export type ComboboxContentProps = HTMLStyledProps<typeof Content>;
export type ComboboxControlProps = HTMLStyledProps<typeof Control>;
export type ComboboxInputProps = HTMLStyledProps<typeof Input>;
export type ComboboxItemProps = HTMLStyledProps<typeof Item>;
export type ComboboxItemGroupProps = HTMLStyledProps<typeof ItemGroup>;
export type ComboboxItemGroupLabelProps = HTMLStyledProps<typeof ItemGroupLabel>;
export type ComboboxItemIndicatorProps = HTMLStyledProps<typeof ItemIndicator>;
export type ComboboxItemTextProps = HTMLStyledProps<typeof ItemText>;
export type ComboboxLabelProps = HTMLStyledProps<typeof Label>;
export type ComboboxPositionerProps = HTMLStyledProps<typeof Positioner>;
export type ComboboxTriggerProps = HTMLStyledProps<typeof Trigger>;
