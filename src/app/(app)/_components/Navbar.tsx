import { styled } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { Navbar } from "@/components/ui";
import { auth, signInAction, signOutAction } from "@/lib/auth";

const AppNavbar = async () => {
  const session = await auth();

  return (
    <Navbar justify="center" outline="shadow" height="16">
      <styled.div position="absolute" right={4}>
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
