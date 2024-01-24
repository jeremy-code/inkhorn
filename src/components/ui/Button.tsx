import type { ComponentProps } from "react";
import { ark } from "@ark-ui/react/factory";

import { styled } from "@/lib/styled/jsx";
import { button } from "@/lib/styled/recipes";

export const Button = styled(ark.button, button);
export type ButtonProps = ComponentProps<typeof Button>;
