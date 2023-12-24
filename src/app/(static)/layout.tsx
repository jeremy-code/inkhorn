import React, { ReactNode } from "react";

import { Footer, FormButton, Navbar } from "@/components/ui";
import { signInAction } from "@/lib/auth";

const StaticLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar justify="spaced" outline="border">
        <FormButton action={signInAction}>Login</FormButton>
      </Navbar>
      {children}
      <Footer />
    </>
  );
};

export default StaticLayout;
