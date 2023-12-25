import NextLink from "next/link";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import { link } from "styled-system/recipes";

export const Link = styled(NextLink, link);
export type LinkProps = HTMLStyledProps<typeof Link>;
