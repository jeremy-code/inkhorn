"use client";

import React, { useCallback, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import { Form, SubmitButton } from "@/components/form";
import { Button, Dialog, IconButton } from "@/components/ui";
import type { StatefulFormAction } from "@/interfaces/actions";
import { Stack } from "@/lib/styled/jsx";

type PromptProps = {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
  action: StatefulFormAction<any>;
} & Dialog.DialogProps;

/**
 * A wrapper around the Dialog component that handles form submission and error handling. For all
 * errors, a toast notification is shown.
 *
 * @param label The label of the button that opens the dialog
 * @param title The title of the dialog
 * @param description The description of the dialog
 * @param children The form elements
 * @param action The form action (with state)
 */
export const Prompt = ({ label, title, description, children, action, ...props }: PromptProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmitSuccess = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
      closeOnEscapeKeyDown={false}
      closeOnInteractOutside={false}
      // necessary to ensure form and `isOpen` state are reset on close
      unmountOnExit
      {...props}
    >
      <Dialog.Trigger asChild>
        <Button py={2}>{label}</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="4" p="6">
            <Stack gap="1">
              <Dialog.Title>{title}</Dialog.Title>
              {description && <Dialog.Description>{description}</Dialog.Description>}
            </Stack>
            {/* Since there should only ever be one prompt at a time and the submit button
             /* has to be nested inside a stack, using the id here is ok and necessary */}
            <Form id="prompt-form" action={action} onSubmitSuccess={onSubmitSuccess}>
              {children}
              <Stack gap="3" direction="row" w="full" mt={6}>
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" w="full">
                    Cancel
                  </Button>
                </Dialog.CloseTrigger>
                {/* Closes Dialog after completion */}
                {/* FormTarget = "prompt-form" based on <Form /> id prop*/}
                <SubmitButton w="full" type="submit" formTarget="prompt-form">
                  Confirm
                </SubmitButton>
              </Stack>
            </Form>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="4" right="4">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <X />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
