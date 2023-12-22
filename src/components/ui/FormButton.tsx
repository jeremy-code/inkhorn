import React from "react";

import { ButtonProps, SubmitButton } from "@/components/ui";

type FormButtonProps = {
  action: (data: FormData) => Promise<any>;
} & ButtonProps;

export const FormButton = ({ action, children, ...rest }: FormButtonProps) => {
  return (
    <form action={action}>
      <SubmitButton {...rest}>{children}</SubmitButton>
    </form>
  );
};
