import React from "react";
import { styled } from "styled-system/jsx";

import { FormButton, Navbar } from "@/components/ui";
import { auth, signInAction, signOutAction } from "@/lib/auth";

const AppNavbar = async () => {
  const session = await auth();

  return (
    <Navbar justify="center" outline="shadow">
      <styled.div position="absolute" right={2}>
        {session?.user ? (
          <FormButton action={signOutAction}>Logout</FormButton>
        ) : (
          <FormButton action={signInAction}>Login</FormButton>
        )}
      </styled.div>
    </Navbar>
  );
};

export default AppNavbar;
