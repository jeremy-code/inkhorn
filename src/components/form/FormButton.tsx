import { SubmitButton, type SubmitButtonProps } from "@/components/form";

type FormButtonProps = {
  action: (formData: FormData) => unknown | Promise<unknown>;
} & SubmitButtonProps;

/**
 * Button wrapped in a form, useful for server actions that don't require input
 * but still need to be submitted as a form.
 *
 * @param action The action to perform when the button is clicked.
 * @returns A button wrapped in a form.
 */
export const FormButton = ({ action, children, ...rest }: FormButtonProps) => {
  return (
    <form action={action}>
      <SubmitButton {...rest}>{children}</SubmitButton>
    </form>
  );
};
