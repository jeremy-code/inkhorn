import React, { type ReactNode } from "react";

import { Sidebar } from "@/components/layout";
import { Protected } from "@/components/misc";
import { Flex, styled } from "@/lib/styled/jsx";
import { NAV_ITEMS } from "@/utils/constants";
import { Navbar } from "./_components";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <Navbar h="16" />
      {/* Full screen minus height of navbar (4rem or 16) */}
      <Flex h="calc(100% - token(sizes.16))">
        <Sidebar sidebarItems={NAV_ITEMS} />
        <styled.main w="full" h="full" p={8}>
          {children}
        </styled.main>
      </Flex>
    </Protected>
  );
};

export default AppLayout;
