import React, { ReactNode } from "react";

import { Navbar, Protected, Sidebar } from "./_components";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <Navbar />
      <Sidebar>{children}</Sidebar>
    </Protected>
  );
};

export default AppLayout;
