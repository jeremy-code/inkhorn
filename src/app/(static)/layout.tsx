import React, { type ReactNode } from "react";
import { HStack } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { Footer, Navbar } from "@/components/layout";
import { signInAction } from "@/actions/auth";

const StaticLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar justify="spaced">
        <HStack>
          <FormButton action={signInAction} variant="ghost">
            Login
          </FormButton>
          <FormButton action={signInAction} colorPalette="primary">
            Get Started
          </FormButton>
        </HStack>
      </Navbar>
      {children}
      <Footer />
    </>
  );
};

export default StaticLayout;
