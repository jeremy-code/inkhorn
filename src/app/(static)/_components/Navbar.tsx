import React from "react";
import Image from "next/image";
import Link from "next/link";
import { container, hstack } from "styled-system/patterns";

import { FormButton } from "@/components/ui";
import logo from "@/assets/logo.svg";
import { signInAction } from "@/lib/auth";

const Navbar = async () => {
  return (
    <main
      className={container({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 3,
        borderBottom: "1px solid",
        borderColor: "gray.4",
        w: "full",
      })}
    >
      <Link href="/">
        <p className={hstack({ fontWeight: "bold" })}>
          <Image src={logo} alt="logo" width={15} height={15} />
          inkhorn
        </p>
      </Link>

      <FormButton action={signInAction}>Login</FormButton>
    </main>
  );
};

export default Navbar;
