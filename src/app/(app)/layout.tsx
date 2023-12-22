import React, { ReactNode } from "react";

import { Navbar, Protected } from "./_components";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <Navbar />
      {children}
    </Protected>
  );
};

export default AppLayout;
