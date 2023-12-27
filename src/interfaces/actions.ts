// generic Action type, used directly in <form> or <button> elements
export type Action = (formData: FormData) => void | Promise<void>;

// Action type, given state, returns new state, used in useFormState()
export type StatefulAction<State> = (
  state: Awaited<State>,
  formData: FormData
) => State | Promise<State>;

// Reusable state type to provide status and data for an action
export type FormState<Data> = {
  status: "error" | "ok";
  data: Data;
  error?: {
    [key: string]: string[];
  };
} | null;

// Action type that will return the above FormState, used in useFormState()
export type StatefulFormAction<Data> = StatefulAction<FormState<Data>>;
