import { ark } from "@ark-ui/react/factory";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { badge } from "styled-system/recipes";

export const Badge = styled(ark.div, badge);
export type BadgeProps = HTMLStyledProps<typeof Badge>;
