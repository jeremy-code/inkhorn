import React, { ReactNode } from "react";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";

type SidebarProps = {
  children: ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <styled.main display="flex" h="full">
      <div
        className={css({
          bg: "white",
          width: "15rem",
          flex: "0 0 auto",
          boxShadow: "md",
          position: "relative",
          // clipping out the top boxShadow
          // Alternative would be making a custom boxShadow which would be long and wordy
          clipPath: "inset(0px -30px 0px 0px)",
          // Pseudo element for inverted radius between Navbar and Sidebar
          _after: {
            content: '""',
            position: "absolute",
            w: "30px",
            h: "30px",
            right: "-30px",
            bg: "radial-gradient(circle at 100% 100%, transparent 30px, #d6d3d1 31px, white 31px)",
          },
        })}
      >
        Sidebar
      </div>
      {children}
    </styled.main>
  );
};

export default Sidebar;
