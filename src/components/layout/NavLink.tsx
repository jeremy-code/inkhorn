"use client";

import { usePathname } from "next/navigation";

import { Link, type LinkProps } from "@/components/ui";
import { css, cva, cx } from "@/lib/styled/css";
import { splitCssProps } from "@/lib/styled/jsx";

const navLink = cva({
  base: {
    underline: "none",
    fontWeight: "normal",
    rounded: "l2",
    px: 3,
    h: "10",
  },
  variants: {
    active: {
      true: {
        color: "fg.default",
        bg: { base: "bg.muted", _hover: "bg.emphasized" },
        "& > svg": { color: "fg.muted" },
      },
      false: {
        color: "fg.muted",
        bg: { base: "bg.subtle", _hover: "bg.muted" },
        "& > svg": { color: "fg.subtle" },
      },
    },
  },
  defaultVariants: { active: false },
});

export const NavLink = ({ children, href, ...props }: LinkProps) => {
  const [{ css: cssProp, ...styleProps }, rest] = splitCssProps(props);
  // /courses/1/2/3 -> /courses
  const active = usePathname().startsWith(`${href}`);

  return (
    <Link {...rest} href={href} className={cx(navLink({ active }), css(styleProps, cssProp))}>
      {children}
    </Link>
  );
};
