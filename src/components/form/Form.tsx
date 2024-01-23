"use client";

import React, { useEffect, type FormHTMLAttributes, type ReactNode } from "react";
import { createToaster } from "@ark-ui/react/toast";
import { useFormState } from "react-dom";

import { ToastComponent } from "@/components/ui";
import type { StatefulFormAction } from "@/interfaces/actions";

type FormProps<T> = {
  children?: ReactNode;
  action: StatefulFormAction<T>;
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
export const Form = <T,>({ children, action, onSubmitSuccess, ...rest }: FormProps<T>) => {
  const [state, formAction] = useFormState(action, null);
  const [Toaster, toast] = createToaster({ placement: "top-end", render: ToastComponent });

  useEffect(() => {
    if (!state) return;
    const { status, error } = state;

    if (status === "ok" && onSubmitSuccess) {
      onSubmitSuccess();
    } else if (status === "error" && !!error) {
      Object.values(error)
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
