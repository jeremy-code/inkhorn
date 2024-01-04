import Image from "next/image";
import { cva } from "styled-system/css";
import { styled, type HTMLStyledProps } from "styled-system/jsx";

import { Link } from "@/components/ui";
import { logo } from "@/assets";

const navbar = cva({
  base: {
    py: 4,
    w: "full",
    display: "flex",
    alignItems: "center",
    maxWidth: "8xl",
    mx: "auto",
    px: { base: 4, md: 6, lg: 8 },
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

export const Navbar = styled(({ children, ...props }: HTMLStyledProps<"header">) => {
  return (
    <styled.header {...props}>
      <Link href="/" fontWeight="medium" fontSize="lg" display="flex" linkDecor={false}>
        <Image src={logo} alt="inkhorn logo" width={15} height={15} priority />
        inkhorn
      </Link>
      {children}
    </styled.header>
  );
}, navbar);

export type NavbarProps = HTMLStyledProps<typeof Navbar>;
