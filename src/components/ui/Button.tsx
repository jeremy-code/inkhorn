import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { button } from "styled-system/recipes";

export type ButtonProps = HTMLStyledProps<typeof Button>;

export const Button = styled(ark.button, button);
