import Image from "next/image";

import { Link } from "@/components/ui";
import { cva } from "@/lib/styled/css";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { logo } from "@/assets";

const navbar = cva({
  base: {
    py: 4,
    w: "full",
    maxW: "8xl",
    display: "flex",
    alignItems: "center",
    mx: "auto",
    px: { base: 4, md: 6, lg: 8 },
  },
  variants: {
    justify: {
      center: { justifyContent: "center" },
      spaced: { justifyContent: "space-between" },
    },
    outline: {
      border: { borderBottom: "muted" },
      shadow: { boxShadow: "md" },
    },
  },
});

export const Navbar = styled(({ children, ...props }: HTMLStyledProps<"header">) => {
  return (
    <styled.header {...props}>
      <Link href="/" fontWeight="medium" fontSize="lg" display="flex" linkDecor={false}>
        <Image src={logo} alt="inkhorn logo" width={16} height={16} priority />
        inkhorn
      </Link>
      {children}
    </styled.header>
  );
}, navbar);

export type NavbarProps = HTMLStyledProps<typeof Navbar>;
