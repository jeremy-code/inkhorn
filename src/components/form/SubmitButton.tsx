"use client";

import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { css } from "styled-system/css";

import { Button, Spinner, type ButtonProps } from "@/components/ui";

export type SubmitButtonProps = {
  onSubmitSuccess?: () => void;
} & ButtonProps;

/**
 *
 * Button for forms with Server Actions.
 *
 * Client component to use hook (`useFormStatus()`), loads spinner when loading
 *
 * @param onSubmitSuccess Function that fires after form action has completed and isn't pending
 *
 */
export const SubmitButton = ({ children, onSubmitSuccess, ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  const prevPendingState = useRef(false);

  // Since useFormStatus doeesn't return anything when complete, just makes pending false again
  // Checks when the pending variable has reverted to False after being true
  // And then fires the onSubmitSuccess() function
  useEffect(() => {
    if (onSubmitSuccess) {
      if (prevPendingState.current && !pending) {
        onSubmitSuccess();
      }
      prevPendingState.current = pending;
    }
  }, [pending, onSubmitSuccess]);

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
