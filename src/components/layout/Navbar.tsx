import Image from "next/image";

import { Link } from "@/components/ui";
import { css, cva } from "@/lib/styled/css";
import { styled, type HTMLStyledProps } from "@/lib/styled/jsx";
import { logo } from "@/assets";

const navbar = cva({
  base: {
    py: 4,
    w: "full",
    maxW: "8xl",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mx: "auto",
    px: { base: 4, md: 6, lg: 8 },
  },
});

export const Navbar = styled(({ children, ...props }: HTMLStyledProps<"header">) => {
  return (
    <styled.header {...props}>
      <Link href="/" textStyle="lg" underline="none">
        <Image src={logo} alt="Inkhorn Logo" height={16} priority className={css({ w: "auto" })} />
        inkhorn
      </Link>
      {children}
    </styled.header>
  );
}, navbar);

export type NavbarProps = HTMLStyledProps<typeof Navbar>;
