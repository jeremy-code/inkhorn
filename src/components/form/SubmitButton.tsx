"use client";

import { useFormStatus } from "react-dom";

import { Button, Spinner, type ButtonProps } from "@/components/ui";
import { Box } from "@/lib/styled/jsx";

export type SubmitButtonProps = ButtonProps;

/**
 *
 * Button for forms with Server Actions.
 *
 * Client component to use hook `useFormStatus()`, loads spinner when loading
 *
 */
export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} {...rest}>
      {/* When pending, hide text and show spinner */}
      <Spinner isLoading={pending} pos="absolute" />
      <Box display="flex" gap="2" visibility={pending ? "hidden" : "visible"}>
        {children}
      </Box>
    </Button>
  );
};
