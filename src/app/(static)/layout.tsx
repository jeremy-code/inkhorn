import React, { ReactNode } from "react";

import { Footer, Navbar } from "./_components";

const StaticLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default StaticLayout;
