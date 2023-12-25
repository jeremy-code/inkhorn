import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { label } from "styled-system/recipes";

export const Label = styled(ark.label, label);
export type LabelProps = HTMLStyledProps<typeof Label>;
