import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { formLabel } from "styled-system/recipes";

export const Label = styled(ark.label, formLabel);
export type LabelProps = HTMLStyledProps<typeof Label>;
