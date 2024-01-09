import { ark } from "@ark-ui/react/factory";

import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { input } from "@/lib/styled/recipes";

export const Input = styled(ark.input, input);
export type InputProps = HTMLStyledProps<typeof Input>;
