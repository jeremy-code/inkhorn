"use client";

import { Popover as ArkPopover } from "@ark-ui/react/popover";

import { createStyleContext } from "@/lib/styled";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
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

export type PopoverProps = HTMLStyledProps<typeof Root>;
export type PopoverAnchorProps = HTMLStyledProps<typeof Anchor>;
export type PopoverArrowProps = HTMLStyledProps<typeof Arrow>;
export type PopoverArrowTipProps = HTMLStyledProps<typeof ArrowTip>;
export type PopoverCloseTriggerProps = HTMLStyledProps<typeof CloseTrigger>;
export type PopoverContentProps = HTMLStyledProps<typeof Content>;
export type PopoverDescriptionProps = HTMLStyledProps<typeof Description>;
export type PopoverIndicatorProps = HTMLStyledProps<typeof Indicator>;
export type PopoverPositionerProps = HTMLStyledProps<typeof Positioner>;
export type PopoverTitleProps = HTMLStyledProps<typeof Title>;
export type PopoverTriggerProps = HTMLStyledProps<typeof Trigger>;
