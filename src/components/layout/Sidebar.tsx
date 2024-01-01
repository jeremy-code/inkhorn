import { styled, type HTMLStyledProps } from "styled-system/jsx";

import { Link } from "@/components/ui";

type NavItem = {
  label: string;
  href: string;
};

const SidebarItem = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      linkDecor={false}
      px={4}
      py={2}
      display="block"
      borderBottom="1px solid token(colors.gray.3)"
      _hover={{ bg: "gray.1" }}
    >
      {label}
    </Link>
  );
};

type SidebarProps = {
  sidebarItems: NavItem[];
} & HTMLStyledProps<"aside">;

export const Sidebar = ({ children, sidebarItems, ...rest }: SidebarProps) => {
  return (
    <styled.aside
      bg="white"
      w="2xs"
      pos="relative"
      zIndex="banner"
      boxShadow="md"
      // Clipping out top shadow, allow 30px in the horizontal direction for boxShadow + pseudoelement
      clipPath="inset(0 -30px)"
      _before={{
        content: "''",
        position: "absolute",
        aspectRatio: "square",
        w: "30px",
        right: "-30px",
        // a somewhat hacky way of doing an inverted border radius for the connection between navbar
        // and sidebar 32px to approximate a drop shadow of color gray (30px would be solid white with
        // no shadow)
        radialGradient: "circle at 100% 100%, transparent 30px, token(colors.gray.3), white 32px",
      }}
      {...rest}
    >
      {sidebarItems.map((item) => (
        <SidebarItem key={item.href} {...item} />
      ))}
      {children}
    </styled.aside>
  );
};
