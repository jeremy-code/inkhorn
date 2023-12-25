import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { iconButton } from "styled-system/recipes";

export const IconButton = styled(ark.button, iconButton);
export type IconButtonProps = HTMLStyledProps<typeof IconButton>;
