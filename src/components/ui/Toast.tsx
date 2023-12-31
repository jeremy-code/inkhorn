"use client";

import { Toast as ArkToast } from "@ark-ui/react/toast";

import { createStyleContext } from "@/lib/styled";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { toast as toastRecipe } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(toastRecipe);

const Root = withProvider(styled(ArkToast.Root), "root");
const CloseTrigger = withContext(styled(ArkToast.CloseTrigger), "closeTrigger");
const Description = withContext(styled(ArkToast.Description), "description");
const Group = withContext(styled(ArkToast.Group), "group");
const Title = withContext(styled(ArkToast.Title), "title");

export { CloseTrigger, Description, Group, Root, Title };

export type ToastProps = HTMLStyledProps<typeof Root>;
export type ToastCloseTriggerProps = HTMLStyledProps<typeof CloseTrigger>;
export type ToastDescriptionProps = HTMLStyledProps<typeof Description>;
export type ToastGroupProps = HTMLStyledProps<typeof Group>;
export type ToastTitleProps = HTMLStyledProps<typeof Title>;
