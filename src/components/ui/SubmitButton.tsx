"use client";

import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { css } from "styled-system/css";

import { Button, type ButtonProps } from "./Button";
import { Spinner } from "./Spinner";

type SubmitButtonProps = {
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
