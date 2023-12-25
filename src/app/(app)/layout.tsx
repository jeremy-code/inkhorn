import React, { ReactNode } from "react";

import { Navbar, Protected, Sidebar } from "./_components";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <Navbar />
      {/* Full height minus Navbar height (4rem) */}
      <Sidebar h="calc(100% - 4rem)">{children}</Sidebar>
    </Protected>
  );
};

export default AppLayout;
