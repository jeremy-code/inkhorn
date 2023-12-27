import React, { ReactNode } from "react";

import { FormButton } from "@/components/form";
import { Footer, Navbar } from "@/components/ui";
import { signInAction } from "@/actions/auth";

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
