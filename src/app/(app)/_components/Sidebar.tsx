import React, { ReactNode } from "react";
import { Flex, styled, type FlexProps } from "styled-system/jsx";

import { Link } from "@/components/ui";

type SidebarProps = {
  children: ReactNode;
} & FlexProps;

const NAV_ITEMS = [
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Notes",
    href: "/notes",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
];

const Sidebar = ({ children, ...rest }: SidebarProps) => {
  return (
    <Flex h="full" zIndex="banner" {...rest}>
      <styled.aside
        bg="white"
        w="15rem"
        pos="relative"
        boxShadow="md"
        // Clipping out top shadow, allow 30px in the horizontal direction for boxShadow + pseudoelement
        clipPath="inset(0 -30px)"
        _before={{
          content: '""',
          position: "absolute",
          w: "30px",
          h: "30px",
          right: "-30px",
          // a somewhat hacky way of doing an inverted border radius for the connection between navbar and sidebar
          // 32px to approximate a drop shadow of color gray (30px would be solid white with no shadow)
          radialGradient: "circle at 100% 100%, transparent 30px, token(colors.gray.3), white 32px",
        }}
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            display="block"
            px={4}
            py={2}
            borderBottomWidth="1px"
            borderBottomColor="gray.3"
            linkDecor={false}
            _hover={{
              bg: "gray.1",
            }}
          >
            {label}
          </Link>
        ))}
      </styled.aside>
      <styled.main px={4} w="full" mx="auto" h="full">
        {children}
      </styled.main>
    </Flex>
  );
};

export default Sidebar;
