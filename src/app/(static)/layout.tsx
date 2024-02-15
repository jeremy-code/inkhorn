import React, { type ReactNode } from "react";

import { FormButton } from "@/components/form";
import { Footer, Navbar } from "@/components/layout";
import { HStack } from "@/lib/styled/jsx";
import { signInAction } from "@/actions/auth";

const StaticLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar>
        <HStack>
          <FormButton action={signInAction} variant="ghost">
            Login
          </FormButton>
          <FormButton action={signInAction}>Get Started</FormButton>
        </HStack>
      </Navbar>
      {children}
      <Footer />
    </>
  );
};

export default StaticLayout;
