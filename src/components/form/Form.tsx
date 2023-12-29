"use client";

import React, { FormHTMLAttributes, ReactNode, useEffect } from "react";
import { createToaster } from "@ark-ui/react";
import { useFormState } from "react-dom";

import { ToastComponent } from "@/components/ui";
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
 * @param action The form action (with state) that is used in `useFormState()`
 * @param onSubmitSuccess A callback that is called when the form is successfully submitted
 *                        (i.e. state.status === "ok")
 */
export const Form = ({ children, action, onSubmitSuccess, ...rest }: FormProps) => {
  const [state, formAction] = useFormState(action, null);
  const [Toaster, toast] = createToaster({
    placement: "top-end",
    render: ToastComponent,
  });

  useEffect(() => {
    if (!state) return;

    if (state.status === "ok" && onSubmitSuccess) {
      onSubmitSuccess();
    } else if (state.status === "error") {
      Object.values(state.error ?? {})
        .flat()
        .forEach((description) =>
          toast.error({
            title: "Error",
            description,
          })
        );
    }

    return () => {
      // Dismiss all toasts when the component unmounts
      toast.dismiss();
    };
  }, [onSubmitSuccess, state, toast]);

  return (
    <>
      <form action={formAction} {...rest}>
        {children}
      </form>
      <Toaster />
    </>
  );
};
