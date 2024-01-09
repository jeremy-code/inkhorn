"use client";

import { useFormStatus } from "react-dom";

import { Button, Spinner, type ButtonProps } from "@/components/ui";
import { css } from "@/lib/styled/css";

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
      <div
        className={css({
          visibility: pending ? "hidden" : "visible",
          opacity: pending ? 0 : 100,
        })}
      >
        {children}
      </div>
    </Button>
  );
};
