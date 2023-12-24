import React, { ReactNode } from "react";
import { styled, type HTMLStyledProps } from "styled-system/jsx";

type SidebarProps = {
  children: ReactNode;
} & HTMLStyledProps<"div">;

const Sidebar = ({ children, ...rest }: SidebarProps) => {
  return (
    <styled.main display="flex" h="full" {...rest}>
      <styled.aside
        bg="white"
        w="15rem"
        pos="relative"
        boxShadow="md"
        // Clipping out top shadow, allow 30px in the horizontal direction for boxShadow + pseudoelement
        clipPath="inset(0 -30px)"
        _after={{
          content: '""',
          position: "absolute",
          w: "30px",
          h: "30px",
          right: "-30px",
          // a somewhat hacky way of doing an inverted border radius for the connection between navbar and sidebar
          // 32px to approximate a drop shadow of color gray (30px would be solid white with no shadow)
          bg: "radial-gradient(circle at 100% 100%, transparent 30px, token(colors.gray.3), white 32px)",
        }}
      >
        Sidebar
      </styled.aside>
      {children}
    </styled.main>
  );
};

export default Sidebar;
