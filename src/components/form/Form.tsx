"use client";

import React, { FormHTMLAttributes, ReactNode, useEffect } from "react";
import { useFormState } from "react-dom";

import { toast, Toaster } from "@/components/ui";
import type { StatefulFormAction } from "@/interfaces";

type FormProps = {
  children?: ReactNode;
  action: StatefulFormAction<any>;
  onSubmitSuccess?: () => void;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "action">;

/**
 * A wrapper around the native form element that handles form submission and error handling. For
 * all errors, a toast notification is shown.
 *
 * @param children The form elements
 * @param action The form action
 * @param onSubmitSuccess A callback that is called when the form is successfully submitted
 *                        (state.status === "ok")
 */
export const Form = ({ children, action, onSubmitSuccess, ...rest }: FormProps) => {
  const [state, formAction] = useFormState(action, null);

  useEffect(() => {
    if (state?.status === "error") {
      Object.values(state?.error || {})
        .flat()
        .forEach((description) =>
          toast.error({
            title: "Error",
            description,
          })
        );
    } else if (state?.status === "ok" && onSubmitSuccess) {
      onSubmitSuccess();
    }
  }, [onSubmitSuccess, state]);

  return (
    <>
      <form action={formAction} {...rest}>
        {children}
      </form>
      <Toaster />
    </>
  );
};
