import React from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-system/jsx";
import { container, hstack } from "styled-system/patterns";

import { FormButton } from "@/components/ui";
import logo from "@/assets/logo.svg";
import { auth, signInAction, signOutAction } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header
      className={container({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        bg: "white",
        boxShadow: "md",
        w: "full",
      })}
    >
      <Link href="/courses">
        <p className={hstack({ fontWeight: "bold" })}>
          <Image src={logo} alt="logo" width={15} height={15} />
          inkhorn
        </p>
      </Link>

      <styled.div position="absolute" right={2}>
        {session?.user ? (
          <FormButton action={signOutAction}>Logout</FormButton>
        ) : (
          <FormButton action={signInAction}>Login</FormButton>
        )}
      </styled.div>
    </header>
  );
};

export default Navbar;
