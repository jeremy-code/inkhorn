"use client";

import type { ComponentProps } from "react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";

import { createStyleContext } from "@/lib/styled";
import { styled } from "@/lib/styled/jsx";
import { dialog } from "@/lib/styled/recipes";

const { withProvider, withContext } = createStyleContext(dialog);

const Root = withProvider(ArkDialog.Root);
const Backdrop = withContext(styled(ArkDialog.Backdrop), "backdrop");
const CloseTrigger = withContext(styled(ArkDialog.CloseTrigger), "closeTrigger");
const Content = withContext(styled(ArkDialog.Content), "content");
const Description = withContext(styled(ArkDialog.Description), "description");
const Positioner = withContext(styled(ArkDialog.Positioner), "positioner");
const Title = withContext(styled(ArkDialog.Title), "title");
const Trigger = withContext(styled(ArkDialog.Trigger), "trigger");

export { Backdrop, CloseTrigger, Content, Description, Positioner, Root, Title, Trigger };

export type DialogProps = ComponentProps<typeof Root>;
export type DialogBackdropProps = ComponentProps<typeof Backdrop>;
export type DialogCloseTriggerProps = ComponentProps<typeof CloseTrigger>;
export type DialogContentProps = ComponentProps<typeof Content>;
export type DialogDescriptionProps = ComponentProps<typeof Description>;
export type DialogPositionerProps = ComponentProps<typeof Positioner>;
export type DialogTitleProps = ComponentProps<typeof Title>;
export type DialogTriggerProps = ComponentProps<typeof Trigger>;
