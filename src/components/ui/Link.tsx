import NextLink from "next/link";

import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { link } from "@/lib/styled/recipes";

export const Link = styled(NextLink, link);
export type LinkProps = HTMLStyledProps<typeof Link>;
