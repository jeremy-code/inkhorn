import React, { ReactNode } from "react";
import { Flex, styled } from "styled-system/jsx";

import { Sidebar } from "@/components/layout";
import { Protected } from "@/components/misc";
import { Navbar } from "./_components";

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

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <Navbar />
      {/* Full screen minus height of navbar (4rem or 16) */}
      <Flex h="calc(100% - 4rem)">
        <Sidebar sidebarItems={NAV_ITEMS} />
        <styled.main w="full" h="full" p={8}>
          {children}
        </styled.main>
      </Flex>
    </Protected>
  );
};

export default AppLayout;
