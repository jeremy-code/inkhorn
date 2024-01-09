import { ark } from "@ark-ui/react/factory";

import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { button } from "@/lib/styled/recipes";

export const Button = styled(ark.button, button);
export type ButtonProps = HTMLStyledProps<typeof Button>;
