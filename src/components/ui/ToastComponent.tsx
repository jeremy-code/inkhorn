"use client";

import type { CreateToasterProps } from "@ark-ui/react/toast";
import { XIcon } from "lucide-react";

import { IconButton, Toast } from "@/components/ui";

// Somewhat more organized than putting everything in @/components/Toast.tsx
// Also, prevents some bugs with server components and conditional rendering
export const ToastComponent: CreateToasterProps["render"] = (toast) => {
  const { rootProps, titleProps, descriptionProps, closeTriggerProps, title, description } = toast;

  return (
    <Toast.Root {...rootProps}>
      <Toast.Title {...titleProps}>{title}</Toast.Title>
      <Toast.Description {...descriptionProps}>{description}</Toast.Description>
      <Toast.CloseTrigger asChild {...closeTriggerProps}>
        <IconButton size="sm" variant="link" aria-label="Close Toast">
          <XIcon />
        </IconButton>
      </Toast.CloseTrigger>
    </Toast.Root>
  );
};
