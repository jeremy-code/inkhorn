"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Stack } from "styled-system/jsx";

import { Button } from "@/components/ui/Button";
import * as Dialog from "@/components/ui/Dialog";
import { IconButton } from "@/components/ui/IconButton";
import { SubmitButton } from "@/components/ui/SubmitButton";

type PromptProps = {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;

  action?: (formData: FormData) => void;
} & Dialog.DialogProps;

export const Prompt = ({ label, title, description, children, action, ...props }: PromptProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)} {...props}>
      <Dialog.Trigger asChild>
        <Button>{label}</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="4" p="6">
            <Stack gap="1">
              <Dialog.Title>{title}</Dialog.Title>
              {description && <Dialog.Description>{description}</Dialog.Description>}
            </Stack>
            <form>
              {children}
              <Stack gap="3" direction="row" width="full" mt={8}>
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" width="full">
                    Cancel
                  </Button>
                </Dialog.CloseTrigger>
                <SubmitButton
                  width="full"
                  type="submit"
                  formAction={action}
                  onSubmitSuccess={() => setIsOpen(false)}
                >
                  Confirm
                </SubmitButton>
              </Stack>
            </form>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="4" right="4">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XMarkIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
