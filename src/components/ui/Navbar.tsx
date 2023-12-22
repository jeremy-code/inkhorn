import React from "react";
import Image from "next/image";
import Link from "next/link";
import { container, hstack } from "styled-system/patterns";

import { FormButton } from "@/components/ui";
import logo from "@/assets/logo.svg";
import { auth, signInAction, signOutAction } from "@/lib/auth";

export const Navbar = async () => {
  const session = await auth();

  return (
    <div
      className={container({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 3,
      })}
    >
      <Link href="/">
        <p className={hstack({ fontWeight: "bold" })}>
          <Image src={logo} alt="logo" width={15} height={15} />
          inkhorn
        </p>
      </Link>

      {session?.user ? (
        <FormButton action={signOutAction}>Logout</FormButton>
      ) : (
        <FormButton action={signInAction}>Login</FormButton>
      )}
    </div>
  );
};
