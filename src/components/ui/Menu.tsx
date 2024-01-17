import type { ComponentProps } from "react";
import { Menu as ArkMenu } from "@ark-ui/react/menu";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { menu } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(menu);

const Root = withProvider(ArkMenu.Root);
const Arrow = withContext(styled(ArkMenu.Arrow), "arrow");
const ArrowTip = withContext(styled(ArkMenu.ArrowTip), "arrowTip");
const Content = withContext(styled(ArkMenu.Content), "content");
const ContextTrigger = withContext(styled(ArkMenu.ContextTrigger), "contextTrigger");
const Item = withContext(styled(ArkMenu.Item), "item");
const ItemGroup = withContext(styled(ArkMenu.ItemGroup), "itemGroup");
const ItemGroupLabel = withContext(styled(ArkMenu.ItemGroupLabel), "itemGroupLabel");
const OptionItem = withContext(styled(ArkMenu.OptionItem), "optionItem");
const Positioner = withContext(styled(ArkMenu.Positioner), "positioner");
const Separator = withContext(styled(ArkMenu.Separator), "separator");
const Trigger = withContext(styled(ArkMenu.Trigger), "trigger");
const TriggerItem = withContext(styled(ArkMenu.TriggerItem), "triggerItem");

export {
  Arrow,
  ArrowTip,
  Content,
  ContextTrigger,
  Item,
  ItemGroup,
  ItemGroupLabel,
  OptionItem,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
};

export type MenuProps = ComponentProps<typeof Root>;
export type MenuArrowProps = ComponentProps<typeof Arrow>;
export type MenuArrowTipProps = ComponentProps<typeof ArrowTip>;
export type MenuContentProps = ComponentProps<typeof Content>;
export type MenuContextTriggerProps = ComponentProps<typeof ContextTrigger>;
export type MenuItemProps = ComponentProps<typeof Item>;
export type MenuItemGroupProps = ComponentProps<typeof ItemGroup>;
export type MenuItemGroupLabelProps = ComponentProps<typeof ItemGroupLabel>;
export type MenuOptionItemProps = ComponentProps<typeof OptionItem>;
export type MenuPositionerProps = ComponentProps<typeof Positioner>;
export type MenuSeparatorProps = ComponentProps<typeof Separator>;
export type MenuTriggerProps = ComponentProps<typeof Trigger>;
export type MenuTriggerItemProps = ComponentProps<typeof TriggerItem>;
