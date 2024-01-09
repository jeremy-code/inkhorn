"use client";

import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";

import { createStyleContext } from "@/lib/styled";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { checkbox } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(checkbox);

const Root = withProvider(styled(ArkCheckbox.Root), "root");
const Control = withContext(styled(ArkCheckbox.Control), "control");
const Indicator = withContext(styled(ArkCheckbox.Indicator), "indicator");
const Label = withContext(styled(ArkCheckbox.Label), "label");

export { Control, Indicator, Label, Root };

export type CheckboxProps = HTMLStyledProps<typeof Root>;
export type CheckboxControlProps = HTMLStyledProps<typeof Control>;
export type CheckboxIndicatorProps = HTMLStyledProps<typeof Indicator>;
export type CheckboxLabelProps = HTMLStyledProps<typeof Label>;
