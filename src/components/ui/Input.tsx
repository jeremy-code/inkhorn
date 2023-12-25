import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { input } from "styled-system/recipes";

export const Input = styled(ark.input, input);
export type InputProps = HTMLStyledProps<typeof Input>;
