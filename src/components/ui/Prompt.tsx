import { XMarkIcon } from "@heroicons/react/16/solid";
import { Stack } from "styled-system/jsx";

import { Button, Dialog, IconButton } from "@/components/ui";

type PromptProps = {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;

  action?: (formData: FormData) => void;
} & Dialog.DialogProps;

export const Prompt = ({ label, title, description, children, action, ...props }: PromptProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>
        <Button>{label}</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>{title}</Dialog.Title>
              {description && <Dialog.Description>{description}</Dialog.Description>}
            </Stack>
            <form action={action}>
              {children}
              <Stack gap="3" direction="row" width="full">
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" width="full">
                    Cancel
                  </Button>
                </Dialog.CloseTrigger>
                <Button width="full" type="submit">
                  Confirm
                </Button>
              </Stack>
            </form>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XMarkIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
