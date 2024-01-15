"use client";

import { usePathname } from "next/navigation";

import { Link, LinkProps } from "@/components/ui";
import { css, cva, cx } from "@/lib/styled/css";
import { splitCssProps } from "@/lib/styled/jsx";

const navLink = cva({
  base: {
    linkDecor: false,
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
  const [cssProps, rest] = splitCssProps(props);
  const isActive = usePathname() === href;

  return (
    <Link {...rest} href={href} className={cx(navLink({ active: isActive }), css(cssProps))}>
      {children}
    </Link>
  );
};
