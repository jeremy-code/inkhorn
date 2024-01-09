import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";

type As = "p" | "span" | "div" | "label";

export type TextProps = {
  as?: As;
} & HTMLStyledProps<As>;

export const Text = (props: TextProps) => {
  const { as = "p", ...localProps } = props;
  const Dynamic = styled(as);

  return <Dynamic {...localProps} />;
};
