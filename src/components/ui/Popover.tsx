"use client";

import type { ComponentProps } from "react";
import { Popover as ArkPopover } from "@ark-ui/react/popover";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { popover } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(popover);

const Root = withProvider(ArkPopover.Root);
const Anchor = withContext(styled(ArkPopover.Anchor), "anchor");
const Arrow = withContext(styled(ArkPopover.Arrow), "arrow");
const ArrowTip = withContext(styled(ArkPopover.ArrowTip), "arrowTip");
const CloseTrigger = withContext(styled(ArkPopover.CloseTrigger), "closeTrigger");
const Content = withContext(styled(ArkPopover.Content), "content");
const Description = withContext(styled(ArkPopover.Description), "description");
const Indicator = withContext(styled(ArkPopover.Indicator), "indicator");
const Positioner = withContext(styled(ArkPopover.Positioner), "positioner");
const Title = withContext(styled(ArkPopover.Title), "title");
const Trigger = withContext(styled(ArkPopover.Trigger), "trigger");

export {
  Anchor,
  Arrow,
  ArrowTip,
  CloseTrigger,
  Content,
  Description,
  Indicator,
  Positioner,
  Root,
  Title,
  Trigger,
};

export type PopoverProps = ComponentProps<typeof Root>;
export type PopoverAnchorProps = ComponentProps<typeof Anchor>;
export type PopoverArrowProps = ComponentProps<typeof Arrow>;
export type PopoverArrowTipProps = ComponentProps<typeof ArrowTip>;
export type PopoverCloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export type PopoverContentProps = ComponentProps<typeof Content>;
export type PopoverDescriptionProps = ComponentProps<typeof Description>;
export type PopoverIndicatorProps = ComponentProps<typeof Indicator>;
export type PopoverPositionerProps = ComponentProps<typeof Positioner>;
export type PopoverTitleProps = ComponentProps<typeof Title>;
export type PopoverTriggerProps = ComponentProps<typeof Trigger>;
