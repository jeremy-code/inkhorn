import { SubmitButton, type SubmitButtonProps } from "@/components/form";

type FormButtonProps = {
  action: (formData: FormData) => unknown | Promise<unknown>;
} & SubmitButtonProps;

export const FormButton = ({ action, children, ...rest }: FormButtonProps) => {
  return (
    <form action={action}>
      <SubmitButton {...rest}>{children}</SubmitButton>
    </form>
  );
};
