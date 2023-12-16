import React from "react";
import Image from "next/image";
import Link from "next/link";
import { container, hstack } from "styled-system/patterns";

import logo from "@/assets/logo.svg";
import { auth, signInAction, signOutAction } from "@/lib/auth";
import { Button } from "./Button";

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
        <form action={signOutAction}>
          <Button>Logout</Button>
        </form>
      ) : (
        <form action={signInAction}>
          <Button>Login</Button>
        </form>
      )}
    </div>
  );
};
