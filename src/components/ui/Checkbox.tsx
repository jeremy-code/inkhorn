"use client";

import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { checkbox } from "styled-system/recipes";

import { createStyleContext } from "@/utils";

const { withProvider, withContext } = createStyleContext(checkbox);

const Checkbox = withProvider(styled(ArkCheckbox.Root), "root");
const CheckboxControl = withContext(styled(ArkCheckbox.Control), "control");
const CheckboxIndicator = withContext(styled(ArkCheckbox.Indicator), "indicator");
const CheckboxLabel = withContext(styled(ArkCheckbox.Label), "label");

const Root = Checkbox;
const Control = CheckboxControl;
const Indicator = CheckboxIndicator;
const Label = CheckboxLabel;

export {
  Checkbox,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxLabel,
  Control,
  Indicator,
  Label,
  Root,
};

export type CheckboxProps = HTMLStyledProps<typeof Checkbox>;
export type CheckboxControlProps = HTMLStyledProps<typeof CheckboxControl>;
export type CheckboxIndicatorProps = HTMLStyledProps<typeof CheckboxIndicator>;
export type CheckboxLabelProps = HTMLStyledProps<typeof CheckboxLabel>;
