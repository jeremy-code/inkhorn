import { HStack, styled } from "styled-system/jsx";

import { FormButton } from "@/components/form";
import { Navbar, type NavbarProps } from "@/components/layout";
import { ProfileSelector } from "@/components/misc";
import { signInAction, signOutAction } from "@/actions/auth";
import { auth } from "@/lib/auth/config";

const AppNavbar = async (props: NavbarProps) => {
  const session = await auth();

  return (
    <Navbar {...props} justify="center" outline="shadow">
      <styled.div position="absolute" right={4}>
        {/* Technically, due to (app) being protected, the user should never be undefined */}
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
