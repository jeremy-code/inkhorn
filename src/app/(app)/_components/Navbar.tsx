import { HStack, styled } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { ProfileSelector } from "@/components/misc";
import { Navbar } from "@/components/ui";
import { signInAction, signOutAction } from "@/actions";
import { auth } from "@/lib/auth";

const AppNavbar = async () => {
  const session = await auth();

  return (
    <Navbar justify="center" outline="shadow" height="16">
      <styled.div position="absolute" right={4}>
        {session?.user ? (
          <HStack>
            <FormButton action={signOutAction}>Logout</FormButton>
            <ProfileSelector />
          </HStack>
        ) : (
          <FormButton action={signInAction}>Login</FormButton>
        )}
      </styled.div>
    </Navbar>
  );
};

export default AppNavbar;
