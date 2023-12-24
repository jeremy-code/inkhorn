import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { cva } from "styled-system/css";
import { splitCssProps, styled } from "styled-system/jsx";
import { container, hstack } from "styled-system/patterns";

import { logo } from "@/assets";

const navbar = cva({
  base: {
    p: 4,
    w: "full",
    display: "flex",
    alignItems: "center",
  },
  variants: {
    justify: {
      center: {
        justifyContent: "center",
      },
      spaced: {
        justifyContent: "space-between",
      },
    },
    outline: {
      border: {
        borderBottom: "1px solid token(colors.gray.4)",
      },
      shadow: {
        boxShadow: "md",
      },
    },
  },
});

type NavbarProps = {
  children?: ReactNode;
};

export const Navbar = styled(({ children, ...props }: NavbarProps) => {
  const [cssProps, rest] = splitCssProps(props);

  return (
    <header className={container(cssProps)} {...rest}>
      <Link href="/courses" className={hstack({ fontWeight: "bold" })}>
        <Image src={logo} alt="inkhorn logo" width={15} height={15} />
        inkhorn
      </Link>
      {children}
    </header>
  );
}, navbar);
