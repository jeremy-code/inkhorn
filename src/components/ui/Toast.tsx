"use client";

import type { ComponentProps } from "react";
import { Toast as ArkToast } from "@ark-ui/react/toast";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { toast as toastRecipe } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(toastRecipe);

const Root = withProvider(styled(ArkToast.Root), "root");
const CloseTrigger = withContext(styled(ArkToast.CloseTrigger), "closeTrigger");
const Description = withContext(styled(ArkToast.Description), "description");
const Group = withContext(styled(ArkToast.Group), "group");
const Title = withContext(styled(ArkToast.Title), "title");

export { CloseTrigger, Description, Group, Root, Title };

export type ToastProps = ComponentProps<typeof Root>;
export type ToastCloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export type ToastDescriptionProps = ComponentProps<typeof Description>;
export type ToastGroupProps = ComponentProps<typeof Group>;
export type ToastTitleProps = ComponentProps<typeof Title>;
