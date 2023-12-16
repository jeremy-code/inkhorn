import React from "react";
import { container } from "styled-system/patterns";

import { Navbar } from "@/components/ui";

const AppPage = () => {
  return (
    <>
      <Navbar />
      <main className={container()}>page</main>
    </>
  );
};

export default AppPage;
