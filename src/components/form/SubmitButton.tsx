"use client";

import { useFormStatus } from "react-dom";

import { Button, Spinner, type ButtonProps } from "@/components/ui";
import { cva } from "@/lib/styled/css";
import { styled } from "@/lib/styled/jsx";

const submitButtonLabel = cva({
  variants: {
    pending: {
      true: { visibility: "hidden", opacity: 0 },
      false: { visibility: "visible", opacity: 100 },
    },
  },
});

const Label = styled("div", submitButtonLabel);

export type SubmitButtonProps = ButtonProps;

/**
 *
 * Button for forms with Server Actions.
 *
 * Client component to use hook (`useFormStatus()`), loads spinner when loading
 *
 */
export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} disabled={pending} {...rest}>
      {/* When pending, hide text and show spinner */}
      <Spinner isLoading={pending} position="absolute" />
      <Label pending={pending}>{children}</Label>
    </Button>
  );
};
