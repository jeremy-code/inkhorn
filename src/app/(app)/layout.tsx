import React, { type ReactNode } from "react";

import { Sidebar, SidebarContent } from "@/components/layout";
import { Protected } from "@/components/misc";
import { Flex, styled } from "@/lib/styled/jsx";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <Flex h="full">
        <Sidebar>
          <SidebarContent />
        </Sidebar>
        <styled.main w="full" h="full">
          {children}
        </styled.main>
      </Flex>
    </Protected>
  );
};

export default AppLayout;
