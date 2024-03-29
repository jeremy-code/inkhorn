import { useMemo } from "react";

import { styled, type HTMLStyledProps, type StyledComponent } from "@/lib/styled/jsx";
import { text, type TextVariantProps } from "@/lib/styled/recipes";

type As = "p" | "span" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextProps = {
  as?: As;
} & TextVariantProps &
  HTMLStyledProps<As>;

export const Text = (props: TextProps) => {
  const { as = "p", ...localProps } = props;
  const Dynamic = useMemo(() => styled(as, text) as StyledComponent<As>, [as]);

  return <Dynamic {...localProps} />;
};
