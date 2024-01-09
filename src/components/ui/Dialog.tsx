"use client";

import { Dialog as ArkDialog } from "@ark-ui/react/dialog";

import { createStyleContext } from "@/lib/styled";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
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

export type DialogProps = HTMLStyledProps<typeof Root>;
export type DialogBackdropProps = HTMLStyledProps<typeof Backdrop>;
export type DialogCloseTriggerProps = HTMLStyledProps<typeof CloseTrigger>;
export type DialogContentProps = HTMLStyledProps<typeof Content>;
export type DialogDescriptionProps = HTMLStyledProps<typeof Description>;
export type DialogPositionerProps = HTMLStyledProps<typeof Positioner>;
export type DialogTitleProps = HTMLStyledProps<typeof Title>;
export type DialogTriggerProps = HTMLStyledProps<typeof Trigger>;
