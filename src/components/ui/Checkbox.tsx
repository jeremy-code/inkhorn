"use client";

import type { ComponentProps } from "react";
import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { checkbox } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(checkbox);

const Root = withProvider(styled(ArkCheckbox.Root), "root");
const Control = withContext(styled(ArkCheckbox.Control), "control");
const Indicator = withContext(styled(ArkCheckbox.Indicator), "indicator");
const Label = withContext(styled(ArkCheckbox.Label), "label");

export { Control, Indicator, Label, Root };

export type CheckboxProps = ComponentProps<typeof Root>;
export type CheckboxControlProps = ComponentProps<typeof Control>;
export type CheckboxIndicatorProps = ComponentProps<typeof Indicator>;
export type CheckboxLabelProps = ComponentProps<typeof Label>;
